# 그려야 할 카드

카드마다 아래 코드블록을 **통째로 복사해서** 이미지 AI에 붙인다.
`style-reference.png`를 참고 이미지로 같이 올리면 그림체가 덜 흔들린다.
받은 그림은 `art/<id>.png`로 저장한다.

그림체·분위기를 바꾸려면 cards.json의 `art_style` / `art_tone`만 고치고 `python3 prompts.py`를 다시 돌린다.

## 001/090 소년 다윗
`art/hv-light-david-1.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 열두 살쯤 소년, 적갈색 곱슬머리, 햇볕에 그을린 피부, 코에 주근깨, 흰 튜닉에 붉은 허리띠, 맨발, 가죽 물매를 쥠
- Scene: 물매를 든 양치기 소년, 들판

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "소년 다윗" on the left; "HP 70" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "양치기 소년 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "물매" centred, "20" right-aligned
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "형들의 심부름을 하던 막내. 사자와 곰을 맨손으로 상대한 적이 있다." — 삼상 17:45
- footer: "GEN 001/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 002/090 용사 다윗
`art/hv-light-david-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 적갈색 곱슬머리 소년이 열일곱쯤으로 자람, 같은 주근깨, 가죽 흉갑과 붉은 망토, 자기 키만 한 칼
- Scene: 칼을 든 젊은 전사, 승리 후 성문 앞

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "소년 다윗")
- name row: bold "용사 다윗" on the left; "HP 110" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "빛의 용사 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (eight-pointed golden sunburst, plain silver star), bold "거인의 칼" centred, "50" right-aligned
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x eight-pointed golden sunburst, plain silver star), bold "기름부음" centred, "80" right-aligned
  with small print underneath: "이 인물에 붙은 에너지 1개를 버린다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "돌 하나로 거인을 꺾은 뒤, 노래가 그를 따라다녔다." — 삼상 18:7
- footer: "GEN 002/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 003/090 선지자 엘리야
`art/hv-fire-elijah.png` · 천국 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 쉰 넘은 노인, 헝클어진 은회색 장발과 무릎까지 오는 긴 수염, 낙타털 거친 겉옷에 넓은 가죽 띠, 맨발
- Scene: 제단 위로 불이 내리는 장면을 바라보는 노년 선지자

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "선지자 엘리야" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "불의 선지자 · 주전 9세기"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "불수레",
  description underneath: "[천국 시그니처] 내 턴에 1번, 기절한 내 천국 인물 1장을 손으로 가져온다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded orange flame), bold "갈멜산의 불" centred, "40" right-aligned
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "삼 년 동안 비를 막았고, 수레를 타고 올라갔다." — 왕상 18:38
- footer: "GEN 003/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 004/090 바알의 사제
`art/hl-fire-baal-priest.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마른 체격의 사제, 반들한 민머리에 붉은 소용돌이 문신, 주황색 제의, 한쪽 눈썹을 올린 능글맞은 웃음
- Scene: 꺼진 제단 앞에서 절규하는 이교 사제, 붉은 연무

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "바알의 사제" on the left; "HP 60" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "우상의 사제 · 주전 9세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded orange flame), bold "헛된 제사" centred, "30" right-aligned
  with small print underneath: "[지옥 시그니처] 내 벤치 인물 1장을 버려도 된다. 버렸으면 데미지 +40."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "하루 종일 외쳤으나 아무 응답도, 아무 불도 없었다." — 왕상 18:26
- footer: "GEN 004/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 005/090 거룩한 기름
`art/tr-item-oil.png` · 천국 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 뿔나팔에 담긴 기름을 머리에 붓는 손

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "거룩한 기름"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 인물 1장에서 데미지 카운터 3개(30)를 덜어낸다."
- cream-and-gold flavour banner in italics: 약 5:14
- footer: "GEN 005/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 006/090 모세의 지팡이
`art/tr-item-rod.png` · 천국 · 아이템 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 갈라진 바다 앞으로 뻗은 마른 나무 지팡이

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "모세의 지팡이"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 덱에서 기본 에너지 2장을 골라 손으로 가져온 뒤 덱을 섞는다."
- cream-and-gold flavour banner in italics: 출 14:16
- footer: "GEN 006/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 007/090 선지자 사무엘
`art/tr-sup-samuel.png` · 천국 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 백발과 흰 수염의 노인 선지자, 남색 겉옷, 기름이 담긴 뿔을 두 손으로 받쳐 듦
- Scene: 밤중 등불 아래 일어나 앉은 소년 선지자

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "선지자 사무엘"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "손을 전부 덱에 넣고 섞은 뒤 5장을 뽑는다."
- cream-and-gold flavour banner in italics: 삼상 3:10
- footer: "GEN 007/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 008/090 유혹하는 자
`art/tr-sup-tempter.png` · 지옥 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 망토를 뒤집어쓴 작은 악마, 이마에 앙증맞은 뿔 두 개, 빨간 사과를 내밂
- Scene: 광야에서 돌을 내미는 그림자 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "유혹하는 자"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 손을 본다. 그중 서포터 1장을 골라 버리게 한다."
- cream-and-gold flavour banner in italics: 마 4:3
- footer: "GEN 008/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 009/090 갈멜산
`art/tr-stad-carmel.png` · 천국 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 두 제단이 마주 선 산 정상, 먹구름

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "갈멜산"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두의 불 인물이 주는 기술 데미지 +10."
- cream-and-gold flavour banner in italics: 왕상 18:19
- footer: "GEN 009/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 010/090 광야
`art/tr-stad-wilderness.png` · 지옥 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 끝없이 메마른 바위 사막, 흐린 하늘

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "광야"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두의 후퇴 비용이 무색 1개만큼 늘어난다."
- cream-and-gold flavour banner in italics: 신 8:15
- footer: "GEN 010/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 011/090 왕 다윗
`art/hv-light-david-3.png` · 천국 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 적갈색 곱슬머리에 짧은 수염이 난 서른쯤, 주근깨 그대로, 가는 금관과 보랏빛 왕복, 작은 수금
- Scene: 왕관을 쓰고 수금을 든 왕, 황금빛 궁정

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "2진화" (evolves from "용사 다윗")
- name row: bold "왕 다윗" on the left; "HP 160" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "기름부음 받은 왕 · 주전 1000년경"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "영원한 언약",
  description underneath: "[천국 시그니처] 내 턴에 1번, 내 트래시에서 천국 인물 1장을 손으로 가져온다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (eight-pointed golden sunburst, plain silver star), bold "수금의 찬양" centred, "60" right-aligned
  with small print underneath: "내 인물 전체에서 데미지 카운터 2개(20)씩 덜어낸다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x eight-pointed golden sunburst, plain silver star), bold "왕의 선포" centred, "110" right-aligned
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "그의 왕좌는 영원히 견고하리라는 약속을 받았다." — 삼하 7:16
- footer: "GEN 011/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 012/090 승천하는 엘리야
`art/hv-fire-elijah-2.png` · 천국 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 은회색 장발 노인, 겉옷과 수염이 위로 휘날리고, 벗은 겉옷 한 자락을 아래로 떨어뜨림
- Scene: 불타는 수레와 말이 회오리 속으로 오르는 장면

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "선지자 엘리야")
- name row: bold "승천하는 엘리야" on the left; "HP 120" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "하늘로 오른 선지자 · 주전 9세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded orange flame), bold "불말과 불수레" centred, "70" right-aligned
  with small print underneath: "이 인물에 붙은 에너지 1개를 버린다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (rounded orange flame, plain silver star), bold "회오리" centred, "50" right-aligned
  with small print underneath: "상대 배틀 인물을 벤치와 바꾸게 한다. 상대가 고른다."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "죽음을 보지 않고 올라간 두 사람 중 하나." — 왕하 2:11
- footer: "GEN 012/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 013/090 의인 노아
`art/hv-water-noah.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 예순쯤, 풍성한 흰 곱슬 수염과 둥근 주먹코, 갈색 작업 앞치마에 톱밥, 손에 나무망치
- Scene: 마른 땅 위에서 거대한 목선을 짓는 노인

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "의인 노아" on the left; "HP 70" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "당대의 의인 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "방주를 짓다" centred, "20" right-aligned
  with small print underneath: "내 덱에서 아이템 1장을 골라 손으로 가져온 뒤 덱을 섞는다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "백 년 동안 비 한 방울 없는 하늘 아래서 배를 지었다." — 창 6:9
