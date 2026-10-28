// Base dos chefões lendários: criaturas desenhadas em vetor (curvas e rotações, para animar de verdade) e transformadas em pixel art
// a cada quadro (borda recortada, cores em poucos tons e contorno escuro). Também traz a agenda de ataques que todos usam.
export const TAU = Math.PI * 2;
export const normAng = (a) => Math.atan2(Math.sin(a), Math.cos(a));
export const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
export const dirPara = (c, S) => Math.atan2(S.ny - c.y, S.nx - c.x);
export const aleatorio = (a, b) => a + Math.random() * (b - a);
export const limitar = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------- pincéis ----------
export const poli = (x, pts, cor) => { x.fillStyle = cor; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); x.fill(); };
export const disco = (x, cx, cy, r, cor) => { x.fillStyle = cor; x.beginPath(); x.arc(cx, cy, Math.max(0.1, r), 0, TAU); x.fill(); };
export const elip = (x, cx, cy, rx, ry, cor, rot = 0) => { x.fillStyle = cor; x.beginPath(); x.ellipse(cx, cy, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, TAU); x.fill(); };
export const traco = (x, pts, larg, cor) => { x.strokeStyle = cor; x.lineWidth = larg; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.stroke(); };
export const girar = (x, ang, fn) => { x.save(); x.rotate(ang); fn(); x.restore(); };

// ---------- vetor → pixel art ----------
function pixelizar(cv, contorno) {
  const x = cv.getContext('2d'), w = cv.width, h = cv.height, img = x.getImageData(0, 0, w, h), d = img.data;
  const cheio = new Uint8Array(w * h);
  for (let p = 0, i = 0; p < w * h; p++, i += 4) {
    if (d[i + 3] > 100) { cheio[p] = 1; d[i + 3] = 255; d[i] = Math.min(255, Math.round(d[i] / 34) * 34); d[i + 1] = Math.min(255, Math.round(d[i + 1] / 34) * 34); d[i + 2] = Math.min(255, Math.round(d[i + 2] / 34) * 34); } else d[i + 3] = 0;
  }
  const cr = parseInt(contorno.slice(1, 3), 16), cg = parseInt(contorno.slice(3, 5), 16), cb = parseInt(contorno.slice(5, 7), 16);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const p = j * w + i;
    if (cheio[p]) continue;
    if ((i > 0 && cheio[p - 1]) || (i < w - 1 && cheio[p + 1]) || (j > 0 && cheio[p - w]) || (j < h - 1 && cheio[p + w])) { const q = p * 4; d[q] = cr; d[q + 1] = cg; d[q + 2] = cb; d[q + 3] = 255; }
  }
  x.putImageData(img, 0, 0);
}

