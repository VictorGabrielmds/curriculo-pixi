// Temas de monstros do jogo de nave: cada tema troca TODOS os bichos e o chefão (não só as cores).
// Alguns são homenagens a clássicos: fliperama (invasores), guerra nas estrelas, homens de preto e alien x predador
// (desenhos próprios em pixel art, só inspirados nas silhuetas e ideias).
import { novoSprite, silhuetaBranca } from './pixelArt.js';
import { criarMonstros, criarChefe, criarAlien } from './arcadeSprites.js';

const C = '#0b1026';
const com = (q) => ({ quadros: q, brancos: q.map(silhuetaBranca) });
const dois = (w, h, fn) => com([0, 1].map((f) => { const s = novoSprite(w, h); fn(s, f); return s.contorno(C).c; }));
const ascii = (s, linhas, pal, esc = 1, ox = 0, oy = 0) => linhas.forEach((l, y) => [...l].forEach((ch, x) => { const c = pal[ch]; if (c) s.retangulo(ox + x * esc, oy + y * esc, esc, esc, c); }));
const asciiDois = (w, h, A, B, pal, esc = 1, ox = 0, oy = 0) => dois(w, h, (s, f) => ascii(s, f ? B : A, pal, esc, ox, oy));
const esp = (pts, W) => pts.map(([x, y]) => [W - 1 - x, y]);
const pernas = (s, lista, f, cor) => lista.forEach(([x0, y0, x1, y1], i) => s.linha(x0, y0, x1 + ((i + f) % 2 ? 1 : 0), y1, cor));