- footer: "GEN 013/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 014/090 방주의 노아
`art/hv-water-noah-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 흰 곱슬 수염 노인, 흰 두건을 쓰고 방주 난간에 기대 손차양
- Scene: 물 위에 뜬 방주와 구름을 가르는 무지개

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "의인 노아")
- name row: bold "방주의 노아" on the left; "HP 120" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "언약을 받은 자 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x blue water droplet), bold "큰 물" centred, "60" right-aligned
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x blue water droplet, plain silver star), bold "무지개 언약" centred, "80" right-aligned
  with small print underneath: "다음 상대 턴에 이 인물이 받는 데미지 -30."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "물이 그친 뒤 하늘에 활이 걸렸다." — 창 9:13
- footer: "GEN 014/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 015/090 나실인 삼손
`art/hv-earth-samson.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓, 일곱 갈래로 길게 땋은 검은 머리, 구릿빛 피부에 떡 벌어진 어깨, 황토색 민소매 짧은 옷
- Scene: 긴 머리를 땋은 젊은 장사, 사자 가죽

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "나실인 삼손" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "서원한 용사 · 주전 11세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "맨손" centred, "30" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "태어나기 전부터 머리에 삭도를 대지 않기로 구별되었다." — 삿 13:5
- footer: "GEN 015/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 016/090 눈먼 삼손
`art/hv-earth-samson-2.png` · 천국 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 구릿빛 장사인데 땋은 머리가 잘려 짧고 삐죽함, 눈에 흰 천을 둘러 가림, 손목에 끊어진 쇠사슬
- Scene: 두 기둥을 양팔로 밀어내는 힘센 장사, 눈을 꼭 감고 있다

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "나실인 삼손")
- name row: bold "눈먼 삼손" on the left; "HP 130" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "무너뜨린 자 · 주전 11세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded brown boulder), bold "기둥을 잡다" centred, "60" right-aligned
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x rounded brown boulder, plain silver star), bold "마지막 힘" centred, "130" right-aligned
  with small print underneath: "이 인물도 데미지 카운터 6개(60)를 받는다."
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 3 x plain silver star medallion
- cream-and-gold flavour banner in italics: "죽을 때 죽인 자가 살았을 때보다 많았다." — 삿 16:30
- footer: "GEN 016/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 017/090 선지자 에스겔
`art/hv-wind-ezekiel.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤, 검은 직모 단발과 짧고 네모난 턱수염, 쪽빛 겉옷, 펼친 두루마리
- Scene: 강가에 서서 열린 하늘을 올려다보는 선지자

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "선지자 에스겔" on the left; "HP 70" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "환상을 본 자 · 주전 6세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "생기야 오라" centred, "20" right-aligned
  with small print underneath: "내 덱에서 기본 에너지 1장을 골라 손으로 가져온다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "사로잡힌 땅에서 하늘이 열리는 것을 보았다." — 겔 37:9
- footer: "GEN 017/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 018/090 마른 뼈의 에스겔
`art/hv-wind-ezekiel-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 검은 단발 사내, 두 팔을 활짝 펼치고 옷자락이 바람에 뒤로 날림
- Scene: 마른 뼈들이 일어서는 골짜기, 휘몰아치는 바람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "선지자 에스겔")
- name row: bold "마른 뼈의 에스겔" on the left; "HP 110" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "일으키는 자 · 주전 6세기"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "다시 살아나리라",
  description underneath: "[천국 시그니처] 내 턴에 1번, 트래시에서 기본 인물 1장을 벤치에 놓는다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x mint-green swirling wind curl), bold "네 바람" centred, "60" right-aligned
  with small print underneath: "상대 벤치 인물 1장에게도 데미지 20."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "뼈들이 서로 연결되고 군대가 되어 일어섰다." — 겔 37:10
- footer: "GEN 018/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 019/090 미혹하는 영
`art/hl-light-angel-1.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 반투명한 연보라 유령, 몸이 아래로 갈수록 흐려짐, 반달로 휜 눈, 손에 든 작은 가면
- Scene: 사람의 귀에 입을 대고 속삭이는 희미한 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "미혹하는 영" on the left; "HP 60" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "거짓의 영 · 시대를 가리지 않음"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "속삭임" centred, "20" right-aligned
  with small print underneath: "상대의 손을 본다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "입에 들어가 거짓을 말하게 하는 영." — 왕상 22:22
- footer: "GEN 019/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 020/090 광명의 천사
`art/hl-light-angel-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 연보라 유령이 새하얀 깃털 날개와 접시 같은 가짜 후광을 걸침, 날개 끝만 검게 그을림
- Scene: 반짝이는 날개를 자랑하는 천사, 그림자만 뾰족하게 뒤틀려 있다

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "미혹하는 영")
- name row: bold "광명의 천사" on the left; "HP 110" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "가장한 자 · 시대를 가리지 않음"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x eight-pointed golden sunburst), bold "가장한 빛" centred, "60" right-aligned
  with small print underneath: "상대가 다음 턴에 서포터를 쓸 수 없다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "사탄도 자기를 광명의 천사로 가장한다." — 고후 11:14
- footer: "GEN 020/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 021/090 큰 용
`art/hl-light-dragon.png` · 지옥 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 통통한 붉은 용, 어깨에 작은 머리 일곱이 옹기종기, 짧은 팔, 삐져나온 익살스러운 송곳니
- Scene: 꼬리로 별들을 쓸어내리는 통통한 붉은 용

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "2진화" (evolves from "광명의 천사")
- name row: bold "큰 용" on the left; "HP 170" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "옛 뱀이라 불리는 자 · 마지막 때"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "참소하는 자",
  description underneath: "[지옥 시그니처] 내 벤치 인물 1장을 버려도 된다. 버렸으면 상대 배틀 인물에게 데미지 40."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x eight-pointed golden sunburst), bold "꼬리로 쓸다" centred, "80" right-aligned
  with small print underneath: "상대 벤치 인물 1장에게 데미지 30."
