"""cards.json 검사. load()는 prompts.py도 쓴다. python3 check.py"""
import json

RARITY = ("●", "◆", "★")  # 포켓몬: 흔함 / 드묾 / 레어
KINDS = ("인물", "아이템", "서포터", "스타디움")  # 기본 에너지는 ring에서 자동 생성, 데이터에 없음

def load(path="cards.json"):
    d = json.load(open(path))
    ring, rules = d["ring"], d["rules"]
    assert len(set(ring)) == 5, "타입은 5종이어야 한다"
    # 약점/저항은 저장하지 않고 ring에서 계산한다 (카드 30장에 손으로 적으면 반드시 어긋난다)
    weak = {t: ring[i - 1] for i, t in enumerate(ring)}          # 나를 이기는 앞 타입
    resist = {t: ring[(i + 1) % 5] for i, t in enumerate(ring)}  # 내가 이기는 뒤 타입

    names = [c["name"] for c in d["cards"]]
    for i, c in enumerate(d["cards"], 1):
        w = f'{c["name"]}: '
        assert c.get("kind") in KINDS, w + f'kind는 {" / ".join(KINDS)} 중 하나'
        assert c["faction"] in ("천국", "지옥"), w + "알 수 없는 진영"
        assert c["rarity"] in RARITY, w + f'희귀도는 {" ".join(RARITY)} 중 하나'
        if c["kind"] in ("인물", "서포터"):
            # 생김새를 안 적으면 모델이 자기 기본 얼굴을 써서 90장이 전부 같은 사람이 된다
            assert c.get("appearance"), w + "appearance(생김새) 비어 있음"
        # 포켓몬 용어가 카드 텍스트에 새어 들어오면 인쇄물에 그대로 찍힌다
        blob = (c.get("text") or "") + (c.get("ability", {}).get("text") or "") \
             + "".join(a.get("text") or "" for a in c.get("attacks", []))
        assert "포켓몬" not in blob, w + '카드 텍스트에 "포켓몬"이 남아 있다 (→ "인물")'
        for f in ("verse", "art_prompt", "illustrator"):
            assert c.get(f), w + f"{f} 비어 있음"
        c["number"] = f'{i:03d}/{len(d["cards"]):03d}'  # 카드 번호는 순서에서 자동

        if c["kind"] != "인물":  # 트레이너 카드는 효과 텍스트 한 줄이 전부
            assert c.get("text"), w + "트레이너 카드에 효과 텍스트가 없음"
            assert "hp" not in c and "attacks" not in c, w + "트레이너 카드에 HP/기술이 있음"
            continue

        assert c["type"] in ring, w + "알 수 없는 타입"
        lo, hi = rules["hp_range"][c["stage"]]
        assert lo <= c["hp"] <= hi, w + f'HP {c["hp"]}이 {c["stage"]} 범위 {lo}~{hi} 밖'
        assert (c["evolves_from"] is None) == (c["stage"] == "기본"), w + "진화원 표기가 스테이지와 안 맞음"
        if c["evolves_from"]:
            assert c["evolves_from"] in names, w + f'진화원 "{c["evolves_from"]}" 카드가 없음'
        assert c["attacks"], w + "기술이 없음"
        for a in c["attacks"]:
            assert set(a["cost"]) <= set(ring) | {"무색"}, w + f'{a["name"]} 비용에 알 수 없는 에너지'
            assert a["damage"] >= 0, w + f'{a["name"]} 데미지가 음수'
        assert 0 <= c["retreat"] <= 3, w + "후퇴 비용이 0~3 밖"
        for f in ("species", "era", "flavor"):
            assert c.get(f), w + f"{f} 비어 있음"
        assert "weakness" not in c and "resistance" not in c, w + "약점/저항은 ring에서 계산된다"

    basics = [c for c in d["cards"] if c["kind"] == "인물" and c["stage"] == "기본"]
    assert len(basics) >= rules["min_basic_in_deck"], "기본 인물이 한 장도 없으면 덱을 못 짠다"

    # 팩 슬롯이 가리키는 희귀도 풀이 비어 있으면 팩을 못 연다
    pool = {r: [c for c in d["cards"] if c["rarity"] == r] for r in RARITY}
    for slot, n in rules["pack"]["slots"].items():
        src = pool["★"] if slot == "레어" else pool["●"] if slot == "흔함" else pool["◆"] if slot == "드묾" else pool["●"] + pool["◆"]
        assert len(src) >= n, f'{slot} 슬롯 {n}장을 뽑을 카드가 {len(src)}장뿐이다'
    return d, weak, resist

if __name__ == "__main__":
    d, weak, resist = load()
    print(f'카드 {len(d["cards"])}장 통과\n')
    print("타입   약점(x2)  저항(-30)")
    for t in d["ring"]:
        print(f"{t:<6} {weak[t]:<9} {resist[t]}")
    print()
    for c in d["cards"]:
        if c["kind"] == "인물":
            print(f'{c["number"]} {c["rarity"]} {c["faction"]} · {c["type"]} · {c["name"]} HP{c["hp"]}'
                  f' / 약점 {weak[c["type"]]} / 저항 {resist[c["type"]]}')
        else:
            print(f'{c["number"]} {c["rarity"]} {c["faction"]} · [{c["kind"]}] {c["name"]}')
