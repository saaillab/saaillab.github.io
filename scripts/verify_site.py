from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"


class A11yAuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.html_lang = None
        self.ids: set[str] = set()
        self.aria_controls: list[str] = []
        self.missing_alt_imgs: list[str] = []
        self.has_main_content = False
        self._in_btn = False
        self._btn_has_label = False
        self._btn_text: list[str] = []
        self.empty_buttons: int = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]):
        attr_map = {k.lower(): (v if v is not None else "") for k, v in attrs}
        if tag == "html":
            self.html_lang = attr_map.get("lang", "").strip()
        if "id" in attr_map and attr_map["id"]:
            self.ids.add(attr_map["id"])
        if tag == "main" and attr_map.get("id") == "main-content":
            self.has_main_content = True
        if "aria-controls" in attr_map and attr_map["aria-controls"]:
            self.aria_controls.extend(attr_map["aria-controls"].split())
        if tag == "img":
            alt = attr_map.get("alt")
            if alt is None:
                self.missing_alt_imgs.append(attr_map.get("src", "<unknown>"))
            elif not alt.strip() and attr_map.get("aria-hidden") != "true" and attr_map.get("role") != "presentation":
                self.missing_alt_imgs.append(attr_map.get("src", "<empty-alt>"))
        if tag == "button":
            self._in_btn = True
            self._btn_text = []
            self._btn_has_label = bool(
                attr_map.get("aria-label", "").strip() or attr_map.get("aria-labelledby", "").strip()
            )

    def handle_data(self, data: str):
        if self._in_btn and data.strip():
            self._btn_text.append(data.strip())

    def handle_endtag(self, tag: str):
        if tag == "button" and self._in_btn:
            if not self._btn_has_label and not "".join(self._btn_text).strip():
                self.empty_buttons += 1
            self._in_btn = False


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
        "sw.js",
        "site.webmanifest",
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
        "collaborations/index.html",
        "resources/index.html",
        "models/cloves_mobilenetv3s.onnx",
        "models/cloves_mobilenetv3s_meta.json",
        "models/cassava_mobilenetv3s.onnx",
        "models/cassava_mobilenetv3s_meta.json",
        "vendor/ort/ort.wasm.min.js",
        "vendor/ort/ort-wasm-simd-threaded.mjs",
        "vendor/ort/ort-wasm-simd-threaded.wasm",
        "images/demo/clove_grade1.jpg",
        "images/demo/clove_grade2.jpg",
        "images/demo/clove_grade3.jpg",
        "images/demo/clove_grade4.jpg",
        "images/demo/cassava_0_cbb.jpg",
        "images/demo/cassava_1_cbsd.jpg",
        "images/demo/cassava_2_cgm.jpg",
        "images/demo/cassava_3_cmd.jpg",
        "images/demo/cassava_4_healthy.jpg",
    ]
    for rel in required_files:
        if not (DIST / rel).exists():
            errors.append(f"Missing required build output: dist/{rel}")

    sw_path = DIST / "sw.js"
    if sw_path.exists():
        sw_txt = sw_path.read_text(encoding="utf-8", errors="ignore")
        core_block = re.search(r"CORE_SHELL\s*=\s*\[(.*?)\]", sw_txt, re.S)
        if core_block:
            for route in re.findall(r"'(/[^']*)'", core_block.group(1)):
                if resolve_html_file(route) is None:
                    errors.append(f"sw.js CORE_SHELL route missing in dist/: {route}")

    models_dir = DIST / "models"
    if models_dir.exists():
        for extra in models_dir.glob("*.data"):
            errors.append(f"Unexpected external ONNX weight sidecar found: dist/models/{extra.name}")

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
            for expected_url in ["/news/", "/tools/#live-demo", "/collaborations/#network-map", "/resources/#speaking"]:
                if expected_url not in urls:
                    errors.append(f"search-index.json missing {expected_url}")
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
        is_meta_refresh_stub = 'http-equiv="refresh"' in raw

        for pat, desc in restricted_patterns:
            if re.search(pat, raw):
                errors.append(f"Restricted pattern ({desc}) in dist/{rel}")

        if not is_culture_redirect and re.search(r"CultureSEEDS|US\$100K|100,000", raw, re.I):
            errors.append(f"Restricted unannounced grant term in dist/{rel}")

        if rel.startswith("papers/") and rel != "papers/index.html":
            if "Copy APA" in raw or "apa-box" in raw:
                errors.append(f"Forbidden APA citation box in dist/{rel}")

        for meta_tag in re.findall(r"<meta\b[^>]*>", raw):
            cm = re.search(r'content="([^"]*)"', meta_tag)
            if cm and ("<" in cm.group(1) or ">" in cm.group(1)):
                errors.append(f"Unescaped < or > in <meta> in dist/{rel}")

        for m in re.finditer(r'(?:href|src)="(/[^"]*)"', raw):
            target = m.group(1)
            if target.startswith("//"):
                continue
            ok, why = resolve_dist_target(target)
            if not ok:
                errors.append(f"Broken internal reference '{target}' ({why}) in dist/{rel}")

        for jm in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', raw, re.S):
            try:
                json.loads(jm.group(1))
            except Exception as exc:
                errors.append(f"Invalid JSON-LD in dist/{rel}: {exc}")

        # WCAG static accessibility checks
        if not is_meta_refresh_stub:
            parser = A11yAuditParser()
            parser.feed(raw)
            if not parser.html_lang:
                errors.append(f"WCAG missing <html lang> in dist/{rel}")
            if not parser.has_main_content:
                errors.append(f"WCAG missing <main id='main-content'> in dist/{rel}")
            if parser.empty_buttons > 0:
                errors.append(f"WCAG {parser.empty_buttons} button(s) lack accessible label/text in dist/{rel}")
            if parser.missing_alt_imgs:
                errors.append(f"WCAG image(s) missing alt text ({parser.missing_alt_imgs[:2]}) in dist/{rel}")
            for ctrl_id in parser.aria_controls:
                if ctrl_id not in parser.ids:
                    errors.append(f"WCAG aria-controls target '#{ctrl_id}' missing in dist/{rel}")

    if errors:
        print(f"SITE VERIFICATION FAILED ({len(errors)} issue(s)):")
        for err in errors[:40]:
            print(" -", err)
        return 1

    print("SITE VERIFICATION PASSED (0 issues across dist/)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