- attack row, laid over the artwork on a translucent ivory panel: 4 energy medallions on the left (2 x eight-pointed golden sunburst, 2 x plain silver star), bold "삼키는 불" centred, "130" right-aligned
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 3 x plain silver star medallion
- cream-and-gold flavour banner in italics: "하늘에서 땅으로 내쫓긴 큰 용." — 계 12:9
- footer: "GEN 021/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 022/090 바알의 대제사장
`art/hl-fire-baal-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 민머리 문신 사제, 소뿔 모양 높은 관과 금술 달린 화려한 제의
- Scene: 시끄럽게 춤추며 소리 지르는 우상 제사장, 아무 일도 안 일어난다

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "바알의 사제")
- name row: bold "바알의 대제사장" on the left; "HP 110" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "우상의 수장 · 주전 9세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded orange flame), bold "거짓 불" centred, "70" right-aligned
  with small print underneath: "이 인물도 데미지 카운터 2개(20)를 받는다."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "피가 흐르도록 자기 몸을 상하게 했다." — 왕상 18:28
- footer: "GEN 022/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 023/090 리워야단
`art/hl-water-leviathan.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 동글동글한 파란 바다뱀, 커다란 동그란 눈, 등에 부채꼴 지느러미
- Scene: 검은 물결 아래 비치는 거대한 비늘의 형체

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "리워야단" on the left; "HP 80" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "바다의 괴물 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "깊음에서" centred, "30" right-aligned
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "낚시로 끌어낼 수 없고 갈고리로 잡을 수 없다." — 욥 41:1
- footer: "GEN 023/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 024/090 깊음의 리워야단
`art/hl-water-leviathan-2.png` · 지옥 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 파란 바다뱀이 훨씬 커지고 짙은 남색이 됨, 등지느러미가 가시처럼 돋음
- Scene: 바다를 통째로 휘감아 솟구치는 거대한 뱀

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "리워야단")
- name row: bold "깊음의 리워야단" on the left; "HP 130" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "깊음의 주인 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x blue water droplet), bold "소용돌이" centred, "60" right-aligned
  with small print underneath: "상대가 붙인 에너지 1개를 버리게 한다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x blue water droplet, plain silver star), bold "휘감다" centred, "90" right-aligned
  with small print underneath: "상대 배틀 인물은 다음 턴에 후퇴할 수 없다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 3 x plain silver star medallion
- cream-and-gold flavour banner in italics: "그가 지나가면 깊은 바다가 끓는 솥 같다." — 욥 41:31
- footer: "GEN 024/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 025/090 블레셋 거인 골리앗
`art/hl-earth-goliath.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 또래의 세 배만 한 거인, 땋아 내린 검은 수염, 청동 투구, 근거 없이 뿌듯한 표정
- Scene: 들판 가운데 홀로 선 거인, 긴 창

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "블레셋 거인 골리앗" on the left; "HP 90" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "가드의 거인 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "위협" centred, "20" right-aligned
  with small print underneath: "상대 배틀 인물은 다음 턴에 후퇴할 수 없다."
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "키가 여섯 규빗 한 뼘이었다." — 삼상 17:4
- footer: "GEN 025/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 026/090 완전무장 골리앗
`art/hl-earth-goliath-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 땋은 수염 거인이 머리끝부터 발끝까지 철갑을 두름, 자기 키만 한 창
- Scene: 비늘 갑옷과 놋 투구로 덮인 거인의 전신

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "블레셋 거인 골리앗")
- name row: bold "완전무장 골리앗" on the left; "HP 140" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "철갑의 거인 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded brown boulder), bold "놋 투구" centred, "60" right-aligned
  with small print underneath: "다음 상대 턴에 이 인물이 받는 데미지 -20."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x rounded brown boulder, plain silver star), bold "베틀채 같은 창" centred, "100" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 3 x plain silver star medallion
- cream-and-gold flavour banner in italics: "창 자루는 베틀채 같고 창날은 육백 세겔이었다." — 삼상 17:7
- footer: "GEN 026/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 027/090 공중 권세 잡은 자
`art/hl-wind-prince.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 보라색 망토를 쓴 그림자 형체, 얼굴은 두 점의 노란 눈뿐, 작은 박쥐 날개로 떠 있음
- Scene: 도시 위 낮게 깔린 검은 구름 속의 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "공중 권세 잡은 자" on the left; "HP 70" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "공중의 권세 · 시대를 가리지 않음"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "거스르는 바람" centred, "20" right-aligned
  with small print underneath: "상대의 다음 후퇴 비용이 무색 1개 늘어난다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "불순종의 아들들 가운데서 역사하는 영." — 엡 2:2
- footer: "GEN 027/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 028/090 흑암의 주관자
`art/hl-wind-prince-2.png` · 지옥 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 그림자 형체가 더 짙은 검보라로 커지고, 머리에 왕관처럼 뿔이 돋음
- Scene: 빛을 삼키는 검은 안개의 거대한 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "공중 권세 잡은 자")
- name row: bold "흑암의 주관자" on the left; "HP 120" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "이 어둠의 세상 주관자 · 시대를 가리지 않음"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x mint-green swirling wind curl), bold "어둠의 손" centred, "60" right-aligned
  with small print underneath: "상대 손에서 무작위로 1장을 버리게 한다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x mint-green swirling wind curl, plain silver star), bold "흑암" centred, "90" right-aligned
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "우리의 씨름은 혈과 육에 대한 것이 아니다." — 엡 6:12
- footer: "GEN 028/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 029/090 만나
`art/hv-item-manna.png` · 천국 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 이슬 내린 새벽 들판에 깔린 흰 알갱이

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "만나"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "카드 2장을 뽑는다."
- cream-and-gold flavour banner in italics: 출 16:15
- footer: "GEN 029/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 030/090 기드온의 나팔
`art/hv-item-trumpet.png` · 천국 · 아이템 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 밤중에 횃불과 나팔을 든 손들이 둘러선 진영

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "기드온의 나팔"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 배틀 인물을 벤치 인물과 바꾸게 한다. 상대가 고른다."
- cream-and-gold flavour banner in italics: 삿 7:20
- footer: "GEN 030/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 031/090 룻
`art/hv-sup-ruth.png` · 천국 · 서포터 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓 여인, 검게 땋아 늘인 긴 머리, 자주색 머릿수건, 품에 안은 이삭 한 다발
- Scene: 추수 끝난 보리밭에서 이삭을 줍는 여인

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "룻"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 덱에서 기본 인물 1장을 골라 손으로 가져온 뒤 덱을 섞는다."
- cream-and-gold flavour banner in italics: 룻 1:16
- footer: "GEN 031/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 032/090 느헤미야
`art/hv-sup-nehemiah.png` · 천국 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마흔쯤, 검은 단발과 네모나게 다듬은 수염, 소매 걷은 작업복, 한 손에 흙손 한 손에 두루마리
- Scene: 무너진 성벽 앞에서 설계도를 펴든 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "느헤미야"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 트래시에서 트레이너 카드 2장을 골라 손으로 가져온다."
- cream-and-gold flavour banner in italics: 느 2:17
- footer: "GEN 032/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 033/090 시내산
`art/hv-stad-sinai.png` · 천국 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 연기와 번개에 휩싸인 거대한 산, 산 아래 진영

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "시내산"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두의 빛 인물은 최대 HP가 20 늘어난다."
- cream-and-gold flavour banner in italics: 출 19:18
- footer: "GEN 033/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 034/090 금송아지
`art/hl-item-calf.png` · 지옥 · 아이템 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 불빛 아래 세워진 금빛 송아지 상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "금송아지"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 트래시에서 기본 에너지 1장을 내 벤치 인물에게 붙인다."
- cream-and-gold flavour banner in italics: 출 32:4
- footer: "GEN 034/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 035/090 은 삼십
`art/hl-item-silver.png` · 지옥 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 바닥에 데굴데굴 흩어진 은전 서른 닢

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "은 삼십"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 손에서 무작위로 1장을 버리게 한다."
- cream-and-gold flavour banner in italics: 마 26:15
- footer: "GEN 035/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 036/090 옛 뱀
`art/hl-item-serpent.png` · 지옥 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 열매가 달린 가지를 감고 내려다보는 뱀

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "옛 뱀"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 배틀 인물을 독 상태로 만든다."
- cream-and-gold flavour banner in italics: 창 3:1
- footer: "GEN 036/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 037/090 이세벨
`art/hl-sup-jezebel.png` · 지옥 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤 여인, 붉게 물결치는 긴 머리, 금귀고리와 팔찌를 주렁주렁, 보라색 드레스
- Scene: 창가에서 눈화장을 한 채 내려다보는 왕비

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "이세벨"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대는 손에서 1장을 골라 버린다. 그 후 나는 카드 3장을 뽑는다."
- cream-and-gold flavour banner in italics: 왕상 21:7
- footer: "GEN 037/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 038/090 거짓 선지자
`art/hl-sup-falseprophet.png` · 지옥 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 양가죽을 뒤집어쓴 늑대, 삐져나온 꼬리와 발톱, 입꼬리만 올린 가짜 미소
- Scene: 양가죽을 걸쳤으나 그림자는 이리인 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "거짓 선지자"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 덱에서 아무 카드 1장을 골라 손으로 가져오고, 손에서 1장을 버린다."
- cream-and-gold flavour banner in italics: 마 7:15
- footer: "GEN 038/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 039/090 바벨탑
`art/hl-stad-babel.png` · 지옥 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 구름을 뚫고 올라가다 멈춘 거대한 층계탑

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "바벨탑"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두, 서포터를 쓰려면 손에서 카드 1장을 먼저 버려야 한다."
- cream-and-gold flavour banner in italics: 창 11:4
- footer: "GEN 039/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 040/090 아브라함
`art/hv-light-abraham.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 일흔 넘은 노인, 곧게 빗어내린 은빛 긴 수염, 베이지색 두건과 겉옷, 옹이진 지팡이, 하늘을 올려다봄
- Scene: 밤하늘의 별을 올려다보는 노인, 천막

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "아브라함" on the left; "HP 70" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "떠난 사람 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "부르심을 따라" centred, "20" right-aligned
  with small print underneath: "내 덱에서 기본 인물 1장을 골라 손으로 가져온다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "갈 바를 알지 못하고 떠났다." — 창 12:1
