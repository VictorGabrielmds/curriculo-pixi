// Jogo de nave estilo arcade: a nave atira sozinha e você a move pelo espaço; monstrinhos chegam pelas laterais da tela
// e soltam cristais de XP (só sobe de nível quem pega o cristal). Rochas soltam itens, buracos negros levam a uma luta
// contra um alienígena (que dá um poder), chefões soltam moedas espaciais para a Oficina (melhorias permanentes).
import './arcade.css';
import { novoSprite, silhuetaBranca } from './pixelArt.js';
import { criarFundo } from './arcadeFundo.js';
import { criarAlien, criarRochas, criarItens, desenharBuracoNegro } from './arcadeSprites.js';
import { TEMAS } from './arcadeTemas.js';

const L = 320, A = 180; // resolução lógica da tela (ampliada sem suavização)
const CX = L / 2, CY = A / 2;
const RAIO_NAVE = 6;
const CHAVE = 'curriculo-arcade-v1';
const BONUS_MAXIMO = 12; // moedas espaciais de bônus no fim da partida
const ARENA = { x0: 10, x1: L - 10, y0: 26, y1: A - 10 }; // limites da luta contra o alienígena

const TIPOS = {
  slime: { hp: 1, vel: 20, raio: 5, xp: 1, dano: 1 },
  morcego: { hp: 1, vel: 40, raio: 4, xp: 2, dano: 1 },
  ogro: { hp: 6, vel: 13, raio: 7, xp: 6, dano: 2 },
  fantasma: { hp: 2, vel: 46, raio: 5, xp: 3, dano: 1 },
  inseto: { hp: 1, vel: 52, raio: 3, xp: 1, dano: 1 },
  atirador: { hp: 3, vel: 24, raio: 5, xp: 4, dano: 1 },
  chefe: { hp: 150, vel: 28, raio: 20, xp: 0, dano: 2 },
  alien: { hp: 70, vel: 0, raio: 14, xp: 0, dano: 2 },
};

const MELHORIAS = [
  { id: 'cadencia', nome: 'Cadência', desc: '+25% de velocidade de tiro', max: 8, aplicar: (s) => { s.cadencia *= 1.25; } },
  { id: 'dano', nome: 'Dano', desc: '+1 de dano por tiro', max: 10, aplicar: (s) => { s.dano += 1; } },
  { id: 'projetil', nome: 'Projétil extra', desc: '+1 projétil por disparo', max: 5, aplicar: (s) => { s.projeteis += 1; } },
  { id: 'perfurar', nome: 'Perfuração', desc: 'Os tiros atravessam +1 monstro', max: 4, aplicar: (s) => { s.perfura += 1; } },
  { id: 'velTiro', nome: 'Tiro veloz', desc: '+30% de velocidade do projétil', max: 5, aplicar: (s) => { s.velTiro *= 1.3; } },
  { id: 'ima', nome: 'Ímã de cristais', desc: 'Atrai os cristais de XP de mais longe', max: 5, aplicar: (s) => { s.raioIma *= 1.5; } },
  { id: 'motor', nome: 'Propulsores', desc: '+20% de velocidade da nave', max: 5, aplicar: (s) => { s.velNave *= 1.2; } },
  { id: 'reparo', nome: 'Reparo', desc: '+1 vida máxima e cura 2', max: 5, aplicar: (s) => { s.maxHp += 1; s.hp = Math.min(s.maxHp, s.hp + 2); } },
  // laser (tecla 2): os níveis são lidos na hora de usar
  { id: 'l_dano', nome: 'Laser: dano', desc: '+30% de dano do laser', max: 5, aplicar: () => {} },
  { id: 'l_alc', nome: 'Laser: alcance', desc: '+20% de alcance do laser', max: 4, aplicar: () => {} },
  { id: 'l_rec', nome: 'Laser: recarga', desc: 'O laser recarrega 35% mais rápido', max: 4, aplicar: () => {} },
  // poderes novos: ocupam a tecla 3 e a 4, na ordem em que forem conquistados
  { id: 'p_missil', nome: 'NOVO PODER: Míssil', desc: 'Míssil com dano em área nos inimigos mais próximos', max: 1, requer: (s) => !s.poderes.missil && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'missil'); } },
  { id: 'p_orbes', nome: 'NOVO PODER: Bolas de energia', desc: 'Bolas que giram em volta da nave e ferem por contato', max: 1, requer: (s) => !s.poderes.orbes && s.slots.includes(null), aplicar: (s) => { darPoder(s, 'orbes'); } },
  { id: 'm_qtd', nome: 'Míssil: +1 míssil', desc: 'Dispara mais um míssil por vez', max: 3, requer: (s) => s.poderes.missil, aplicar: () => {} },
  { id: 'm_rec', nome: 'Míssil: recarga', desc: 'O míssil recarrega 30% mais rápido', max: 4, requer: (s) => s.poderes.missil, aplicar: () => {} },
  { id: 'm_dano', nome: 'Míssil: dano', desc: '+30% de dano do míssil', max: 5, requer: (s) => s.poderes.missil, aplicar: () => {} },
  { id: 'm_area', nome: 'Míssil: explosão', desc: '+20% de área da explosão', max: 3, requer: (s) => s.poderes.missil, aplicar: () => {} },
  { id: 'o_qtd', nome: 'Bolas: +1 bola', desc: 'Mais uma bola de energia girando', max: 4, requer: (s) => s.poderes.orbes, aplicar: () => {} },
  { id: 'o_vel', nome: 'Bolas: velocidade', desc: 'As bolas giram 25% mais rápido', max: 4, requer: (s) => s.poderes.orbes, aplicar: () => {} },
  { id: 'o_dano', nome: 'Bolas: dano', desc: '+30% de dano das bolas', max: 5, requer: (s) => s.poderes.orbes, aplicar: () => {} },
];

// poderes das teclas 3 e 4: vêm do alienígena ou de um nível (valem até o fim da partida)
const NOMES_PODER = { missil: 'MÍSSIL', orbes: 'BOLAS DE ENERGIA' };
const NOMES_CURTOS = { missil: 'MÍSSIL', orbes: 'ORBES' };
function darPoder(s, id) {
  const i = s.slots.indexOf(null);
  if (s.poderes[id] || i < 0) return false;
  s.slots[i] = id; s.poderes[id] = true;
  s.avisoTxt = `PODER NA TECLA ${i + 3}: ${NOMES_PODER[id]}!`; s.aviso = 3.6;
  return true;
}

// melhorias permanentes compradas com moedas espaciais (que o chefão solta)
const OFICINA = [
  { parte: 'MOTOR', id: 'motor', nome: 'Propulsores', desc: '+8% de velocidade da nave', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'NÚCLEO DE ENERGIA', id: 'nucleo', nome: 'Núcleo de energia', desc: '+12% de recarga do laser e do míssil', max: 5, custo: (n) => 8 + n * 5 },
  { parte: 'NÚCLEO DE ENERGIA', id: 'bateria', nome: 'Bateria do laser', desc: '+0,6 s de laser contínuo', max: 4, custo: (n) => 6 + n * 4 },
  { parte: 'ARMAS', id: 'dano', nome: 'Munição pesada', desc: '+0,25 de dano base', max: 5, custo: (n) => 8 + n * 6 },
  { parte: 'ARMAS', id: 'cadencia', nome: 'Canhão rápido', desc: '+10% de cadência inicial', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'ARMAS', id: 'projetil', nome: 'Canhão duplo', desc: '+1 projétil inicial', max: 2, custo: (n) => 24 + n * 20 },
  { parte: 'ARMAS', id: 'lente', nome: 'Lente do laser', desc: '+10% de dano e de alcance do laser', max: 5, custo: (n) => 8 + n * 6 },
  { parte: 'ESCUDO', id: 'escudo', nome: 'Escudo regenerativo', desc: 'Barreira que absorve 1 golpe e se recarrega (nv 4: duas barreiras)', max: 5, custo: (n) => 10 + n * 6 },
  { parte: 'CASCO', id: 'casco', nome: 'Casco reforçado', desc: '+1 vida inicial', max: 5, custo: (n) => 6 + n * 4 },
  { parte: 'SENSORES', id: 'ima', nome: 'Ímã inicial', desc: '+25% de alcance do ímã', max: 4, custo: (n) => 6 + n * 5 },
  { parte: 'SENSORES', id: 'xp', nome: 'Cristais ricos', desc: '+10% de XP dos cristais', max: 5, custo: (n) => 8 + n * 6 },
];

const PESOS_ITENS = [['ima', 0.25], ['explosao', 0.2], ['coracao', 0.2], ['escudo', 0.15], ['turbo', 0.2]];

const dadosPadrao = () => ({ tempo: 0, kills: 0, moedas: 0, skin: 0, oficina: Object.fromEntries(OFICINA.map((o) => [o.id, 0])) });
function carregarDados() {
  const d = dadosPadrao();
  try {
    const j = JSON.parse(localStorage.getItem(CHAVE));
    if (j) {
      d.tempo = j.tempo | 0; d.kills = j.kills | 0; d.moedas = Math.max(0, j.moedas | 0); d.skin = Math.max(0, j.skin | 0);
      for (const o of OFICINA) d.oficina[o.id] = Math.max(0, Math.min(o.max, (j.oficina && j.oficina[o.id]) | 0));
    }
  } catch { /* sem armazenamento */ }
  return d;
}

// ---------- sprites da nave e dos cristais ----------
function criarSprites() {
  const cristal = (corA, corB, brilho) => {
    const s = novoSprite(7, 9);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 8.5], [0.5, 3.5]], corA);
    s.poligono([[3.5, 0.5], [6.5, 3.5], [3.5, 4.5]], corB);
    s.pixel(2, 3, brilho); s.pixel(2, 2, brilho);
    return s.contorno('#0b1026').c;
  };
  const cristais = {
    1: cristal('#38c8ff', '#8be6ff', '#ffffff'), 2: cristal('#3fd96a', '#9bffb4', '#ffffff'),
    3: cristal('#a56bff', '#d1b0ff', '#ffffff'), 6: cristal('#ffc83d', '#fff0a0', '#ffffff'),
  };
  return { cristais };
}

// nave do jogo (20x20): o desenho muda conforme o nível de cada parte
function gerarNave(t) {
  const s = novoSprite(20, 20), o = 2;
  const R = (x, y, w, h, c) => s.retangulo(x + o, y + o, w, h, c);
  R(1, 7, 3, 2, '#ff7a59'); R(12, 7, 3, 2, '#ff7a59'); R(7, 1, 2, 3, '#ff7a59'); R(7, 12, 2, 3, '#ff7a59');
  if (t.motor >= 2) { R(2, 11, 2, 3, '#8b93a8'); R(12, 11, 2, 3, '#8b93a8'); s.pixel(3 + o, 14 + o, '#ffa23a'); s.pixel(12 + o, 14 + o, '#ffa23a'); }
  if (t.motor >= 4) { R(1, 4, 2, 3, '#8b93a8'); R(13, 4, 2, 3, '#8b93a8'); }
  s.disco(8 + o, 8 + o, 5, '#4aa8ff');
  s.disco(8 + o, 8 + o, 3, t.nucleo >= 4 ? '#ffc14a' : t.nucleo >= 2 ? '#7dff9a' : '#8bd3ff');
  s.disco(8 + o, 8 + o, 1, '#ffffff');
  if (t.casco >= 1) for (const [x, y] of [[2, 2], [12, 2], [2, 12], [12, 12]]) { R(x, y, 2, 2, '#aab3c8'); if (t.casco >= 3) s.pixel(x + o, y + o, '#e6e8ff'); }
  if (t.ima >= 1) { s.pixel(8 + o, o - 1, '#ff3b4a'); if (t.ima >= 3) R(10, 0, 2, 1, '#c9cdd8'); }
  s.contorno(t.casco >= 5 ? '#ffd23f' : t.casco >= 3 ? '#8bd3ff' : '#0b1026');
  return { c: s.c, branca: silhuetaBranca(s.c) };
}

