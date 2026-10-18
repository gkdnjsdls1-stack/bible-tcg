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
  // 인물·트레이너를 먼저 채우고 남는 자리를 에너지로 메운다 (에너지는 무제한이라 먼저 돌리면 덱을 다 먹는다)
  for (const k of [...shuffle(Object.keys(save.owned)), ...shuffle(RING.map(ekey))])
    while (total(d) < RULES.deck_size && (d.cards[k] || 0) < limit(k)) d.cards[k] = (d.cards[k] || 0) + 1;
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
  const deck = shuffle(expand(d));
  return { name: d.name, deck, hand: deck.splice(0, 7), prize: deck.splice(0, RULES.prize_count), bench: [], battle: null, discard: [] };
}
function start(i, j) {
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
function handHTML(si) {
  const s = G.s[si];
  return `<div class="hand"><div class="zlab">${s.name} 손 ${s.hand.length}장</div><div class="row">` +
    s.hand.map((k, i) => `<div class="slot ${sel && sel.s === si && sel.z === "hand" && sel.i === i ? "sel" : ""}" data-s="${si}" data-z="hand" data-i="${i}"><img class="card" src="${art(k)}"></div>`).join("") +
    `</div></div>`;
}
function matHTML(si) {
  const s = G.s[si], L = RULES.prize_label[si === 0 ? "천국" : "지옥"];
  return `<div class="mat">
    ${zone(`덱 ${s.deck.length}`, si, "deck", s.deck.length ? `<div class="back">✦</div>` : "")}
    ${zone(`버림 ${s.discard.length}`, si, "discard", s.discard.length ? `<div class="slot" data-s="${si}" data-z="discard" data-i="0"><img class="card" src="${art(s.discard[0])}"></div>` : "")}
    <div>
      ${zone("배틀", si, "battle", `<div class="row" style="min-height:106px">${fieldHTML(s.battle, si, "battle", 0)}</div>`)}
      ${zone(`벤치 ${s.bench.length}/${RULES.bench_size}`, si, "bench", `<div class="row" style="min-height:106px">${s.bench.map((f, i) => fieldHTML(f, si, "bench", i)).join("")}</div>`)}
    </div>
    ${zone(`${L} ${s.prize.length}`, si, "prize", `<div class="prize">${s.prize.map((_, i) => `<div class="slot" data-s="${si}" data-z="prize" data-i="${i}"><div class="back">${i + 1}</div></div>`).join("")}</div>`)}
  </div>`;
}
function renderBattle() {
  $("#battlesetup").innerHTML = save.decks.map((d, i) => `${deckErrors(d).length ? "⚠" : "✔"} ${d.name}`).join(" / ") +
    ` <button id="go">${G ? "다시 시작" : "시작"}</button>` +
    (save.decks.length < 2 ? ` <span class="warn">덱이 2개 있어야 대전을 시작한다 (덱 탭에서 "새 덱")</span>` : "");
  $("#go").onclick = () => start(0, 1);
  if (!G) { $("#board").innerHTML = `<p class="tag">덱 2개를 만들고 시작을 누른다. 룰은 강제하지 않는다 — 카드를 고르고 "여기로"로 옮긴다. 심판은 rules.md.</p>`; return; }
  const s = G.s[G.turn];
  $("#board").innerHTML =
    matHTML(1) + handHTML(1) +
    `<div class="mid">
      <b>${G.n}턴 · ${s.name}</b>
      ${G.n === 1 && G.turn === 0 ? `<span class="warn">선공 첫 턴은 공격 불가</span>` : ""}
      <button id="draw">드로우</button><button id="turn">턴 넘기기</button>
      <button id="flip">동전 ${G.coin}</button>
      ${zone("스타디움", G.turn, "stadium", G.stadium ? `<div class="slot" data-s="0" data-z="stadium" data-i="0" style="width:72px"><img class="card" src="${art(G.stadium)}"></div>` : "")}
      ${sel ? `<button id="deckbottom">덱 아래로</button><button id="unsel">선택 해제</button>` : ""}
    </div>` +
    handHTML(0) + matHTML(0);
  $("#draw").onclick = () => { if (s.deck.length) s.hand.push(s.deck.shift()); else alert(`${s.name}: 뽑을 카드가 없다 → 패배`); renderBattle(); };
  $("#turn").onclick = () => { G.turn ^= 1; G.n++; sel = null; renderBattle(); };
  $("#flip").onclick = () => { G.coin = Math.random() < 0.5 ? "앞면" : "뒷면"; renderBattle(); };
  if (sel) { $("#unsel").onclick = () => { sel = null; renderBattle(); }; $("#deckbottom").onclick = () => drop("deckbottom", sel.s); }
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

/* ───────── 탭 ───────── */
const TABS = { pack: () => renderPack(null), coll: renderColl, deck: renderDeck, battle: renderBattle };
document.querySelectorAll("nav [data-tab]").forEach((b) => b.onclick = () => {
  document.querySelectorAll("nav [data-tab]").forEach((x) => x.classList.toggle("on", x === b));
  for (const t in TABS) $("#" + t).hidden = t !== b.dataset.tab;
  TABS[b.dataset.tab]();
});
$("#buy").onclick = openPack;
$("#reset").onclick = () => { if (confirm("컬렉션·덱을 전부 지운다. 계속?")) { localStorage.removeItem(KEY); location.reload(); } };

fetch("cards.json").then((r) => r.json()).then((d) => {
  D = d; RING = d.ring; RULES = d.rules; PACK = d.rules.pack;
  d.cards.forEach((c, i) => { c.number = `${String(i + 1).padStart(3, "0")}/${String(d.cards.length).padStart(3, "0")}`; byId[c.id] = c; });
  if (!localStorage.getItem(KEY)) { save.coins = RULES.start_coins; persist(); }
  if (location.search.includes("selftest")) return selftest();
  renderPack(null);
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

  save = JSON.parse(snap); persist();
  document.body.innerHTML = `<p style="padding:24px;color:#7fc98a">✔ selftest 통과 — 팩 20개 ${drawn}장(중복 ${dupes}), 덱 ${RULES.deck_size}장 상한 확인</p>`;
}