- footer: "GEN 040/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 041/090 믿음의 아브라함
`art/hv-light-abraham-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 은빛 수염 노인, 더 희고 깨끗한 옷, 두 손을 가슴에 모음
- Scene: 산 위 제단 앞에 선 노인과 붙잡힌 숫양

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "아브라함")
- name row: bold "믿음의 아브라함" on the left; "HP 110" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "믿음의 조상 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x eight-pointed golden sunburst), bold "모리아 산" centred, "60" right-aligned
  with small print underneath: "내 트래시에서 기본 에너지 1장을 이 인물에게 붙인다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "아들을 아끼지 않았다." — 창 22:12
- footer: "GEN 041/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 042/090 솔로몬
`art/hv-light-solomon.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓 앳된 왕, 윤기 나는 검은 직모 단발, 수염 없음, 이마에 가는 금띠, 청록색 옷
- Scene: 두 여인 앞에서 칼을 들어보이는 젊은 왕

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "솔로몬" on the left; "HP 70" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "지혜를 구한 왕 · 주전 950년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "분별" centred, "20" right-aligned
  with small print underneath: "내 덱 위 3장을 보고 1장을 손으로, 나머지는 덱 아래로."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "장수도 부도 구하지 않았다." — 왕상 3:9
- footer: "GEN 042/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 043/090 지혜의 솔로몬
`art/hv-light-solomon-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 검은 단발 청년에 짧은 수염이 남, 금실 자수가 빼곡한 왕복과 묵직한 금관
- Scene: 금과 백향목으로 지어진 성전 내부

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "솔로몬")
- name row: bold "지혜의 솔로몬" on the left; "HP 120" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "성전을 지은 왕 · 주전 950년경"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x eight-pointed golden sunburst), bold "성전을 세우다" centred, "70" right-aligned
  with small print underneath: "내 인물 전체에서 데미지 카운터 1개(10)씩 덜어낸다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "칠 년 만에 성전을 마쳤다." — 왕상 6:14
- footer: "GEN 043/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 044/090 모세
`art/hv-fire-moses.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마흔쯤, 검은 곱슬머리와 수염에 흰 가닥이 섞임, 짙은 눈썹, 갈색 튜닉, 끝이 구부러진 목자 지팡이
- Scene: 불타지만 사라지지 않는 떨기나무 앞의 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "모세" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "부름받은 목자 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded orange flame), bold "떨기나무 불꽃" centred, "30" right-aligned
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "불이 붙었으나 타지 않았다." — 출 3:2
- footer: "GEN 044/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 045/090 시내산의 모세
`art/hv-fire-moses-2.png` · 천국 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 곱슬머리와 수염이 온통 하얗게 셈, 얼굴에서 은은한 빛, 두 팔로 돌판 두 개를 안음
- Scene: 연기 덮인 산 정상에서 돌판을 든 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "모세")
- name row: bold "시내산의 모세" on the left; "HP 130" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "산에 오른 자 · 주전 1400년경"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "중보",
  description underneath: "[천국 시그니처] 내 턴에 1번, 내 트래시에서 천국 인물 1장을 손으로 가져온다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded orange flame), bold "율법의 돌판" centred, "70" right-aligned
  with small print underneath: "상대가 다음 턴에 아이템을 쓸 수 없다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x rounded orange flame, plain silver star), bold "구름 기둥" centred, "100" right-aligned
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "얼굴에서 광채가 났다." — 출 19:20
- footer: "GEN 045/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 046/090 세례 요한
`art/hv-fire-john.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 후반, 덥수룩한 검은 곱슬 장발이 어깨를 덮음, 야윈 체격, 낙타털 옷과 가죽 띠
- Scene: 요단강 물에 발을 담그고 선 털옷 차림의 작은 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "세례 요한" on the left; "HP 70" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "광야의 소리 · 주후 30년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded orange flame), bold "회개하라" centred, "20" right-aligned
  with small print underneath: "상대 배틀 인물에 붙은 에너지 1개를 버리게 한다."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "낙타털 옷을 입고 메뚜기를 먹었다." — 마 3:11
- footer: "GEN 046/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 047/090 베드로
`art/hv-water-peter.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마흔쯤, 짧고 굵은 갈색 곱슬머리에 둥글게 깎은 수염, 넓은 어깨, 소매를 걷은 작업옷, 어깨에 그물
- Scene: 새벽 호수에서 그물을 끌어올리는 어부

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "베드로" on the left; "HP 70" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "어부 · 주후 30년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "그물을 내리다" centred, "20" right-aligned
  with small print underneath: "카드 1장을 뽑는다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "배와 그물을 버려두고 따랐다." — 마 4:19
- footer: "GEN 047/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 048/090 물 위를 걷는 베드로
`art/hv-water-peter-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 갈색 곱슬 수염 사내, 눈이 휘둥그레진 놀란 얼굴, 한 손을 앞으로 뻗음
- Scene: 파도 위에 선 사람과 내밀어진 손

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "베드로")
- name row: bold "물 위를 걷는 베드로" on the left; "HP 110" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "믿음이 흔들린 자 · 주후 30년경"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x blue water droplet), bold "주여 구원하소서" centred, "60" right-aligned
  with small print underneath: "이 인물의 데미지 카운터를 3개(30) 덜어낸다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "바람을 보고 무서워 빠져들기 시작했다." — 마 14:30
- footer: "GEN 048/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 049/090 요나
`art/hv-water-jonah.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤, 주황빛 곱슬머리에 뾰족한 코, 초록 겉옷, 등에 짐 보따리, 뒤를 힐끔 보는 표정
- Scene: 폭풍 치는 바다 위 기울어진 돛단배

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "요나" on the left; "HP 60" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "달아난 선지자 · 주전 8세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "도망" centred, "20" right-aligned
  with small print underneath: "이 인물을 벤치 인물과 바꾸어도 된다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "다시스로 가는 배삯을 주었다." — 욘 1:3
