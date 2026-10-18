"""art/*.png(장당 2.7MB)를 올릴 수 있는 크기로 줄인다. python3 webart.py -> art-web/*.jpg

art/는 원본 보관용으로 그대로 둔다. 앱과 인쇄 시트는 art-web/만 본다.
1040px 높이 = 63x88mm를 300dpi로 찍는 크기라 웹과 인쇄가 이 한 벌을 같이 쓴다.
macOS 기본 sips를 쓴다 (이 macOS의 sips는 webp를 모른다 — 그래서 jpeg).
"""
import os, subprocess
from check import load

Q, H = "70", "1040"
d, _, _ = load()
keys = [c["id"] for c in d["cards"]] + [f"energy-{t}" for t in d["ring"]]
os.makedirs("art-web", exist_ok=True)

made = skipped = 0
for k in keys:
    src, out = f"art/{k}.png", f"art-web/{k}.jpg"
    if not os.path.exists(src):
        raise SystemExit(f"{src} 없음 — prompts.py로 먼저 구울 것")
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        skipped += 1
        continue
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", Q, "-Z", H, src, "--out", out],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    made += 1

mb = sum(os.path.getsize(f"art-web/{k}.jpg") for k in keys) / 1048576
print(f"art-web/ {len(keys)}장 · {mb:.1f} MB (새로 {made}장, 그대로 {skipped}장)")