const telas = new Map();
// desenha a criatura (lenda.desenhar em coordenadas locais, origem no centro) e devolve o canvas já em pixel art
export function renderizar(lenda, c, t, branco = false) {
  const [W, H] = lenda.tela;
  let cv = telas.get(lenda.id);
  if (!cv) { cv = document.createElement('canvas'); cv.width = W; cv.height = H; telas.set(lenda.id, cv); }
  const x = cv.getContext('2d', { willReadFrequently: true });
  x.setTransform(1, 0, 0, 1, 0, 0); x.clearRect(0, 0, W, H);
  x.save(); x.translate(W / 2, H / 2);
  if (lenda.escala) x.scale(lenda.escala, lenda.escala);
  if (lenda.gira) x.rotate(c.ang || 0);
  lenda.desenhar(x, c, t);
  x.restore();
  if (branco) { x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(255,255,255,0.85)'; x.fillRect(0, 0, W, H); x.globalCompositeOperation = 'source-over'; }
  pixelizar(cv, lenda.contorno || '#0b1026');
  return cv;
}

// imagem para o bestiário: a criatura de verdade, ou só a silhueta se ainda não foi descoberta
export function retrato(lenda, descoberto) {
  const c = { x: 0, y: 0, ang: lenda.angRetrato ?? -0.5, hp: 1, hpMax: 1, piscar: 0, tl: 0, sumido: 0, boca: 0, asa: 0.6, ...(lenda.estadoRetrato || {}) };
  const origem = renderizar(lenda, c, 1.3), cv = document.createElement('canvas');
  cv.width = origem.width; cv.height = origem.height;
  const x = cv.getContext('2d');
  x.drawImage(origem, 0, 0);
  if (!descoberto) { x.globalCompositeOperation = 'source-in'; x.fillStyle = '#1a1c34'; x.fillRect(0, 0, cv.width, cv.height); }
  return cv;
}

// ---------- agenda de ataques ----------
// ctx: ferramentas do arcade (tiro, campo, onda, particulas, texto, bip, tremor, flash, ferir, puxar, invocar, S, L, A)
export function atualizarLenda(c, dt, ctx) {
  const lenda = c.lenda;
  c.tl = (c.tl || 0) + dt;
  c.sumido = Math.max(0, c.sumido - dt);
  c.piscar = Math.max(0, (c.piscar || 0) - dt);
  if (c.entrada > 0) { c.entrada -= dt; lenda.mover(c, dt, ctx, true); if (c.entrada <= 0) { c.sumido = 0; c.cd = 1.2; } return; }
  if (!c.enfurecido && !c.ovo && c.hp < c.hpMax * 0.5) {
    c.enfurecido = true;
    ctx.texto(c.x, c.y - 32, 'ENFURECIDO!', '#ff3b4a'); ctx.tremor(0.6); ctx.flash(0.25);
    ctx.onda(c.x, c.y, 90, '#ff3b4a', 170);
    ctx.bip(80, 0.5, 'sawtooth', 0.07); ctx.bip(55, 0.7, 'sawtooth', 0.07, 0.25);
    lenda.enfurecer?.(c, ctx);
  }
  lenda.mover(c, dt, ctx, false);
  lenda.passivo?.(c, dt, ctx);
  if (c.ovo) return;
  if (c.acao) {
    const a = lenda.ataques[c.acao.nome];
    c.acao.t += dt;
    a.tick?.(c, dt, ctx, c.acao);
    if (c.acao.t >= a.dur) { a.fim?.(c, ctx, c.acao); c.acao = null; c.parado = false; c.cd = (a.descanso ?? 1.5) * (c.enfurecido ? 0.6 : 1) * (1 - Math.min(0.3, ctx.S.t / 1500)); }
    return;
  }
  c.cd -= dt;
  if (c.cd > 0) return;
  const lista = Object.entries(lenda.ataques).filter(([nome, a]) => (!a.fase2 || c.enfurecido) && nome !== c.ultimo && (!a.permite || a.permite(c, ctx)));
  if (!lista.length) { c.cd = 0.5; return; }
  let r = Math.random() * lista.reduce((s, [, a]) => s + (a.peso || 1) * (c.enfurecido && a.fase2 ? 1.4 : 1), 0);
  let escolhido = lista[0][0];
  for (const [nome, a] of lista) { r -= (a.peso || 1) * (c.enfurecido && a.fase2 ? 1.4 : 1); if (r <= 0) { escolhido = nome; break; } }
  c.ultimo = escolhido;
  c.acao = { nome: escolhido, t: 0, acc: 0, dir: dirPara(c, ctx.S) };
  lenda.ataques[escolhido].iniciar?.(c, ctx, c.acao);
}

// movimento padrão: aproxima, mantém distância ideal e rodeia a nave (sentido troca de tempos em tempos)
export function rodear(c, dt, ctx, { ideal = 88, vel = 40, banda = 24, tang = 0.6, entrando = false } = {}) {
  const S = ctx.S, dx = S.nx - c.x, dy = S.ny - c.y, alvo = Math.atan2(dy, dx), d = Math.hypot(dx, dy / 0.62) || 1; // a tela é larga: a distância vertical conta mais, e a criatura fica à vista
  c.sentido ??= Math.random() < 0.5 ? -1 : 1;
  c.tSentido = (c.tSentido || 0) - dt; if (c.tSentido <= 0) { c.sentido *= -1; c.tSentido = aleatorio(3, 6); }
  const rad = limitar((d - ideal) / banda, -1, 1), v = entrando ? vel * 2.3 : vel;
  c.x += (Math.cos(alvo) * rad + Math.cos(alvo + Math.PI / 2) * tang * c.sentido) * v * dt;
  c.y += (Math.sin(alvo) * rad + Math.sin(alvo + Math.PI / 2) * tang * c.sentido) * v * dt;
  return { d, alvo };
}