- footer: "GEN 049/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 050/090 큰 물고기 속 요나
`art/hv-water-jonah-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 주황 곱슬머리가 물에 젖어 착 달라붙음, 무릎을 꿇고 두 손을 모음
- Scene: 거대한 물고기 뱃속, 희미한 빛줄기

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "요나")
- name row: bold "큰 물고기 속 요나" on the left; "HP 100" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "삼켜진 자 · 주전 8세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x blue water droplet), bold "사흘 밤낮" centred, "60" right-aligned
  with small print underneath: "다음 상대 턴에 이 인물이 받는 데미지 -30."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "물고기 뱃속에서 사흘을 있었다." — 욘 1:17
- footer: "GEN 050/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 051/090 여호수아
`art/hv-earth-joshua.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤 군인, 바짝 깎은 검은 머리, 각진 턱, 가죽 투구와 청동 비늘갑옷
- Scene: 요단 앞에 선 갑옷 차림의 지휘관

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "여호수아" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "뒤를 이은 자 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "강하고 담대하라" centred, "30" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "두려워 말고 놀라지 말라는 말을 들었다." — 수 1:9
- footer: "GEN 051/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 052/090 여리고의 여호수아
`art/hv-earth-joshua-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 짧은 머리 군인, 칼을 머리 위로 높이 치켜듦
- Scene: 무너져 내리는 성벽과 나팔 부는 행렬

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "여호수아")
- name row: bold "여리고의 여호수아" on the left; "HP 130" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "성을 무너뜨린 자 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded brown boulder), bold "일곱 번 돌다" centred, "70" right-aligned
  with small print underneath: "상대 스타디움을 버린다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x rounded brown boulder, plain silver star), bold "성이 무너지다" centred, "110" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "나팔 소리에 성벽이 무너져 내렸다." — 수 6:20
- footer: "GEN 052/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 053/090 갈렙
`art/hv-earth-caleb.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 여든다섯이지만 다부진 노인, 짧은 백발과 굵고 검은 눈썹, 주름진 구릿빛 얼굴, 긴 창
- Scene: 산지를 가리키는 백발의 노인

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "갈렙" on the left; "HP 70" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "여든다섯의 용사 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "이 산지를 내게" centred, "30" right-aligned
  with small print underneath: "내 벤치 인물 1장에 기본 에너지를 1개 더 붙여도 된다."
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "사십 년이 지나도 그때처럼 강건했다." — 수 14:12
- footer: "GEN 053/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 054/090 엘리사
`art/hv-wind-elisha.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓, 머리를 아주 짧게 민 반들한 정수리, 수염 없는 동그란 얼굴, 수수한 흰 옷
- Scene: 강가에 떨어진 겉옷을 집어드는 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "엘리사" on the left; "HP 70" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "뒤따른 선지자 · 주전 9세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "겉옷을 받다" centred, "20" right-aligned
  with small print underneath: "내 트래시에서 아이템 1장을 손으로 가져온다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "스승의 겉옷을 주워 들었다." — 왕하 2:13
- footer: "GEN 054/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 055/090 갑절의 영 엘리사
`art/hv-wind-elisha-2.png` · 천국 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 민머리 청년, 어깨에 스승의 낡은 낙타털 겉옷을 두름
- Scene: 산을 가득 메운 불말과 불병거의 환상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "엘리사")
- name row: bold "갑절의 영 엘리사" on the left; "HP 120" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "갑절을 받은 자 · 주전 9세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x mint-green swirling wind curl), bold "불말의 산" centred, "70" right-aligned
  with small print underneath: "상대 벤치 인물 1장에게 데미지 20."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "우리와 함께한 자가 저들보다 많다." — 왕하 6:17
- footer: "GEN 055/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 056/090 스데반
`art/hv-wind-stephen.png` · 천국 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓, 부드러운 갈색 곱슬머리, 흰 겉옷, 두 손을 모으고 하늘을 올려다보는 평온한 얼굴
- Scene: 하늘에서 쏟아지는 빛줄기를 올려다보며 웃는 젊은이

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "스데반" on the left; "HP 60" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "첫 순교자 · 주후 35년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "하늘이 열리다" centred, "20" right-aligned
  with small print underneath: "이 인물이 다음 턴에 기절하면 영혼 카드를 1장 가져온다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "하늘이 열리고 인자가 선 것을 보았다." — 행 7:56
- footer: "GEN 056/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 057/090 다섯 매끄러운 돌
`art/hv-item-stones.png` · 천국 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 시냇가에 나란히 놓인 매끄러운 조약돌 다섯 개

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "다섯 매끄러운 돌"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "이번 턴에 내 빛 인물의 기술 데미지 +20."
- cream-and-gold flavour banner in italics: 삼상 17:40
- footer: "GEN 057/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 058/090 생명수
`art/hv-item-water.png` · 천국 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 바위틈에서 솟는 맑은 샘물

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "생명수"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 인물 1장에서 데미지 카운터 2개(20)를 덜어내고 특수상태를 회복한다."
- cream-and-gold flavour banner in italics: 요 4:14
- footer: "GEN 058/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 059/090 등불
`art/hv-item-lamp.png` · 천국 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 어두운 길을 비추는 작은 기름 등잔

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "등불"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 덱 위 4장을 보고 그중 1장을 손으로, 나머지는 덱 아래로 보낸다."
- cream-and-gold flavour banner in italics: 시 119:105
- footer: "GEN 059/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 060/090 겨자씨
`art/hv-item-mustard.png` · 천국 · 아이템 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 손바닥 위의 아주 작은 씨앗 한 알

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "겨자씨"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 벤치 기본 인물 1장을 그 자리에서 진화시킨다. 이 턴에 놓은 인물에도 쓸 수 있다."
- cream-and-gold flavour banner in italics: 마 17:20
- footer: "GEN 060/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 061/090 아론
`art/hv-sup-aaron.png` · 천국 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 예순쯤, 희고 넓은 수염, 금방울 달린 대제사장 예복, 열두 보석 가슴판, 흰 터번
- Scene: 흉패를 단 제사장 복장의 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "아론"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 트래시에서 기본 에너지 3장을 손으로 가져온다."
- cream-and-gold flavour banner in italics: 출 28:1
- footer: "GEN 061/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 062/090 드보라
`art/hv-sup-deborah.png` · 천국 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마흔쯤 여인, 적갈색 머리를 높이 틀어올림, 노란 겉옷, 종려나무 아래 앉음
- Scene: 종려나무 아래 앉아 재판하는 여인

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "드보라"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "카드 2장을 뽑는다. 내 배틀 인물이 천국이면 1장 더 뽑는다."
- cream-and-gold flavour banner in italics: 삿 4:4
- footer: "GEN 062/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 063/090 에스더
`art/hv-sup-esther.png` · 천국 · 서포터 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓 왕비, 검고 긴 생머리, 섬세한 금관, 진홍색 왕비복
- Scene: 왕 앞 뜰에 홀로 선 왕비

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "에스더"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "카드 3장을 뽑는다. 내 필드의 인물이 전부 천국이면 2장 더 뽑는다."
- cream-and-gold flavour banner in italics: 에 4:16
- footer: "GEN 063/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 064/090 여리고 성
`art/hv-stad-jericho.png` · 천국 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 따뜻하고 포근한 분위기
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 굳게 닫힌 거대한 성문과 성벽

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "여리고 성"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두, 2진화 인물의 기술 데미지 +20."
- cream-and-gold flavour banner in italics: 수 6:1
- footer: "GEN 064/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 065/090 가인
`art/hl-earth-cain.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 스물 남짓, 헝클어진 갈색 머리, 흙 묻은 농부 옷, 입을 삐죽 내민 심통 난 얼굴
- Scene: 텅 빈 들판에 혼자 서서 고개를 숙인 농부

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "가인" on the left; "HP 70" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "첫 살인자 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "들에서" centred, "30" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "아우를 들로 불러냈다." — 창 4:8
- footer: "GEN 065/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 066/090 쫓겨난 가인
`art/hl-earth-cain-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 헝클어진 갈색 머리 청년, 이마에 작은 표식, 보따리를 메고 등을 돌림
- Scene: 메마른 황야를 끝없이 걷는 표식 찍힌 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "가인")
- name row: bold "쫓겨난 가인" on the left; "HP 110" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "떠도는 자 · 태초"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded brown boulder), bold "유리하는 자" centred, "60" right-aligned
  with small print underneath: "이 인물을 벤치 인물과 바꾸어도 된다."
- attack row, laid over the artwork on a translucent ivory panel: 3 energy medallions on the left (2 x rounded brown boulder, plain silver star), bold "땅의 저주" centred, "90" right-aligned
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "땅이 다시는 그에게 효력을 주지 않았다." — 창 4:12
- footer: "GEN 066/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 067/090 아낙 자손
`art/hl-earth-anak.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 덩치만 큰 아이 같은 거인, 검은 곱슬 더벅머리, 가죽 조끼, 어깨에 걸친 통나무 몽둥이
- Scene: 정탐꾼들을 내려다보는 거대한 사람들

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "아낙 자손" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "거인 족속 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "메뚜기 같더라" centred, "20" right-aligned
  with small print underneath: "상대 배틀 인물은 다음 턴에 기술 데미지가 20 줄어든다."
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "그들 앞에서 우리는 메뚜기 같았다." — 민 13:33
- footer: "GEN 067/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 068/090 느부갓네살
`art/hl-light-nebu.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 쉰쯤, 네모나게 말아 다듬은 검은 수염, 높은 금관, 짙은 파랑 왕복, 턱을 치켜든 자세
- Scene: 거대한 금 신상 앞에 엎드린 무리

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "느부갓네살" on the left; "HP 80" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "바벨론의 왕 · 주전 6세기"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "금 신상" centred, "30" right-aligned
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "높이 육십 규빗의 금 신상을 세웠다." — 단 3:1
- footer: "GEN 068/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 069/090 교만한 느부갓네살
`art/hl-light-nebu-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 검은 수염 왕인데 머리와 손톱이 제멋대로 길게 자람, 들풀밭에 네 발로 엎드려 풀을 뜯는 멋쩍은 표정
- Scene: 왕관을 쓴 채 들짐승처럼 변해가는 형상

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "느부갓네살")
- name row: bold "교만한 느부갓네살" on the left; "HP 120" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "낮아진 왕 · 주전 6세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x eight-pointed golden sunburst), bold "큰 바벨론" centred, "70" right-aligned
  with small print underneath: "상대 손에서 무작위로 1장을 버리게 한다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "소처럼 풀을 먹고 이슬에 젖었다." — 단 4:30
