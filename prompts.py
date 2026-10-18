"""카드 한 장을 통째로 그리게 하는 프롬프트를 뽑는다. python3 prompts.py -> art-prompts.md

이전 버전은 그림만 뽑고 테두리·글자는 렌더러가 HTML로 그렸다. 지금은 AI가 카드를
통째로 굽는다 — 그래서 HP·기술·수치·플레이버까지 프롬프트 안에 전부 박는다.
수치가 바뀌면 그 카드는 다시 뽑아야 한다 (구워버리기로 한 결정).

생김새는 카드마다 cards.json의 appearance에 있다. 이게 없으면 모델이 자기 기본 얼굴을
써서 90장이 전부 같은 사람으로 나온다 — 실제로 그렇게 나왔다.
스타일을 바꾸려면 cards.json의 art_style / art_tone만 고치고 이걸 다시 돌린다.
"""
from check import load

# 포켓몬처럼 글자가 아니라 그림 기호. 원 안에 납작한 단색 도형 하나만 — 작아지면 글자가 먼저 뭉개진다
ICON = {"바람": "mint-green swirling wind curl",
        "불": "rounded orange flame",
        "땅": "rounded brown boulder",
        "물": "blue water droplet",
        "빛": "eight-pointed golden sunburst",
        "무색": "plain silver star"}
def an(w):
    return ("an " if w[0] in "aeiou" else "a ") + w

MEDALLION = ('An "energy medallion" means a small circle with a thin gold rim holding one flat '
             "solid pictogram — never a letter, never Korean text.")
RATIO = "카드는 세로로 긴 63:88 비율, 그림칸만 가로 3:2"

ENERGY_ART = {"빛": "반짝이는 작은 해와 흩날리는 금빛 가루",
              "불": "포근하게 타오르는 모닥불과 떠오르는 불티",
              "물": "맑은 샘에서 똑 떨어지는 물방울과 번지는 파문",
              "땅": "둥글둥글한 바위와 돋아난 새싹",
              "바람": "동그랗게 말려 올라가는 바람과 떠다니는 나뭇잎"}

d, weak, resist = load()
style, tone, S = d["art_style"], d.get("art_tone", {}), d["set"]

def cost(c):
    """비용을 그림 기호 묶음으로 푼다. 같은 타입이 2개면 '2 x ...'로 센다"""
    parts = [f'{n} x {ICON[t]}' if n > 1 else ICON[t] for t, n in c.items()]
    return ", ".join(parts) or ICON["무색"], sum(c.values()) or 1

# 영어 지시문 + 한글은 따옴표 안에 그대로. 모델이 영어 지시를 더 잘 듣고 한글은 덜 지어낸다
FORMAT = """CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish."""

QC = """QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design."""

PANEL = "- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines."
# 에너지 카드는 효과 텍스트가 없다. 글상자를 그리라고 하면 빈 상자를 그린다
NO_PANEL = ("- This card carries no effect text. Draw NO text box, panel or empty banner below"
            " the artwork — the artwork runs clean from the name row down to the footer.")


def art_block(c):
    """그림 지시. 인물 크기와 배경 밀도는 참고 이미지에 맡긴다 — 수치로 적으면 기준 그림과 어긋난다"""
    return "\n".join([
        "ART STYLE",
        f"- {style}",
        f"- 분위기: {tone.get(c['faction'], '')}",
        "- Match the attached reference image for line, palette and watercolour finish.",
        "- The character is the focus: roughly half the artwork height, centred, face clearly readable.",
        "  Keep the landscape behind them, but softened and lower contrast so the figure reads first.",
        "- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow."])


