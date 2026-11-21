#!/usr/bin/env python3
"""
Weekly Google Scholar & ORCID citation sync for saaillab.github.io.

Updates src/data/scholar-metrics.json safely:
1. Tries SerpApi if SERPAPI_KEY is configured in GitHub Secrets.
2. Otherwise parses the public Google Scholar profile directly with
   browser headers.
3. Enforces monotonic sanity bounds so rate-limits, blocks, or HTML changes
   never regress existing verified counts. Always exits 0 on network blocks.
"""

from __future__ import annotations

import json
import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
METRICS_PATH = ROOT / "src" / "data" / "scholar-metrics.json"
SCHOLAR_ID = "jYVzIZUAAAAJ"
BROWSER_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)


def fetch_via_serpapi(key: str) -> dict | None:
    url = "https://serpapi.com/search?" + urllib.parse.urlencode(
        {"engine": "google_scholar_author", "author_id": SCHOLAR_ID, "api_key": key, "num": "100"}
    )
    try:
        with urllib.request.urlopen(url, timeout=30) as r:
            data = json.loads(r.read().decode("utf-8", errors="ignore"))
        table: dict[str, int] = {}
        since_2021: int | None = None
        for row in (data.get("cited_by") or {}).get("table") or []:
            for metric, cell in row.items():
                if isinstance(cell, dict):
                    if cell.get("all") is not None:
                        table[metric] = int(cell["all"])
                    if metric == "citations":
                        for k, v in cell.items():
                            if k.startswith("since_") and v is not None:
                                since_2021 = int(v)
        if table.get("citations"):
            return {
                "citations": table["citations"],
                "citationsSince2021": since_2021,
                "hIndex": table.get("h_index"),
                "i10Index": table.get("i10_index"),
                "source": "Google Scholar via SerpApi",
            }
    except Exception as exc:
        print(f"[warn] SerpApi sync skipped: {exc}")
    return None


def fetch_via_scholar_html() -> dict | None:
    url = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": BROWSER_UA,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            html = r.read().decode("utf-8", errors="ignore")
        if "gsc_rsb_std" not in html:
            print("[info] Google Scholar returned consent/captcha wall; preserving verified baseline.")
            return None
        cells = [int(x) for x in re.findall(r'<td class="gsc_rsb_std">(\d+)</td>', html)]
        if len(cells) < 5:
            return None
        return {
            "citations": cells[0],
            "citationsSince2021": cells[1],
            "hIndex": cells[2],
            "i10Index": cells[4],
            "source": "Google Scholar Live Profile",
        }
    except Exception as exc:
        print(f"[info] Google Scholar HTTP skipped ({exc}); preserving verified baseline.")
        return None


def main() -> int:
    current = json.loads(METRICS_PATH.read_text(encoding="utf-8"))
    serp_key = os.environ.get("SERPAPI_KEY", "").strip()
    fresh = fetch_via_serpapi(serp_key) if serp_key else None
    if fresh is None:
        fresh = fetch_via_scholar_html()
    if not fresh:
        print("No live update available; src/data/scholar-metrics.json kept unchanged.")
        return 0

    changed = False
    for key in ("citations", "citationsSince2021", "hIndex", "i10Index"):
        val = fresh.get(key)
        prev = current.get(key, 0)
        if isinstance(val, int) and val > prev:
            current[key] = val
            changed = True

    if changed:
        current["updatedAt"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        current["source"] = fresh.get("source", current.get("source", "Google Scholar Live Profile"))
        METRICS_PATH.write_text(json.dumps(current, indent=2) + "\n", encoding="utf-8")
        print(f"Updated src/data/scholar-metrics.json -> citations={current['citations']}, h={current['hIndex']}, i10={current['i10Index']}")
    else:
        print(f"Scholar metrics already up to date (citations={current['citations']}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