- footer: "GEN 069/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 070/090 마술사 시몬
`art/hl-light-simon.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤, 보라색 두건, 가늘게 기른 콧수염, 손가락 사이로 동전을 굴림
- Scene: 은전을 내밀며 웃는 화려한 차림의 남자

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "마술사 시몬" on the left; "HP 60" on the right, followed by an energy medallion holding an eight-pointed golden sunburst
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "술법을 행하던 자 · 주후 35년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (eight-pointed golden sunburst), bold "돈으로 사다" centred, "20" right-aligned
  with small print underneath: "내 덱에서 아이템 1장을 골라 손으로 가져온다."
- a single narrow bar: "약점" + a blue water droplet medallion + "×2"  /  "저항" + a mint-green swirling wind curl medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "은사를 돈으로 사려 했다." — 행 8:18
- footer: "GEN 070/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 071/090 몰렉
`art/hl-fire-molech.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 청동 황소 머리를 한 통통한 우상, 짧은 다리, 배 한가운데 작은 아궁이 불
- Scene: 입에서 불을 뿜는 뚱뚱한 청동 우상, 두 팔을 벌리고 있다

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "몰렉" on the left; "HP 80" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "삼키는 우상 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded orange flame), bold "불 가운데로" centred, "30" right-aligned
  with small print underneath: "내 벤치 인물 1장을 버려도 된다. 버렸으면 데미지 +30."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "자녀를 불 가운데로 지나가게 했다." — 레 18:21
- footer: "GEN 071/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 072/090 풀무불의 우상
`art/hl-fire-molech-2.png` · 지옥 · 인물 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 청동 황소 우상이 벌겋게 달아올라 주황빛으로 빛나고 어깨에서 아지랑이
- Scene: 하얗게 달아오른 거대한 풀무 화덕

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "몰렉")
- name row: bold "풀무불의 우상" on the left; "HP 120" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "달궈진 화덕 · 주전 6세기"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x rounded orange flame), bold "일곱 배 뜨겁게" centred, "70" right-aligned
  with small print underneath: "이 인물도 데미지 카운터 2개(20)를 받는다."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "평소보다 일곱 배나 뜨겁게 했다." — 단 3:19
- footer: "GEN 072/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 073/090 애굽의 마술사
`art/hl-fire-magician.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 이집트 흰 주름치마와 검은 단발 가발, 눈가에 검은 선 화장, 뱀으로 변하는 지팡이
- Scene: 지팡이를 뱀으로 바꾸는 궁정 술사들

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "애굽의 마술사" on the left; "HP 60" on the right, followed by an energy medallion holding a rounded orange flame
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "술객 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded orange flame), bold "그대로 흉내내다" centred, "20" right-aligned
  with small print underneath: "상대 배틀 인물의 기술 1개를 이 턴에 쓴 것으로 친다. 데미지는 20으로 한다."
- a single narrow bar: "약점" + a mint-green swirling wind curl medallion + "×2"  /  "저항" + a rounded brown boulder medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "그들도 술법으로 같은 일을 행했다." — 출 7:11
- footer: "GEN 073/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 074/090 바다에서 나온 짐승
`art/hl-water-beast.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 물갈퀴 달린 통통한 바다 괴수, 비늘이 청록색, 멍한 눈
- Scene: 검은 파도 위로 솟아오르는 뿔 달린 형체

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "바다에서 나온 짐승" on the left; "HP 80" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "바다의 짐승 · 마지막 때"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "깊음에서 오르다" centred, "30" right-aligned
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "열 뿔과 일곱 머리를 가졌다." — 계 13:1
- footer: "GEN 074/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 075/090 열 뿔의 짐승
`art/hl-water-beast-2.png` · 지옥 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 청록 바다 괴수 머리에 작은 뿔 열 개가 왕관처럼 돋음, 눈빛이 또렷해짐
- Scene: 열 개의 뿔이 솟은 거대한 바다 짐승

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "바다에서 나온 짐승")
- name row: bold "열 뿔의 짐승" on the left; "HP 140" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "권세 받은 짐승 · 마지막 때"
- ability row on the same translucent ivory panel: small dark red label "특성", bold "미혹하는 표",
  description underneath: "[지옥 시그니처] 내 벤치 인물 1장을 버려도 된다. 버렸으면 카드 3장을 뽑는다."
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x blue water droplet), bold "권세를 받다" centred, "80" right-aligned
  with small print underneath: "상대 벤치 인물 1장에게 데미지 20."