def card(c):
    """카드 한 장의 프롬프트. 글자는 전부 여기 박아서 모델이 지어내지 못하게 한다"""
    L = ["Create one premium collectible trading card for a cute Bible-themed fantasy TCG.", "",
         FORMAT, "", art_block(c), "",
         "CHARACTER & SCENE",
         f'- Appearance: {c.get("appearance") or "인물 없이, 사물과 배경만"}',
         f'- Scene: {c["art_prompt"]}', "",
         "CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:"]

    if c["kind"] == "인물":
        L += [f'- top-left cream pill label: "{c["stage"]}"'
              + (f' (evolves from "{c["evolves_from"]}")' if c["evolves_from"] else ""),
              f'- name row: bold "{c["name"]}" on the left; "HP {c["hp"]}" on the right,'
              f' followed by an energy medallion holding {an(ICON[c["type"]])}',
              '- the illustration runs full-bleed from under the name row all the way to the footer,'
              ' filling the whole card behind everything below',
              f'- thin band across the artwork: "{c["species"]} · {c["era"]}"']
        if c.get("ability"):
            L.append(f'- ability row on the same translucent ivory panel: small dark red label "특성",'
                     f' bold "{c["ability"]["name"]}",'
                     f'\n  description underneath: "{c["ability"]["text"]}"')
        for a in c["attacks"]:
            icons, n = cost(a["cost"])
            line = (f'- attack row, laid over the artwork on a translucent ivory panel: {n} energy '
                    f'medallion{"s" if n > 1 else ""} on the left ({icons}), '
                    f'bold "{a["name"]}" centred, "{a["damage"]}" right-aligned')
            if a.get("text"):
                line += f'\n  with small print underneath: "{a["text"]}"'
            L.append(line)
        rt = (f'{c["retreat"]} x {ICON["무색"]} medallion' if c["retreat"] else '"없음"')
        L.append(f'- a single narrow bar: "약점" + {an(ICON[weak[c["type"]]])} medallion + "×2"  /  '
                 f'"저항" + {an(ICON[resist[c["type"]]])} medallion + "-30"  /  "후퇴" + {rt}')
    else:
        L += [f'- top-left cream pill label: "{c["kind"]}"',
              f'- name row: bold "{c["name"]}"',
              '- the illustration runs full-bleed from under the name row all the way to the footer,'
              ' filling the whole card behind everything below',
              f'- effect box: "{c["text"]}"']

    flavor = f'"{c["flavor"]}" — ' if c.get("flavor") else ""   # 트레이너는 플레이버가 없다
    # 속성 설명을 트레이너 카드에도 붙였더니 모델이 다섯 기호를 전부 그려 넣었다 (008번 사고)
    if c["kind"] == "인물":
        elem = ['- The five elements are wind, fire, earth, water and light only — no darkness, no nature.',
                f'- {MEDALLION}']
    else:
        elem = ['- This card has NO element and NO type. Draw no energy medallions and no elemental'
                ' symbols anywhere on it — the name row holds the name only.']
    L += [f'- cream-and-gold flavour banner in italics: {flavor}{c["verse"]}',
          f'- footer: "{S["code"]} {c["number"]}" bottom-left, rarity mark "{c["rarity"]}" bottom-right',
          "", "TYPOGRAPHY",
          "- Korean trading-card typography: bold black headings, compact readable body text.",
          *elem,
          '- Rarity marks are ● ◆ ★ only.',
          "", QC, PANEL]
    return "\n".join(L)


def energy(t):
    return "\n".join([
        "Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.", "",
        FORMAT, "", "ART STYLE", f"- {d.get('art_style_object', style)}",
        "- No sparkles or cinematic glow. Soft matte watercolour.", f"- {MEDALLION}", "",
        "CARD UI — reproduce every quoted Korean string EXACTLY:",
        '- top-left cream pill label: "기본 에너지"',
        f'- name row: bold "{t} 에너지"',
        f'- illustration window, landscape 3:2: {ENERGY_ART[t]}',
        f'- one large energy medallion at the centre holding {an(ICON[t])}',
        f'- footer bottom-left: "{S["code"]} 기본 에너지"', "", QC, NO_PANEL])

if __name__ == "__main__":
    import os
    out = ["# 그려야 할 카드\n",
           "카드마다 아래 코드블록을 **통째로 복사해서** 이미지 AI에 붙인다.",
           f"`{d.get('art_reference','style-reference.png')}`를 참고 이미지로 같이 올리면 그림체가 덜 흔들린다.",
           "받은 그림은 `art/<id>.png`로 저장한다.\n",
           f"그림체·분위기를 바꾸려면 cards.json의 `art_style` / `art_tone`만 고치고 `python3 prompts.py`를 다시 돌린다.\n"]
    done = 0
    for c in d["cards"]:
        path = f'art/{c["id"]}.png'
        have = os.path.exists(path)
        done += have
        out += [f'## {c["number"]} {c["name"]}',
                f'`{path}` · {c["faction"]} · {c["kind"]} · {c["rarity"]} · {"✅ 있음" if have else "⬜ 없음"}\n',
                "```", card(c), "```\n"]
    for t in d["ring"]:
        path = f"art/energy-{t}.png"
        have = os.path.exists(path)
        done += have
        out += [f"## 기본 에너지 — {t}", f'`{path}` · {"✅ 있음" if have else "⬜ 없음"}\n',
                "```", energy(t), "```\n"]
    total = len(d["cards"]) + len(d["ring"])
    open("art-prompts.md", "w").write("\n".join(out))
    print(f"art-prompts.md 생성 — {done} / {total}장 들어감, {total - done}장 남음")
