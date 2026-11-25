from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"


def resolve_html_file(url_path: str) -> Path | None:
    p = url_path.split("#", 1)[0].split("?", 1)[0]
    if not p.startswith("/"):
        return None
    if p == "/":
        cand = DIST / "index.html"
        return cand if cand.exists() else None
    cand = DIST / p.lstrip("/")
    if cand.is_file():
        return cand
    if cand.is_dir() and (cand / "index.html").exists():
        return cand / "index.html"
    alt = DIST / (p.strip("/") + "/index.html")
    if alt.exists():
        return alt
    return None


def resolve_dist_target(url_path: str) -> tuple[bool, str]:
    if not url_path.startswith("/"):
        return True, ""
    if "#" in url_path:
        base, frag = url_path.split("#", 1)
    else:
        base, frag = url_path, ""

    target_file = resolve_html_file(base or "/")
    if target_file is None:
        return False, "missing target path"
    if frag and target_file.suffix.lower() in {".html", ".htm"}:
        txt = target_file.read_text(encoding="utf-8", errors="ignore")
        if f'id="{frag}"' not in txt and f"id='{frag}'" not in txt:
            return False, f"missing fragment id #{frag} in {target_file.relative_to(DIST).as_posix()}"
    return True, ""


def main() -> int:
    errors: list[str] = []

    required_files = [
        "index.html",
        "404.html",
        "sitemap.xml",
        "feed.xml",
        "search-index.json",
        "robots.txt",
        "llms.txt",
        "news/index.html",
        "datasets/index.html",
        "tools/index.html",
        "people/index.html",
        "publications/index.html",
        "models/cloves_mobilenetv3s.onnx",
        "models/cloves_mobilenetv3s_meta.json",
        "images/demo/clove_grade1.jpg",
        "images/demo/clove_grade2.jpg",
        "images/demo/clove_grade3.jpg",
        "images/demo/clove_grade4.jpg",
    ]
    for rel in required_files:
        if not (DIST / rel).exists():
            errors.append(f"Missing required build output: dist/{rel}")

    if (DIST / "models" / "cloves_mobilenetv3s.onnx.data").exists():
        errors.append("Unexpected external ONNX weight sidecar (.onnx.data) found in dist/models/")

    news_html = DIST / "news" / "index.html"
    if news_html.exists():
        news_raw = news_html.read_text(encoding="utf-8", errors="ignore")
        if 'name="robots" content="noindex' in news_raw:
            errors.append("dist/news/index.html must be indexable (found noindex)")

    # Validate sitemap.xml
    sm_path = DIST / "sitemap.xml"
    if sm_path.exists():
        try:
            sm_root = ET.parse(sm_path).getroot()
            ns = {
                "sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
                "im": "http://www.google.com/schemas/sitemap-image/1.1",
            }
            locs = [el.text or "" for el in sm_root.findall("sm:url/sm:loc", ns)]
            img_locs = [el.text or "" for el in sm_root.findall("sm:url/im:image/im:loc", ns)]
            if len(locs) < 40:
                errors.append(f"sitemap.xml has only {len(locs)} URLs (expected >= 40)")
            if "https://saaillab.github.io/news/" not in locs:
                errors.append("sitemap.xml missing https://saaillab.github.io/news/")
            for loc in locs:
                if loc.startswith("https://saaillab.github.io/"):
                    rel_path = "/" + loc[len("https://saaillab.github.io/") :]
                    if resolve_html_file(rel_path) is None:
                        errors.append(f"sitemap.xml URL missing in dist/: {loc}")
            for iloc in img_locs:
                if iloc.startswith("https://saaillab.github.io/"):
                    rel_path = "/" + iloc[len("https://saaillab.github.io/") :]
                    if resolve_html_file(rel_path) is None:
                        errors.append(f"sitemap.xml image asset missing in dist/: {iloc}")
            for blocked in ["cultureseeds", "/cropguard/", "phd-dissertation-2023", "intelligent-greenhouse-arduino-2016"]:
                if any(blocked in u for u in locs):
                    errors.append(f"sitemap.xml contains blocked route: {blocked}")
        except Exception as exc:
            errors.append(f"Invalid sitemap.xml: {exc}")

    # Validate feed.xml
    feed_path = DIST / "feed.xml"
    if feed_path.exists():
        try:
            feed_root = ET.parse(feed_path).getroot()
            items = feed_root.findall("./channel/item")
            if len(items) != 20:
                errors.append(f"feed.xml expected 20 SAAIL Lab items, found {len(items)}")
        except Exception as exc:
            errors.append(f"Invalid feed.xml: {exc}")

    # Validate search-index.json
    idx_path = DIST / "search-index.json"
    if idx_path.exists():
        try:
            entries = json.loads(idx_path.read_text(encoding="utf-8"))
            if not isinstance(entries, list) or len(entries) < 25:
                errors.append("search-index.json missing expected entries")
            urls = {e.get("url") for e in entries if isinstance(e, dict)}
            if "/news/" not in urls:
                errors.append("search-index.json missing /news/")
            if "/tools/#live-demo" not in urls:
                errors.append("search-index.json missing /tools/#live-demo")
            for u in urls:
                if isinstance(u, str) and u.startswith("/"):
                    ok, why = resolve_dist_target(u)
                    if not ok:
                        errors.append(f"search-index.json broken URL {u}: {why}")
        except Exception as exc:
            errors.append(f"Invalid search-index.json: {exc}")

    # Validate all HTML outputs (including 404.html)
    restricted_patterns = [
        (r"Dr\.\s+Innocent|Dr\.\s+Nyalala|honorificPrefix", "Dr. or honorificPrefix"),
        (r"\bWSDSAI\b", "WSDSAI acronym"),
        (r"Saleh Haji Othman", "Saleh Haji Othman"),
        (r"Saleh Salim Abdulla", "Saleh Salim Abdulla"),
        (r"@egerton\.ac\.ke", "@egerton.ac.ke email"),
        (r"\u2014", "em-dash character"),
        (r"iitmz\.ac\.in/labs", "invalid iitmz.ac.in/labs URL"),
    ]

    for html_file in sorted(DIST.rglob("*.html")):
        rel = html_file.relative_to(DIST).as_posix()
        raw = html_file.read_text(encoding="utf-8", errors="ignore")
        is_culture_redirect = rel == "projects/cultureseeds/index.html"

        for pat, desc in restricted_patterns:
            if re.search(pat, raw):
                errors.append(f"Restricted pattern ({desc}) in dist/{rel}")

        if not is_culture_redirect and re.search(r"CultureSEEDS|US\$100K|100,000", raw, re.I):
            errors.append(f"Restricted unannounced grant term in dist/{rel}")

        if rel.startswith("papers/") and rel != "papers/index.html":
            if "Copy APA" in raw or "apa-box" in raw:
                errors.append(f"Forbidden APA citation box in dist/{rel}")

        # Validate meta attribute quoting
        for meta_tag in re.findall(r"<meta\b[^>]*>", raw):
            cm = re.search(r'content="([^"]*)"', meta_tag)
            if cm and ("<" in cm.group(1) or ">" in cm.group(1)):
                errors.append(f"Unescaped < or > in <meta> in dist/{rel}")

        # Validate internal links, fragment anchors, and asset src paths
        for m in re.finditer(r'(?:href|src)="(/[^"]*)"', raw):
            target = m.group(1)
            if target.startswith("//"):
                continue
            ok, why = resolve_dist_target(target)
            if not ok:
                errors.append(f"Broken internal reference '{target}' ({why}) in dist/{rel}")

        # Validate JSON-LD blocks
        for jm in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', raw, re.S):
            try:
                json.loads(jm.group(1))
            except Exception as exc:
                errors.append(f"Invalid JSON-LD in dist/{rel}: {exc}")

    if errors:
        print(f"SITE VERIFICATION FAILED ({len(errors)} issue(s)):")
        for err in errors[:40]:
            print(" -", err)
        return 1

    print("SITE VERIFICATION PASSED (0 issues across dist/)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