// ---------- 1. INVASORES: naves e bichos quadradões de fliperama ----------
const CRAB_A = ['..x.....x..', '...x...x...', '..xxxxxxx..', '.xxyxxxyxx.', 'xxxxxxxxxxx', 'x.xxxxxxx.x', 'x.x.....x.x', '...xx.xx...'];
const CRAB_B = ['..x.....x..', 'x..x...x..x', 'x.xxxxxxx.x', 'xxxyxxxyxxx', 'xxxxxxxxxxx', '.xxxxxxxxx.', '..x.....x..', '.x.......x.'];
function invasores() {
  const pal = (x) => ({ x, y: '#ffffff' });
  const slime = asciiDois(16, 12, CRAB_A, CRAB_B, pal('#5be37a'), 1, 2, 2);
  const morcego = asciiDois(18, 12, ['...xx...', '..xxxx..', '.xxxxxx.', 'xx.xx.xx', 'xxxxxxxx', '..x..x..', '.x.xx.x.', 'x.x..x.x'], ['...xx...', '..xxxx..', '.xxxxxx.', 'xx.xx.xx', 'xxxxxxxx', '.x.xx.x.', 'x......x', '.x....x.'], pal('#5bd6ff'), 1, 5, 2);
  const ogro = asciiDois(20, 12, ['.....rrrrrr.....', '...rrrrrrrrrr...', '..rrrrrrrrrrrr..', '.rryrryrryrryrr.', 'rrrrrrrrrrrrrrrr', '..rrr..rr..rrr..', '...r........r...'], ['.....rrrrrr.....', '...rrrrrrrrrr...', '..rrrrrrrrrrrr..', '.ryrryrryrryrrr.', 'rrrrrrrrrrrrrrrr', '..rrr..rr..rrr..', '...r........r...'], { r: '#ff4a4a', y: '#ffe14a' }, 1, 2, 2);
  const fantasma = asciiDois(16, 12, ['....xxxx....', '.xxxxxxxxxx.', 'xxxxxxxxxxxx', 'xxx..xx..xxx', 'xxxxxxxxxxxx', '...xx..xx...', '..xx.xx.xx..', 'xx........xx'], ['....xxxx....', '.xxxxxxxxxx.', 'xxxxxxxxxxxx', 'xxx..xx..xxx', 'xxxxxxxxxxxx', '..xxx..xxx..', '.xx..xx..xx.', '..xx....xx..'], pal('#ff6bd0'), 1, 2, 2);
  const atirador = asciiDois(16, 12, ['.......y.......', '......xxx......', '......xxx......', '.xxxxxxxxxxxxx.', 'xxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxx'], ['.......r.......', '......xxx......', '......xxx......', '.xxxxxxxxxxxxx.', 'xxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxx'], { x: '#ff9a3a', y: '#ffe14a', r: '#ff3b4a' }, 1, 0, 2);
  const inseto = asciiDois(12, 8, ['.x...x.', '..xxx..', '.xx.xx.', 'xxxxxxx', 'x.x.x.x'], ['.x...x.', '..xxx..', '.xx.xx.', 'xxxxxxx', '.x...x.'], pal('#ffe14a'), 1, 2, 1);
  const chefe = asciiDois(56, 38, CRAB_A, CRAB_B, { x: '#d6293e', y: '#ffe14a' }, 4, 6, 3);
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

// ---------- 2. BICHARADA: caracóis, mariposas, besouros, vespas, escorpiões e moscas espaciais ----------
function bicharada() {
  const slime = asciiDois(16, 8,
    ['......ssss......', '.....sSSSSs.....', '....sSssssSs..e.', '....sSsSSsSs..b.', '.k..sSssssSs.bb.', '.bbbsSSSSSSsbbb.', 'bbbbbbbbbbbbbbb.', '.bbbbbbbbbbbb...'],
    ['......ssss......', '.....sSSSSs.....', '....sSssssSs.e..', '....sSsSSsSs.b..', '.k..sSssssSs.bb.', '.bbbsSSSSSSsbbb.', 'bbbbbbbbbbbbbbb.', '..bbbbbbbbbbb...'],
    { s: '#b3601a', S: '#ffb84a', b: '#7acb5a', e: '#ff3b4a', k: '#1b1020' }, 1, 0, 4);
  const morcego = dois(18, 14, (s, f) => {
    const asa = f ? [[9, 8], [1, 12], [2, 6]] : [[9, 6], [1, 1], [3, 8]], asa2 = f ? [[9, 8], [3, 13], [6, 9]] : [[9, 7], [4, 4], [6, 9]];
    s.poligono(asa, '#a56bff'); s.poligono(esp(asa, 18), '#a56bff'); s.poligono(asa2, '#d1b0ff'); s.poligono(esp(asa2, 18), '#d1b0ff');
    s.disco(f ? 4 : 3, f ? 10 : 4, 1, '#ffe14a'); s.disco(f ? 13 : 14, f ? 10 : 4, 1, '#ffe14a');
    s.elipse(9, 8, 1.6, 4.5, '#2a1a3a'); s.pixel(8, 3, '#2a1a3a'); s.pixel(10, 3, '#2a1a3a'); s.pixel(8, 4, '#ff3b4a'); s.pixel(10, 4, '#ff3b4a');
  });
  const ogro = dois(20, 18, (s, f) => {
    s.elipse(10, 11, 8, 6.5, '#2a6a4a'); s.elipse(8, 9, 5, 3, '#4ab87a'); s.linha(10, 5, 10, 17, '#14301f');
    s.disco(10, 5, 3, '#1b2a2a'); s.poligono([[9, 3], [10, 0], [11, 3]], '#e8e0c0'); s.pixel(8, 5, '#ff3b4a'); s.pixel(12, 5, '#ff3b4a');
    for (const k of [0, 1, 2]) { const y = 8 + k * 3; s.linha(3, y, 1, y + 1 + (f ? 2 : 0), '#1b2a2a'); s.linha(17, y, 19, y + 1 + (f ? 0 : 2), '#1b2a2a'); }
  });
  const fantasma = dois(14, 17, (s, f) => {
    const y = f ? 1 : 0;
    s.elipse(3, 6 + y, 3, 1.6, '#bfe6ff'); s.elipse(10, 6 + y, 3, 1.6, '#bfe6ff');
    s.elipse(7, 12, 3, 4, '#ffd23f'); s.retangulo(4, 10, 7, 1, '#1b1020'); s.retangulo(4, 13, 7, 1, '#1b1020'); s.retangulo(7, 15, 1, 2, '#cfd6e0');
    s.disco(7, 6, 3, '#1b1020'); s.disco(7, 3, 2, '#ffd23f'); s.pixel(6, 3, '#ff3b4a'); s.pixel(8, 3, '#ff3b4a');
  });
  const atirador = dois(16, 17, (s, f) => {
    s.elipse(8, 12, 4, 3, '#c9771a'); s.elipse(8, 11, 3, 2, '#e0933a');
    s.linha(8, 9, 11, 6, '#c9771a'); s.linha(11, 6, 10, 3, '#c9771a'); s.linha(10, 3, 9, 2, '#c9771a'); s.pixel(9, 1, f ? '#ff3b4a' : '#ffd23f'); s.pixel(10, 2, f ? '#ff3b4a' : '#ffd23f');
    s.disco(3, 8, 2, '#e0933a'); s.disco(13, 8, 2, '#e0933a'); s.pixel(3, 7, C); s.pixel(13, 7, C);
    pernas(s, [[5, 13, 2, 16], [6, 14, 4, 16], [10, 14, 12, 16], [11, 13, 14, 16]], f, '#8a4a10'); s.pixel(7, 10, '#ff3b4a'); s.pixel(9, 10, '#ff3b4a');
  });
  const inseto = dois(12, 10, (s, f) => {
    s.disco(6, 6, 2, '#2a3a2a'); s.disco(6, 3, 2, '#3a5a3a'); s.pixel(5, 3, '#ff3b4a'); s.pixel(7, 3, '#ff3b4a');
    const y = f ? 4 : 1; s.elipse(2.5, y + 1, 2.5, 1.3, '#bfe6ff'); s.elipse(9.5, y + 1, 2.5, 1.3, '#bfe6ff'); s.pixel(5, 8, '#1b2a1a'); s.pixel(7, 8, '#1b2a1a');
  });
  const chefe = dois(56, 38, (s, f) => {
    for (const k of [0, 1, 2]) { const y = 20 + k * 6; s.linha(10, y, 2, y + 6 + (f ? 3 : 0), '#1b2a2a'); s.linha(46, y, 54, y + 6 + (f ? 0 : 3), '#1b2a2a'); s.linha(11, y + 1, 3, y + 7 + (f ? 3 : 0), '#1b2a2a'); s.linha(45, y + 1, 53, y + 7 + (f ? 0 : 3), '#1b2a2a'); }
    s.elipse(28, 22, 22, 14, '#2a6a4a'); s.elipse(22, 17, 13, 7, '#4ab87a'); s.linha(28, 10, 28, 36, '#14301f');
    s.disco(28, 8, 8, '#1b2a2a'); s.poligono([[24, 5], [20, 0], [27, 3]], '#e8e0c0'); s.poligono([[32, 5], [36, 0], [29, 3]], '#e8e0c0');
    s.disco(25, 8, 2, '#ff3b4a'); s.disco(31, 8, 2, '#ff3b4a'); s.pixel(25, 8, '#ffffff'); s.pixel(31, 8, '#ffffff');
    s.poligono([[24, 13], [26, 17], [28, 13]], '#e8e0c0'); s.poligono([[28, 13], [30, 17], [32, 13]], '#e8e0c0');
    s.retangulo(10, 33, 6, 3, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(40, 33, 6, 3, f ? '#ffd23f' : '#ff7a3a');
  });
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

// ---------- 3. GALÁXIA: droides, caças e andadores de uma guerra nas estrelas ----------
function galaxia() {
  const slime = dois(16, 16, (s, f) => {
    const y = f ? 0 : 1;
    s.disco(8, 10 + y, 6, '#f4efe0'); s.disco(8, 10 + y, 4, '#ff9a3a'); s.disco(8, 10 + y, 2, '#f4efe0'); s.pixel(4, 8 + y, '#ff9a3a');
    s.disco(9, 3 + y, 3, '#f4efe0'); s.pixel(10, 3 + y, '#1b1020'); s.pixel(10, 4 + y, '#1b1020'); s.retangulo(7, 2 + y, 4, 1, '#8b93a8'); s.linha(8, 0 + y, 8, 1 + y, '#8b93a8');
  });
  const morcego = dois(18, 16, (s, f) => {
    const d = f ? 5 : 2;
    s.poligono([[9, 0], [11, 5], [10, 14], [8, 14], [7, 5]], '#e8e8ef'); s.poligono([[9, 0], [10, 3], [8, 3]], '#ff3b4a'); s.pixel(9, 6, '#8bd3ff');
    s.poligono([[7, 5], [1, 5 - d / 2], [1, 7 - d / 2], [7, 8]], '#c9cdd8'); s.poligono([[11, 5], [17, 5 - d / 2], [17, 7 - d / 2], [11, 8]], '#c9cdd8');
    s.poligono([[7, 9], [1, 9 + d / 2], [1, 11 + d / 2], [7, 12]], '#c9cdd8'); s.poligono([[11, 9], [17, 9 + d / 2], [17, 11 + d / 2], [11, 12]], '#c9cdd8');
    for (const [x, y] of [[1, 5 - d / 2], [16, 5 - d / 2], [1, 10 + d / 2], [16, 10 + d / 2]]) s.pixel(x, Math.round(y), '#ff3b4a');
  });
  const ogro = dois(20, 20, (s, f) => {
    s.retangulo(5, 4, 12, 6, '#c9cdd8'); s.retangulo(5, 8, 12, 2, '#8b93a8'); s.retangulo(7, 2, 8, 2, '#aab3c8');
    s.poligono([[1, 5], [6, 3], [6, 9], [2, 9]], '#aab3c8'); s.pixel(2, 7, '#ff3b4a'); s.retangulo(0, 8, 3, 1, '#5a6176');
    for (const x of [7, 14]) { const d = f ? 1 : -1; s.retangulo(x, 10, 2, 5, '#aab3c8'); s.retangulo(x + d, 15, 2, 4, '#8b93a8'); s.retangulo(x + d - 1, 19, 4, 1, '#5a6176'); }
    s.retangulo(9, 6, 5, 1, '#5a6176');
  });
  const fantasma = dois(14, 17, (s, f) => {
    const x = f ? 1 : 0;
    s.disco(7 + x, 6, 5, '#f4f4fa'); s.poligono([[3 + x, 5], [6 + x, 5], [5 + x, 8], [3 + x, 7]], '#1b1020'); s.poligono([[11 + x, 5], [8 + x, 5], [9 + x, 8], [11 + x, 7]], '#1b1020');
    s.retangulo(6 + x, 9, 2, 2, '#1b1020'); s.retangulo(3, 12, 8 + 0, 5, '#f4f4fa'); s.retangulo(3, 12, 8, 1, '#c9cdd8'); s.retangulo(6, 13, 2, 2, '#1b1020');
  });
  const atirador = dois(16, 17, (s, f) => {
    s.retangulo(2, 9, 2, 5, '#8b93a8'); s.retangulo(12, 9, 2, 5, '#8b93a8'); s.retangulo(2, 14, 2, 2 + f, '#ffd23f'); s.retangulo(12, 14, 2, 2 + f, '#ffd23f');
    s.disco(8, 5, 4, '#3a8a5a'); s.retangulo(5, 4, 6, 1, '#1b1020'); s.retangulo(7, 4, 2, 4, '#1b1020');
    s.retangulo(4, 9, 8, 6, '#3a8a5a'); s.retangulo(4, 12, 8, 1, '#2a6a4a'); s.retangulo(12, 10, 4, 2, '#5a6176'); s.pixel(15, 10, f ? '#ff3b4a' : '#ffd23f');
  });
  const inseto = dois(12, 11, (s, f) => {
    s.retangulo(0, 0, 2, 11, '#8b93a8'); s.retangulo(10, 0, 2, 11, '#8b93a8'); s.retangulo(0, 5, 2, 1, '#5a6176'); s.retangulo(10, 5, 2, 1, '#5a6176');
    s.retangulo(2, 5, 8, 1, '#5a6176'); s.disco(6, 5, 2, '#5a6176'); s.pixel(6, 5, f ? '#8bd3ff' : '#ffffff');
  });
  const chefe = dois(56, 38, (s, f) => {
    s.disco(28, 19, 18, '#8b93a8'); s.disco(27, 18, 16, '#aab3c8');
    s.retangulo(10, 19, 36, 2, '#5a6176'); for (let x = 12; x < 44; x += 4) s.pixel(x, 22, '#5a6176'), s.pixel(x + 2, 16, '#5a6176');
    s.disco(37, 11, 6, '#5a6176'); s.disco(37, 11, 4, '#3a4156'); s.disco(37, 11, 2, f ? '#7dff9a' : '#2f8a4a'); s.pixel(37, 11, '#ffffff');
    for (const [x, y] of [[16, 28], [22, 30], [30, 30], [20, 10], [14, 14]]) s.retangulo(x, y, 2, 1, '#e8f0ff');
    s.retangulo(10, 19, 36, 1, f ? '#ffd23f' : '#5a6176');
  });
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

// ---------- 4. AGENTES: homens de preto, alienígenas cabeçudos e baratas gigantes ----------
function agentes() {
  const slime = dois(16, 14, (s, f) => {
    for (let i = 0; i < 5; i++) s.disco(3 + i * 2, 9 + Math.round(Math.sin(i * 1.2 + f * 2.4) * 2), 2, i % 2 ? '#7ad84a' : '#5ab83a');
    s.disco(13, 7, 3, '#7ad84a'); s.retangulo(12, 5, 2, 2, '#ffffff'); s.retangulo(14, 5, 2, 2, '#ffffff'); s.pixel(13, 6, '#0b1026'); s.pixel(15, 6, '#0b1026');
  });
  const morcego = dois(18, 16, (s, f) => {
    s.disco(9, 8, 7, '#3a5aff'); s.disco(9, 8, 5, '#6ab0ff'); s.disco(9, 8, 3, '#cfe9ff'); s.pixel(9, 8, '#ffffff');
    const k = f ? 0 : 1; s.retangulo(8 + k, 0, 1, 2, '#ffffff'); s.retangulo(8 + k, 14, 1, 2, '#ffffff'); s.retangulo(0, 8 - k, 2, 1, '#ffffff'); s.retangulo(16, 8 - k, 2, 1, '#ffffff');
  });
  const ogro = dois(22, 18, (s, f) => {
    pernas(s, [[6, 9, 2, 12], [6, 11, 2, 15], [7, 13, 3, 17], [16, 9, 20, 12], [16, 11, 20, 15], [15, 13, 19, 17]], f, '#3a2008');
    s.elipse(11, 10, 8, 6, '#6a3a1a'); s.elipse(11, 10, 5.5, 4, '#8a5a2a'); s.linha(11, 5, 11, 15, '#4a2a10');
    s.disco(11, 4, 3, '#4a2a10'); s.pixel(10, 4, '#ff3b4a'); s.pixel(12, 4, '#ff3b4a');
    s.linha(9, 2, f ? 5 : 6, 0, '#4a2a10'); s.linha(13, 2, f ? 17 : 16, 0, '#4a2a10');
  });
  const fantasma = dois(14, 17, (s, f) => {
    const y = f ? 1 : 0;
    s.elipse(7, 6 + y, 5.5, 6, '#a8b0b8'); s.elipse(7, 4 + y, 4, 3, '#c0c8d0');
    s.poligono([[2, 5 + y], [6, 7 + y], [5, 9 + y], [2, 8 + y]], '#0b1026'); s.poligono(esp([[2, 5 + y], [6, 7 + y], [5, 9 + y], [2, 8 + y]], 14), '#0b1026');
    s.retangulo(6, 14 + y, 2, 3, '#8a929a'); s.retangulo(4, 12 + y, 6, 2, '#8a929a'); s.pixel(3, 6 + y, '#ffffff'); s.pixel(10, 6 + y, '#ffffff');
  });
  const atirador = dois(16, 17, (s, f) => {
    s.disco(8, 4, 3, '#f1c9a0'); s.retangulo(5, 1, 6, 2, '#2a1a10'); s.retangulo(5, 3, 6, 2, '#0b1026'); s.pixel(6, 3, '#4a5a8a');
    s.retangulo(4, 8, 8, 8, '#14141c'); s.poligono([[7, 8], [9, 8], [8, 12]], '#ffffff'); s.retangulo(8, 9, 1, 4, '#14141c');
    s.retangulo(2, 9, 2, 5, '#14141c'); s.retangulo(12, 9, 2, 3, '#14141c'); s.retangulo(13, 8, 3, 2, '#c9cdd8'); s.pixel(15, 8, f ? '#ffffff' : '#8bd3ff'); s.pixel(14, 7, f ? '#8bd3ff' : '#ffffff');
  });
  const inseto = dois(12, 8, (s, f) => {
    s.elipse(6, 4, 4.5, 2.5, '#6a3a1a'); s.elipse(5, 3.5, 2.5, 1.2, '#8a5a2a'); s.disco(10, 4, 1, '#4a2a10');
    for (const x of [3, 5, 7]) s.pixel(x + (f ? 1 : 0), 7, '#3a2008'); s.pixel(11, 2, '#4a2a10'); s.pixel(11, 6, '#4a2a10');
  });
  const chefe = dois(56, 38, (s, f) => {
    for (const k of [0, 1, 2]) { const y = 20 + k * 5; s.linha(12, y, 2, y + 8 + (f ? 3 : 0), '#3a2008'); s.linha(44, y, 54, y + 8 + (f ? 0 : 3), '#3a2008'); s.linha(13, y + 1, 3, y + 9 + (f ? 3 : 0), '#3a2008'); s.linha(43, y + 1, 53, y + 9 + (f ? 0 : 3), '#3a2008'); }
    s.elipse(28, 22, 20, 14, '#6a3a1a'); s.elipse(24, 19, 12, 8, '#8a5a2a'); s.linha(28, 9, 28, 36, '#4a2a10');
    s.disco(28, 9, 8, '#4a2a10'); s.pixel(24, 9, '#ff3b4a'); s.retangulo(22, 7, 12, 3, '#0b1026'); s.retangulo(23, 7, 4, 1, '#4a5a8a'); s.retangulo(29, 7, 4, 1, '#4a5a8a');
    s.linha(24, 3, f ? 12 : 16, 0, '#4a2a10'); s.linha(32, 3, f ? 44 : 40, 0, '#4a2a10'); s.retangulo(25, 14, 6, 2, '#2a1008');
  });
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

// ---------- 5. XENO: ovos, parasitas, caçadores e uma rainha (alien x predador) ----------
function xeno() {
  const slime = dois(14, 16, (s, f) => {
    s.elipse(7, 11, 5, 5, '#8a7a4a'); s.elipse(6, 10, 3, 3, '#b0a070'); s.retangulo(2, 13, 10, 3, '#6a5a30');
    const a = f ? 3 : 1; s.poligono([[2, 6], [4, 6 - a], [6, 7]], '#a09060'); s.poligono([[12, 6], [10, 6 - a], [8, 7]], '#a09060'); s.poligono([[5, 5], [7, 4 - a], [9, 5]], '#a09060');
    if (f) { s.retangulo(6, 3, 2, 2, '#d9c9a0'); s.pixel(6, 2, '#d9c9a0'); s.pixel(8, 2, '#d9c9a0'); }
  });
  const morcego = dois(18, 10, (s, f) => {
    for (let i = 0; i < 6; i++) s.disco(15 - i * 2.5, 5 + Math.round(Math.sin(i * 1.4 + f * 3) * 2), i === 0 ? 2 : 1, i === 0 ? '#d9b0a0' : '#c49a8a');
    s.pixel(16, 4, '#ff3b4a'); s.retangulo(16, 6, 2, 1, '#ffffff'); s.pixel(17, 5, '#1b1020');
  });
  const ogro = dois(20, 20, (s, f) => {
    s.retangulo(6, 9, 8, 7, '#6a5a3a'); s.retangulo(6, 11, 8, 1, '#3a3020'); s.retangulo(7, 16, 2, 4, '#8a7a4a'); s.retangulo(11, 16, 2, 4, '#8a7a4a');
    s.retangulo(3, 9, 3, 6, '#8a7a4a'); s.retangulo(14, 9, 3, 6, '#8a7a4a');
    s.disco(10, 5, 4, '#a8b0a0'); s.retangulo(7, 4, 6, 2, '#ff9a3a'); s.pixel(8, 4, '#ffffff'); s.pixel(11, 4, '#ffffff'); s.retangulo(8, 7, 4, 3, '#4a4a3a'); s.pixel(7, 9, '#a8b0a0'); s.pixel(12, 9, '#a8b0a0');
    for (const x of [4, 6, 13, 15]) s.linha(x, 3, x + (x < 10 ? -2 : 2), 11 + (f ? 1 : 0), '#2a2010');
    s.retangulo(14, 6, 5, 2, '#5a6176'); s.pixel(18, 6, f ? '#ff3b4a' : '#7a1f2a');
  });
  const fantasma = dois(14, 17, (s, f) => {
    const y = f ? 1 : 0;
    s.poligono([[10, 0 + y], [13, 4 + y], [6, 9 + y], [3, 6 + y]], '#1f2a3a'); s.poligono([[10, 1 + y], [12, 4 + y], [8, 4 + y]], '#4a6a8a');
    s.poligono([[3, 6 + y], [6, 9 + y], [5, 11 + y], [2, 9 + y]], '#2a3a4a'); s.pixel(3, 9 + y, '#ffffff'); s.pixel(5, 10 + y, '#ffffff'); s.pixel(7, 10 + y, '#ffffff');
    s.retangulo(5, 11 + y, 5, 5, '#1f2a3a'); s.linha(10, 11 + y, 13, 15, '#1f2a3a');
  });
  const atirador = dois(16, 17, (s, f) => {
    s.poligono([[5, 1], [12, 3], [11, 8], [4, 8]], '#1f2a3a'); s.poligono([[6, 2], [11, 4], [8, 4]], '#4a6a8a');
    s.retangulo(4, 8, 8, 4, '#2a3a4a'); s.retangulo(5, 9, 6, 2, f ? '#7dff3a' : '#3a9a1f'); for (const x of [5, 7, 9]) s.pixel(x, 8, '#ffffff');
    s.retangulo(6, 12, 4, 5, '#1f2a3a'); s.pixel(f ? 7 : 8, 14, '#7dff3a'); s.pixel(f ? 8 : 7, 15, '#7dff3a');
  });
  const inseto = dois(12, 10, (s, f) => {
    s.elipse(6, 4, 3.5, 2.5, '#d9c9a0'); s.retangulo(5, 5, 2, 1, '#8a7a4a');
    for (const x of [1, 3, 8, 10]) s.linha(x, 3, x < 6 ? x - 1 : x + 1, 8 + (f ? 1 : 0), '#b0a070');
    s.linha(6, 6, 6, 9, '#b0a070'); s.pixel(6, 9, '#8a7a4a');
  });
  const chefe = dois(56, 38, (s, f) => {
    for (const x of [8, 14, 42, 48]) s.linha(x < 28 ? x + 6 : x - 6, 20, x, 34 + (f ? 1 : 0), '#1f2a3a');
    s.elipse(28, 24, 14, 12, '#1f2a3a'); s.elipse(28, 26, 8, 8, '#2a3a4a');
    s.poligono([[28, 0], [40, 6], [44, 20], [28, 24], [12, 20], [16, 6]], '#1f2a3a'); s.poligono([[28, 2], [36, 7], [28, 12], [20, 7]], '#4a6a8a');
    for (const x of [18, 24, 32, 38]) s.linha(x, 4, x + (x < 28 ? -4 : 4), -0 + 1, '#4a6a8a');
    s.retangulo(20, 20, 16, 5, '#0b1026'); for (let x = 21; x < 36; x += 2) s.pixel(x, 20, '#ffffff'), s.pixel(x, 24, '#ffffff');
    s.retangulo(25, 22, 6, 2, f ? '#7dff3a' : '#3a9a1f');
    s.poligono([[12, 20], [2, 28], [4, 30], [14, 26]], '#2a3a4a'); s.poligono([[44, 20], [54, 28], [52, 30], [42, 26]], '#2a3a4a');
  });
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

// ---------- 6. REVOADA: pintinhos, corvos, corujas, fênix, tucanos e bandos de passarinhos ----------
function revoada() {
  const slime = dois(16, 14, (s, f) => {
    const y = f ? 0 : 1;
    s.disco(8, 8 + y, 6, '#ffe14a'); s.disco(7, 7 + y, 3, '#fff08a'); s.pixel(5, 6 + y, '#1b1020'); s.pixel(10, 6 + y, '#1b1020');
    s.poligono([[7, 8 + y], [9, 8 + y], [8, 10 + y]], '#ff9a3a'); s.pixel(8, 2 + y, '#ffe14a'); s.pixel(9, 1 + y, '#ffe14a'); s.retangulo(5, 13, 2, 1, '#ff9a3a'); s.retangulo(9, 13, 2, 1, '#ff9a3a');
  });
  const morcego = dois(18, 14, (s, f) => {
    const asa = f ? [[9, 8], [0, 13], [3, 7]] : [[9, 7], [0, 2], [4, 9]];
    s.poligono(asa, '#2a2a3a'); s.poligono(esp(asa, 18), '#2a2a3a'); s.elipse(9, 8, 3, 3.6, '#3a3a4a'); s.disco(9, 4, 2, '#3a3a4a');
    s.poligono([[8, 5], [9, 7], [10, 5]], '#ffb02e'); s.pixel(8, 3, '#ffffff'); s.pixel(10, 3, '#ffffff'); s.pixel(9, 12, '#2a2a3a');
  });
  const ogro = dois(20, 20, (s, f) => {
    s.elipse(10, 12, 7.5, 7, '#8a5a2a'); s.elipse(10, 14, 5, 4.5, '#d9b88a'); s.disco(10, 7, 6, '#8a5a2a');
    s.poligono([[4, 5], [5, 0], [8, 3]], '#8a5a2a'); s.poligono([[16, 5], [15, 0], [12, 3]], '#8a5a2a');
    s.disco(7, 7, 2, '#ffe14a'); s.disco(13, 7, 2, '#ffe14a'); s.pixel(7, 7, '#0b1026'); s.pixel(13, 7, '#0b1026'); s.poligono([[9, 9], [11, 9], [10, 11]], '#ff9a3a');
    for (const x of [7, 10, 13]) s.pixel(x, 14 + (f ? 1 : 0), '#8a5a2a'); s.retangulo(7, 19, 2, 1, '#ff9a3a'); s.retangulo(11, 19, 2, 1, '#ff9a3a');
  });
  const fantasma = dois(14, 17, (s, f) => {
    const a = f ? 3 : 0;
    s.poligono([[7, 3], [0, 8 - a], [3, 10], [7, 9]], '#ff7a2a'); s.poligono(esp([[7, 3], [0, 8 - a], [3, 10], [7, 9]], 14), '#ff7a2a');
    s.elipse(7, 8, 2.5, 4, '#ffb02e'); s.disco(7, 4, 2, '#ffd23f'); s.pixel(6, 3, '#1b1020'); s.pixel(8, 3, '#1b1020'); s.pixel(7, 1, '#ff3b4a');
    s.poligono([[5, 11], [7, 16 + 0], [9, 11]], '#ff3b4a'); s.poligono([[6, 11], [4, 15], [7, 12]], '#ffd23f'); s.poligono([[8, 11], [10, 15], [7, 12]], '#ffd23f');
  });
  const atirador = dois(16, 17, (s, f) => {
    s.elipse(7, 11, 4.5, 4.5, '#1b1020'); s.elipse(7, 12, 3, 3, '#ffffff'); s.disco(6, 6, 3, '#1b1020'); s.pixel(5, 5, '#ffffff');
    s.poligono([[8, 4], [15, 6], [14, 8], [8, 8]], '#ff9a3a'); s.poligono([[9, 5], [14, 6], [9, 6]], '#ffe14a'); s.pixel(15, 8, f ? '#ff3b4a' : '#ffd23f');
    s.retangulo(5, 15, 2, 2, '#ff9a3a'); s.retangulo(8, 15, 2, 2, '#ff9a3a'); s.retangulo(1, 11, 3, 2, '#1b1020');
  });
  const inseto = dois(12, 9, (s, f) => {
    s.elipse(6, 5, 3.5, 2.5, '#a8744a'); s.disco(9, 3, 1, '#a8744a'); s.pixel(10, 3, '#0b1026'); s.pixel(11, 4, '#ffb02e');
    const a = f ? [[5, 4], [2, 0], [8, 4]] : [[5, 5], [1, 7], [8, 5]]; s.poligono(a, '#7a4a2a');
  });
  const chefe = dois(56, 38, (s, f) => {
    const a = f ? 0 : 8;
    s.poligono([[28, 14], [2, 4 + a], [10, 14 + a], [24, 24]], '#5a3a7a'); s.poligono([[28, 14], [54, 4 + a], [46, 14 + a], [32, 24]], '#5a3a7a');
    s.poligono([[28, 16], [10, 10 + a], [16, 17 + a], [26, 24]], '#8a6aaa'); s.poligono([[28, 16], [46, 10 + a], [40, 17 + a], [30, 24]], '#8a6aaa');
    s.elipse(28, 24, 7, 10, '#3a2a5a'); s.elipse(28, 26, 4, 7, '#d9b88a');
    s.disco(28, 12, 5, '#3a2a5a'); s.poligono([[26, 10], [28, 0], [30, 10]], '#ff3b4a'); s.poligono([[22, 12], [14, 10], [22, 15]], '#ffb02e');
    s.poligono([[23, 11], [27, 13], [27, 15], [23, 14]], '#ffd23f'); s.poligono([[33, 11], [29, 13], [29, 15], [33, 14]], '#ffd23f'); s.pixel(26, 13, '#0b1026'); s.pixel(30, 13, '#0b1026');
    s.poligono([[24, 32], [28, 37], [32, 32]], '#3a2a5a');
  });
  return { m: { slime, morcego, ogro, fantasma, atirador, inseto }, chefe };
}

export const TEMAS = [
  { nome: 'SLIMES', criar: () => ({ m: criarMonstros(0), chefe: criarChefe(0) }) },
  { nome: 'INVASORES', criar: invasores },
  { nome: 'BICHARADA', criar: bicharada },
  { nome: 'GALÁXIA', criar: galaxia },
  { nome: 'AGENTES', criar: agentes },
  { nome: 'XENO', criar: xeno },
  { nome: 'REVOADA', criar: revoada },
];

// ---------- alienígenas do buraco negro: um diferente a cada buraco (e a cada partida) ----------
const ten = (s, x0, y0, x1, y1, cor, f, ondas = 1.5) => { // tentáculo ondulando entre dois pontos
  let px = x0, py = y0;
  for (let i = 1; i <= 8; i++) { const u = i / 8, x = x0 + (x1 - x0) * u + Math.sin(u * 5 + f * 2.4) * ondas * u * 2, y = y0 + (y1 - y0) * u; s.linha(px, py, x, y, cor); s.linha(px + 1, py, x + 1, y, cor); px = x; py = y; }
  return [px, py];
};
const polvo = () => dois(34, 40, (s, f) => {
  for (let k = 0; k < 6; k++) { const x0 = 8 + k * 3.6, [tx, ty] = ten(s, x0, 24, x0 + (k - 2.5) * 3, 38, '#8a3fd6', f, 2.5); s.disco(Math.round(tx), Math.round(ty), 1, '#ff7ab8'); }
  s.elipse(17, 14 + f, 12, 12, '#a56bff'); s.elipse(17, 9 + f, 9, 6, '#c49bff');
  s.disco(11, 16 + f, 4, '#ffffff'); s.disco(23, 16 + f, 4, '#ffffff'); s.disco(12, 17 + f, 2, '#0b1026'); s.disco(22, 17 + f, 2, '#0b1026');
  s.retangulo(14, 24 + f, 6, 2, '#3a1a5a'); for (const [x, y] of [[17, 4], [12, 6], [22, 6]]) s.disco(x, y + f, 1, '#ffe14a');
});
const cerebro = () => dois(34, 40, (s, f) => {
  s.retangulo(6, 24, 22, 3, '#8b93a8'); s.retangulo(9, 27, 16, 10, '#5a6176'); s.retangulo(9, 27, 16, 2, '#8b93a8');
  s.retangulo(10, 37, 4, 3, '#3a4156'); s.retangulo(20, 37, 4, 3, '#3a4156'); s.disco(17, 32, 2, f ? '#ff3b4a' : '#7a1f2a');
  s.linha(9, 28, 3, 22 - f * 2, '#8b93a8'); s.linha(25, 28, 31, 22 - (1 - f) * 2, '#8b93a8'); s.disco(3, 21 - f * 2, 2, '#c9cdd8'); s.disco(31, 21 - (1 - f) * 2, 2, '#c9cdd8');
  s.disco(17, 13, 12, '#8bd3ff'); s.disco(17, 14, 10, '#bff0ff'); s.elipse(17, 14 + f * 0.5, 8, 7, '#ff7ab8'); s.elipse(15, 12, 4, 3, '#ffb3d9');
  s.linha(17, 8, 17, 20, '#c4488a'); s.linha(11, 12, 15, 16, '#c4488a'); s.linha(23, 12, 19, 16, '#c4488a'); s.linha(17, 1, 17, 3, '#8b93a8'); s.pixel(17, 0, f ? '#ffe14a' : '#ff3b4a');
  if (f) { s.pixel(8, 8, '#ffe14a'); s.pixel(26, 18, '#ffe14a'); }
});
const ceifador = () => dois(34, 40, (s, f) => {
  s.poligono([[17, 6], [4, 38 - f], [30, 38 - f]], '#2a1f4a'); for (let x = 4; x < 30; x += 4) s.pixel(x, 38 - f, '#0b1026');
  s.disco(17, 12, 9, '#2a1f4a'); s.disco(17, 14, 6, '#e8e8f0');
  s.retangulo(12, 13, 4, 3, '#1b1020'); s.retangulo(19, 13, 4, 3, '#1b1020'); s.pixel(13, 14, f ? '#ff2a4a' : '#ff9aa6'); s.pixel(20, 14, f ? '#ff2a4a' : '#ff9aa6');
  s.poligono([[16, 17], [18, 17], [17, 19]], '#1b1020'); for (let x = 13; x <= 21; x += 2) s.retangulo(x, 20, 1, 2, '#1b1020');
  s.disco(5, 27 + f, 2, '#7dff9a'); s.disco(29, 27 - f, 2, '#7dff9a');
  s.linha(30, 4, 30, 37, '#c9a86a'); s.poligono([[30, 4], [21, 1], [22, 8]], '#cfd6e0');
});
const olhoMestre = () => dois(34, 40, (s, f) => {
  const d = f ? 1 : -1;
  for (const [x0, y0, x1, y1] of [[8, 14, 3, 4], [13, 10, 11, 1], [22, 10, 23, 1], [27, 14, 31, 4]]) { s.linha(x0, y0, x1 + d, y1, '#6a3a8a'); s.linha(x0 + 1, y0, x1 + 1 + d, y1, '#6a3a8a'); s.disco(x1 + d, y1, 2, '#ffe14a'); s.pixel(x1 + d, y1, '#0b1026'); }
  s.disco(17, 25, 13, '#f4efe0'); s.disco(17, 25, 12, '#ffffff');
  for (const [x0, y0, x1, y1] of [[6, 20, 10, 24], [28, 20, 24, 24], [8, 32, 12, 29], [26, 32, 22, 29]]) s.linha(x0, y0, x1, y1, '#ff9aa6');
  s.disco(17 + d, 25, 7, '#ff3b4a'); s.disco(17 + d, 25, 5, '#c4182a'); s.disco(17 + d, 25, 3, '#0b1026'); s.pixel(15 + d, 22, '#ffffff'); s.pixel(16 + d, 22, '#ffffff');
});
const louva = () => dois(34, 40, (s, f) => {
  s.poligono([[17, 18], [2, 10 + f], [8, 30]], '#c9ffc9'); s.poligono([[17, 18], [32, 10 + f], [26, 30]], '#c9ffc9');
  s.elipse(17, 27, 5, 11, '#3a9a3a'); s.elipse(17, 21, 4, 5, '#4ab84a'); s.retangulo(15, 30, 4, 1, '#2a6a2a');
  s.poligono([[17, 3], [26, 10], [17, 15], [8, 10]], '#7ae07a'); s.disco(11, 9, 3, '#ffe14a'); s.disco(23, 9, 3, '#ffe14a'); s.pixel(11, 9, '#0b1026'); s.pixel(23, 9, '#0b1026');
  s.linha(14, 3, 11, 0, '#3a9a3a'); s.linha(20, 3, 23, 0, '#3a9a3a'); s.retangulo(15, 13, 4, 1, '#2a6a2a');
  const a = f ? 4 : 0;
  s.linha(13, 19, 4, 14 + a, '#4ab84a'); s.linha(4, 14 + a, 6, 4 + a, '#4ab84a'); s.poligono([[6, 4 + a], [3, 1 + a], [9, 8 + a]], '#cfd6e0');
  s.linha(21, 19, 30, 14 + a, '#4ab84a'); s.linha(30, 14 + a, 28, 4 + a, '#4ab84a'); s.poligono([[28, 4 + a], [31, 1 + a], [25, 8 + a]], '#cfd6e0');
  for (const k of [0, 1, 2]) { s.linha(13, 30 + k * 2, 6, 36 + k, '#2a6a2a'); s.linha(21, 30 + k * 2, 28, 36 + k, '#2a6a2a'); }
});
const medusa = () => dois(34, 40, (s, f) => {
  for (let k = 0; k < 5; k++) { const x0 = 8 + k * 4.5, [tx, ty] = ten(s, x0, 22, x0 + Math.sin(k + f) * 4, 39, k % 2 ? '#ff7ab8' : '#c4488a', f, 3); s.pixel(Math.round(tx), Math.round(ty), '#ffffff'); }
  s.elipse(17, 13 + f * 0.5, 13, 11, '#7ad8ff'); s.elipse(17, 11, 10, 7, '#bff0ff'); s.disco(17, 13, 4, f ? '#ffffff' : '#ffe14a');
  for (const [x, y] of [[9, 9], [24, 8], [12, 17], [22, 17], [17, 5]]) s.pixel(x, y, '#ffffff');
  for (let x = 6; x < 30; x += 4) s.disco(x, 22 + f, 1, '#ff7ab8');
});
export const ALIENS = [
  { nome: 'CINZENTO', pesos: {}, criar: criarAlien },
  { nome: 'POLVO CÓSMICO', pesos: { bombas: 2, invocar: 1 }, criar: polvo },
  { nome: 'CÉREBRO MECÂNICO', pesos: { mira: 2, raio: 2 }, criar: cerebro },
  { nome: 'CEIFADOR', pesos: { teleporte: 3, investida: 1 }, criar: ceifador },
  { nome: 'OLHO MESTRE', pesos: { raio: 3, rajada: 1 }, criar: olhoMestre },
  { nome: 'LOUVA-A-DEUS', pesos: { investida: 3, mira: 1 }, criar: louva },
  { nome: 'MEDUSA ESTELAR', pesos: { rajada: 3, invocar: 1 }, criar: medusa },
];

// ---------- naves dos chefões: sorteadas a cada chefão ----------
const cruzador = () => dois(56, 38, (s, f) => {
  s.poligono([[2, 20], [10, 12], [46, 12], [54, 20], [46, 30], [10, 30]], '#7a2a3a'); s.poligono([[10, 12], [46, 12], [42, 8], [14, 8]], '#5a1f2a');
  s.retangulo(24, 1, 8, 9, '#9a3a4a'); s.retangulo(26, 3, 4, 2, '#8bd3ff'); s.pixel(28, 0, f ? '#ff3b4a' : '#ffd23f');
  for (const x of [12, 28, 44]) { s.disco(x, 12, 3, '#3a3a48'); s.retangulo(x - 1, 14, 2, 5, '#5a5a6a'); s.pixel(x, 19, f ? '#ffd23f' : '#ff3b4a'); }
  for (let x = 8; x < 50; x += 4) s.pixel(x, 24, (x / 4 + f) % 2 ? '#ffd23f' : '#7a5a2a');
  s.retangulo(2, 16, 3, 8, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(51, 16, 3, 8, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(14, 30, 28, 3, '#3a1018'); s.retangulo(20, 33, 4, 2, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(32, 33, 4, 2, f ? '#ffd23f' : '#ff7a3a');
});
const discoMae = () => dois(56, 38, (s, f) => {
  s.poligono([[20, 30], [36, 30], [42, 37], [14, 37]], f ? '#fff08a' : '#c9b03a');
  s.elipse(28, 22, 26, 9, '#aab3c8'); s.elipse(28, 25, 25, 6, '#7a8298'); s.elipse(28, 21, 22, 6, '#c9cdd8');
  s.elipse(28, 13, 11, 10, '#8bd3ff'); s.elipse(25, 10, 5, 4, '#cfeeff'); s.disco(28, 14, 4, '#7ad8a0'); s.pixel(27, 13, '#0b1026'); s.pixel(30, 13, '#0b1026');
  for (let k = 0; k < 9; k++) s.retangulo(Math.round(6 + k * 5.5), 22, 2, 2, (k + f) % 2 ? '#ffe14a' : '#ff3b4a');
});
const naveCaveira = () => dois(56, 38, (s, f) => {
  s.poligono([[12, 18], [0, 8 + f * 2], [2, 28], [14, 26]], '#7a2a3a'); s.poligono(esp([[12, 18], [0, 8 + f * 2], [2, 28], [14, 26]], 56), '#7a2a3a');
  s.elipse(28, 15, 18, 14, '#e8e0c8'); s.elipse(24, 11, 9, 6, '#f6f0dc'); s.retangulo(18, 24, 20, 9, '#e8e0c8');
  s.disco(21, 16, 5, '#1b1020'); s.disco(35, 16, 5, '#1b1020'); s.disco(21, 16, 2, f ? '#ff3b4a' : '#7a1f2a'); s.disco(35, 16, 2, f ? '#ff3b4a' : '#7a1f2a');
  s.poligono([[26, 21], [30, 21], [28, 25]], '#1b1020'); for (let x = 19; x <= 37; x += 3) s.retangulo(x, 27, 1, 6, '#1b1020'); s.retangulo(18, 28, 20, 1, '#1b1020');
  s.retangulo(4, 24, 5, 8, '#3a3a48'); s.retangulo(47, 24, 5, 8, '#3a3a48'); s.retangulo(5, 32, 3, 3, f ? '#ffd23f' : '#ff7a3a'); s.retangulo(48, 32, 3, 3, f ? '#ffd23f' : '#ff7a3a');
});
const cristalVivo = () => dois(56, 38, (s, f) => {
  s.poligono([[8, 14], [14, 26], [8, 35], [2, 24]], '#5ad6ff'); s.poligono(esp([[8, 14], [14, 26], [8, 35], [2, 24]], 56), '#5ad6ff');
  s.poligono([[17, 18], [22, 28], [17, 36], [12, 28]], '#38a8d6'); s.poligono(esp([[17, 18], [22, 28], [17, 36], [12, 28]], 56), '#38a8d6');
  s.poligono([[28, 0], [40, 14], [34, 36], [22, 36], [16, 14]], '#9a5aff'); s.poligono([[28, 0], [34, 14], [28, 36], [22, 14]], '#c49bff');
  s.disco(28, 18, 5, f ? '#ffffff' : '#ffe14a'); s.disco(28, 18, 3, '#ff7ab8'); s.pixel(f ? 12 : 44, 12, '#ffffff'); s.pixel(f ? 46 : 10, 24, '#ffffff'); s.pixel(f ? 28 : 30, 4, '#ffffff');
});
const NOMES_CHEFES_TEMA = ['NAVE-MÃE', 'CARANGUEJÃO', 'BESOURÃO', 'ESFERA DE BATALHA', 'BARATÃO', 'RAINHA', 'ROC'];
export const CHEFES = [
  ...TEMAS.map((t, i) => ({ nome: NOMES_CHEFES_TEMA[i], criar: () => t.criar().chefe })),
  { nome: 'CRUZADOR', criar: cruzador },
  { nome: 'DISCO-MÃE', criar: discoMae },
  { nome: 'NAVE-CAVEIRA', criar: naveCaveira },
  { nome: 'CRISTAL VIVO', criar: cristalVivo },
];
