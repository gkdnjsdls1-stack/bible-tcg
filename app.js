/* 성경 TCG — 팩 개봉 / 컬렉션 / 덱 / 대전 플레이매트.
   의존성 0, 빌드 0. 카드는 art/<id>.png을 통째로 띄운다 (테두리·글자는 이미 구워져 있다).
   대전은 룰을 강제하지 않는 플레이매트다 — 심판은 rules.md.
   컬렉션은 localStorage에만 (서버도 계정도 없다, 의도한 것). */
const KEY = "bible-tcg";
const RAR = { 흔함: "●", 드묾: "◆", 레어: "★" };
let D, RING, RULES, PACK, byId = {};
let save = JSON.parse(localStorage.getItem(KEY) || "null") || { coins: 0, owned: {}, decks: [], active: 0 };

// 덱·필드의 카드 키: 카드 id, 또는 기본 에너지 "E:빛" (에너지는 무제한이라 컬렉션에 없다)
const ekey = (t) => "E:" + t;
const isE = (k) => k.startsWith("E:");
// art/는 2.7MB짜리 원본 보관용. 앱은 webart.py가 줄인 art-web/만 본다
const art = (k) => (isE(k) ? `art-web/energy-${k.slice(2)}.jpg` : `art-web/${k}.jpg`);
const nameOf = (k) => (isE(k) ? k.slice(2) + " 에너지" : byId[k].name);
const kindOf = (k) => (isE(k) ? "에너지" : byId[k].kind);
const $ = (s) => document.querySelector(s);
const el = (h) => Object.assign(document.createElement("div"), { innerHTML: h }).firstElementChild;
const persist = () => localStorage.setItem(KEY, JSON.stringify(save));
const rnd = (a) => a[(Math.random() * a.length) | 0];
const shuffle = (a) => { for (let i = a.length; --i > 0;) { const j = (Math.random() * (i + 1)) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; };

function slotHTML(k, n, owned = true, cls = "") {
  return `<div class="slot ${owned ? "" : "no"} ${cls}"><img class="card" src="${art(k)}" alt="${nameOf(k)}" loading="lazy">${n ? `<span class="n">${n}</span>` : ""}</div>`;
}

/* ───────── 팩 ───────── */
function pull(slot) {
  const pool = D.cards.filter((c) => (slot === "리버스" ? "●◆".includes(c.rarity) : c.rarity === RAR[slot]));
  return rnd(pool);
}
function openPack() {
  save.coins -= PACK.price;
  const out = [];
  for (const [slot, n] of Object.entries(PACK.slots))
    for (let i = 0; i < n; i++) {
      const c = pull(slot), dupe = (save.owned[c.id] || 0) > 0;
      if (dupe) save.coins += PACK.dupe_refund;
      save.owned[c.id] = (save.owned[c.id] || 0) + 1;
      out.push({ k: c.id, slot, dupe });
    }
  out.push({ k: ekey(rnd(RING)), slot: "덤", dupe: false }); // 덤 에너지는 표시만 — 디지털에선 무제한
  persist();
  renderPack(out);
}
function renderPack(out) {
  $("#coins").textContent = `${save.coins} 코인`;
  const own = Object.values(save.owned).reduce((a, b) => a + b, 0);
  $("#packinfo").textContent =
    `${PACK.price}코인 · ${PACK.size}장 (${Object.entries(PACK.slots).map(([k, v]) => k + v).join(" ")}) · ` +
    `중복은 ${PACK.dupe_refund}코인 환급 · 모은 카드 ${own}장 / ${Object.keys(save.owned).length}종`;
  $("#buy").disabled = save.coins < PACK.price;
  $("#packout").innerHTML = out
    ? out.map((o) => `<div>${slotHTML(o.k, 0, true, o.dupe ? "dupe" : "")}<div class="tag">${o.dupe ? "중복 +" + PACK.dupe_refund : o.slot}</div></div>`).join("")
    : "";
}

/* ───────── 필터 (컬렉션·덱 풀 공용) ───────── */
const F = { faction: "", type: "", rarity: "" };
function filterBar(id, onChange) {
  const g = (label, key, vals) =>
    `<span class="tag">${label}</span>` +
    [["전체", ""], ...vals.map((v) => [v, v])]
      .map(([t, v]) => `<button data-k="${key}" data-v="${v}" class="${F[key] === v ? "on" : ""}">${t}</button>`).join("");
  $(id).innerHTML = g("진영", "faction", ["천국", "지옥"]) + g("타입", "type", RING) + g("희귀도", "rarity", [...Object.values(RAR)]);
  $(id).onclick = (e) => { const b = e.target.closest("button"); if (!b) return; F[b.dataset.k] = b.dataset.v; onChange(); };
}
const pass = (c) => (!F.faction || c.faction === F.faction) && (!F.type || c.type === F.type) && (!F.rarity || c.rarity === F.rarity);

/* ───────── 컬렉션 ───────── */
function renderColl() {
  filterBar("#collfilter", renderColl);
  $("#collgrid").innerHTML = D.cards.filter(pass)
    .map((c) => slotHTML(c.id, save.owned[c.id] || 0, !!save.owned[c.id])).join("");
}

/* ───────── 덱 ───────── */
const deck = () => save.decks[save.active];
const total = (d) => Object.values(d.cards).reduce((a, b) => a + b, 0);
const limit = (k) => (isE(k) ? 99 : Math.min(RULES.max_copies_per_name, save.owned[k] || 0));
function add(k, n) {
  const d = deck(), cur = d.cards[k] || 0, next = Math.max(0, Math.min(limit(k), cur + n));
  if (next === cur || (n > 0 && total(d) >= RULES.deck_size)) return;
  next ? (d.cards[k] = next) : delete d.cards[k];
  persist(); renderDeck();
}
function autofill() {
  const d = deck();
  // 한 타입으로 짠다: 기술 비용은 전부 "자기 타입 + 무색"이라 타입을 섞으면 못 쓸 에너지만 쌓인다 (aiDeck과 같은 이유).
  // 에너지 자리를 먼저 떼어 둔다 — 안 그러면 인물이 60칸을 다 먹어 에너지 0장짜리 덱이 나온다 (실제로 나왔다).
  const ENERGY = 15;
  const owned = Object.keys(save.owned).filter((k) => byId[k]);
  const cnt = {};
  for (const k of owned) if (byId[k].kind === "인물") cnt[byId[k].type] = (cnt[byId[k].type] || 0) + save.owned[k];
  const t = Object.entries(cnt).sort((x, y) => y[1] - x[1])[0]?.[0] || rnd(RING);
  const mine = (k) => byId[k].kind !== "인물" || byId[k].type === t;
  for (const k of shuffle(owned.filter(mine)))
    while (total(d) < RULES.deck_size - ENERGY && (d.cards[k] || 0) < limit(k)) d.cards[k] = (d.cards[k] || 0) + 1;
  for (const k of shuffle(owned))                       // 그 타입만으로 안 차면 나머지로 메운다
    while (total(d) < RULES.deck_size - ENERGY && (d.cards[k] || 0) < limit(k)) d.cards[k] = (d.cards[k] || 0) + 1;
  d.cards[ekey(t)] = (d.cards[ekey(t)] || 0) + RULES.deck_size - total(d);   // 에너지는 반드시 마지막에
  persist(); renderDeck();
}
function deckErrors(d) {
  const e = [];
  if (total(d) !== RULES.deck_size) e.push(`${total(d)} / ${RULES.deck_size}장`);
  const basics = Object.keys(d.cards).filter((k) => !isE(k) && byId[k].kind === "인물" && byId[k].stage === "기본");
  if (basics.length < RULES.min_basic_in_deck) e.push("기본 인물이 없다");
  return e;
}
function renderDeck() {
  if (!save.decks.length) save.decks = [{ name: "덱 1", cards: {} }];
  const d = deck();
  filterBar("#deckfilter", renderDeck);
  $("#deckpool").innerHTML =
    RING.map((t) => slotHTML(ekey(t), `${d.cards[ekey(t)] || 0}/∞`)).join("") +
    D.cards.filter((c) => save.owned[c.id] && pass(c))
      .map((c) => slotHTML(c.id, `${d.cards[c.id] || 0}/${limit(c.id)}`)).join("");
  $("#deckpool").onclick = (e) => { const s = e.target.closest(".slot"); if (s) add(key(s), e.shiftKey ? -1 : 1); };

  const err = deckErrors(d);
  $("#decklist").innerHTML =
    `<div class="bar"><select id="pick">${save.decks.map((x, i) => `<option ${i === save.active ? "selected" : ""}>${x.name}</option>`).join("")}</select>
     <button id="newdeck">새 덱</button><button id="fill">자동 채우기</button><button id="clear">비우기</button></div>
     <div class="${err.length ? "warn" : "ok"}">${err.length ? "⚠ " + err.join(" · ") : `✔ ${RULES.deck_size}장 완성`}</div>
     <ul>${Object.entries(d.cards).map(([k, n]) =>
      `<li><span class="nm">${nameOf(k)}</span><button data-k="${k}" data-n="-1">−</button><b>${n}</b><button data-k="${k}" data-n="1">+</button></li>`).join("")}</ul>`;
  $("#pick").onchange = (e) => { save.active = e.target.selectedIndex; persist(); renderDeck(); };
  $("#newdeck").onclick = () => { save.decks.push({ name: "덱 " + (save.decks.length + 1), cards: {} }); save.active = save.decks.length - 1; persist(); renderDeck(); };
  $("#fill").onclick = autofill;
  $("#clear").onclick = () => { d.cards = {}; persist(); renderDeck(); };
  $("#decklist").querySelector("ul").onclick = (e) => { const b = e.target.closest("button"); if (b) add(b.dataset.k, +b.dataset.n); };
}
// 풀 그리드의 슬롯 → 카드 키 (DOM 순서로 되짚는다)
function key(slot) {
  const i = [...slot.parentElement.children].indexOf(slot);
  const pool = [...RING.map(ekey), ...D.cards.filter((c) => save.owned[c.id] && pass(c)).map((c) => c.id)];
  return pool[i];
}

/* ───────── 대전 — 룰을 강제하지 않는 플레이매트 ───────── */
let G = null, sel = null;
const expand = (d) => Object.entries(d.cards).flatMap(([k, n]) => Array(n).fill(k));
function mkSide(d) {
  // 멀리건 — 기본 인물 없는 손으로는 아무것도 못 한다. 양쪽 모두 여기서 걸린다 (호출처마다 걸면 빠뜨린다)
  for (let t = 0; ; t++) {
    const deck = shuffle(expand(d));
    const hand = deck.splice(0, 7);
    if (t >= 20 || hand.some((k) => !isE(k) && byId[k] && byId[k].stage === "기본"))
      return { name: d.name, deck, hand, prize: deck.splice(0, RULES.prize_count), bench: [], battle: null, discard: [] };
  }
}
function start(i, j) {
  AI = null; ME = null;
  G = { s: [mkSide(save.decks[i]), mkSide(save.decks[j])], turn: 0, n: 1, stadium: null, coin: "" };
  sel = null; renderBattle();
}
const fieldSlots = (s) => [s.battle, ...s.bench].filter(Boolean);

function take(sel) { // 선택한 카드를 원래 자리에서 떼어낸다 → 키 배열
  const s = G.s[sel.s];
  if (sel.z === "battle") { const f = s.battle; s.battle = null; return [f.k, ...f.under]; }
  if (sel.z === "bench") { const f = s.bench.splice(sel.i, 1)[0]; return [f.k, ...f.under]; }
  if (sel.z === "stadium") { const k = G.stadium; G.stadium = null; return [k]; }
  return s[sel.z].splice(sel.i, 1);
}
function drop(z, si, ti) {
  const ks = take(sel), s = G.s[si], k = ks[0];
  const target = z === "battle" ? s.battle : z === "bench" ? s.bench[ti] : null;
  // 룰은 강제하지 않지만 빈 자리에 에너지만 덩그러니 놓이는 건 막는다 (거의 항상 잘못 누른 것)
  if (!target && (z === "battle" || z === "bench") && kindOf(k) !== "인물") { s.hand.unshift(...ks); sel = null; return renderBattle(); }
  if (target && kindOf(k) === "인물") { target.under.unshift(target.k); target.k = k; target.under.push(...ks.slice(1)); }
  else if (target) target.under.push(...ks);                       // 에너지·도구 부착
  else if (z === "battle") s.battle = { k, dmg: 0, under: ks.slice(1) };
  else if (z === "bench") { if (s.bench.length < RULES.bench_size) s.bench.push({ k, dmg: 0, under: ks.slice(1) }); else s.hand.push(...ks); }
  else if (z === "stadium") { if (G.stadium) G.s[si].discard.push(G.stadium); G.stadium = k; s.discard.push(...ks.slice(1)); }
  else if (z === "deckbottom") s.deck.push(...ks);
  else s[z].unshift(...ks);
  sel = null; renderBattle();
}
function zone(label, si, z, inner, ti) {
  const tgt = sel && !(sel.s === si && sel.z === z && sel.i === ti);
  return `<div class="zone"><div class="zlab">${label}</div>
    ${tgt ? `<button data-drop="${z}" data-s="${si}" data-t="${ti ?? ""}">여기로</button>` : ""}${inner}</div>`;
}
function fieldHTML(f, si, z, i) {
  if (!f) return "";
  const s = sel && sel.s === si && sel.z === z && sel.i === i ? "sel" : "";
  return `<div class="slot ${s}" data-s="${si}" data-z="${z}" data-i="${i}" style="width:72px">
    <img class="card" src="${art(f.k)}">${f.dmg ? `<span class="dmg">${f.dmg}</span>` : ""}
    ${f.under.length ? `<span class="n">+${f.under.length}</span>` : ""}
    <span class="stage"><button data-dmg="-10" data-s="${si}" data-z="${z}" data-i="${i}">−</button>
    <button data-dmg="10" data-s="${si}" data-z="${z}" data-i="${i}">+</button></span></div>`;
}
// 상대 손패를 가릴 자리인가 — 링크 대전/AI전만. 핫싯은 한 폰을 넘겨가며 두니 그대로 보여준다
const veiled = (si) => (ME !== null && si !== ME) || AI === si;
const TOP = () => (ME === null ? 1 : 1 - ME);   // 화면 위 = 상대
const BOT = () => (ME === null ? 0 : ME);

function handHTML(si) {
  const s = G.s[si];
  const inner = veiled(si)
    ? s.hand.map(() => `<div class="slot" style="width:40px"><div class="back" style="font-size:12px">✦</div></div>`).join("")
    : s.hand.map((k, i) => `<div class="slot ${sel && sel.s === si && sel.z === "hand" && sel.i === i ? "sel" : ""}" data-s="${si}" data-z="hand" data-i="${i}"><img class="card" src="${art(k)}"></div>`).join("");
  return `<div class="hand"><div class="zlab">${s.name} 손 ${s.hand.length}장</div><div class="row">${inner}</div></div>`;
}
function matHTML(si, top) {
  const s = G.s[si], L = RULES.prize_label[si === 0 ? "천국" : "지옥"];
  return `<div class="mat${top ? " opp" : ""}">
    ${zone(`덱 ${s.deck.length}`, si, "deck", s.deck.length ? `<div class="back">✦</div>` : "")}
    ${zone(`버림 ${s.discard.length}`, si, "discard", s.discard.length ? `<div class="slot" data-s="${si}" data-z="discard" data-i="0"><img class="card" src="${art(s.discard[0])}"></div>` : "")}
    <div>
      ${zone("배틀", si, "battle", `<div class="row" style="min-height:106px">${fieldHTML(s.battle, si, "battle", 0)}</div>`)}
      ${zone(`벤치 ${s.bench.length}/${RULES.bench_size}`, si, "bench", `<div class="row" style="min-height:106px">${s.bench.map((f, i) => fieldHTML(f, si, "bench", i)).join("")}</div>`)}
    </div>
    ${zone(`${L} ${s.prize.length}`, si, "prize", `<div class="prize">${s.prize.map((_, i) => `<div class="slot" data-s="${si}" data-z="prize" data-i="${i}"><div class="back">${i + 1}</div></div>`).join("")}</div>`)}
  </div>`;
}
function setupHTML() {
  // 나가기는 새로고침이다 — 연결·판 상태를 손으로 되돌리는 코드를 쓸 이유가 없다
  if (ME !== null) return `<b>링크 대전</b> <span class="tag">${conn && conn.open ? "연결됨" : "연결 중…"}</span> <button id="quit">나가기</button>`;
  if (AI !== null) return `<b>AI와 대전</b> <button id="go">다시 시작</button> <button id="quit">나가기</button>`;
  const rows = save.decks.map((d) => `${deckErrors(d).length ? "⚠" : "✔"} ${d.name}`).join(" / ");
  return `${rows}
    <button id="ai">AI와 대전</button>
    <button id="invite">링크로 초대</button>
    <button id="go" ${save.decks.length < 2 ? "disabled" : ""}>둘이서(한 폰)</button>
    <button id="practice">연습 대전</button>
    ${save.decks.length < 2 ? `<span class="tag">한 폰으로 둘이 두려면 덱이 2개 필요하다</span>` : ""}
    <div id="invitebox"></div>`;
}
function renderBattle() {
  $("#battlesetup").innerHTML = setupHTML();
  if ($("#go")) $("#go").onclick = () => (AI !== null ? startAI() : start(0, 1));
  if ($("#ai")) $("#ai").onclick = startAI;
  if ($("#invite")) $("#invite").onclick = invite;
  if ($("#practice")) $("#practice").onclick = startPractice;
  if ($("#quit")) $("#quit").onclick = () => (location.search ? location.assign(location.pathname) : location.reload());
  if (!G) {
    $("#board").innerHTML = `<p class="tag">AI와 두거나, 링크로 친구를 부르거나, 덱 2개로 한 폰에서 둘이 둔다.<br>
      룰은 강제하지 않는다 — 카드를 고르고 "여기로"로 옮긴다. 심판은 rules.md.</p>`;
    return;
  }
  const s = G.s[G.turn], mine = ME === null || G.turn === ME;
  $("#board").innerHTML =
    handHTML(TOP()) + matHTML(TOP(), true) +
    `<div class="mid">
      <b>${G.n}턴 · ${s.name}</b>
      ${G.n === 1 && G.turn === 0 ? `<span class="warn">선공 첫 턴은 공격 불가</span>` : ""}
      <button id="draw" ${mine ? "" : "disabled"}>드로우</button>
      <button id="turn" ${mine ? "" : "disabled"}>턴 넘기기</button>
      <button id="flip">동전 ${G.coin}</button>
      ${zone("스타디움", G.turn, "stadium", G.stadium ? `<div class="slot" data-s="0" data-z="stadium" data-i="0" style="width:72px"><img class="card" src="${art(G.stadium)}"></div>` : "")}
      ${sel ? `<button id="deckbottom">덱 아래로</button><button id="unsel">선택 해제</button>` : ""}
      ${G.log && G.log.length ? `<div class="log">${G.log.join("<br>")}</div>` : ""}
    </div>` +
    handHTML(BOT()) + matHTML(BOT(), false);
  $("#draw").onclick = () => { if (s.deck.length) s.hand.push(s.deck.shift()); else alert(`${s.name}: 뽑을 카드가 없다 → 패배`); renderBattle(); };
  $("#turn").onclick = endTurn;
  $("#flip").onclick = () => { G.coin = Math.random() < 0.5 ? "앞면" : "뒷면"; renderBattle(); };
  if (sel) { $("#unsel").onclick = () => { sel = null; renderBattle(); }; $("#deckbottom").onclick = () => drop("deckbottom", sel.s); }
  netSend();
}
function endTurn() {
  G.turn ^= 1; G.n++; G.log = []; sel = null; renderBattle();
  if (AI === G.turn) setTimeout(aiTurn, 500);
}

/* ───────── AI 상대 ─────────
   룰 엔진이 아니다. 자기 차례에 "말이 되는 수"를 순서대로 둘 뿐이고, 사람 쪽은 여전히 강제하지 않는다.
   ponytail: 기술의 text(추가 효과)는 로그에 적기만 한다 — 해석은 사람이. 전부 자동화하려면 진짜 엔진이 필요하다. */
let AI = null;
const weakOf = (t) => RING[(RING.indexOf(t) + RING.length - 1) % RING.length];   // 나를 이기는 앞 타입
const resistOf = (t) => RING[(RING.indexOf(t) + 1) % RING.length];               // 내가 이기는 뒤 타입
function dealt(atk, def, base) {
  if (!base) return 0;
  let d = base;
  if (weakOf(def) === atk) d *= RULES.weakness_multiplier;
  if (resistOf(def) === atk) d += RULES.resistance;
  return Math.max(0, Math.round(d / 10) * 10);
}
const energyOn = (f) => f.under.filter(isE).map((k) => k.slice(2));
function canPay(f, cost) {
  const pool = energyOn(f);
  for (const [t, n] of Object.entries(cost)) {
    if (t === "무색") continue;
    for (let i = 0; i < n; i++) { const j = pool.indexOf(t); if (j < 0) return false; pool.splice(j, 1); }
  }
  return pool.length >= (cost["무색"] || 0);
}
const fromHand = (s, k) => { const i = s.hand.indexOf(k); return i < 0 ? null : s.hand.splice(i, 1)[0]; };

function aiDeck() {
  // AI는 컬렉션이 없다 — 전체 카드에서 즉석으로 60장을 짠다 (사람은 덱 1개만 있어도 솔로가 된다).
  // 한 타입으로만 짠다: 기술 비용이 전부 "자기 타입 + 무색"이라, 타입을 섞으면 못 쓸 에너지만 쌓인다.
  const t = rnd(RING);
  const d = { name: `AI 상대 (${t})`, cards: {} };
  const basics = shuffle(D.cards.filter((c) => c.kind === "인물" && c.stage === "기본" && c.type === t)).slice(0, 5);
  const names = new Set(basics.map((c) => c.name));
  for (const c of basics) d.cards[c.id] = 4;
  for (let p = 0; p < 2; p++)                             // 1진화 → 2진화 순서가 배열에 없어서 두 번 훑는다
    for (const c of D.cards)
      if (c.kind === "인물" && names.has(c.evolves_from) && !d.cards[c.id] && total(d) < 40) { d.cards[c.id] = 2; names.add(c.name); }
  for (const c of shuffle(D.cards.filter((x) => x.kind === "아이템" || x.kind === "서포터")).slice(0, 2))
    if (total(d) < 44) d.cards[c.id] = 2;
  d.cards[ekey(t)] = RULES.deck_size - total(d);          // 남는 자리는 전부 그 타입 에너지 — 반드시 마지막에
  return d;
}
function startAI() {
  AI = 1; ME = null;
  G = { s: [mkSide(deck()), mkSide(aiDeck())], turn: 0, n: 1, stadium: null, coin: "", log: [] };
  sel = null; renderBattle();
}
function aiTurn() {
  const si = AI, s = G.s[si], o = G.s[1 - si], log = [];
  const basics = () => s.hand.filter((k) => !isE(k) && byId[k].kind === "인물" && byId[k].stage === "기본");

  if (s.deck.length) { s.hand.push(s.deck.shift()); log.push("드로우"); }
  else log.push(`<b class="warn">AI 덱이 비었다 — 사람 승</b>`);

  if (!s.battle) {                                        // 기절 자리는 벤치에서 올린다 (손에서 새로 내는 것보다 먼저 — 에너지가 붙어 있다)
    if (s.bench.length) {
      const i = s.bench.map((f, j) => [byId[f.k].hp - f.dmg, j]).sort((x, y) => y[0] - x[0])[0][1];
      s.battle = s.bench.splice(i, 1)[0];
      log.push(`${nameOf(s.battle.k)} 벤치 → 배틀`);
    } else {
      const k = basics()[0];
      if (k) { fromHand(s, k); s.battle = { k, dmg: 0, under: [] }; log.push(`${nameOf(k)} → 배틀`); }
    }
  }
  while (s.bench.length < 3) {                            // 벤치는 3칸까지만 (상한 5)
    const k = basics()[0]; if (!k) break;
    fromHand(s, k); s.bench.push({ k, dmg: 0, under: [] }); log.push(`${nameOf(k)} → 벤치`);
  }
  for (const f of fieldSlots(s)) {                        // 진화
    const k = s.hand.find((h) => !isE(h) && byId[h].kind === "인물" && byId[h].evolves_from === byId[f.k].name);
    if (k) { fromHand(s, k); f.under.unshift(f.k); f.k = k; log.push(`${nameOf(k)}로 진화`); }
  }
  if (s.battle) {                                         // 에너지는 턴당 1개 (포켓몬 룰 그대로)
    // 배틀이 이미 제일 센 기술을 쓸 수 있으면 벤치를 키운다 — 기절 후 올라올 놈이 맨몸이면 소용없다
    const top = (f) => (byId[f.k].attacks || []).slice().sort((x, y) => (y.damage || 0) - (x.damage || 0))[0];
    const needs = (f) => { const t = top(f); return t && !canPay(f, t.cost); };
    const tgt = needs(s.battle) ? s.battle
      : s.bench.filter(needs).sort((x, y) => energyOn(x).length - energyOn(y).length)[0] || s.battle;
    const want = (byId[tgt.k].attacks || []).flatMap((x) => Object.keys(x.cost)).filter((t) => t !== "무색");
    const anyColorless = (byId[tgt.k].attacks || []).some((x) => x.cost["무색"]);
    const k = s.hand.find((h) => isE(h) && want.includes(h.slice(2))) || (anyColorless ? s.hand.find(isE) : null);
    if (k) { fromHand(s, k); tgt.under.push(k); log.push(`${nameOf(k)} → ${nameOf(tgt.k)}`); }
    else log.push("붙일 에너지가 없다");
  }
  const firstTurn = G.n === 1 && G.turn === 0;            // 선공 첫 턴은 공격 금지
  if (s.battle && o.battle && !firstTurn) {
    const a = (byId[s.battle.k].attacks || []).filter((x) => canPay(s.battle, x.cost))
      .sort((x, y) => (y.damage || 0) - (x.damage || 0))[0];
    if (a) {
      const dmg = dealt(byId[s.battle.k].type, byId[o.battle.k].type, a.damage);
      o.battle.dmg += dmg;
      log.push(`<b>${a.name}</b> → ${dmg} 데미지` + (a.text ? ` <span class="warn">(${a.text} — 직접 적용할 것)</span>` : ""));
      if (o.battle.dmg >= byId[o.battle.k].hp) {          // 기절 → 프라이즈 1장
        o.discard.push(o.battle.k, ...o.battle.under);
        o.battle = null;
        if (s.prize.length) { s.hand.push(s.prize.shift()); log.push(`기절! ${RULES.prize_label["지옥"]} 1장`); }
        if (!s.prize.length) log.push(`<b class="warn">AI가 영혼을 다 가져갔다 — AI 승</b>`);
      }
    } else log.push("에너지가 모자라 공격 못 함");
  } else if (!o.battle) log.push("상대 배틀 자리가 비어 공격 못 함");

  G.turn = 1 - si; G.n++; G.log = log; sel = null; renderBattle();
}

/* ───────── 링크 대전 (WebRTC) ─────────
   Pages는 정적 호스팅이라 서버가 없다. PeerJS 공개 브로커로 신호만 주고받고 이후는 단말끼리 직접.
   ponytail: 상태 전체를 매번 보낸다 — 카드 키 배열이라 작고, 차분·충돌 해소 코드가 통째로 없어진다.
             동시에 움직이면 나중 것이 이긴다. 룰을 강제하지 않는 플레이매트라 그 정도면 된다.
   상대 덱이 덱 순서까지 상대 단말로 넘어간다 — 친구끼리 두는 전제다. */
let ME = null, conn = null, remote = false;
function netSend() { if (conn && conn.open && !remote && G) conn.send({ G }); }
function netRecv(d) {
  if (d.deck) return startNet(deck(), d.deck);            // 호스트: 게스트 덱이 오면 판을 연다
  remote = true; G = d.G; sel = null; renderBattle(); remote = false;
}
function startNet(d0, d1) {
  G = { s: [mkSide(d0), mkSide(d1)], turn: 0, n: 1, stadium: null, coin: "", log: [] };
  sel = null; renderBattle();
}
function invite() {
  if (!window.Peer) return alert("연결 모듈을 못 읽었다. 인터넷 연결을 확인할 것.");
  AI = null;
  const p = new Peer();
  p.on("open", (id) => {
    const url = location.origin + location.pathname + "?join=" + id;
    $("#invitebox").innerHTML = `<div class="tag">이 링크를 보내면 상대가 들어온다 (이 탭을 닫지 말 것)</div>
      <input id="ilink" readonly value="${url}" style="width:100%;padding:6px"><button id="icopy">링크 복사</button>`;
    $("#icopy").onclick = () => { $("#ilink").select(); navigator.clipboard?.writeText(url); $("#icopy").textContent = "복사됨"; };
  });
  p.on("connection", (c) => { conn = c; ME = 0; c.on("data", netRecv); c.on("open", renderBattle); });
  p.on("error", (e) => alert("연결 실패: " + e.type));
}
function join(id) {
  if (!window.Peer) return alert("연결 모듈을 못 읽었다.");
  AI = null;
  const p = new Peer();
  p.on("open", () => {
    conn = p.connect(id); ME = 1;
    conn.on("open", () => { conn.send({ deck: deck() }); renderBattle(); });
    conn.on("data", netRecv);
  });
  p.on("error", (e) => alert("연결 실패: " + e.type));
}

$("#board").addEventListener("click", (e) => {
  const d = e.target.closest("[data-dmg]");
  if (d) { const s = G.s[+d.dataset.s], f = d.dataset.z === "battle" ? s.battle : s.bench[+d.dataset.i];
           f.dmg = Math.max(0, f.dmg + +d.dataset.dmg); return renderBattle(); }
  const b = e.target.closest("[data-drop]");
  if (b) return drop(b.dataset.drop, +b.dataset.s, b.dataset.t === "" ? undefined : +b.dataset.t);
  const c = e.target.closest("[data-z]");
  if (c) { sel = { s: +c.dataset.s, z: c.dataset.z, i: +c.dataset.i }; renderBattle(); }
});


/* ───────── 코치 (첫 실행 안내 + 연습 대전) ─────────
   단계 목록 하나로 둘 다 돌린다. 한 단계는 {tab, at, say, done} — done()이 참이면 저절로 넘어가고,
   설명만 있는 단계는 [다음]으로 넘긴다.
   ponytail: 400ms 폴링으로 단계를 본다. 렌더 경로마다 훅을 박는 것보다 짧고, 한 박자 늦어도 티가 안 난다. */
const COACHED = KEY + ":coached";
let coach = null;

const me = () => G && G.s[0];
const COACH_START = () => [
  { tab: "pack", at: "#buy", say: "<b>팩부터 연다.</b> 카드는 팩에서만 나온다 — 100코인에 10장. [팩 열기]를 눌러보자.",
    done: () => Object.keys(save.owned).length > 0 },
  { tab: "coll", say: "모은 카드는 <b>컬렉션</b>에 쌓인다. 위의 진영·타입·희귀도 버튼으로 걸러 본다. 어둡게 보이는 건 아직 없는 카드다." },
  { tab: "deck", at: "#fill", say: "<b>덱은 정확히 60장.</b> 같은 이름은 4장까지, 에너지는 무제한. [자동 채우기]가 한 번에 짜준다.",
    done: () => deckErrors(deck()).length === 0 },
  { tab: "deck", at: "#decklist", say: "<b>✔ 60장 완성.</b> 아래 카드를 누르면 1장 추가, 목록의 <b>−/+</b>로 빼고 더한다. [새 덱]으로 여러 벌을 둘 수 있다." },
  { tab: "battle", at: "#ai", say: "<b>대전은 셋 중 하나.</b><br>· [AI와 대전] — 혼자<br>· [링크로 초대] — 링크를 보내 친구와<br>· [둘이서(한 폰)] — 한 폰을 넘겨가며 (덱 2개 필요)" },
  { tab: "battle", at: "#practice", say: "조작은 다 같다 — <b>카드를 누르면 선택</b>되고, 옮길 자리의 <b>[여기로]</b>를 누르면 간다.<br>[연습 대전]을 누르면 한 판을 손잡고 같이 둔다." },
];

const COACH_BATTLE = () => [
  { say: "<b>시작했다.</b> 손 7장, 영혼 카드 6장. 아래가 나, 위가 AI다. <b>영혼 카드 6장을 먼저 다 가져오면 이긴다.</b>" },
  { say: "먼저 <b>기본 인물</b>을 세운다. 손에서 인물 카드를 누르고, '배틀' 칸의 <b>[여기로]</b>를 누른다.",
    done: () => me().battle },
  { say: "<b>벤치</b>에도 기본 인물을 놓는다 (최대 5장). 배틀 인물이 기절하면 벤치에서 올라온다 — 비워두면 그대로 진다.",
    done: () => me().bench.length > 0 },
  { say: "<b>에너지</b>를 붙인다. 손의 에너지 카드를 누르고 '배틀' 칸의 [여기로]. <b>턴당 1장만</b> 붙는다.",
    done: () => me().battle && energyOn(me().battle).length > 0 },
  { at: "#turn", say: "<b>[턴 넘기기]</b>를 누르면 AI가 둔다. AI가 뭘 했는지는 가운데 줄에 적힌다.",
    done: () => G.n > 1 && G.turn === 0 },
  { say: "<b>약점 x2 / 저항 −30</b>은 카드에 안 적혀 있다. 상성 링으로 정해진다 —<br><b>바람 → 불 → 땅 → 물 → 빛 → 바람</b>. 화살표 쪽에 강하다." },
  { say: "<b>공격.</b> 이 화면은 룰을 강제하지 않으니 데미지는 직접 올린다 — 상대 배틀 카드 아래 <b>[+]</b>를 데미지만큼 누른다 (한 번에 10).",
    done: () => G.s[1].battle && G.s[1].battle.dmg > 0 },
  { say: "데미지가 <b>HP 이상</b>이면 기절. 기절한 카드를 눌러 '버림'으로 보내고, 내 영혼 카드 1장을 눌러 손으로 가져온다." },
  { say: "끝. 후퇴·특수상태·트레이너는 두면서 익히면 된다. 막히면 위의 <b>?</b> 를 누르면 다시 나온다." },
];

function startCoach(steps) { coach = { steps, i: 0 }; coachShow(); }
function startPractice() {
  if (deckErrors(deck()).length) return alert("먼저 덱을 60장으로 채운다 (덱 탭 → 자동 채우기)");
  startAI(); startCoach(COACH_BATTLE());
}
function coachShow() {
  const box = $("#coach");
  document.body.classList.toggle("coaching", !!coach);
  if (!coach) {
    box.hidden = true;
    document.querySelectorAll(".point").forEach((e) => e.classList.remove("point"));
    return;
  }
  const st = coach.steps[coach.i];
  if (st.tab && !$("#" + st.tab + ":not([hidden])")) showTab(st.tab);
  box.hidden = false;
  box.innerHTML = `<div class="cs">${coach.i + 1}/${coach.steps.length}</div><div class="ct">${st.say}</div>
    <div class="cb"><button id="cnext">${coach.i === coach.steps.length - 1 ? "끝내기" : "다음"}</button>
    <button id="cstop">그만</button></div>`;
  $("#cnext").onclick = coachNext;
  $("#cstop").onclick = coachEnd;
}
function coachNext() { if (coach && ++coach.i >= coach.steps.length) return coachEnd(); coachShow(); }
function coachEnd() { coach = null; localStorage.setItem(COACHED, "1"); coachShow(); }
setInterval(() => {
  if (!coach) return;
  const st = coach.steps[coach.i];
  const e = st.at && $(st.at);                   // 대상이 매 렌더마다 새로 그려지므로 테두리를 다시 붙인다
  if (!e || !e.classList.contains("point")) {
    document.querySelectorAll(".point").forEach((x) => x.classList.remove("point"));
    if (e) e.classList.add("point");
  }
  try { if (st.done && st.done()) coachNext(); } catch { /* 판이 아직 없는 단계는 그냥 기다린다 */ }
}, 400);

/* ───────── 탭 ───────── */
const TABS = { pack: () => renderPack(null), coll: renderColl, deck: renderDeck, battle: renderBattle };
function showTab(name) {
  document.querySelectorAll("nav [data-tab]").forEach((x) => x.classList.toggle("on", x.dataset.tab === name));
  for (const t in TABS) $("#" + t).hidden = t !== name;
  TABS[name]();
}
document.querySelectorAll("nav [data-tab]").forEach((b) => b.onclick = () => showTab(b.dataset.tab));
$("#buy").onclick = openPack;
$("#help").onclick = () => startCoach(COACH_START());
$("#reset").onclick = () => { if (confirm("컬렉션·덱을 전부 지운다. 계속?")) { localStorage.removeItem(KEY); location.reload(); } };

fetch("cards.json").then((r) => r.json()).then((d) => {
  D = d; RING = d.ring; RULES = d.rules; PACK = d.rules.pack;
  d.cards.forEach((c, i) => { c.number = `${String(i + 1).padStart(3, "0")}/${String(d.cards.length).padStart(3, "0")}`; byId[c.id] = c; });
  if (!localStorage.getItem(KEY)) { save.coins = RULES.start_coins; persist(); }
  if (location.search.includes("selftest")) return selftest();
  const j = new URLSearchParams(location.search).get("join");
  if (j) { showTab("battle"); join(j); return; }
  renderPack(null);
  if (!localStorage.getItem(COACHED)) startCoach(COACH_START());
}).catch(() => { document.body.innerHTML = `<p style="padding:20px">cards.json을 못 읽었다. 파일을 직접 열면(file://) 막힌다 — 프로젝트 폴더에서 <code>python3 -m http.server 8000</code> 을 띄우고 <code>localhost:8000</code> 으로 열 것.</p>`; });

/* localhost:8000/?selftest — 팩·코인·덱 상한만 확인한다. 프레임워크 없음. */
function selftest() {
  const ok = (c, m) => { if (!c) throw new Error(m); };
  const snap = JSON.stringify(save);
  save = { coins: RULES.start_coins, owned: {}, decks: [{ name: "t", cards: {} }], active: 0 };

  let drawn = 0, spent = 0;
  for (let i = 0; i < 20; i++) {
    const before = save.coins; openPack();
    const pulled = Object.values(save.owned).reduce((a, b) => a + b, 0) - drawn;
    ok(pulled === PACK.size, `팩이 ${PACK.size}장이 아니다: ${pulled}`);
    drawn += pulled; spent += before - save.coins;
  }
  // 쓴 코인 = 팩값 - 중복 환급. 중복 수는 뽑은 장수 - 종 수
  const dupes = drawn - Object.keys(save.owned).length;
  ok(spent === 20 * PACK.price - dupes * PACK.dupe_refund, `코인 정산이 안 맞는다: ${spent}, 중복 ${dupes}`);
  for (const r of Object.values(RAR)) ok(D.cards.some((c) => c.rarity === r && save.owned[c.id]), `${r} 카드가 한 장도 안 나왔다`);

  autofill();
  const d = deck();
  ok(total(d) === RULES.deck_size, `자동 채우기가 ${total(d)}장`);
  for (const [k, n] of Object.entries(d.cards)) ok(n <= limit(k), `${nameOf(k)} ${n}장 > 상한 ${limit(k)}`);
  ok(Object.keys(d.cards).filter((k) => !isE(k)).length > RING.length, "에너지가 덱을 다 먹었다");
  ok(deckErrors(d).length === 0, "완성된 덱인데 경고가 남는다: " + deckErrors(d));
  add(Object.keys(d.cards)[0], 1);
  ok(total(d) === RULES.deck_size, "60장을 넘겨서 들어갔다");
  const ecount = Object.entries(d.cards).filter(([k]) => isE(k)).reduce((s, [, n]) => s + n, 0);
  ok(ecount >= 10, `자동 채우기 덱에 에너지가 ${ecount}장 — 공격을 못 한다`);

  // 약점/저항은 ring에서 계산한다 (카드에 안 적혀 있다)
  const [t0, t1] = [RING[0], RING[1]];                        // ring: t0 → t1, 앞이 뒤를 이긴다
  ok(dealt(t0, t1, 50) === 50 * RULES.weakness_multiplier, "약점 x2가 안 먹었다");
  ok(dealt(t1, t0, 50) === 50 + RULES.resistance, "저항 -30이 안 먹었다");
  ok(dealt(t0, RING[2], 50) === 50, "상성 없는데 수치가 변했다");
  ok(dealt(t1, t0, 20) === 0, "저항으로 음수가 나왔다");

  const f = { k: null, dmg: 0, under: [ekey(t0), ekey(t0), ekey(t1)] };
  ok(canPay(f, { [t0]: 2, 무색: 1 }), "낼 수 있는 비용을 못 낸다고 한다");
  ok(!canPay(f, { [t0]: 3 }), "없는 에너지로 비용을 치렀다");
  ok(!canPay(f, { [t0]: 2, 무색: 2 }), "무색 비용을 덜 내고 통과했다");

  const ad = aiDeck();
  ok(total(ad) === RULES.deck_size, `AI 덱이 ${total(ad)}장`);
  ok(deckErrors(ad).length === 0, "AI 덱이 불법이다: " + deckErrors(ad));
  ok(Object.keys(ad.cards).filter(isE).length === 1, "AI 덱 에너지가 한 타입이 아니다");

  // AI끼리 끝까지 둬 본다 — 멈추지 않거나 승부가 안 나면 솔로 플레이가 성립하지 않는다
  const Gsnap = G, AIsnap = AI;
  let wins = 0;
  for (let g = 0; g < 10; g++) {
    AI = 1; ME = null;
    G = { s: [mkSide(aiDeck()), mkSide(aiDeck())], turn: 0, n: 1, stadium: null, coin: "", log: [] };
    let t = 0;
    while (G.s[0].prize.length && G.s[1].prize.length && t++ < 80) { AI = 0; G.turn = 0; aiTurn(); AI = 1; G.turn = 1; aiTurn(); }
    if (!G.s[0].prize.length || !G.s[1].prize.length) wins++;
  }
  ok(wins >= 8, `AI 대전 10판 중 ${wins}판만 승부가 났다`);
  G = Gsnap; AI = AIsnap;

  save = JSON.parse(snap); persist();
  document.body.innerHTML = `<p style="padding:24px;color:#7fc98a">✔ selftest 통과 — 팩 20개 ${drawn}장(중복 ${dupes}), 덱 ${RULES.deck_size}장 상한, 상성·비용·AI 대전 ${wins}/10 확인</p>`;
}