- attack row, laid over the artwork on a translucent ivory panel: 4 energy medallions on the left (2 x blue water droplet, 2 x plain silver star), bold "삼키는 바다" centred, "120" right-aligned
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 3 x plain silver star medallion
- cream-and-gold flavour banner in italics: "모든 족속을 이길 권세를 받았다." — 계 13:7
- footer: "GEN 075/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 076/090 애굽의 재앙
`art/hl-water-plague.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 강물을 뒤덮은 초록 개구리 떼, 저마다 다른 방향을 보는 동그란 눈
- Scene: 강물이 붉게 변하자 깜짝 놀라 튀어오른 물고기들

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "애굽의 재앙" on the left; "HP 60" on the right, followed by an energy medallion holding a blue water droplet
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "강을 덮은 재앙 · 주전 1400년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (blue water droplet), bold "피로 변하다" centred, "20" right-aligned
  with small print underneath: "상대는 다음 턴에 카드를 1장만 뽑는다."
- a single narrow bar: "약점" + a rounded brown boulder medallion + "×2"  /  "저항" + an eight-pointed golden sunburst medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "강물이 피로 변하여 고기가 죽었다." — 출 7:20
- footer: "GEN 076/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 077/090 아바돈
`art/hl-wind-abaddon.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 사람만 한 메뚜기, 갈색 껍질, 투명한 날개, 긴 더듬이
- Scene: 갈라진 구덩이에서 뭉게뭉게 피어오르는 검은 연기

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "아바돈" on the left; "HP 70" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "무저갱의 사자 · 마지막 때"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "연기 기둥" centred, "20" right-aligned
  with small print underneath: "상대 배틀 인물을 독 상태로 만든다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "히브리 말로 아바돈이라 한다." — 계 9:11
- footer: "GEN 077/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 078/090 무저갱의 아바돈
`art/hl-wind-abaddon-2.png` · 지옥 · 인물 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 같은 갈색 메뚜기가 작은 철관을 쓰고 가슴에 갑옷을 댐
- Scene: 왕관을 쓴 통통한 메뚜기 대장과 졸병 메뚜기들

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "1진화" (evolves from "아바돈")
- name row: bold "무저갱의 아바돈" on the left; "HP 130" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "파멸의 왕 · 마지막 때"
- attack row, laid over the artwork on a translucent ivory panel: 2 energy medallions on the left (2 x mint-green swirling wind curl), bold "다섯 달의 고통" centred, "70" right-aligned
  with small print underneath: "상대 배틀 인물을 독 상태로 만든다. 이 독은 턴마다 20씩 준다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 2 x plain silver star medallion
- cream-and-gold flavour banner in italics: "죽기를 구하여도 죽지 못하게 했다." — 계 9:5
- footer: "GEN 078/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 079/090 군대 귀신
`art/hl-wind-legion.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 손바닥만 한 똑같은 보라색 도깨비 여럿이 우르르 뭉침, 모두 같은 얼굴
- Scene: 바위 사이에 옹기종기 겹쳐 앉은 수많은 작은 그림자들

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "군대 귀신" on the left; "HP 60" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "이름이 군대인 것 · 주후 30년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "우리가 많으니" centred, "20" right-aligned
  with small print underneath: "내 덱에서 이 카드와 같은 이름의 카드 1장을 골라 벤치에 놓는다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "우리의 이름은 군대니 우리가 많음이라." — 막 5:9
- footer: "GEN 079/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 080/090 엔돌의 신접한 여인
`art/hl-wind-endor.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 허리 굽은 노파, 산발한 흰 머리, 검은 숄, 탁자 위 흐린 수정구
- Scene: 촛불 하나 켜진 토굴, 떠오르는 희미한 형체

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "엔돌의 신접한 여인" on the left; "HP 60" on the right, followed by an energy medallion holding a mint-green swirling wind curl
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "신접한 자 · 주전 1000년경"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (mint-green swirling wind curl), bold "불러올리다" centred, "20" right-aligned
  with small print underneath: "내 트래시에서 인물 1장을 골라 손으로 가져온다."
- a single narrow bar: "약점" + an eight-pointed golden sunburst medallion + "×2"  /  "저항" + a rounded orange flame medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "밤중에 변장하고 찾아온 왕을 맞았다." — 삼상 28:7
- footer: "GEN 080/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 081/090 땅에서 나온 짐승
`art/hl-earth-beast2.png` · 지옥 · 인물 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 양처럼 생긴 통통한 짐승, 머리에 뿔 두 개, 입만 늑대처럼 뾰족함
- Scene: 양의 뿔을 가졌으나 눈이 붉은 짐승

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "기본"
- name row: bold "땅에서 나온 짐승" on the left; "HP 70" on the right, followed by an energy medallion holding a rounded brown boulder
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- thin band across the artwork: "두 뿔의 짐승 · 마지막 때"
- attack row, laid over the artwork on a translucent ivory panel: 1 energy medallion on the left (rounded brown boulder), bold "거짓 표적" centred, "20" right-aligned
  with small print underneath: "상대 스타디움을 버린다."
- a single narrow bar: "약점" + a rounded orange flame medallion + "×2"  /  "저항" + a blue water droplet medallion + "-30"  /  "후퇴" + 1 x plain silver star medallion
- cream-and-gold flavour banner in italics: "어린 양 같은 두 뿔이 있고 용처럼 말했다." — 계 13:11
- footer: "GEN 081/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- The five elements are wind, fire, earth, water and light only — no darkness, no nature.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 082/090 우상의 단
`art/hl-item-altar.png` · 지옥 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 언덕 위에 돌로 쌓아올린 제단과 기둥

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "우상의 단"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 트래시에서 기본 에너지 1장을 내 배틀 인물에게 붙인다."
- cream-and-gold flavour banner in italics: 왕하 17:16
- footer: "GEN 082/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 083/090 독주
`art/hl-item-wine.png` · 지옥 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 엎질러진 잔과 검붉은 포도주

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "독주"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대는 다음 턴에 후퇴 비용이 무색 2개만큼 늘어난다."
- cream-and-gold flavour banner in italics: 잠 20:1
- footer: "GEN 083/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 084/090 꾀는 미끼
`art/hl-item-bait.png` · 지옥 · 아이템 · ● · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 함정 위에 놓인 잘 익은 과일

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "꾀는 미끼"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 벤치 인물 1장을 배틀 자리로 끌어낸다. 내가 고른다."
- cream-and-gold flavour banner in italics: 약 1:14
- footer: "GEN 084/090" bottom-left, rarity mark "●" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 085/090 터진 웅덩이
`art/hl-item-cistern.png` · 지옥 · 아이템 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 바닥이 갈라져 물이 새는 돌 웅덩이

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "아이템"
- name row: bold "터진 웅덩이"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 손에서 무작위로 2장을 보고 그중 1장을 버리게 한다."
- cream-and-gold flavour banner in italics: 렘 2:13
- footer: "GEN 085/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 086/090 발람
`art/hl-sup-balaam.png` · 지옥 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 쉰쯤, 회색 수염, 갈색 여행 겉옷, 말을 하려는 듯 입을 벌린 나귀 옆에 섬
- Scene: 나귀를 탄 채 길을 막힌 점술가

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "발람"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "내 덱에서 아무 카드 2장을 골라 손으로 가져오고, 손에서 2장을 버린다."
- cream-and-gold flavour banner in italics: 민 22:7
- footer: "GEN 086/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 087/090 헤롯
`art/hl-sup-herod.png` · 지옥 · 서포터 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 마흔쯤, 기름 바른 검은 곱슬머리, 월계관 모양 금관, 붉은 토가, 턱을 치켜든 거만한 표정
- Scene: 화난 얼굴로 손가락질하는 작은 왕, 왕관이 기울어져 있다

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "헤롯"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대의 벤치 인물 1장에게 데미지 카운터 4개(40)를 올린다."
- cream-and-gold flavour banner in italics: 마 2:16
- footer: "GEN 087/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 088/090 가룟 유다
`art/hl-sup-judas.png` · 지옥 · 서포터 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 서른쯤, 검은 곱슬 단발, 짙은 초록 겉옷, 손에 쥔 은주머니, 눈을 옆으로 피함
- Scene: 등 뒤로 은전 주머니를 숨긴 채 어색하게 웃는 사람

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "서포터"
- name row: bold "가룟 유다"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "상대는 손에서 2장을 골라 버린다. 내 필드의 인물이 전부 지옥이면 카드 2장을 뽑는다."
- cream-and-gold flavour banner in italics: 마 26:15
- footer: "GEN 088/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 089/090 소돔
`art/hl-stad-sodom.png` · 지옥 · 스타디움 · ◆ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 작은 불꽃 방울이 뚝뚝 떨어지는 장난감 같은 성읍

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "소돔"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두, 자기 턴이 끝날 때 배틀 인물에게 데미지 카운터 1개(10)를 올린다."
- cream-and-gold flavour banner in italics: 창 19:24
- footer: "GEN 089/090" bottom-left, rarity mark "◆" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 090/090 무저갱
`art/hl-stad-abyss.png` · 지옥 · 스타디움 · ★ · ✅ 있음