export function iniciarArcade({ bip }) {
  const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; };
  const sprites = criarSprites();
  const rochasSpr = criarRochas(), itensSpr = criarItens(), alienSpr = criarAlien();
  const cacheSkin = new Map();
  const skin = (v) => {
    const k = ((v % TEMAS.length) + TEMAS.length) % TEMAS.length;
    if (!cacheSkin.has(k)) cacheSkin.set(k, TEMAS[k].criar());
    return cacheSkin.get(k);
  };
  const fundo = criarFundo(L, A);
  let naveSpr = gerarNave({ casco: 0, motor: 0, nucleo: 0, armas: 0, ima: 0 });
  let dados = carregarDados();
  const ultimoSom = {};
  const som = (cat, folga, fn) => { const t = performance.now(); if (t - (ultimoSom[cat] || 0) < folga) return; ultimoSom[cat] = t; fn(); };
  function somAcerto(m) { // dano em monstro: tec curto; os grandes soam mais graves
    const grande = m.tipo === 'ogro' || m.tipo === 'chefe' || m.tipo === 'alien';
    som('acerto' + (grande ? 'G' : ''), grande ? 70 : 40, () => (grande ? bip(90 + Math.random() * 25, 0.07, 'sawtooth', 0.035) : bip(170 + Math.random() * 80, 0.03, 'square', 0.02)));
  }
  function somMorte(tipo) { // cada tipo morre com um som diferente
    som('morte', 30, () => {
      if (tipo === 'slime') { bip(330, 0.05, 'triangle', 0.045); bip(200, 0.09, 'triangle', 0.045, 0.05); }
      else if (tipo === 'morcego') { bip(950, 0.04, 'square', 0.03); bip(620, 0.05, 'square', 0.03, 0.04); bip(380, 0.07, 'square', 0.03, 0.09); }
      else if (tipo === 'ogro') { bip(120, 0.16, 'sawtooth', 0.06); bip(70, 0.22, 'sawtooth', 0.06, 0.09); }
      else if (tipo === 'fantasma') { bip(700, 0.06, 'sine', 0.05); bip(500, 0.08, 'sine', 0.05, 0.06); bip(300, 0.12, 'sine', 0.05, 0.12); }
      else if (tipo === 'atirador') { bip(520, 0.04, 'sawtooth', 0.04); bip(260, 0.06, 'sawtooth', 0.04, 0.04); bip(130, 0.1, 'sawtooth', 0.04, 0.09); }
      else bip(1000, 0.03, 'square', 0.025); // inseto: estalinho
    });
  }
  const salvarDados = () => { try { localStorage.setItem(CHAVE, JSON.stringify(dados)); } catch { /* ignora */ } };

  // ---------- interface ----------
  const raiz = el('div'); raiz.id = 'arcade';
  const caixa = el('div', 'arc-caixa');
  const topo = el('div', 'arc-topo');
  const icone = document.createElement('canvas'); icone.width = icone.height = 20; icone.className = 'arc-icone';
  icone.getContext('2d').drawImage(naveSpr.c, 0, 0);
  const titulo = el('h2', null, 'NAVE ARCADE');
  const hud = el('div', 'arc-hud');
  const vidasEl = el('span', 'arc-vidas');
  const nivelEl = el('span', 'arc-nivel');
  const xpBox = el('span', 'arc-xp'); const xpBarra = el('i'); xpBox.append(xpBarra);
  const killsEl = el('span');
  const ondaEl = el('span', 'arc-onda');
  const efeitosEl = el('span', 'arc-efeitos');
  const moedaEl = el('span', 'arc-moedas');
  const tempoEl = el('span');
  hud.append(vidasEl, nivelEl, xpBox, killsEl, ondaEl, efeitosEl, moedaEl, tempoEl);
  const fechar = el('button', 'arc-x', 'X'); fechar.title = 'Sair (Esc)';
  topo.append(icone, titulo, hud, fechar);

  const tela = el('div', 'arc-tela');
  const cv = document.createElement('canvas'); cv.width = L; cv.height = A;
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;

  const avisoOnda = el('div', 'arc-aviso'); avisoOnda.hidden = true;
  const sobre = el('div', 'arc-sobre');
  const painelInicio = el('div', 'arc-painel');
  const btnComecar = el('button', 'arc-btn', 'COMEÇAR [ESPAÇO]');
  const btnOficinaIni = el('button', 'arc-btn sec');
  painelInicio.append(el('h3', null, 'NAVE ARCADE'),
    el('p', null, 'A nave atira sozinha. Mova-a com as SETAS (ou WASD, ou arraste o dedo) pelo espaço sem limites. Cada monstro solta um CRISTAL de XP: só sobe de nível quem pegar o cristal!'),
    el('p', null, 'Quebre ROCHAS para achar itens, entre em BURACOS NEGROS para enfrentar um alienígena e derrote CHEFÕES para ganhar moedas espaciais (gaste na OFICINA).'),
    el('p', null, 'ARMAS: [1] tiro normal · [2] laser contínuo (curto alcance, recarrega) · [3] e [4] poderes novos, que você conquista ao subir de nível ou vencer o alienígena.'),
    el('p', 'dica', 'Cuidado com as ondas de monstros, os atiradores e as bombas do chefão!'),
    btnComecar, btnOficinaIni);

  const painelEscolha = el('div', 'arc-painel'); painelEscolha.hidden = true;
  const painelPausa = el('div', 'arc-painel'); painelPausa.hidden = true;
  const btnContinuar = el('button', 'arc-btn', 'CONTINUAR [ESC]');
  const btnSairPausa = el('button', 'arc-btn sec', 'SAIR');
  painelPausa.append(el('h3', null, 'PAUSADO'), btnContinuar, btnSairPausa);
  const painelFim = el('div', 'arc-painel'); painelFim.hidden = true;
  const painelOficina = el('div', 'of-raiz'); painelOficina.hidden = true;

  sobre.append(painelInicio, painelEscolha, painelPausa, painelFim);
  tela.append(cv, avisoOnda, sobre);
  const armasEl = el('div', 'arc-armas');
  const botoesArma = [];
  for (let n = 1; n <= 4; n++) {
    const b = el('button', 'arc-arma'); b.tabIndex = -1;
    const nm = el('b'), barra = el('i');
    b.append(el('small', null, String(n)), nm, barra);
    b.onmousedown = (e) => e.preventDefault();
    b.onclick = () => selecionarArma(n);
    botoesArma.push({ b, nm, barra }); armasEl.append(b);
  }
  caixa.append(topo, tela, armasEl, el('p', 'arc-nota', 'de brincadeira: as moedas espaciais só servem na OFICINA da nave, sem dinheiro de verdade'));
  raiz.append(caixa, painelOficina);
  document.body.append(raiz);

  // ---------- estado ----------
  let aberto = false, modo = 'inicio', raf = 0, ultimo = 0, voltarPara = 'inicio';
  let S = null;
  const teclas = new Set();
  const ponteiro = { ativo: false, x: CX, y: CY };
  const TECLAS_MOVER = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyA', 'KeyD', 'KeyW', 'KeyS'];

  const naTela = (o) => Math.abs(o.x - S.cx) < L / 2 + 4 && Math.abs(o.y - S.cy) < A / 2 + 4;
  const sorteio = (pesos) => { let r = Math.random() * pesos.reduce((s, p) => s + p[1], 0); for (const [k, p] of pesos) { r -= p; if (r <= 0) return k; } return pesos[0][0]; };
  const mostrarAviso = (txt, seg = 2.6) => { S.avisoTxt = txt; S.aviso = seg; };

  function tiersNave() {
    const of = dados.oficina, n = S ? S.niveis : {};
    return { casco: of.casco + (n.reparo | 0), motor: of.motor + (n.motor | 0), nucleo: of.nucleo + (n.l_rec | 0), armas: of.dano + of.lente + (n.dano | 0), ima: of.ima + (n.ima | 0) };
  }
  function atualizarNaveSpr() {
    const t = tiersNave();
    naveSpr = gerarNave(t);
    if (S) S.tiers = t;
    const ic = icone.getContext('2d'); ic.clearRect(0, 0, 20, 20); ic.drawImage(naveSpr.c, 0, 0);
  }

  const nomeTema = () => TEMAS[(((S.fase - 1 + S.skinBase) % TEMAS.length) + TEMAS.length) % TEMAS.length].nome;

  function novoJogo() {
    const of = dados.oficina;
    S = {
      t: 0, ta: 0, nx: CX, ny: CY, cx: CX, cy: CY, velNave: 75 * (1 + 0.08 * of.motor), cristais: [], raioIma: 26 * (1 + 0.25 * of.ima), raioPegar: 8, bonusXp: 1 + 0.1 * of.xp,
      onda: 0, proxOnda: 25, fila: 0, filaTaxa: 0, filaAcc: 0, aviso: 0, avisoTxt: '', fase: 1,
      hp: 6 + of.casco, maxHp: 6 + of.casco, nivel: 1, xp: 0, xpProx: 5, kills: 0,
      dano: 1 + 0.25 * of.dano, cadencia: 2 * (1 + 0.1 * of.cadencia), projeteis: 1 + of.projetil, perfura: 0, velTiro: 160,
      inimigos: [], tiros: [], tirosInimigos: [], campos: [], raios: [], rochas: [], itens: [], parts: [], ondas: [], textos: [],
      spawnAcc: 0, recarga: 0.3, invul: 0, mira: 0, tremor: 0, flash: 0, niveis: {},
      imaT: 0, turboT: 0, escudoT: 0,
      proxBuraco: 40 + Math.random() * 30, buraco: null, alien: null, mundoSalvo: null, aliensVencidos: 0, pendente: null,
      proxChefe: 90, chefe: null, chefesVencidos: 0, moedasRun: 0,
      skinBase: dados.skin, // muda a cada derrota
      movendo: false, tiers: null, upgFx: null,
      arma: 1, slots: [null, null], poderes: { missil: false, orbes: false },
      laserMax: 2.5 + 0.6 * of.bateria, laserE: 2.5 + 0.6 * of.bateria, laserQuente: false, laserTick: 0, laserN: 0, laser: null,
      laserDano: 9 * (1 + 0.1 * of.lente), laserAlc: 85 * (1 + 0.1 * of.lente), recM: 1 + 0.12 * of.nucleo,
      missilT: 1, missilMax: 3.6, misseis: [], orbeAng: 0,
      barreiraMax: of.escudo > 0 ? 1 + (of.escudo >= 4 ? 1 : 0) : 0, barreira: of.escudo > 0 ? 1 + (of.escudo >= 4 ? 1 : 0) : 0, barreiraT: 0, tempoBarreira: 45 - 6 * of.escudo,
    };
    atualizarNaveSpr();
  }

  // ---------- criação de entidades ----------
  function sortearTipo(daOnda) {
    const t = S.t, f = S.fase;
    const pesos = [['slime', daOnda ? 20 : 10]];
    if (t > 12) pesos.push(['inseto', 3 + f]);
    if (t > 15) pesos.push(['morcego', Math.min(8, 2 + (t - 15) / 15)]);
    if (t > 35) pesos.push(['atirador', Math.min(5, 1 + (t - 35) / 30) + f * 0.4]);
    if (t > 40) pesos.push(['ogro', Math.min(5, 1 + (t - 40) / 30)]);
    if (t > 55) pesos.push(['fantasma', Math.min(5, (t - 55) / 25)]);
    return sorteio(pesos);
  }
  function criarInimigo(tipo, x, y) {
    const base = TIPOS[tipo], t = S.t;
    const hp = Math.ceil(base.hp * (1 + t / (base.hp === 1 ? 70 : 35)));
    const vel = base.vel * (0.9 + Math.random() * 0.3) * (1 + Math.min(1, t / 240));
    const m = { tipo, x, y, hp, hpMax: hp, vel, fase: Math.random() * 6, piscar: 0, cd: 1 + Math.random() * 2, v: S.fase - 1 + S.skinBase, cdOrbe: 0 };
    S.inimigos.push(m);
    return m;
  }
  function spawn(daOnda = false) {
    const tipo = sortearTipo(daOnda);
    const n = tipo === 'inseto' ? 4 + Math.floor(Math.random() * 3) : 1; // insetos vêm em bando
    const lado = Math.random() < 0.5 ? -1 : 1;
    const esquerda = S.cx - L / 2, topoY = S.cy - A / 2;
    const y0 = topoY + 12 + Math.random() * (A - 24);
    for (let i = 0; i < n; i++) criarInimigo(tipo, lado < 0 ? esquerda - 12 - i * 4 : esquerda + L + 12 + i * 4, y0 + (i - n / 2) * 7);
  }
  function particulas(x, y, n, cores, vel = 50) {
    if (S.parts.length > 400) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, v = (0.3 + Math.random()) * vel;
      S.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vida: 0.3 + Math.random() * 0.3, cor: cores[i % cores.length] });
    }
  }
  const texto = (x, y, txt, cor = '#ffffff') => S.textos.push({ x, y, txt, cor, vida: 1.1 });

  function iniciarOnda() {
    S.onda += 1;
    S.fila = Math.min(80, 14 + S.onda * 9);
    S.filaTaxa = S.fila / 2.4;
    S.filaAcc = 0;
    S.tremor = 0.3;
    S.proxOnda = S.t + Math.max(20, 32 - S.onda * 1.5);
    const novaFase = 1 + Math.floor(S.onda / 3); // a cada 3 ondas começa uma nova fase, com os monstros em outra "skin"
    if (novaFase > S.fase) { S.fase = novaFase; mostrarAviso(`!! FASE ${S.fase}: ${nomeTema()} !!`, 3.2); bip(330, 0.15, 'square', 0.05); bip(440, 0.15, 'square', 0.05, 0.15); bip(660, 0.3, 'square', 0.05, 0.3); }
    else { mostrarAviso('!! ONDA DE MONSTROS !!'); bip(140, 0.3, 'sawtooth', 0.05); bip(110, 0.4, 'sawtooth', 0.05, 0.25); }
  }

  function atirar(alvo) {
    const a = Math.atan2(alvo.y - S.ny, alvo.x - S.nx);
    S.mira = a;
    const n = S.projeteis, passo = 0.16;
    for (let i = 0; i < n; i++) {
      const ang = a + (i - (n - 1) / 2) * passo;
      S.tiros.push({ x: S.nx + Math.cos(ang) * 7, y: S.ny + Math.sin(ang) * 7, vx: Math.cos(ang) * S.velTiro, vy: Math.sin(ang) * S.velTiro, dano: S.dano, perf: S.perfura, acertou: new Set() });
    }
    bip(520 + Math.random() * 60, 0.04, 'square', 0.012);
  }
  function atirarInimigo(x, y, ang, vel, dano = 1) {
    S.tirosInimigos.push({ x, y, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, dano, vida: 7 });
  }

  function soltarCristal(x, y, v) {
    const ang = Math.random() * Math.PI * 2, vel = 16 + Math.random() * 22;
    const novo = { x, y, v, vx: Math.cos(ang) * vel, vy: Math.sin(ang) * vel, fase: Math.random() * 6 };
    S.cristais.push(novo);
    if (S.cristais.length > 220) novo.v += S.cristais.shift().v;
  }

  function ferirNave(dano) {
    if (S.invul > 0 || S.escudoT > 0) return false;
    if (S.barreira > 0) { S.barreira -= 1; S.invul = 0.7; S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 28, v: 90, cor: '#7dff9a' }); texto(S.nx, S.ny - 12, 'BLOQUEOU', '#7dff9a'); bip(660, 0.12, 'triangle', 0.05); return true; }
    S.hp -= dano; S.invul = 0.7; S.tremor = 0.2;
    bip(110, 0.18, 'sawtooth', 0.05);
    return true;
  }

  function danificar(m, dano) {
    if (m.sumido > 0 || m.morto) return;
    m.hp -= dano; m.piscar = 0.08;
    if (m.hp > 0) somAcerto(m);
    if (m.hp <= 0) { m.morto = true; matar(m); }
  }
  function matar(m) {
    if (m.tipo === 'chefe') { matarChefe(m); return; }
    if (m.tipo === 'alien') { S.pendente = 'vitoria'; particulas(m.x, m.y, 40, ['#7ad8a0', '#ff3bd4', '#ffffff', '#ffd23f'], 110); S.flash = 0.35; return; }
    const tp = TIPOS[m.tipo];
    S.kills += 1;
    soltarCristal(m.x, m.y, tp.xp);
    particulas(m.x, m.y, 8, ['#ffe14a', '#ffffff', '#ff7a59'], 60);
    somMorte(m.tipo);
    const chanceMoeda = { slime: 0.012, inseto: 0.01, morcego: 0.03, fantasma: 0.05, atirador: 0.08, ogro: 0.12 }[m.tipo] || 0;
    if (Math.random() < chanceMoeda) { S.itens.push({ tipo: 'moedaEsp', x: m.x, y: m.y, vida: 40, fase: Math.random() * 6 }); texto(m.x, m.y - 8, '◆', '#6fe8ff'); }
    const i = S.inimigos.indexOf(m); if (i >= 0) S.inimigos.splice(i, 1);
  }

  // ---------- rochas e itens ----------
  function criarRocha() {
    const ang = Math.random() * Math.PI * 2, d = 230 + Math.random() * 120, tam = Math.floor(Math.random() * 3);
    const hp = [4, 6, 9][tam];
    S.rochas.push({ x: S.nx + Math.cos(ang) * d, y: S.ny + Math.sin(ang) * d, vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8, tam, r: [8, 10, 13][tam], hp, hpMax: hp, piscar: 0 });
  }
  function batidaRocha(r) {
    r.hp -= 1; r.piscar = 0.08;
    particulas(r.x, r.y, 3, ['#9aa0ad', '#5a606c'], 40);
    bip(150, 0.04, 'square', 0.03);
    if (r.hp <= 0) quebrarRocha(r);
  }
  function quebrarRocha(r) {
    particulas(r.x, r.y, 16, ['#9aa0ad', '#5a606c', '#cfd6e0'], 70);
    bip(100, 0.15, 'sawtooth', 0.04);
    const i = S.rochas.indexOf(r); if (i >= 0) S.rochas.splice(i, 1);
    if (Math.random() < 0.9) S.itens.push({ tipo: sorteio(PESOS_ITENS), x: r.x, y: r.y, vida: 16, fase: Math.random() * 6 });
    else soltarCristal(r.x, r.y, 3);
  }
  function coletarItem(it) {
    const t = it.tipo;
    if (t === 'ima') { S.imaT = 1; texto(S.nx, S.ny - 12, 'ÍMÃ!', '#8be6ff'); }
    else if (t === 'explosao') { explosaoGlobal(); texto(S.nx, S.ny - 12, 'BOOM!', '#ffd23f'); }
    else if (t === 'coracao') { S.hp = Math.min(S.maxHp, S.hp + 2); texto(S.nx, S.ny - 12, '+VIDA', '#ff7a8a'); }
    else if (t === 'escudo') { S.escudoT = 6; texto(S.nx, S.ny - 12, 'ESCUDO!', '#8bd3ff'); }
    else if (t === 'turbo') { S.turboT = 8; texto(S.nx, S.ny - 12, 'TURBO!', '#ffe14a'); }
    else if (t === 'moedaEsp') { dados.moedas += 1; S.moedasRun += 1; salvarDados(); texto(S.nx, S.ny - 12, '+1 MOEDA', '#6fe8ff'); }
    bip(880, 0.06, 'square', 0.04); bip(1175, 0.08, 'square', 0.04, 0.06);
  }
  function explosaoGlobal() {
    S.flash = 0.28; S.tremor = 0.35;
    S.ondas.push({ x: S.nx, y: S.ny, r: 0, max: 210, v: 420, cor: '#ffd23f' });
    const dmg = 8 + S.dano * 3;
    for (const m of [...S.inimigos]) {
      if (!naTela(m)) continue;
      danificar(m, m.tipo === 'chefe' || m.tipo === 'alien' ? 14 : dmg);
      particulas(m.x, m.y, 4, ['#ffd23f', '#ff7a3a'], 60);
    }
    S.tirosInimigos = S.tirosInimigos.filter((b) => !naTela(b));
    bip(90, 0.4, 'sawtooth', 0.07); bip(60, 0.5, 'sawtooth', 0.07, 0.1);
  }

  function lancarBombas(ox, oy, n, aviso = 1.4) { // cada bomba cai num ponto: a primeira em cima da nave, as outras espalhadas em volta
    for (let i = 0; i < n; i++) {
      const ang = Math.random() * Math.PI * 2, d = i === 0 ? Math.random() * 14 : 28 + Math.random() * 55;
      let x = S.nx + Math.cos(ang) * d, y = S.ny + Math.sin(ang) * d;
      if (S.alien) { x = Math.max(ARENA.x0 + 10, Math.min(ARENA.x1 - 10, x)); y = Math.max(ARENA.y0 + 10, Math.min(ARENA.y1 - 10, y)); }
      S.campos.push({ x, y, r: 26, aviso: aviso + i * 0.15, avisoMax: aviso + i * 0.15, vida: 4, tick: 0, ox, oy });
    }
    bip(200, 0.1, 'square', 0.04); bip(160, 0.1, 'square', 0.04, 0.1);
  }

  // ---------- chefão ----------
  function criarChefeInimigo() {
    const lado = Math.random() < 0.5 ? -1 : 1;
    const hp = Math.round(150 * (1 + (S.fase - 1) * 0.4 + S.chefesVencidos * 0.35));
    const c = { tipo: 'chefe', x: S.cx + lado * (L / 2 + 40), y: S.cy - 30, hp, hpMax: hp, vel: 30, fase: 0, piscar: 0, v: S.fase - 1 + S.skinBase, cdRajada: 2.2, cdMira: 1.6, cdBomba: 4, rot: 0 };
    S.inimigos.push(c); S.chefe = c;
    mostrarAviso('!! CHEFÃO !!', 3);
    bip(90, 0.4, 'sawtooth', 0.06); bip(70, 0.5, 'sawtooth', 0.06, 0.3);
  }
  function moverChefe(c, dt) {
    const dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy) || 1;
    const px = -dy / d, py = dx / d, lado = Math.sin(S.ta * 0.8) * 0.3; // persegue a nave sem parar, balançando de lado
    const vel = c.vel + S.fase * 3;
    c.x += ((dx / d) + px * lado) * vel * dt;
    c.y += ((dy / d) + py * lado) * vel * dt;
    c.fase += dt;
    if (d > 300) return; // só ataca quando está perto
    c.cdRajada -= dt; c.cdMira -= dt; c.cdBomba -= dt;
    if (c.cdRajada <= 0) { // tiros em todas as direções
      const n = 12 + Math.min(8, S.fase * 2);
      for (let i = 0; i < n; i++) atirarInimigo(c.x, c.y, c.rot + (i * Math.PI * 2) / n, 55);
      c.rot += 0.27; c.cdRajada = Math.max(1.8, 3.2 - S.fase * 0.15);
      bip(180, 0.12, 'square', 0.04);
    }
    if (c.cdMira <= 0) { // leque apontado para a nave
      const a = Math.atan2(dy, dx), n = 3 + Math.min(2, S.fase - 1);
      for (let i = 0; i < n; i++) atirarInimigo(c.x, c.y, a + (i - (n - 1) / 2) * 0.2, 90);
      c.cdMira = 1.7;
    }
    if (c.cdBomba <= 0) { // lança de 1 a 3 bombas de uma vez
      const n = 1 + (Math.random() < 0.5 ? 1 : 0) + (S.fase >= 2 && Math.random() < 0.4 ? 1 : 0);
      lancarBombas(c.x, c.y, n);
      c.cdBomba = Math.max(3, 4.6 - S.fase * 0.2);
    }
  }
  function matarChefe(c) {
    S.kills += 5;
    S.chefe = null; S.chefesVencidos += 1; S.proxChefe = S.t + 100;
    const i = S.inimigos.indexOf(c); if (i >= 0) S.inimigos.splice(i, 1);
    particulas(c.x, c.y, 50, ['#ffd23f', '#ff7a3a', '#ffffff', '#ff3b4a'], 130);
    S.flash = 0.3; S.tremor = 0.5;
    const n = 4 + Math.min(4, S.chefesVencidos); // moedas espaciais
    for (let k = 0; k < n; k++) S.itens.push({ tipo: 'moedaEsp', x: c.x + (Math.random() - 0.5) * 46, y: c.y + (Math.random() - 0.5) * 30, vida: 60, fase: Math.random() * 6 });
    for (let k = 0; k < 6; k++) soltarCristal(c.x, c.y, 6);
    S.tirosInimigos = []; S.campos = [];
    mostrarAviso('CHEFÃO DERROTADO!', 2.6);
    bip(220, 0.3, 'triangle', 0.06); bip(330, 0.3, 'triangle', 0.06, 0.2); bip(440, 0.4, 'triangle', 0.06, 0.4);
  }

  // ---------- buraco negro e alienígena ----------
  function criarBuraco() {
    const ang = Math.random() * Math.PI * 2, d = 100 + Math.random() * 40;
    S.buraco = { x: S.nx + Math.cos(ang) * d, y: S.ny + Math.sin(ang) * d, vida: 28, r: 22 };
    mostrarAviso('BURACO NEGRO!', 2.4);
    bip(70, 0.5, 'sine', 0.07); bip(55, 0.6, 'sine', 0.07, 0.3);
  }
  function atualizarBuraco(dt) {
    const b = S.buraco;
    b.vida -= dt;
    const dx = b.x - S.nx, dy = b.y - S.ny, d = Math.hypot(dx, dy) || 1;
    if (d < 70) { const puxa = 38 * (1 - d / 70); S.nx += (dx / d) * puxa * dt; S.ny += (dy / d) * puxa * dt; } // a gravidade puxa a nave
    if (d < 9) { entrarBuraco(); return; }
    if (b.vida <= 0) { S.buraco = null; S.proxBuraco = S.t + 50 + Math.random() * 40; }
  }
  function entrarBuraco() {
    S.mundoSalvo = { nx: S.nx, ny: S.ny, cx: S.cx, cy: S.cy, inimigos: S.inimigos, tirosInimigos: S.tirosInimigos, campos: S.campos, hp: S.hp, buraco: S.buraco, chefe: S.chefe };
    const hpAlien = Math.round(48 * (1 + S.aliensVencidos * 0.5 + (S.fase - 1) * 0.2));
    const al = { tipo: 'alien', x: CX, y: 50, hp: hpAlien, hpMax: hpAlien, piscar: 0, fase: 0, v: 0, cd: 2, estado: 'espera', carga: 0, ataque: '', salvas: 0, cdSalva: 0, sumido: 0, ta: 0 };
    S.hp = S.maxHp; S.invul = 1; // dentro do buraco negro a nave luta com a vida cheia
    S.inimigos = [al]; S.tirosInimigos = []; S.campos = []; S.raios = []; S.tiros = []; S.misseis = []; S.chefe = null;
    S.alien = al; S.nx = CX; S.ny = A - 40; S.cx = CX; S.cy = CY;
    S.flash = 0.5; mostrarAviso('!! ALIENÍGENA !!', 2.4);
    bip(60, 0.6, 'sawtooth', 0.07);
  }
  function sairDoBuraco(vitoria) {
    const m = S.mundoSalvo;
    S.nx = m.nx; S.ny = m.ny; S.cx = m.cx; S.cy = m.cy;
    S.inimigos = m.inimigos; S.tirosInimigos = m.tirosInimigos; S.campos = m.campos; S.chefe = m.chefe;
    S.hp = m.hp; S.tiros = []; S.raios = []; S.misseis = []; S.alien = null; S.mundoSalvo = null; S.buraco = null;
    S.invul = 2; S.proxBuraco = S.t + 60 + Math.random() * 40; S.flash = 0.4;
    if (vitoria) {
      S.aliensVencidos += 1;
      for (let k = 0; k < 6; k++) soltarCristal(S.nx + (Math.random() - 0.5) * 40, S.ny + (Math.random() - 0.5) * 40, 6);
      const livres = Object.keys(NOMES_PODER).filter((id) => !S.poderes[id]);
      if (livres.length && S.slots.includes(null)) darPoder(S, livres[Math.floor(Math.random() * livres.length)]);
      else { S.hp = S.maxHp; mostrarAviso('ALIENÍGENA DERROTADO!', 3); }
      bip(523, 0.12, 'triangle', 0.06); bip(659, 0.12, 'triangle', 0.06, 0.12); bip(784, 0.12, 'triangle', 0.06, 0.24); bip(1047, 0.3, 'triangle', 0.06, 0.36);
    } else {
      mostrarAviso('EXPULSO DO BURACO NEGRO', 2.8);
      bip(120, 0.3, 'sawtooth', 0.05);
    }
  }
  function atualizarAlien(dt) {
    const al = S.alien;
    al.ta += dt; al.fase += dt;
    al.sumido = Math.max(0, al.sumido - dt);
    const furioso = al.hp < al.hpMax * 0.5;
    const rotaX = () => CX + Math.sin(al.ta * 0.7) * 95, rotaY = () => 48 + Math.sin(al.ta * 1.3) * 12;
    const mover = al.estado === 'espera' || al.estado === 'carga' || al.estado === 'salvas';
    if (mover && al.sumido <= 0) { al.x = rotaX(); al.y = rotaY(); }

    if (al.estado === 'espera') {
      al.cd -= dt;
      if (al.cd <= 0) {
        al.ataque = sorteio([['rajada', 3], ['mira', 3], ['teleporte', 2], ['invocar', furioso ? 2 : 1], ['investida', 3], ['raio', 3], ['bombas', 2]]);
        al.estado = 'carga'; al.carga = al.ataque === 'investida' ? 0.5 : 0.55;
      }
    } else if (al.estado === 'carga') {
      al.carga -= dt;
      if (al.carga <= 0) {
        if (al.ataque === 'rajada') { const n = furioso ? 22 : 16, rot = Math.random() * 6; for (let i = 0; i < n; i++) atirarInimigo(al.x, al.y, rot + (i * Math.PI * 2) / n, 62); al.estado = 'espera'; al.cd = furioso ? 1.4 : 2.1; }
        else if (al.ataque === 'mira') { al.salvas = furioso ? 4 : 3; al.cdSalva = 0; al.estado = 'salvas'; }
        else if (al.ataque === 'teleporte') { al.sumido = 0.7; al.estado = 'teleporte'; al.carga = 0.7; }
        else if (al.ataque === 'invocar') { const insetos = S.inimigos.filter((m) => m.tipo === 'inseto').length; for (let i = 0; i < 3 && insetos + i < 9; i++) criarInimigo('inseto', al.x + (i - 1) * 12, al.y + 14); al.estado = 'espera'; al.cd = 2; bip(300, 0.2, 'triangle', 0.05); }
        else if (al.ataque === 'investida') { // mostra por onde vai passar e depois dispara em linha reta
          const dx = S.nx - al.x, dy = S.ny - al.y, d = Math.hypot(dx, dy) || 1;
          al.dirX = dx / d; al.dirY = dy / d; al.estado = 'aviso'; al.carga = 0.8;
        } else if (al.ataque === 'raio') { // raios que miram a nave: linha de aviso e depois o raio de verdade
          const a0 = Math.atan2(S.ny - al.y, S.nx - al.x), angs = furioso ? [a0 - 0.5, a0, a0 + 0.5] : [a0];
          for (const ang of angs) S.raios.push({ x: al.x, y: al.y + 8, ang, aviso: 1, vida: 0.55, tick: 0, ligou: false });
          al.estado = 'espera'; al.cd = 2.4; bip(500, 0.3, 'sine', 0.05);
        } else if (al.ataque === 'bombas') { lancarBombas(al.x, al.y, furioso ? 4 : 3, 1.2); al.estado = 'espera'; al.cd = 2.2; }
        else al.estado = 'espera';
        bip(220, 0.12, 'square', 0.05);
      }
    } else if (al.estado === 'salvas') {
      al.cdSalva -= dt;
      if (al.cdSalva <= 0) {
        const a = Math.atan2(S.ny - al.y, S.nx - al.x);
        for (let i = -1; i <= 1; i++) atirarInimigo(al.x, al.y + 12, a + i * 0.22, 95);
        al.salvas -= 1; al.cdSalva = 0.28; bip(260, 0.06, 'square', 0.04);
        if (al.salvas <= 0) { al.estado = 'espera'; al.cd = furioso ? 1.2 : 1.8; }
      }
    } else if (al.estado === 'aviso') { // treme antes da investida
      al.carga -= dt;
      al.x += (Math.random() - 0.5) * 1.6; al.y += (Math.random() - 0.5) * 1.6;
      if (al.carga <= 0) { al.estado = 'investida'; al.dashT = furioso ? 0.85 : 0.7; bip(150, 0.25, 'sawtooth', 0.06); }
    } else if (al.estado === 'investida') { // corpo a corpo: avança em linha reta; encostar na nave machuca
      const v = furioso ? 330 : 280;
      al.x += al.dirX * v * dt; al.y += al.dirY * v * dt; al.dashT -= dt;
      const fora = al.x < ARENA.x0 || al.x > ARENA.x1 || al.y < ARENA.y0 || al.y > ARENA.y1;
      al.x = Math.max(ARENA.x0, Math.min(ARENA.x1, al.x)); al.y = Math.max(ARENA.y0 - 10, Math.min(ARENA.y1, al.y));
      if (al.dashT <= 0 || fora) { al.estado = 'volta'; S.tremor = Math.max(S.tremor, fora ? 0.2 : 0); }
    } else if (al.estado === 'volta') { // volta para a rota normal
      const tx = rotaX(), ty = rotaY(), dx = tx - al.x, dy = ty - al.y, d = Math.hypot(dx, dy) || 1;
      al.x += (dx / d) * Math.min(d, 210 * dt); al.y += (dy / d) * Math.min(d, 210 * dt);
      if (d < 5) { al.estado = 'espera'; al.cd = furioso ? 1.1 : 1.6; }
    } else if (al.estado === 'teleporte') {
      al.carga -= dt;
      if (al.carga <= 0) {
        al.x = ARENA.x0 + 20 + Math.random() * (ARENA.x1 - ARENA.x0 - 40); al.y = ARENA.y0 + 10 + Math.random() * 40; al.sumido = 0;
        for (let i = 0; i < 10; i++) atirarInimigo(al.x, al.y, (i * Math.PI * 2) / 10, 70);
        al.ta = Math.asin(Math.max(-1, Math.min(1, (al.x - CX) / 95))) / 0.7;
        al.estado = 'espera'; al.cd = 1.5; bip(440, 0.1, 'square', 0.05);
      }
    }
  }

  // ---------- movimento da nave ----------
  function moverNave(dt) {
    let mx = (teclas.has('ArrowRight') || teclas.has('KeyD') ? 1 : 0) - (teclas.has('ArrowLeft') || teclas.has('KeyA') ? 1 : 0);
    let my = (teclas.has('ArrowDown') || teclas.has('KeyS') ? 1 : 0) - (teclas.has('ArrowUp') || teclas.has('KeyW') ? 1 : 0);
    if (!mx && !my && ponteiro.ativo) {
      const dx = ponteiro.x - (S.nx - S.cx + L / 2), dy = ponteiro.y - (S.ny - S.cy + A / 2), d = Math.hypot(dx, dy);
      if (d > 3) { mx = dx / d; my = dy / d; }
    }
    const tam = Math.hypot(mx, my);
    S.movendo = tam > 0;
    if (tam > 0) { S.nx += (mx / tam) * S.velNave * dt; S.ny += (my / tam) * S.velNave * dt; }
    if (S.alien) {
      S.nx = Math.max(ARENA.x0, Math.min(ARENA.x1, S.nx)); S.ny = Math.max(ARENA.y0, Math.min(ARENA.y1, S.ny));
      S.cx = CX; S.cy = CY;
    } else {
      const seg = Math.min(1, dt * 5);
      S.cx += (S.nx - S.cx) * seg; S.cy += (S.ny - S.cy) * seg;
    }
  }

  // ---------- atualização ----------
  function atualizarMundo(dt) {
    S.spawnAcc += dt * (0.6 + Math.min(14, S.t * 0.035)) * (S.chefe ? 0.5 : 1);
    while (S.spawnAcc >= 1) { S.spawnAcc -= 1; spawn(); }
    if (S.t >= S.proxOnda && !S.chefe) iniciarOnda();
    if (S.fila > 0) {
      S.filaAcc += dt * S.filaTaxa;
      while (S.filaAcc >= 1 && S.fila > 0) { S.filaAcc -= 1; S.fila -= 1; spawn(true); }
    }
    if (!S.chefe && !S.buraco && S.t >= S.proxChefe) criarChefeInimigo();
    if (!S.chefe && !S.buraco && S.fila <= 0 && S.t >= S.proxBuraco) criarBuraco();
    if (S.buraco) { atualizarBuraco(dt); if (S.alien) return; }

    // rochas: poucas, à deriva; empurram a nave de leve se ela encostar
    if (S.rochas.length < 3 && Math.random() < dt * 0.12) criarRocha();
    for (let i = S.rochas.length - 1; i >= 0; i--) {
      const r = S.rochas[i];
      r.x += r.vx * dt; r.y += r.vy * dt; r.piscar = Math.max(0, r.piscar - dt);
      const dx = S.nx - r.x, dy = S.ny - r.y, d = Math.hypot(dx, dy) || 1;
      if (d > 650) { S.rochas.splice(i, 1); continue; }
      if (d < r.r + RAIO_NAVE) { S.nx += (dx / d) * (r.r + RAIO_NAVE - d); S.ny += (dy / d) * (r.r + RAIO_NAVE - d); }
    }

    // monstros
    for (const m of [...S.inimigos]) {
      if (m.tipo === 'chefe') { moverChefe(m, dt); continue; }
      const dx = S.nx - m.x, dy = S.ny - m.y, d = Math.hypot(dx, dy) || 1;
      let vx = (dx / d) * m.vel, vy = (dy / d) * m.vel;
      if (m.tipo === 'morcego') { const o = Math.sin(S.ta * 5 + m.fase) * 28; vx += (-dy / d) * o; vy += (dx / d) * o; }
      else if (m.tipo === 'inseto') { const o = Math.sin(S.ta * 9 + m.fase) * 22; vx += (-dy / d) * o; vy += (dx / d) * o; }
      else if (m.tipo === 'atirador') {
        const k = d > 110 ? 1 : d < 80 ? -0.8 : 0, ox = Math.sin(S.ta * 1.2 + m.fase) * 0.5;
        vx = ((dx / d) * k + (-dy / d) * ox) * m.vel; vy = ((dy / d) * k + (dx / d) * ox) * m.vel;
        m.cd -= dt;
        if (m.cd <= 0 && naTela(m)) { atirarInimigo(m.x, m.y, Math.atan2(dy, dx), 70); m.cd = 2.2 + Math.random() * 1.2; }
      }
      m.x += vx * dt; m.y += vy * dt;
      m.piscar = Math.max(0, m.piscar - dt);
    }
    S.inimigos = S.inimigos.filter((m) => m.tipo === 'chefe' || Math.hypot(m.x - S.nx, m.y - S.ny) < 520);

    // itens no chão
    for (let i = S.itens.length - 1; i >= 0; i--) {
      const it = S.itens[i];
      it.vida -= dt;
      const dx = S.nx - it.x, dy = S.ny - it.y, d = Math.hypot(dx, dy) || 1;
      if (it.tipo === 'moedaEsp' && d < S.raioIma * 1.3) { it.x += (dx / d) * 90 * dt; it.y += (dy / d) * 90 * dt; }
      if (d < RAIO_NAVE + 8) { coletarItem(it); S.itens.splice(i, 1); continue; }
      if (it.vida <= 0) S.itens.splice(i, 1);
    }

    // cristais de XP
    for (let i = S.cristais.length - 1; i >= 0; i--) {
      const c = S.cristais[i];
      c.x += c.vx * dt; c.y += c.vy * dt;
      const freio = Math.pow(0.05, dt); c.vx *= freio; c.vy *= freio;
      const dx = S.nx - c.x, dy = S.ny - c.y, d = Math.hypot(dx, dy) || 1;
      if (S.imaT > 0) { c.x += (dx / d) * 280 * dt; c.y += (dy / d) * 280 * dt; } // ímã: puxa todos de uma vez
      else if (d < S.raioIma) { const puxa = 70 + (S.raioIma - d) * 4; c.x += (dx / d) * puxa * dt; c.y += (dy / d) * puxa * dt; }
      if (d < RAIO_NAVE + S.raioPegar) {
        S.xp += c.v * S.bonusXp;
        S.cristais.splice(i, 1);
        particulas(c.x, c.y, 4, ['#8be6ff', '#ffffff'], 35);
        bip(740 + Math.min(c.v, 6) * 60, 0.05, 'square', 0.03);
      }
    }
  }

  function escolherAlvo() {
    let alvo = null, menor = Infinity;
    for (const m of S.inimigos) {
      if (m.sumido > 0 || !naTela(m)) continue;
      const d = Math.hypot(m.x - S.nx, m.y - S.ny);
      if (d < menor) { menor = d; alvo = m; }
    }
    // rochas perto da nave também são alvo, desde que nenhum monstro esteja colado nela
    let rocha = null, dr = 120;
    for (const r of S.rochas) { if (!naTela(r)) continue; const d = Math.hypot(r.x - S.nx, r.y - S.ny); if (d < dr) { dr = d; rocha = r; } }
    if (rocha && (!alvo || menor > 45)) return rocha;
    return alvo;
  }

  const nvl = (id) => S.niveis[id] | 0;
  const raioDe = (o) => o.r || TIPOS[o.tipo].raio;
  function selecionarArma(n) {
    if (modo !== 'jogando' || !S) return;
    if (n >= 3 && !S.slots[n - 3]) return; // slot ainda vazio
    if (S.arma === n) return;
    S.arma = n; bip(n === 2 ? 440 : 600, 0.05, 'square', 0.03);
  }
  function orbesPos() { // as bolas só existem quando a arma ativa é o poder de bolas de energia
    if (S.arma < 3 || S.slots[S.arma - 3] !== 'orbes') return [];
    const n = 2 + nvl('o_qtd'), R = 20 + n * 1.5;
    return Array.from({ length: n }, (_, k) => ({ x: S.nx + Math.cos(S.orbeAng + (k * Math.PI * 2) / n) * R, y: S.ny + Math.sin(S.orbeAng + (k * Math.PI * 2) / n) * R }));
  }
  function explosaoMissil(x, y) {
    const R = 28 * (1 + 0.2 * nvl('m_area')), dano = (5 + S.dano * 2) * (1 + 0.3 * nvl('m_dano'));
    S.ondas.push({ x, y, r: 0, max: R, v: 170, cor: '#ff9a3a' });
    particulas(x, y, 14, ['#ffd23f', '#ff7a3a', '#ffffff'], 80);
    S.tremor = Math.max(S.tremor, 0.1);
    for (const m of [...S.inimigos]) if (!(m.sumido > 0) && Math.hypot(m.x - x, m.y - y) < R + TIPOS[m.tipo].raio) danificar(m, dano);
    for (const r of [...S.rochas]) if (Math.hypot(r.x - x, r.y - y) < R + r.r) for (let k = 0; k < 3 && S.rochas.includes(r); k++) batidaRocha(r);
    bip(110, 0.18, 'sawtooth', 0.05); bip(70, 0.2, 'square', 0.04, 0.05);
  }

  function atualizarPoderes(dt) {
    const ativa = S.arma === 2 ? 'laser' : S.arma >= 3 ? S.slots[S.arma - 3] : 'normal';
    const rec = S.recM;

    // laser contínuo: dano alto, alcance curto, gasta energia e depois recarrega
    S.laser = null;
    let atirando = false;
    if (ativa === 'laser' && !S.laserQuente) {
      const alvo = escolherAlvo(), alc = S.laserAlc * (1 + 0.2 * nvl('l_alc'));
      if (alvo && Math.hypot(alvo.x - S.nx, alvo.y - S.ny) < alc + raioDe(alvo)) {
        atirando = true;
        const ang = Math.atan2(alvo.y - S.ny, alvo.x - S.nx), c = Math.cos(ang), s = Math.sin(ang);
        S.mira = ang; S.laser = { ang, len: alc };
        S.laserE -= dt;
        if (S.laserE <= 0) { S.laserE = 0; S.laserQuente = true; bip(180, 0.2, 'sawtooth', 0.04); }
        S.laserTick -= dt;
        if (S.laserTick <= 0) {
          S.laserTick = 0.1; S.laserN += 1;
          const dano = S.laserDano * S.dano * (1 + 0.3 * nvl('l_dano')) * 0.1;
          for (const m of [...S.inimigos]) {
            const dx = m.x - S.nx, dy = m.y - S.ny, ao = dx * c + dy * s, pe = Math.abs(-dx * s + dy * c), rr = TIPOS[m.tipo].raio;
            if (!(m.sumido > 0) && ao > 0 && ao < alc + rr && pe < rr + 3) { danificar(m, dano); if (Math.random() < 0.4) particulas(m.x, m.y, 1, ['#8bd3ff', '#ffffff'], 40); }
          }
          if (S.laserN % 3 === 0) for (const r of [...S.rochas]) { const dx = r.x - S.nx, dy = r.y - S.ny, ao = dx * c + dy * s, pe = Math.abs(-dx * s + dy * c); if (ao > 0 && ao < alc + r.r && pe < r.r + 2) batidaRocha(r); }
          som('laser', 90, () => bip(300 + Math.random() * 60, 0.06, 'sawtooth', 0.02));
        }
      }
    }
    if (!atirando) {
      S.laserE = Math.min(S.laserMax, S.laserE + dt * S.laserMax * 0.22 * rec * (1 + 0.35 * nvl('l_rec')));
      if (S.laserQuente && S.laserE >= S.laserMax * 0.4) S.laserQuente = false;
    }

    // míssil: dano em área nos inimigos mais próximos
    if (ativa === 'missil') {
      S.missilT -= dt;
      if (S.missilT <= 0) {
        const cand = [...S.inimigos.filter((m) => !(m.sumido > 0) && naTela(m)), ...S.rochas.filter(naTela)]
          .map((o) => ({ o, d: Math.hypot(o.x - S.nx, o.y - S.ny) })).filter((p) => p.d < 135).sort((p, q) => p.d - q.d);
        if (cand.length) {
          const n = 1 + nvl('m_qtd');
          for (let i = 0; i < n; i++) {
            const alvo = cand[i % cand.length].o;
            S.misseis.push({ x: S.nx, y: S.ny, ang: Math.atan2(alvo.y - S.ny, alvo.x - S.nx) + (i - (n - 1) / 2) * 0.9, alvo, vida: 2, v: 70 });
          }
          S.missilMax = 3.6 / (rec * (1 + 0.3 * nvl('m_rec'))); S.missilT = S.missilMax;
          bip(240, 0.12, 'sawtooth', 0.04); bip(420, 0.12, 'sawtooth', 0.03, 0.06);
        } else S.missilT = 0;
      }
    }
    for (let i = S.misseis.length - 1; i >= 0; i--) { // mísseis em voo seguem o alvo
      const m = S.misseis[i], a = m.alvo;
      const vivo = a && (a.hp > 0) && !a.morto && (S.inimigos.includes(a) || S.rochas.includes(a));
      if (vivo) { const alvoAng = Math.atan2(a.y - m.y, a.x - m.x); let df = alvoAng - m.ang; df = Math.atan2(Math.sin(df), Math.cos(df)); m.ang += Math.max(-6 * dt, Math.min(6 * dt, df)); }
      m.v = Math.min(150, m.v + 160 * dt);
      m.x += Math.cos(m.ang) * m.v * dt; m.y += Math.sin(m.ang) * m.v * dt; m.vida -= dt;
      if (Math.random() < 0.6) S.parts.push({ x: m.x, y: m.y, vx: 0, vy: 0, vida: 0.25, cor: Math.random() < 0.5 ? '#ffd23f' : '#ff7a3a' });
      if ((vivo && Math.hypot(a.x - m.x, a.y - m.y) < raioDe(a) + 3) || m.vida <= 0) { S.misseis.splice(i, 1); explosaoMissil(m.x, m.y); }
    }

    // bolas de energia: giram em volta da nave e ferem por contato
    if (ativa === 'orbes') {
      S.orbeAng += dt * 3.2 * (1 + 0.25 * nvl('o_vel'));
      const dano = (2 + S.dano * 0.5) * (1 + 0.3 * nvl('o_dano'));
      for (const o of orbesPos()) {
        for (const m of [...S.inimigos]) {
          if (m.sumido > 0) continue;
          m.cdOrbe = (m.cdOrbe || 0) - dt;
          if (m.cdOrbe <= 0 && Math.hypot(o.x - m.x, o.y - m.y) < TIPOS[m.tipo].raio + 4) { danificar(m, dano); m.cdOrbe = 0.35; particulas(m.x, m.y, 2, ['#ff3bd4', '#ffffff'], 40); }
        }
        for (const r of [...S.rochas]) {
          r.cdOrbe = (r.cdOrbe || 0) - dt;
          if (r.cdOrbe <= 0 && Math.hypot(o.x - r.x, o.y - r.y) < r.r + 4) { batidaRocha(r); r.cdOrbe = 0.5; }
        }
      }
    }
  }

  function atualizarProjeteis(dt) {
    for (let i = S.tiros.length - 1; i >= 0; i--) {
      const b = S.tiros[i];
      b.x += b.vx * dt; b.y += b.vy * dt;
      if (Math.hypot(b.x - S.nx, b.y - S.ny) > 260) { S.tiros.splice(i, 1); continue; }
      let removida = false;
      for (const m of [...S.inimigos]) {
        if (b.acertou.has(m) || m.sumido > 0) continue;
        if (Math.hypot(b.x - m.x, b.y - m.y) < TIPOS[m.tipo].raio + 2) {
          b.acertou.add(m);
          particulas(b.x, b.y, 2, ['#ffe14a', '#ffffff'], 40);
          danificar(m, b.dano);
          if (b.perf > 0) b.perf -= 1; else { removida = true; break; }
        }
      }
      if (!removida) {
        for (const r of [...S.rochas]) {
          if (b.acertou.has(r)) continue;
          if (Math.hypot(b.x - r.x, b.y - r.y) < r.r + 2) {
            b.acertou.add(r); batidaRocha(r);
            if (b.perf > 0) b.perf -= 1; else { removida = true; break; }
          }
        }
      }
      if (removida) S.tiros.splice(i, 1);
    }
  }

  function atualizarInimigosTiros(dt) {
    for (let i = S.tirosInimigos.length - 1; i >= 0; i--) {
      const b = S.tirosInimigos[i];
      b.x += b.vx * dt; b.y += b.vy * dt; b.vida -= dt;
      if (b.vida <= 0 || Math.hypot(b.x - S.nx, b.y - S.ny) > 420) { S.tirosInimigos.splice(i, 1); continue; }
      if (Math.hypot(b.x - S.nx, b.y - S.ny) < RAIO_NAVE + 1.5) { ferirNave(b.dano); particulas(b.x, b.y, 4, ['#ff5a8a', '#ffffff'], 50); S.tirosInimigos.splice(i, 1); }
    }
    for (let i = S.raios.length - 1; i >= 0; i--) { // raios do alienígena: aviso fino e depois o raio
      const r = S.raios[i];
      if (r.aviso > 0) { r.aviso -= dt; continue; }
      if (!r.ligou) { r.ligou = true; S.tremor = Math.max(S.tremor, 0.2); bip(110, 0.4, 'sawtooth', 0.06); }
      r.vida -= dt; r.tick -= dt;
      const dx = S.nx - r.x, dy = S.ny - r.y, ao = dx * Math.cos(r.ang) + dy * Math.sin(r.ang), pe = Math.abs(-dx * Math.sin(r.ang) + dy * Math.cos(r.ang));
      if (ao > 0 && ao < 400 && pe < 8 && r.tick <= 0) { ferirNave(1); r.tick = 0.3; }
      if (r.vida <= 0) S.raios.splice(i, 1);
    }
    for (let i = S.campos.length - 1; i >= 0; i--) { // áreas de bomba
      const c = S.campos[i];
      if (c.aviso > 0) { c.aviso -= dt; if (c.aviso <= 0) { S.tremor = Math.max(S.tremor, 0.15); bip(100, 0.2, 'sawtooth', 0.05); } continue; }
      c.vida -= dt; c.tick -= dt;
      if (Math.hypot(S.nx - c.x, S.ny - c.y) < c.r + 3 && c.tick <= 0) { ferirNave(1); c.tick = 0.5; }
      if (c.vida <= 0) S.campos.splice(i, 1);
    }
  }

  function atualizarContatos() {
    for (const m of [...S.inimigos]) {
      const tp = TIPOS[m.tipo];
      const d = Math.hypot(m.x - S.nx, m.y - S.ny);
      if (d >= tp.raio + RAIO_NAVE || m.sumido > 0) continue;
      if (m.tipo === 'chefe' || m.tipo === 'alien') { // grandes não morrem no contato: ferem e empurram a nave
        if (ferirNave(tp.dano)) { const dx = S.nx - m.x, dy = S.ny - m.y, dd = Math.hypot(dx, dy) || 1; S.nx += (dx / dd) * 18; S.ny += (dy / dd) * 18; }
        continue;
      }
      particulas(m.x, m.y, 10, ['#ff3b4a', '#ffb3ba', '#ffffff'], 70);
      const i = S.inimigos.indexOf(m); if (i >= 0) S.inimigos.splice(i, 1);
      ferirNave(tp.dano);
    }
  }

  function atualizar(dt) {
    S.ta += dt;
    if (!S.alien) S.t += dt;
    S.invul = Math.max(0, S.invul - dt); S.tremor = Math.max(0, S.tremor - dt); S.flash = Math.max(0, S.flash - dt);
    S.imaT = Math.max(0, S.imaT - dt); S.turboT = Math.max(0, S.turboT - dt); S.escudoT = Math.max(0, S.escudoT - dt);
    S.aviso = Math.max(0, S.aviso - dt);
    if (S.upgFx) { S.upgFx.t -= dt; if (S.upgFx.t <= 0) S.upgFx = null; }

    moverNave(dt);
    if (S.alien) atualizarAlien(dt); else atualizarMundo(dt);
    S.recarga -= dt;
    if (S.arma === 1 && S.recarga <= 0) {
      const alvo = escolherAlvo();
      if (alvo) { atirar(alvo); S.recarga = 1 / (S.cadencia * (S.turboT > 0 ? 2 : 1)); } else S.recarga = 0.05;
    }
    if (S.barreira < S.barreiraMax) { S.barreiraT += dt; if (S.barreiraT >= S.tempoBarreira) { S.barreira += 1; S.barreiraT = 0; texto(S.nx, S.ny - 12, 'ESCUDO ON', '#7dff9a'); bip(520, 0.08, 'triangle', 0.04); } }
    atualizarPoderes(dt);
    atualizarProjeteis(dt);
    atualizarInimigosTiros(dt);
    atualizarContatos();

    for (const o of S.ondas) o.r += o.v * dt;
    S.ondas = S.ondas.filter((o) => o.r < o.max);
    for (let i = S.parts.length - 1; i >= 0; i--) { const p = S.parts[i]; p.x += p.vx * dt; p.y += p.vy * dt; p.vida -= dt; if (p.vida <= 0) S.parts.splice(i, 1); }
    for (let i = S.textos.length - 1; i >= 0; i--) { const t = S.textos[i]; t.y -= 14 * dt; t.vida -= dt; if (t.vida <= 0) S.textos.splice(i, 1); }
    for (const m of S.inimigos) m.piscar = Math.max(0, (m.piscar || 0) - dt);

    if (S.hp <= 0 && !S.pendente) { if (S.alien) S.pendente = 'expulso'; else { fimDeJogo(); return; } }
    if (S.pendente) { const p = S.pendente; S.pendente = null; sairDoBuraco(p === 'vitoria'); return; }
    if (S.xp >= S.xpProx) subirNivel();
  }

  // ---------- melhorias ----------
  let opcoes = [];
  function subirNivel() {
    S.xp -= S.xpProx;
    S.nivel += 1;
    S.xpProx = Math.round(S.xpProx * 1.35 + 3);
    const disponiveis = MELHORIAS.filter((m) => (S.niveis[m.id] | 0) < m.max && (!m.requer || m.requer(S)));
    opcoes = disponiveis.sort(() => Math.random() - 0.5).slice(0, 3);
    if (!opcoes.length) return;
    modo = 'escolha';
    bip(784, 0.1, 'square', 0.05); bip(988, 0.1, 'square', 0.05, 0.1); bip(1319, 0.16, 'square', 0.05, 0.2);
    painelEscolha.replaceChildren(el('h3', null, `NÍVEL ${S.nivel}!`), el('p', null, 'Escolha uma melhoria:'));
    const lista = el('div', 'arc-cartas');
    opcoes.forEach((m, i) => {
      const b = el('button', 'arc-carta');
      b.append(el('small', null, `[${i + 1}]`), el('b', null, m.nome), el('span', null, m.desc), el('em', null, `nv ${(S.niveis[m.id] | 0)} → ${(S.niveis[m.id] | 0) + 1} (máx ${m.max})`));
      b.onclick = () => escolher(i);
      lista.append(b);
    });
    painelEscolha.append(lista);
    painelEscolha.hidden = false;
  }
  function escolher(i) {
    if (modo !== 'escolha' || !opcoes[i]) return;
    const m = opcoes[i];
    m.aplicar(S);
    S.niveis[m.id] = (S.niveis[m.id] | 0) + 1;
    atualizarNaveSpr();
    S.upgFx = { t: 1, max: 1 };
    particulas(S.nx, S.ny, 18, ['#ffe14a', '#ffffff', '#8bd3ff'], 80);
    texto(S.nx, S.ny - 16, `▲ ${m.nome}`, '#ffe14a');
    painelEscolha.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    bip(660, 0.08, 'triangle', 0.05);
  }

  // ---------- oficina: a nave aberta, com cada peça ligada às suas melhorias ----------
  const PARTES = [
    { nome: 'NÚCLEO DE ENERGIA', sub: 'Reator principal: energia para todos os sistemas', lado: 'esq', ancora: [0.5, 0.5], ids: ['nucleo', 'bateria'] },
    { nome: 'MOTOR PRINCIPAL', sub: 'Propulsão, impulso e velocidade', lado: 'esq', ancora: [0.16, 0.6], ids: ['motor'] },
    { nome: 'ESTRUTURA / CASCO', sub: 'Blindagem e resistência a danos', lado: 'esq', ancora: [0.27, 0.27], ids: ['casco'] },
    { nome: 'ANTENA / SENSORES', sub: 'Detecção de cristais e ganho de XP', lado: 'dir', ancora: [0.5, 0.07], ids: ['ima', 'xp'] },
    { nome: 'ARMAS LATERAIS', sub: 'Canhões e lente do laser', lado: 'dir', ancora: [0.88, 0.42], ids: ['dano', 'cadencia', 'projetil', 'lente'] },
    { nome: 'ESCUDO', sub: 'Barreira de energia regenerativa', lado: 'dir', ancora: [0.8, 0.8], ids: ['escudo'] },
  ];
  const canvasNave = document.createElement('canvas'); canvasNave.width = canvasNave.height = 128; canvasNave.className = 'of-nave';
  const gNave = canvasNave.getContext('2d'); gNave.imageSmoothingEnabled = false;
  let naveBase = null, fxOficina = null;

  function montarNave(nv) { // desenha a nave aberta (parte parada); as luzes e chamas são animadas por cima
    const s = novoSprite(128, 128);
    const AZ = '#2e7de0', CIN = '#8b93a8', CIN2 = '#5a6176', CIN3 = '#c9cdd8', ESC = '#171b2c', LAR = '#ff7a3a', VERM = '#e2533a';
    for (const [x0, x1] of [[44, 34], [82, 92]]) { // trem de pouso
      for (let k = 0; k < 3; k++) s.linha(x0 + k, 92, x1 + k, 118, k === 1 ? CIN : CIN2);
      s.retangulo(x1 - 5, 118, 13, 3, CIN3);
    }
    s.retangulo(0, 122, 128, 6, '#12172b'); // plataforma com faixas de alerta
    for (let i = 0; i < 128; i += 8) s.retangulo(i, 123, 4, 4, '#ffd23f');
    s.disco(62, 60, 38, AZ); // casco
    s.disco(65, 62, 33, ESC); // interior aberto
    s.elipse(46, 30, 7, 3, '#cfe9ff'); s.elipse(40, 36, 3, 2, '#9cc9ff');
    for (const [x, y, w, h] of [[40, 44, 14, 9], [42, 70, 12, 10], [78, 44, 12, 8], [80, 72, 14, 9], [56, 84, 16, 7], [56, 36, 14, 7]]) { s.retangulo(x, y, w, h, CIN2); s.retangulo(x, y, w, 1, CIN); s.retangulo(x + 2, y + 3, w - 4, 2, '#2d3348'); }
    for (const [x0, y0, x1, y1] of [[40, 60, 52, 60], [78, 60, 92, 60], [65, 40, 65, 50], [65, 74, 65, 84], [47, 53, 47, 66], [86, 52, 86, 70]]) { s.linha(x0, y0, x1, y1, LAR); s.linha(x0 + 1, y0 + 1, x1 + 1, y1 + 1, '#b34a1e'); }
    for (const [x, y, c] of [[86, 49, '#ffd23f'], [45, 47, '#ff3b4a'], [82, 76, '#7dff9a'], [60, 87, '#ffd23f']]) s.pixel(x, y, c);
    s.disco(65, 62, 14, CIN); s.disco(65, 62, 12, '#10131f'); // caixa do núcleo
    for (const [x, y] of [[50, 47], [79, 47], [50, 76], [79, 76]]) s.retangulo(x, y, 3, 3, CIN3);
    for (let k = 0; k < nv.bateria; k++) { s.retangulo(51 + k * 5, 85, 4, 6, '#10131f'); s.retangulo(52 + k * 5, 86, 2, 4, '#7dff9a'); }
    s.disco(80, 34, 5, CIN3); s.disco(80, 34, 4, '#8bd3ff'); s.retangulo(77, 33, 6, 1, '#ffffff'); // cabine
    for (let k = 0; k < nv.casco; k++) { // placas extras do casco
      const an = 2.6 + k * 0.5, px = Math.round(62 + Math.cos(an) * 35), py = Math.round(60 + Math.sin(an) * 35);
      s.retangulo(px - 2, py - 2, 5, 5, CIN2); s.retangulo(px - 1, py - 1, 3, 3, CIN3);
    }
    const n = 1 + nv.projetil, len = 18 + Math.floor(nv.dano * 1.6);
    for (let i = 0; i < n; i++) { // canhões laterais
      const y = 48 + i * 9;
      s.retangulo(88, y - 2, 8, 9, CIN); s.retangulo(90, y, len, 5, VERM); s.retangulo(90, y, len, 1, '#ff9a6a'); s.retangulo(90 + len, y - 1, 3, 7, CIN3);
      if (nv.lente > 0) s.disco(90 + len + 5, y + 2, 2, '#7be3ff');
      for (let k = 0; k < nv.cadencia; k++) s.retangulo(92 + k * 4, y + 1, 1, 3, '#ffd23f');
    }
    s.retangulo(16, 50, 24, 22, CIN); for (const x of [20, 26, 32]) s.retangulo(x, 50, 2, 22, CIN2); // motor
    s.poligono([[16, 50], [8, 44], [8, 78], [16, 72]], CIN2); s.poligono([[14, 54], [10, 50], [10, 72], [14, 68]], '#10131f');
    if (nv.motor >= 3) { s.retangulo(18, 76, 14, 6, CIN); s.retangulo(14, 76, 4, 6, CIN2); }
    if (nv.motor >= 2) { s.poligono([[28, 50], [32, 41], [36, 50]], LAR); s.poligono([[28, 72], [32, 81], [36, 72]], LAR); }
    s.retangulo(63, 10, 3, 14, CIN); s.disco(64, 8, 4, '#e2243a'); s.pixel(63, 6, '#ffb3ba'); // antena
    for (let k = 0; k < Math.min(4, nv.ima); k++) s.elipse(72 + k * 5, 17 - k * 2, 4, 2, k % 2 ? CIN : CIN3);
    if (nv.xp > 0) { s.retangulo(55, 14, 2, 8, CIN); s.disco(56, 13, 2, '#7dff9a'); }
    s.contorno('#070a1a');
    return s.c;
  }
  const discoNave = (cx, cy, r, cor) => { gNave.fillStyle = cor; for (let j = -r; j <= r; j++) for (let i = -r; i <= r; i++) if (i * i + j * j <= r * r + 0.5) gNave.fillRect(cx + i, cy + j, 1, 1); };
  function animarNave(t) {
    const nv = dados.oficina;
    const fx = fxOficina && t - fxOficina.t0 < 1.2 ? { i: fxOficina.i, u: (t - fxOficina.t0) / 1.2 } : null;
    gNave.clearRect(0, 0, 128, 128);
    if (naveBase) gNave.drawImage(naveBase, 0, 0);
    const cor = nv.nucleo >= 4 ? ['#ff7a2a', '#ffc14a'] : nv.nucleo >= 2 ? ['#22b85a', '#7dff9a'] : ['#2f8cff', '#8bd3ff'];
    const pulso = Math.sin(t * 4) > 0 ? 1 : 0;
    discoNave(65, 62, 9 + pulso, cor[0]); discoNave(65, 62, 6, cor[1]); discoNave(65, 62, 3, '#ffffff');
    gNave.fillStyle = cor[1]; for (let k = 0; k < 6; k++) { const an = t * 2 + (k * Math.PI) / 3; gNave.fillRect(Math.round(65 + Math.cos(an) * 12), Math.round(62 + Math.sin(an) * 12), 1, 1); }
    const chama = (y) => { const comp = Math.round((8 + nv.motor * 3 + Math.floor(Math.random() * 4)) * (fx && fx.i === 1 ? 1 + 1.5 * (1 - fx.u) : 1)); for (let i = 0; i < comp; i++) { const h = Math.max(1, Math.round((1 - i / comp) * 12)); gNave.fillStyle = i < comp * 0.35 ? '#fff0a0' : i < comp * 0.7 ? '#ffc83d' : '#ff7a3a'; gNave.fillRect(7 - i, y - (h >> 1), 1, h); } };
    chama(61); if (nv.motor >= 3) chama(79);
    if (Math.floor(t * 2) % 2) { gNave.fillStyle = '#ff9aa6'; gNave.fillRect(63, 6, 2, 2); }
    const nCan = 1 + nv.projetil, len = 18 + Math.floor(nv.dano * 1.6);
    if (Math.floor(t * 3) % 2) for (let i = 0; i < nCan; i++) { gNave.fillStyle = '#ffe14a'; gNave.fillRect(90 + len + 3, 48 + i * 9 + 2, 2, 1); }
    const alfa = nv.escudo > 0 ? 0.35 + 0.13 * nv.escudo : 0.12;
    gNave.globalAlpha = Math.min(1, alfa); gNave.fillStyle = '#7dff9a';
    for (const [raio, ativo] of [[48, true], [51, nv.escudo >= 4]]) {
      if (!ativo) continue;
      for (let k = 0; k < 72; k += 2) { const an = (k * Math.PI * 2) / 72 + t * 0.4; gNave.fillRect(Math.round(62 + Math.cos(an) * raio), Math.round(60 + Math.sin(an) * raio), 2, 2); }
    }
    gNave.globalAlpha = 1;
    if (fx) efeitoParte(fx, nv);
  }
  function efeitoParte(fx, nv) { // a peça melhorada brilha: anel que se expande, faíscas e um efeito próprio de cada parte
    const p = PARTES[fx.i], ax = Math.round(p.ancora[0] * 128), ay = Math.round(p.ancora[1] * 128), u = fx.u;
    const anel = (cx, cy, r, cor, n = 28) => { gNave.fillStyle = cor; for (let k = 0; k < n; k++) { const an = (k * Math.PI * 2) / n; gNave.fillRect(Math.round(cx + Math.cos(an) * r), Math.round(cy + Math.sin(an) * r), 2, 2); } };
    gNave.globalAlpha = 1 - u;
    anel(ax, ay, 4 + u * 26, '#ffe14a');
    gNave.fillStyle = '#ffffff';
    for (let k = 0; k < 10; k++) { const an = k * 0.63 + 1, d = u * 34; gNave.fillRect(Math.round(ax + Math.cos(an) * d), Math.round(ay + Math.sin(an) * d - u * 6), 2, 2); }
    if (fx.i === 0) discoNave(65, 62, 12 + Math.round(u * 8), '#ffffff');
    else if (fx.i === 2) anel(62, 60, 39, '#ffffff', 64);
    else if (fx.i === 3) { anel(64, 8, u * 42, '#8bd3ff', 36); anel(64, 8, u * 24, '#ffffff', 24); }
    else if (fx.i === 4) { const len = 18 + Math.floor(nv.dano * 1.6); for (let i = 0; i < 1 + nv.projetil; i++) discoNave(90 + len + 6, 50 + i * 9, 4, '#ffe14a'); }
    else if (fx.i === 5) anel(62, 60, 48 + u * 6, '#ffffff', 72);
    gNave.globalAlpha = 1;
  }

  function desenharLinhas() { // linhas azuis ligando cada quadro à sua peça na nave
    const corpo = painelOficina.querySelector('.of-corpo'); if (!corpo) return;
    const svg = corpo.querySelector('svg'); svg.replaceChildren();
    if (getComputedStyle(svg).display === 'none') return;
    const cb = corpo.getBoundingClientRect(), cr = canvasNave.getBoundingClientRect(), NS = 'http://www.w3.org/2000/svg';
    corpo.querySelectorAll('.of-parte').forEach((card) => {
      const p = PARTES[Number(card.dataset.i)], r = card.getBoundingClientRect();
      const x0 = (p.lado === 'esq' ? r.right : r.left) - cb.left, y0 = (r.top + r.bottom) / 2 - cb.top;
      const x1 = cr.left + p.ancora[0] * cr.width - cb.left, y1 = cr.top + p.ancora[1] * cr.height - cb.top, xm = x0 + (p.lado === 'esq' ? 18 : -18);
      const path = document.createElementNS(NS, 'path'); path.setAttribute('d', `M${x0} ${y0} L${xm} ${y0} L${x1} ${y1}`); path.setAttribute('class', 'of-linha');
      const ponto = document.createElementNS(NS, 'circle'); ponto.setAttribute('cx', x1); ponto.setAttribute('cy', y1); ponto.setAttribute('r', 4); ponto.setAttribute('class', 'of-ponto');
      svg.append(path, ponto);
    });
  }
  window.addEventListener('resize', () => { if (modo === 'oficina') desenharLinhas(); });

  function renderOficina(destaque = -1, idDest = '') {
    const nv = dados.oficina;
    naveBase = montarNave(nv);
    const topo = el('div', 'of-topo');
    const voltar = el('button', 'arc-btn', 'VOLTAR [ESC]'); voltar.onclick = fecharOficina;
    topo.append(el('h3', null, 'OFICINA · ENGENHARIA DA NAVE'), el('span', 'of-moedas', `◆ ${dados.moedas}`), voltar);
    const corpo = el('div', 'of-corpo');
    const esq = el('div', 'of-col'), dir = el('div', 'of-col'), centro = el('div', 'of-centro');
    centro.append(canvasNave, el('p', null, 'Cada peça da nave tem melhorias permanentes. Moedas espaciais caem dos chefões e de alguns monstros.'));
    PARTES.forEach((p, i) => {
      const card = el('div', i === destaque ? 'of-parte upgradiada' : 'of-parte'); card.dataset.i = String(i);
      if (i === destaque) card.append(el('span', 'of-selo', '▲ UPGRADE!'));
      card.append(el('h4', null, p.nome), el('p', 'sub', p.sub));
      for (const id of p.ids) {
        const o = OFICINA.find((x) => x.id === id), n = nv[id], cheio = n >= o.max, custo = o.custo(n);
        const linha = el('div', i === destaque && id === idDest ? 'of-melhoria upg' : 'of-melhoria');
        const info = el('div', 'info');
        const pips = el('span', 'pips'); for (let k = 0; k < o.max; k++) pips.append(el('i', k < n ? (k === n - 1 && i === destaque && id === idDest ? 'on nova' : 'on') : ''));
        info.append(el('b', null, o.nome), el('small', null, o.desc), pips);
        const b = el('button', 'arc-btn pequeno', cheio ? 'MÁX' : `◆${custo}`);
        b.disabled = cheio || dados.moedas < custo;
        b.onclick = () => { if (dados.moedas >= custo && !cheio) { dados.moedas -= custo; dados.oficina[id] += 1; salvarDados(); bip(880, 0.08, 'square', 0.05); bip(1175, 0.1, 'square', 0.05, 0.08); bip(1568, 0.16, 'triangle', 0.05, 0.16); fxOficina = { i, t0: performance.now() / 1000 }; atualizarNaveSpr(); renderOficina(i, id); atualizarBotoesMoedas(); } };
        linha.append(info, b); card.append(linha);
      }
      (p.lado === 'esq' ? esq : dir).append(card);
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'of-svg');
    corpo.append(esq, centro, dir, svg);
    const rodape = el('p', 'of-rodape', 'ARMAS DE BORDO: [1] tiro normal · [2] laser contínuo · [3] e [4] poderes (míssil, bolas de energia), conquistados ao subir de nível ou vencer o alienígena.');
    painelOficina.replaceChildren(topo, corpo, rodape);
    animarNave(performance.now() / 1000);
    requestAnimationFrame(desenharLinhas);
  }
  function atualizarBotoesMoedas() { btnOficinaIni.textContent = `OFICINA (◆${dados.moedas})`; }
  function abrirOficina() {
    voltarPara = modo === 'fim' ? 'fim' : 'inicio';
    modo = 'oficina';
    painelInicio.hidden = true; painelFim.hidden = true;
    renderOficina(); painelOficina.hidden = false;
    requestAnimationFrame(desenharLinhas);
  }
  function fecharOficina() {
    if (modo !== 'oficina') return;
    modo = voltarPara;
    painelOficina.hidden = true;
    (voltarPara === 'fim' ? painelFim : painelInicio).hidden = false;
    atualizarBotoesMoedas();
  }

  // ---------- fim ----------
  function fimDeJogo() {
    modo = 'fim';
    const bonus = Math.min(BONUS_MAXIMO, Math.floor(S.kills / 30) + Math.floor(S.nivel / 3));
    const tempo = Math.floor(S.t);
    const novoRecorde = tempo > dados.tempo || S.kills > dados.kills;
    dados.tempo = Math.max(dados.tempo, tempo); dados.kills = Math.max(dados.kills, S.kills);
    dados.skin = (dados.skin + 1 + Math.floor(Math.random() * (TEMAS.length - 1))) % TEMAS.length; // próxima partida: outro tema de monstros
    dados.moedas += bonus;
    salvarDados();
    bip(220, 0.25, 'sawtooth', 0.05); bip(165, 0.35, 'sawtooth', 0.05, 0.25);
    painelFim.replaceChildren(
      el('h3', null, 'FIM DE JOGO'),
      el('p', null, `Tempo: ${fmt(tempo)} · Monstros: ${S.kills} · Nível: ${S.nivel} · Fase: ${S.fase}`),
      el('p', 'ganhou', `+${bonus + S.moedasRun} ◆ MOEDAS ESPACIAIS`),
      el('p', 'dica', `${S.moedasRun} coletadas + ${bonus} de bônus · Recorde: ${fmt(dados.tempo)} · ${dados.kills} monstros${novoRecorde ? ' · NOVO RECORDE!' : ''}`),
    );
    const de = el('button', 'arc-btn', 'JOGAR DE NOVO [ESPAÇO]'); de.onclick = comecar;
    const of = el('button', 'arc-btn sec', `OFICINA (◆${dados.moedas})`); of.onclick = abrirOficina;
    const sair = el('button', 'arc-btn sec', 'SAIR'); sair.onclick = fecharJanela;
    painelFim.append(de, of, sair);
    painelFim.hidden = false;
  }
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  // ---------- desenho ----------
  const spriteCristal = (v) => (v >= 6 ? sprites.cristais[6] : v >= 3 ? sprites.cristais[3] : v >= 2 ? sprites.cristais[2] : sprites.cristais[1]);
  const barra = (x, y, w, frac, cor) => { g.fillStyle = '#070a1a'; g.fillRect(x - 1, y - 1, w + 2, 6); g.fillStyle = '#3a2030'; g.fillRect(x, y, w, 4); g.fillStyle = cor; g.fillRect(x, y, Math.max(0, Math.round(w * frac)), 4); };

  function desenharArena(t) {
    g.fillStyle = '#0a0614'; g.fillRect(0, 0, L, A);
    for (let k = 0; k < 6; k++) { const r = 10 + ((t * 22 + k * 40) % 240); g.strokeStyle = `rgba(138, 92, 255, ${0.28 * (1 - r / 250)})`; g.lineWidth = 1; g.beginPath(); g.arc(CX, CY, r, 0, Math.PI * 2); g.stroke(); }
    for (let i = 0; i < 40; i++) { g.fillStyle = Math.sin(t * 2 + i) > 0 ? '#9a86c0' : '#3a2f60'; g.fillRect((i * 53) % L, (i * 31) % A, 1, 1); }
    g.strokeStyle = '#8a5cff'; g.lineWidth = 2; g.strokeRect(ARENA.x0 - 3, ARENA.y0 - 3, ARENA.x1 - ARENA.x0 + 6, ARENA.y1 - ARENA.y0 + 6);
  }

  function indicador(wx, wy, ox, oy, cor) {
    const dx = wx - (ox + L / 2), dy = wy - (oy + A / 2);
    const k = Math.min((L / 2 - 10) / (Math.abs(dx) || 1e-6), (A / 2 - 10) / (Math.abs(dy) || 1e-6));
    const sx = Math.round(L / 2 + dx * k), sy = Math.round(A / 2 + dy * k);
    g.fillStyle = '#070a1a'; g.fillRect(sx - 3, sy - 3, 7, 7); g.fillStyle = cor; g.fillRect(sx - 2, sy - 2, 5, 5); g.fillStyle = '#ffffff'; g.fillRect(sx - 1, sy - 1, 3, 3);
  }

  function desenhar() {
    const t = performance.now() / 1000;
    const camX = S ? S.cx : CX, camY = S ? S.cy : CY;
    g.save();
    if (S && S.alien) desenharArena(t); else fundo.desenhar(g, camX, camY, t);
    if (!S) { g.restore(); return; }
    const ox = Math.round(camX - L / 2), oy = Math.round(camY - A / 2);
    const visivel = (x, y, m = 16) => x > ox - m && x < ox + L + m && y > oy - m && y < oy + A + m;
    const mundo = !S.alien;

    g.save();
    if (S.tremor > 0) g.translate(Math.round((Math.random() - 0.5) * 4), Math.round((Math.random() - 0.5) * 4));
    g.translate(-ox, -oy);
    g.strokeStyle = 'rgba(74, 168, 255, 0.12)'; g.lineWidth = 1;
    for (const r of [30, 62]) { g.beginPath(); g.arc(Math.round(S.nx), Math.round(S.ny), r, 0, Math.PI * 2); g.stroke(); }

    // áreas de bomba (por baixo de tudo)
    for (const c of S.campos) {
      if (!visivel(c.x, c.y, 40)) continue;
      const cx = Math.round(c.x), cy = Math.round(c.y);
      if (c.aviso > 0) {
        const pisca = Math.floor(S.ta * 8) % 2 === 0;
        g.strokeStyle = pisca ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 1; g.setLineDash([3, 3]); g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.stroke(); g.setLineDash([]);
        g.fillStyle = 'rgba(255, 59, 74, 0.12)'; g.beginPath(); g.arc(cx, cy, c.r * (1 - c.aviso / (c.avisoMax || 1.4)), 0, Math.PI * 2); g.fill();
      } else {
        g.fillStyle = `rgba(255, 138, 58, ${0.28 + 0.12 * Math.sin(S.ta * 10)})`; g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.fill();
        g.strokeStyle = '#ff8a3a'; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, c.r, 0, Math.PI * 2); g.stroke();
        for (let k = 0; k < 6; k++) { const a = S.ta * 3 + k * 1.05; g.fillStyle = '#ffd23f'; g.fillRect(Math.round(cx + Math.cos(a) * c.r * 0.6), Math.round(cy + Math.sin(a) * c.r * 0.6), 2, 2); }
      }
    }
    for (const c of S.campos) { // a bomba voa em arco do atirador até o ponto marcado
      if (c.aviso > 0 && c.ox !== undefined) {
        const u = (c.avisoMax - c.aviso) / 0.45;
        if (u >= 0 && u < 1) { const bx = Math.round(c.ox + (c.x - c.ox) * u), by = Math.round(c.oy + (c.y - c.oy) * u - Math.sin(Math.PI * u) * 24); g.fillStyle = '#070a1a'; g.fillRect(bx - 3, by - 3, 6, 6); g.fillStyle = '#ff7a3a'; g.fillRect(bx - 2, by - 2, 4, 4); g.fillStyle = '#ffffff'; g.fillRect(bx - 1, by - 2, 2, 1); }
      }
    }
    if (mundo) {
      if (S.buraco && visivel(S.buraco.x, S.buraco.y, 30)) desenharBuracoNegro(g, S.buraco.x, S.buraco.y, S.ta, Math.min(1, S.buraco.vida / 3));
      for (const r of S.rochas) {
        if (!visivel(r.x, r.y, 20)) continue;
        const rach = r.hp <= r.hpMax * 0.34 ? 2 : r.hp <= r.hpMax * 0.67 ? 1 : 0;
        const spr = rochasSpr[r.tam].quadros[rach];
        if (r.piscar > 0) g.globalAlpha = 0.6;
        g.drawImage(spr, Math.round(r.x - spr.width / 2), Math.round(r.y - spr.height / 2));
        g.globalAlpha = 1;
      }
      for (const it of S.itens) {
        if (!visivel(it.x, it.y) || (it.vida < 4 && it.tipo !== 'moedaEsp' && Math.floor(S.ta * 8) % 2 === 0)) continue;
        g.drawImage(itensSpr[it.tipo], Math.round(it.x - 6), Math.round(it.y - 6 + Math.sin(S.ta * 4 + it.fase)));
      }
      for (const c of S.cristais) { if (visivel(c.x, c.y)) g.drawImage(spriteCristal(c.v), Math.round(c.x - 3.5), Math.round(c.y - 4.5 + Math.sin(S.ta * 4 + c.fase))); }
    }
    // monstros, chefão e alienígena
    for (const m of S.inimigos) {
      if (!visivel(m.x, m.y, 40)) continue;
      const f = Math.floor(S.ta * 6 + m.fase) % 2;
      let spr;
      if (m.tipo === 'alien') { spr = (m.piscar > 0 ? alienSpr.brancos : alienSpr.quadros)[Math.floor(S.ta * 3) % 2]; g.globalAlpha = m.sumido > 0 ? 0.25 : (m.estado === 'carga' && Math.floor(S.ta * 16) % 2 === 0 ? 0.6 : 1); }
      else if (m.tipo === 'chefe') { const s = skin(m.v).chefe; spr = (m.piscar > 0 ? s.brancos : s.quadros)[Math.floor(S.ta * 4) % 2]; }
      else { const s = skin(m.v).m[m.tipo]; spr = (m.piscar > 0 ? s.brancos : s.quadros)[f]; if (m.tipo === 'fantasma') g.globalAlpha = 0.85; }
      g.drawImage(spr, Math.round(m.x - spr.width / 2), Math.round(m.y - spr.height / 2));
      g.globalAlpha = 1;
    }
    for (const b of S.tirosInimigos) { if (!visivel(b.x, b.y, 4)) continue; g.fillStyle = '#ff5a8a'; g.fillRect(Math.round(b.x) - 2, Math.round(b.y) - 2, 4, 4); g.fillStyle = '#ffd0e0'; g.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 2, 2); }
    if (S.alien && S.alien.estado === 'aviso') { // linha de aviso da investida
      const al = S.alien; g.strokeStyle = Math.floor(S.ta * 14) % 2 ? '#ff3b4a' : '#ffb3ba'; g.lineWidth = 2; g.setLineDash([4, 4]);
      g.beginPath(); g.moveTo(Math.round(al.x), Math.round(al.y)); g.lineTo(Math.round(al.x + al.dirX * 300), Math.round(al.y + al.dirY * 300)); g.stroke(); g.setLineDash([]);
    }
    for (const r of S.raios) { // raio do alienígena
      const x2 = r.x + Math.cos(r.ang) * 400, y2 = r.y + Math.sin(r.ang) * 400;
      g.beginPath(); g.moveTo(Math.round(r.x), Math.round(r.y)); g.lineTo(Math.round(x2), Math.round(y2));
      if (r.aviso > 0) { g.strokeStyle = Math.floor(S.ta * 16) % 2 ? '#ff3bd4' : '#ffb3f0'; g.lineWidth = 1; g.setLineDash([3, 3]); g.stroke(); g.setLineDash([]); }
      else { g.strokeStyle = '#ff3bd4'; g.lineWidth = 7; g.stroke(); g.strokeStyle = '#ffffff'; g.lineWidth = 3; g.stroke(); }
    }
    for (const b of S.tiros) { g.fillStyle = '#ffe14a'; g.fillRect(Math.round(b.x) - 1, Math.round(b.y) - 1, 3, 3); g.fillStyle = '#ffffff'; g.fillRect(Math.round(b.x), Math.round(b.y), 1, 1); }

    if (S.laser) { // laser contínuo
      const c = Math.cos(S.laser.ang), s = Math.sin(S.laser.ang), x2 = S.nx + c * S.laser.len, y2 = S.ny + s * S.laser.len;
      g.beginPath(); g.moveTo(Math.round(S.nx + c * 7), Math.round(S.ny + s * 7)); g.lineTo(Math.round(x2), Math.round(y2));
      g.strokeStyle = Math.floor(S.ta * 24) % 2 ? '#38c8ff' : '#8bd3ff'; g.lineWidth = 4; g.stroke();
      g.strokeStyle = '#ffffff'; g.lineWidth = 1.5; g.stroke();
    }
    for (const m of S.misseis) { // mísseis
      const c = Math.cos(m.ang), s = Math.sin(m.ang);
      g.fillStyle = '#070a1a'; g.fillRect(Math.round(m.x) - 3, Math.round(m.y) - 3, 6, 6);
      g.fillStyle = '#ff9a3a'; g.fillRect(Math.round(m.x + c * 1) - 2, Math.round(m.y + s * 1) - 2, 4, 4);
      g.fillStyle = '#ffffff'; g.fillRect(Math.round(m.x + c * 2), Math.round(m.y + s * 2), 1, 1);
    }
    // nave, cano, escudo, orbes e drone
    const piscando = S.invul > 0 && Math.floor(S.ta * 14) % 2 === 0;
    const passo = Math.PI / 8, ang = Math.round(S.mira / passo) * passo;
    const nx = Math.round(S.nx), ny = Math.round(S.ny);
    const tr = S.tiers || { motor: 0, armas: 0, casco: 0, nucleo: 0, ima: 0 };
    const chamaNave = (cx, cy, comp) => { for (let k = 0; k < comp; k++) { g.fillStyle = k < comp * 0.35 ? '#fff0a0' : k < comp * 0.7 ? '#ffc83d' : '#ff7a3a'; g.fillRect(cx - (k < comp * 0.6 ? 1 : 0), cy + k, k < comp * 0.6 ? 2 : 1, 1); } };
    const cmp = 2 + tr.motor + (S.movendo ? 3 : 0) + (S.turboT > 0 ? 3 : 0) + Math.floor(Math.random() * 2);
    chamaNave(nx, ny + 8, cmp);
    if (tr.motor >= 2) { chamaNave(nx - 5, ny + 7, Math.max(2, cmp - 3)); chamaNave(nx + 4, ny + 7, Math.max(2, cmp - 3)); }
    g.fillStyle = S.turboT > 0 ? '#ff7a3a' : '#ffd23f';
    const nb = Math.min(4, S.projeteis), lenB = 5 + Math.min(4, Math.floor(tr.armas / 2)), px = -Math.sin(ang), py = Math.cos(ang);
    for (let b = 0; b < nb; b++) {
      const off = (b - (nb - 1) / 2) * 2.4;
      for (let k = 4; k <= 4 + lenB; k++) g.fillRect(Math.round(nx + Math.cos(ang) * k + px * off) - 1, Math.round(ny + Math.sin(ang) * k + py * off) - 1, 2, 2);
      if (dados.oficina.lente > 0) { g.fillStyle = '#7be3ff'; g.fillRect(Math.round(nx + Math.cos(ang) * (5 + lenB) + px * off) - 1, Math.round(ny + Math.sin(ang) * (5 + lenB) + py * off) - 1, 2, 2); g.fillStyle = S.turboT > 0 ? '#ff7a3a' : '#ffd23f'; }
    }
    g.drawImage(piscando ? naveSpr.branca : naveSpr.c, nx - 10, ny - 10);
    if (S.upgFx) { // brilho de upgrade: anel que se expande e a nave acende
      const u = 1 - S.upgFx.t / S.upgFx.max;
      g.globalAlpha = 0.7 * (1 - u); g.drawImage(naveSpr.branca, nx - 10, ny - 10);
      g.globalAlpha = 1 - u; g.strokeStyle = '#ffe14a'; g.lineWidth = 2; g.beginPath(); g.arc(nx, ny, 8 + u * 22, 0, Math.PI * 2); g.stroke();
      g.strokeStyle = '#ffffff'; g.lineWidth = 1; g.beginPath(); g.arc(nx, ny, 5 + u * 14, 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1;
    }
    if (S.escudoT > 0 && (S.escudoT > 1.5 || Math.floor(S.ta * 10) % 2 === 0)) { g.strokeStyle = '#8bd3ff'; g.lineWidth = 2; g.beginPath(); g.arc(nx, ny, 11, 0, Math.PI * 2); g.stroke(); }
    if (S.barreira > 0) { g.strokeStyle = '#7dff9a'; g.lineWidth = 1; g.globalAlpha = 0.7; g.beginPath(); g.arc(nx, ny, 12 + (S.barreira > 1 ? 2 : 0), 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1; }
    for (const o of orbesPos()) { const px = Math.round(o.x), py = Math.round(o.y); g.fillStyle = '#070a1a'; g.fillRect(px - 3, py - 3, 7, 7); g.fillStyle = '#ff3bd4'; g.fillRect(px - 2, py - 2, 5, 5); g.fillStyle = '#ffffff'; g.fillRect(px - 1, py - 1, 2, 2); }
    for (const p of S.parts) { if (visivel(p.x, p.y, 4)) { g.fillStyle = p.cor; g.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); } }
    for (const o of S.ondas) { g.strokeStyle = o.cor; g.lineWidth = 2; g.globalAlpha = Math.max(0, 1 - o.r / o.max); g.beginPath(); g.arc(Math.round(o.x), Math.round(o.y), o.r, 0, Math.PI * 2); g.stroke(); g.globalAlpha = 1; }
    g.font = 'bold 8px monospace'; g.textAlign = 'center';
    for (const tx of S.textos) { g.globalAlpha = Math.min(1, tx.vida * 2); g.fillStyle = '#070a1a'; g.fillText(tx.txt, Math.round(tx.x) + 1, Math.round(tx.y) + 1); g.fillStyle = tx.cor; g.fillText(tx.txt, Math.round(tx.x), Math.round(tx.y)); g.globalAlpha = 1; }
    g.restore();

    // indicadores na borda (cristais fora de vista, buraco negro, chefão, moedas espaciais)
    if (mundo) {
      const fora = S.cristais.filter((c) => !visivel(c.x, c.y, 2)).map((c) => ({ c, d: Math.hypot(c.x - S.nx, c.y - S.ny) })).filter((o) => o.d < 620).sort((p, q) => p.d - q.d).slice(0, 6);
      g.globalAlpha = 0.55 + 0.35 * Math.sin(t * 6);
      for (const { c } of fora) { const dx = c.x - (ox + L / 2), dy = c.y - (oy + A / 2), k = Math.min((L / 2 - 10) / (Math.abs(dx) || 1e-6), (A / 2 - 10) / (Math.abs(dy) || 1e-6)); g.drawImage(spriteCristal(c.v), Math.round(L / 2 + dx * k - 3.5), Math.round(A / 2 + dy * k - 4.5)); }
      g.globalAlpha = 1;
      if (S.buraco && !visivel(S.buraco.x, S.buraco.y, 2)) indicador(S.buraco.x, S.buraco.y, ox, oy, '#c43fff');
      if (S.chefe && !visivel(S.chefe.x, S.chefe.y, 2)) indicador(S.chefe.x, S.chefe.y, ox, oy, '#ff3b4a');
      for (const it of S.itens) if (it.tipo === 'moedaEsp' && !visivel(it.x, it.y, 2)) indicador(it.x, it.y, ox, oy, '#38c8ff');
    }
    if (S.chefe) barra(CX - 60, 8, 120, S.chefe.hp / S.chefe.hpMax, '#ff3b4a');
    if (S.alien) barra(CX - 60, 8, 120, S.alien.hp / S.alien.hpMax, '#ff3bd4');
    if (S.flash > 0) { g.fillStyle = `rgba(255, 255, 255, ${Math.min(0.8, S.flash * 2.5)})`; g.fillRect(0, 0, L, A); }
    g.restore();
  }

  let hudCache = '';
  function atualizarHud() {
    if (!S) return;
    const faltam = Math.ceil(S.proxOnda - S.t);
    const efeitos = [S.imaT > 0 ? 'ÍMÃ' : '', S.escudoT > 0 ? `ESCUDO ${Math.ceil(S.escudoT)}` : '', S.turboT > 0 ? `TURBO ${Math.ceil(S.turboT)}` : ''].filter(Boolean).join(' ');
    const chave = `${S.hp}/${S.maxHp}|${S.nivel}|${Math.floor(S.xp)}|${S.xpProx}|${S.kills}|${Math.floor(S.t)}|${S.onda}|${S.fase}|${faltam <= 5 ? faltam : 99}|${S.aviso > 0}|${S.avisoTxt}|${efeitos}|${dados.moedas}|${!!S.alien}`;
    if (chave === hudCache) return;
    hudCache = chave;
    vidasEl.replaceChildren(...Array.from({ length: S.maxHp }, (_, i) => el('i', i < S.hp ? 'cheia' : 'vazia')));
    nivelEl.textContent = `NV ${S.nivel}`;
    xpBarra.style.width = `${Math.min(100, (S.xp / S.xpProx) * 100)}%`;
    killsEl.textContent = `☠ ${S.kills}`;
    ondaEl.textContent = S.alien ? 'BURACO NEGRO' : faltam <= 5 && modo === 'jogando' && !S.chefe ? `ONDA EM ${faltam}` : S.onda > 0 || S.fase > 1 ? `F${S.fase} · ONDA ${S.onda}` : '';
    ondaEl.classList.toggle('alerta', faltam <= 5 || !!S.alien);
    efeitosEl.textContent = efeitos;
    moedaEl.textContent = `◆ ${dados.moedas}`;
    avisoOnda.hidden = !(S.aviso > 0);
    avisoOnda.textContent = S.avisoTxt;
    tempoEl.textContent = fmt(Math.floor(S.t));
  }

  function atualizarArmas() {
    const vis = S && (modo === 'jogando' || modo === 'escolha' || modo === 'pausa');
    armasEl.style.visibility = vis ? 'visible' : 'hidden';
    if (!vis) return;
    for (let n = 1; n <= 4; n++) {
      const { b, nm, barra } = botoesArma[n - 1];
      let nome = 'VAZIO', f = -1;
      if (n === 1) nome = 'TIRO';
      else if (n === 2) { nome = 'LASER'; f = S.laserE / S.laserMax; }
      else { const p = S.slots[n - 3]; if (p) { nome = NOMES_CURTOS[p]; if (p === 'missil') f = 1 - Math.max(0, S.missilT) / S.missilMax; } }
      if (nm.textContent !== nome) nm.textContent = nome;
      barra.style.display = f < 0 ? 'none' : 'block';
      barra.style.width = `${Math.round(Math.max(0, Math.min(1, f)) * 100)}%`;
      b.classList.toggle('ativa', S.arma === n);
      b.classList.toggle('vazio', n >= 3 && !S.slots[n - 3]);
      b.classList.toggle('quente', n === 2 && S.laserQuente);
    }
  }

  function quadro(agora) {
    if (!aberto) return;
    const dt = Math.min((agora - ultimo) / 1000, 0.05);
    ultimo = agora;
    if (modo === 'jogando') atualizar(dt);
    if (modo === 'oficina') animarNave(agora / 1000);
    fundo.passo(dt);
    desenhar();
    atualizarHud();
    atualizarArmas();
    raf = requestAnimationFrame(quadro);
  }

  // ---------- controle ----------
  function comecar() {
    teclas.clear(); ponteiro.ativo = false;
    novoJogo();
    hudCache = '';
    painelInicio.hidden = true; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true; painelOficina.hidden = true;
    modo = 'jogando';
    ultimo = performance.now();
    mostrarAviso(`MONSTROS: ${nomeTema()}`, 2.6);
    bip(523, 0.08, 'square', 0.05); bip(784, 0.12, 'square', 0.05, 0.08);
  }
  function pausar(ligar) {
    if (ligar && modo === 'jogando') { modo = 'pausa'; teclas.clear(); ponteiro.ativo = false; painelPausa.hidden = false; }
    else if (!ligar && modo === 'pausa') { modo = 'jogando'; painelPausa.hidden = true; ultimo = performance.now(); }
  }
  function abrir() {
    if (aberto) return;
    aberto = true;
    raiz.classList.add('aberto');
    dados = carregarDados();
    S = null; modo = 'inicio'; hudCache = '';
    novoJogo();
    painelInicio.hidden = false; painelFim.hidden = true; painelEscolha.hidden = true; painelPausa.hidden = true; painelOficina.hidden = true;
    vidasEl.replaceChildren(); nivelEl.textContent = ''; killsEl.textContent = ''; tempoEl.textContent = ''; ondaEl.textContent = ''; efeitosEl.textContent = ''; moedaEl.textContent = `◆ ${dados.moedas}`; xpBarra.style.width = '0';
    atualizarBotoesMoedas();
    ultimo = performance.now();
    raf = requestAnimationFrame(quadro);
    btnComecar.focus();
  }
  function fecharJanela() {
    if (!aberto) return;
    aberto = false;
    teclas.clear(); ponteiro.ativo = false;
    raiz.classList.remove('aberto');
    cancelAnimationFrame(raf);
  }

  btnComecar.onclick = comecar;
  btnOficinaIni.onclick = abrirOficina;
  btnContinuar.onclick = () => pausar(false);
  btnSairPausa.onclick = fecharJanela;
  fechar.onclick = fecharJanela;
  raiz.addEventListener('pointerdown', (e) => { if (e.target === raiz && modo !== 'jogando' && modo !== 'escolha') fecharJanela(); });
  window.addEventListener('visibilitychange', () => { if (document.hidden) pausar(true); });
  const lerPonteiro = (e) => {
    const r = cv.getBoundingClientRect();
    ponteiro.x = ((e.clientX - r.left) / r.width) * L;
    ponteiro.y = ((e.clientY - r.top) / r.height) * A;
  };
  cv.addEventListener('pointerdown', (e) => { if (modo !== 'jogando') return; ponteiro.ativo = true; lerPonteiro(e); cv.setPointerCapture?.(e.pointerId); });
  cv.addEventListener('pointermove', (e) => { if (ponteiro.ativo) lerPonteiro(e); });
  for (const ev of ['pointerup', 'pointercancel']) cv.addEventListener(ev, () => { ponteiro.ativo = false; });
  window.addEventListener('keyup', (e) => teclas.delete(e.code));
  window.addEventListener('blur', () => teclas.clear());
  window.addEventListener('keydown', (e) => {
    if (!aberto) return;
    if (TECLAS_MOVER.includes(e.code)) { e.preventDefault(); if (modo === 'jogando') teclas.add(e.code); return; }
    if (e.code === 'Escape') {
      e.preventDefault();
      if (modo === 'jogando') pausar(true); else if (modo === 'pausa') pausar(false); else if (modo === 'oficina') fecharOficina(); else if (modo === 'inicio' || modo === 'fim') fecharJanela();
    } else if (e.code === 'Space' || e.code === 'Enter') {
      if (modo === 'inicio' || modo === 'fim') { e.preventDefault(); comecar(); }
    } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
      e.preventDefault();
      const n = Number(e.code.slice(-1));
      if (modo === 'escolha') escolher(n - 1); else selecionarArma(n);
    }
  }, true);

  // gancho só do modo dev: avança a simulação sem depender do relógio do navegador e força eventos (usado nos testes)
  if (import.meta.env.DEV) {
    window.__arcadeTeste = {
      abrir, oficina: () => abrirOficina(),
      mirar(x, y) { ponteiro.ativo = x != null; if (x != null) { ponteiro.x = x - (S.cx - L / 2); ponteiro.y = y - (S.cy - A / 2); } },
      cristais: () => S.cristais.map((c) => ({ x: Math.round(c.x), y: Math.round(c.y), v: c.v })),
      itens: () => S.itens.map((i) => ({ x: Math.round(i.x), y: Math.round(i.y), tipo: i.tipo })),
      rochas: () => S.rochas.map((r) => ({ x: Math.round(r.x), y: Math.round(r.y), hp: r.hp, hpMax: r.hpMax })),
      forcar: {
        buraco: () => { if (!S.buraco) criarBuraco(); S.buraco.x = S.nx + 60; S.buraco.y = S.ny; },
        chefe: () => { if (!S.chefe) criarChefeInimigo(); },
        rocha: () => { criarRocha(); const r = S.rochas[S.rochas.length - 1]; r.x = S.nx + 70; r.y = S.ny - 10; r.vx = r.vy = 0; },
        item: (tipo) => S.itens.push({ tipo, x: S.nx + 12, y: S.ny, vida: 16, fase: 0 }),
        onda: () => { S.proxOnda = S.t; },
        fase: (n) => { S.onda = (n - 1) * 3 - 1; S.proxOnda = S.t; },
        hp: (n) => { S.hp = n; },
        tempo: (n) => { S.t = n; S.proxOnda = n + 999; S.proxChefe = n + 999; S.proxBuraco = n + 999; },
        limpar: () => { S.inimigos = []; },
        ataqueAlien: (nome) => { if (S.alien) { S.alien.ataque = nome; S.alien.estado = 'carga'; S.alien.carga = 0.05; } },
        alienHp: (n) => { if (S.alien) S.alien.hp = n; },
        chefeHp: (n) => { if (S.chefe) S.chefe.hp = n; },
        poder: (id) => darPoder(S, id),
        arma: (n) => selecionarArma(n),
        nivel: (id, n) => { S.niveis[id] = n; },
        moedas: (n) => { dados.moedas += n; salvarDados(); },
      },
      avancar(seg, auto = true) {
        for (let t = 0; t < seg; t += 0.05) {
          if (modo === 'escolha' && auto) escolher(0);
          if (modo === 'jogando') atualizar(0.05);
        }
        desenhar(); atualizarHud();
        return { modo, t: S && S.t, hp: S && S.hp, nivel: S && S.nivel, kills: S && S.kills, fase: S && S.fase, onda: S && S.onda, inimigos: S && S.inimigos.length, rochas: S && S.rochas.length, itens: S && S.itens.length, cristais: S && S.cristais.length, chefe: S && !!S.chefe, chefeHp: S && S.chefe && S.chefe.hp, alien: S && !!S.alien, alienHp: S && S.alien && S.alien.hp, buraco: S && !!S.buraco, poderes: S && Object.keys(S.poderes).filter((k) => S.poderes[k]), arma: S && S.arma, laserE: S && +S.laserE.toFixed(2), quente: S && S.laserQuente, misseis: S && S.misseis.length, skinBase: S && S.skinBase, barreira: S && S.barreira, moedas: dados.moedas, campos: S && S.campos.length, raios: S && S.raios.length, estadoAlien: S && S.alien && S.alien.estado, tirosInimigos: S && S.tirosInimigos.length, nx: S && Math.round(S.nx), ny: S && Math.round(S.ny) };
      },
    };
  }

  return { abrir, fechar: fecharJanela, estaAberto: () => aberto };
}