```
Create one premium collectible trading card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 귀여운 2등신 치비 캐릭터, 큰 머리와 동그란 눈, 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 단순한 배경
- 분위기: 무섭지 않게, 짓궂은 장난꾸러기 악당 느낌
- Match the attached reference image for line, palette and watercolour finish.
- The character is the focus: roughly half the artwork height, centred, face clearly readable.
  Keep the landscape behind them, but softened and lower contrast so the figure reads first.
- No sparkles, glowing particles or volumetric sunbeams. Soft matte watercolour, not cinematic glow.

CHARACTER & SCENE
- Appearance: 인물 없이, 사물과 배경만
- Scene: 끝이 보이지 않는 깊은 구덩이와 열쇠

CARD UI — reproduce every quoted Korean string EXACTLY, top to bottom:
- top-left cream pill label: "스타디움"
- name row: bold "무저갱"
- the illustration runs full-bleed from under the name row all the way to the footer, filling the whole card behind everything below
- effect box: "양쪽 모두, 기절한 인물은 트래시 대신 덱 아래로 간다."
- cream-and-gold flavour banner in italics: 계 9:1
- footer: "GEN 090/090" bottom-left, rarity mark "★" bottom-right

TYPOGRAPHY
- Korean trading-card typography: bold black headings, compact readable body text.
- This card has NO element and NO type. Draw no energy medallions and no elemental symbols anywhere on it — the name row holds the name only.
- Rarity marks are ● ◆ ★ only.

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- Text panels are translucent warm ivory laid over the artwork, with thin gold outlines.
```

## 기본 에너지 — 바람
`art/energy-바람.png` · ✅ 있음

```
Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 인물 없이, 단순한 배경
- No sparkles or cinematic glow. Soft matte watercolour.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.

CARD UI — reproduce every quoted Korean string EXACTLY:
- top-left cream pill label: "기본 에너지"
- name row: bold "바람 에너지"
- illustration window, landscape 3:2: 동그랗게 말려 올라가는 바람과 떠다니는 나뭇잎
- one large energy medallion at the centre holding a mint-green swirling wind curl
- footer bottom-left: "GEN 기본 에너지"

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- This card carries no effect text. Draw NO text box, panel or empty banner below the artwork — the artwork runs clean from the name row down to the footer.
```

## 기본 에너지 — 불
`art/energy-불.png` · ✅ 있음

```
Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 인물 없이, 단순한 배경
- No sparkles or cinematic glow. Soft matte watercolour.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.

CARD UI — reproduce every quoted Korean string EXACTLY:
- top-left cream pill label: "기본 에너지"
- name row: bold "불 에너지"
- illustration window, landscape 3:2: 포근하게 타오르는 모닥불과 떠오르는 불티
- one large energy medallion at the centre holding a rounded orange flame
- footer bottom-left: "GEN 기본 에너지"

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- This card carries no effect text. Draw NO text box, panel or empty banner below the artwork — the artwork runs clean from the name row down to the footer.
```

## 기본 에너지 — 땅
`art/energy-땅.png` · ✅ 있음

```
Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 인물 없이, 단순한 배경
- No sparkles or cinematic glow. Soft matte watercolour.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.

CARD UI — reproduce every quoted Korean string EXACTLY:
- top-left cream pill label: "기본 에너지"
- name row: bold "땅 에너지"
- illustration window, landscape 3:2: 둥글둥글한 바위와 돋아난 새싹
- one large energy medallion at the centre holding a rounded brown boulder
- footer bottom-left: "GEN 기본 에너지"

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- This card carries no effect text. Draw NO text box, panel or empty banner below the artwork — the artwork runs clean from the name row down to the footer.
```

## 기본 에너지 — 물
`art/energy-물.png` · ✅ 있음

```
Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 인물 없이, 단순한 배경
- No sparkles or cinematic glow. Soft matte watercolour.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.

CARD UI — reproduce every quoted Korean string EXACTLY:
- top-left cream pill label: "기본 에너지"
- name row: bold "물 에너지"
- illustration window, landscape 3:2: 맑은 샘에서 똑 떨어지는 물방울과 번지는 파문
- one large energy medallion at the centre holding a blue water droplet
- footer bottom-left: "GEN 기본 에너지"

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- This card carries no effect text. Draw NO text box, panel or empty banner below the artwork — the artwork runs clean from the name row down to the footer.
```

## 기본 에너지 — 빛
`art/energy-빛.png` · ✅ 있음

```
Create one premium collectible basic energy card for a cute Bible-themed fantasy TCG.

CARD FORMAT
- One complete vertical trading card, portrait 63:88 ratio, rounded corners.
- Thick metallic gold border with embossed detail and subtle foil glints.
- Straight-on front view, no perspective distortion. The entire card is visible, nothing cropped.
- Keep every text, symbol and artwork element inside the card boundary.
- Clean margins, consistent alignment, clear visual hierarchy. Premium collectible finish.

ART STYLE
- 부드러운 파스텔 수채, 굵고 둥근 윤곽선, 인물 없이, 단순한 배경
- No sparkles or cinematic glow. Soft matte watercolour.
- An "energy medallion" means a small circle with a thin gold rim holding one flat solid pictogram — never a letter, never Korean text.

CARD UI — reproduce every quoted Korean string EXACTLY:
- top-left cream pill label: "기본 에너지"
- name row: bold "빛 에너지"
- illustration window, landscape 3:2: 반짝이는 작은 해와 흩날리는 금빛 가루
- one large energy medallion at the centre holding an eight-pointed golden sunburst
- footer bottom-left: "GEN 기본 에너지"

QUALITY CONTROL
- Exactly one card. No duplicate cards, no extra characters, no decorations covering text.
- Korean glyphs must be well-formed and legible. Do not invent extra words, logos or watermarks.
- No photographs, no 3D toy rendering, no minimalist flat-vector design.
- This card carries no effect text. Draw NO text box, panel or empty banner below the artwork — the artwork runs clean from the name row down to the footer.
```
