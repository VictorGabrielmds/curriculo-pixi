// Caça-níquel de brincadeira: só fichas virtuais (guardadas no navegador), sem dinheiro de verdade.
// Três iguais dão fichas e uma skin para o mundo (planeta, árvores ou céu); a coleção permite equipar as skins.
import './cassino.css';
import { CATEGORIAS, RARIDADES, SKINS, skinPorId, skinPadrao, hex } from './skins.js';

const CHAVE = 'curriculo-cassino-v1';
const CUSTO = 10;
const FICHAS_INICIAIS = 100;
const FICHAS_GRATIS = 50;
const GIROS_ATE_GARANTIA = 9; // depois de tantos giros sem trio, o próximo trio é garantido

// peso = chance relativa de aparecer em cada rolo; tier = raridade das skins que o trio desse símbolo pode dar
const SIMBOLOS = [
  { id: 'cereja', nome: 'Cereja', peso: 28, premio: 40, tier: 'comum' },
  { id: 'limao', nome: 'Limão', peso: 26, premio: 50, tier: 'comum' },
  { id: 'sino', nome: 'Sino', peso: 18, premio: 80, tier: 'rara' },
  { id: 'estrela', nome: 'Estrela', peso: 14, premio: 120, tier: 'rara' },
  { id: 'diamante', nome: 'Diamante', peso: 9, premio: 250, tier: 'epica' },
  { id: 'sete', nome: 'Sete', peso: 5, premio: 777, tier: 'lendaria' },
];
const PREMIO_PAR = 5;
const ORDEM_TIERS = ['comum', 'rara', 'epica', 'lendaria'];

// ---------- estado salvo ----------
function estadoPadrao() {
  const equipadas = {};
  for (const c of CATEGORIAS) equipadas[c.id] = skinPadrao(c.id).id;
  return { fichas: FICHAS_INICIAIS, giros: 0, semTrio: 0, skins: [], equipadas, som: true };
}
function carregar() {
  const base = estadoPadrao();
  try {
    const j = JSON.parse(localStorage.getItem(CHAVE));
    if (j && typeof j.fichas === 'number') {
      const skins = Array.isArray(j.skins) ? j.skins.filter((id) => skinPorId(id)) : [];
      const equipadas = { ...base.equipadas };
      for (const c of CATEGORIAS) {
        const id = j.equipadas?.[c.id];
        const s = id && skinPorId(id);
        if (s && s.cat === c.id && (s.padrao || skins.includes(id))) equipadas[c.id] = id;
      }
      return { ...base, fichas: Math.max(0, Math.floor(j.fichas)), giros: j.giros | 0, semTrio: j.semTrio | 0, skins, equipadas, som: j.som !== false };
    }
  } catch { /* sem armazenamento: joga sem salvar */ }
  return base;
}

// ---------- ícones em pixel art (16x16), desenhados em canvas ----------
function desenharSimbolo(id) {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d');
  const cor = (v) => { x.fillStyle = v; };
  const pixel = (px, py, v) => { cor(v); x.fillRect(px, py, 1, 1); };
  const disco = (cx, cy, r, v) => {
    cor(v);
    for (let j = -r - 1; j <= r + 1; j++) for (let i = -r - 1; i <= r + 1; i++) if (i * i + j * j <= r * r + 0.5) x.fillRect(cx + i, cy + j, 1, 1);
  };
  const elipse = (cx, cy, rx, ry, v) => {
    cor(v);
    for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) {
      const dx = (i + 0.5 - cx) / rx, dy = (j + 0.5 - cy) / ry;
      if (dx * dx + dy * dy <= 1) x.fillRect(i, j, 1, 1);
    }
  };
  const poligono = (pts, v) => {
    cor(v);
    for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) {
      const px = i + 0.5, py = j + 0.5;
      let dentro = false;
      for (let a = 0, b = pts.length - 1; a < pts.length; b = a++) {
        const [xa, ya] = pts[a], [xb, yb] = pts[b];
        if ((ya > py) !== (yb > py) && px < ((xb - xa) * (py - ya)) / (yb - ya) + xa) dentro = !dentro;
      }
      if (dentro) x.fillRect(i, j, 1, 1);
    }
  };
  const linha = (x0, y0, x1, y1, v) => {
    cor(v);
    const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
    for (let k = 0; k <= n; k++) x.fillRect(Math.round(x0 + ((x1 - x0) * k) / n), Math.round(y0 + ((y1 - y0) * k) / n), 1, 1);
  };

  switch (id) {
    case 'cereja':
      linha(5, 9, 9, 3, '#4f8a3a'); linha(11, 9, 9, 3, '#4f8a3a');
      pixel(10, 2, '#6fcf4a'); pixel(11, 2, '#6fcf4a'); pixel(11, 3, '#6fcf4a');
      disco(5, 11, 3, '#e63946'); disco(11, 11, 3, '#e63946');
      pixel(4, 10, '#ffb3ba'); pixel(10, 10, '#ffb3ba'); pixel(6, 13, '#b3202e'); pixel(12, 13, '#b3202e');
      break;
    case 'limao':
      elipse(8, 8.5, 6.5, 4.6, '#ffe14a');
      elipse(8, 10.2, 5.6, 2.6, '#f2c230');
      pixel(2, 8, '#ffe14a'); pixel(13, 8, '#ffe14a');
      pixel(5, 6, '#fff7a8'); pixel(6, 6, '#fff7a8'); pixel(7, 5, '#fff7a8');
      pixel(11, 3, '#6fcf4a'); pixel(12, 3, '#6fcf4a'); pixel(12, 4, '#4f8a3a');
      break;
    case 'sino':
      poligono([[8, 1.5], [11, 4], [12, 9], [14.5, 12], [1.5, 12], [4, 9], [5, 4]], '#ffcc33');
      poligono([[8.5, 2], [11, 4], [12, 9], [14.5, 12], [9, 12]], '#e0a622');
      disco(8, 13, 1, '#d99a1a');
      pixel(6, 4, '#fff3b0'); pixel(5, 6, '#fff3b0'); pixel(5, 8, '#fff3b0');
      break;
    case 'estrela': {
      const pts = [];
      for (let k = 0; k < 10; k++) {
        const a = (Math.PI / 5) * k - Math.PI / 2, r = k % 2 === 0 ? 7 : 3;
        pts.push([8 + Math.cos(a) * r, 8.5 + Math.sin(a) * r]);
      }
      poligono(pts, '#ffe14a');
      poligono([[8, 5], [10, 8], [8, 11], [6, 8]], '#fff3a0');
      break;
    }
    case 'diamante':
      poligono([[2.5, 5.5], [5, 2], [11, 2], [13.5, 5.5], [8, 14.5]], '#37b6e8');
      poligono([[2.5, 5.5], [5, 2], [11, 2], [13.5, 5.5]], '#8be6ff');
      poligono([[5.5, 5.5], [8, 14], [10.5, 5.5], [8, 2.5]], '#58d6ff');
      pixel(5, 3, '#ffffff'); pixel(6, 3, '#ffffff'); pixel(4, 4, '#ffffff');
      break;
    case 'sete':
      poligono([[3, 3], [13, 3], [13, 6], [9.5, 6], [6.5, 14], [3.5, 14], [7.5, 6], [3, 6]], '#ff3b4a');
      poligono([[3, 3], [13, 3], [13, 4.2], [3, 4.2]], '#ff8a94');
      break;
    default:
      break;
  }
  // contorno escuro em volta do desenho (qualquer pixel vazio encostado em um pixel preenchido)
  const img = x.getImageData(0, 0, 16, 16), d = img.data;
  const cheio = (i, j) => i >= 0 && j >= 0 && i < 16 && j < 16 && d[(j * 16 + i) * 4 + 3] > 0;
  const borda = [];
  for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) {
    if (!cheio(i, j) && (cheio(i + 1, j) || cheio(i - 1, j) || cheio(i, j + 1) || cheio(i, j - 1))) borda.push([i, j]);
  }
  cor('#1b1020');
  for (const [i, j] of borda) x.fillRect(i, j, 1, 1);
  return c;
}

// ---------- efeitos sonoros simples (WebAudio, sem arquivos) ----------
let audio = null, ruido = null;
function contexto() {
  audio ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audio.state === 'suspended') audio.resume(); // o navegador pode deixar o áudio parado até o primeiro toque
  return audio;
}
function bip(estado, freq, dur = 0.09, tipo = 'square', vol = 0.04, atraso = 0) {
  if (!estado.som) return;
  try {
    const ac = contexto();
    const t0 = ac.currentTime + atraso;
    const osc = ac.createOscillator(), g = ac.createGain();
    osc.type = tipo; osc.frequency.value = freq;
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ac.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  } catch { /* sem áudio: segue sem som */ }
}
// estalo de peça de metal: um sopro curto de ruído filtrado (é o "tec" dos rolos e da catraca da alavanca)
function estalo(estado, freq, dur = 0.03, vol = 0.07, atraso = 0) {
  if (!estado.som) return;
  try {
    const ac = contexto();
    if (!ruido) {
      ruido = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.4), ac.sampleRate);
      const d = ruido.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const t0 = ac.currentTime + atraso;
    const src = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    src.buffer = ruido;
    f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 1.4;
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(ac.destination);
    src.start(t0, Math.random() * 0.3); src.stop(t0 + dur + 0.02);
  } catch { /* sem áudio */ }
}
// pancada grave que cai de tom (rolo travando, alavanca batendo no fim do curso)
function pancada(estado, freq = 140, dur = 0.14, vol = 0.12, atraso = 0) {
  if (!estado.som) return;
  try {
    const ac = contexto();
    const t0 = ac.currentTime + atraso;
    const osc = ac.createOscillator(), g = ac.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.4, t0 + dur);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(ac.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  } catch { /* sem áudio */ }
}
// zumbido grave do motor dos rolos: sobe de tom ao arrancar e desce ao parar (devolve { sair } para desligar)
function ligarMotor(estado) {
  if (!estado.som) return null;
  try {
    const ac = contexto(), t0 = ac.currentTime;
    const osc = ac.createOscillator(), f = ac.createBiquadFilter(), g = ac.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(46, t0);
    osc.frequency.linearRampToValueAtTime(84, t0 + 0.45);
    f.type = 'lowpass'; f.frequency.value = 240;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.045, t0 + 0.12);
    osc.connect(f).connect(g).connect(ac.destination);
    osc.start(t0);
    return {
      sair(dur = 0.4) {
        const t = ac.currentTime;
        g.gain.cancelScheduledValues(t);
        g.gain.setValueAtTime(0.045, t);
        g.gain.linearRampToValueAtTime(0.0001, t + dur);
        osc.frequency.cancelScheduledValues(t);
        osc.frequency.setValueAtTime(84, t);
        osc.frequency.linearRampToValueAtTime(40, t + dur);
        osc.stop(t + dur + 0.05);
      },
    };
  } catch { return null; }
}

// ---------- sorteio ----------
const simboloAleatorio = () => SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)];
const sorteiaSimbolo = () => {
  let r = Math.random() * SIMBOLOS.reduce((s, y) => s + y.peso, 0);
  for (const y of SIMBOLOS) { r -= y.peso; if (r <= 0) return y; }
  return SIMBOLOS[0];
};
const bloqueadasDoTier = (estado, tier) => SKINS.filter((s) => !s.padrao && s.raridade === tier && !estado.skins.includes(s.id));

// menor raridade que ainda tem skin para ganhar (é o que o "trio garantido" entrega)
function simboloGarantido(estado) {
  for (const tier of ORDEM_TIERS) {
    if (bloqueadasDoTier(estado, tier).length) {
      const candidatos = SIMBOLOS.filter((s) => s.tier === tier);
      return candidatos[Math.floor(Math.random() * candidatos.length)];
    }
  }
  return null;
}

function sortear(estado) {
  let simbolos = [sorteiaSimbolo(), sorteiaSimbolo(), sorteiaSimbolo()];
  let trio = simbolos[0] === simbolos[1] && simbolos[1] === simbolos[2];
  if (!trio && estado.semTrio >= GIROS_ATE_GARANTIA) {
    const g = simboloGarantido(estado);
    if (g) { simbolos = [g, g, g]; trio = true; }
  }
  const res = { simbolos, tipo: 'nada', fichas: 0, skin: null };
  if (trio) {
    const s = simbolos[0];
    res.tipo = 'trio';
    res.fichas = s.premio;
    const pool = bloqueadasDoTier(estado, s.tier);
    if (pool.length) res.skin = pool[Math.floor(Math.random() * pool.length)];
    else res.fichas *= 2; // já tem todas as skins dessa raridade: leva o dobro de fichas
  } else if (simbolos[0] === simbolos[1] || simbolos[1] === simbolos[2] || simbolos[0] === simbolos[2]) {
    res.tipo = 'par';
    res.fichas = PREMIO_PAR;
  }
  return res;
}

// ---------- interface: uma maquininha compacta ----------
export function iniciarCassino({ aoMudarSkins, aoMudarFichas }) {
  const estado = carregar();
  const salvar = () => { try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch { /* ignora */ } };
  const el = (tag, cls, texto) => { const e = document.createElement(tag); if (cls) e.className = cls; if (texto != null) e.textContent = texto; return e; };

  const icones = Object.fromEntries(SIMBOLOS.map((s) => [s.id, desenharSimbolo(s.id)]));
  const raiz = el('div'); raiz.id = 'cassino';

  // --- a máquina ---
  const maq = el('div', 'cas-maq');
  const fechar = el('button', 'cas-x', 'X'); fechar.title = 'Fechar (Esc)';
  const letreiro = el('div', 'cas-letreiro');
  const lampadas = el('div', 'lampadas');
  const piscante = (cls, n) => { const i = el('i', cls); i.style.setProperty('--i', n); return i; };
  for (let i = 0; i < 9; i++) lampadas.append(piscante('lampada', i));
  letreiro.append(lampadas, el('h2', null, 'CASSINO'), el('div', 'cas-sub', '★ DA SORTE ★'));

  // tela: moldura curva com os três rolos, o vidro com reflexo por cima e a linha do prêmio no meio
  const tela = el('div', 'cas-tela');
  const janela = el('div', 'cas-janela');
  const rolosEl = [0, 1, 2].map(() => el('div', 'rolo'));
  const rolos = rolosEl.map((r) => { const cv = document.createElement('canvas'); cv.width = 16; cv.height = 48; r.append(cv); janela.append(r); return cv; });
  janela.append(el('i', 'linha-premio'));
  tela.append(janela, el('i', 'cas-vidro'));

  // painel de controle inclinado: visor verde, botões quadrados salientes (cada um com a sua luzinha) e fileira de luzes
  const painel = el('div', 'cas-painel');
  const lcd = el('div', 'cas-lcd');
  const mensagem = el('div', 'cas-msg', 'PUXE A ALAVANCA!');
  const fichasLinha = el('div', 'cas-fichas');
  const fichasTxt = el('b');
  fichasLinha.append(el('i', 'moeda'), fichasTxt, el('span', null, 'FICHAS'));
  lcd.append(mensagem, fichasLinha);

  const premioBox = el('div', 'cas-premio'); premioBox.hidden = true;

  const botoes = el('div', 'cas-botoes');
  const botao = (txt, cor, titulo, grande = false) => {
    const wrap = el('div', 'cas-bw' + (grande ? ' grande' : ''));
    const led = el('i', 'led'), b = el('button', `cas-b3d ${cor}${grande ? ' grande' : ''}`, txt);
    b.title = titulo;
    wrap.append(led, b); botoes.append(wrap);
    return { b, led };
  };
  const { b: btnAjuda, led: ledAjuda } = botao('?', 'azul', 'Tabela de prêmios');
  const { b: btnColecao, led: ledColecao } = botao('SKINS', 'rosa', 'Coleção de skins (C)');
  const { b: btnGirar, led: ledGirar } = botao('GIRAR', 'vermelho', `Girar (-${CUSTO} fichas) · Espaço`, true);
  const { b: btnSom, led: ledSom } = botao('SOM', 'amarelo', 'Ligar ou desligar o som');
  ledColecao.classList.add('on');
  const btnGratis = el('button', 'cas-b3d verde largo', `+${FICHAS_GRATIS} FICHAS DE CORTESIA`); btnGratis.hidden = true;
  botoes.append(btnGratis);
  const luzes = el('div', 'cas-luzes');
  for (let i = 0; i < 14; i++) luzes.append(piscante('', i));
  painel.append(lcd, premioBox, botoes, luzes);

  // alavanca na lateral: base fixa e um braço que gira em perspectiva (desce até perto de quem joga e volta com um quique)
  const alavanca = el('button', 'cas-alavanca'); alavanca.title = 'Puxar a alavanca · Espaço';
  const braco = el('i', 'braco');
  braco.append(el('i', 'haste'), el('i', 'bola'));
  alavanca.append(el('i', 'suporte'), braco);
  const bandeja = el('div', 'cas-bandeja');
  bandeja.append(el('i', 'fenda'));

  const tabela = el('div', 'cas-tabela'); tabela.hidden = true;
  for (const s of SIMBOLOS) {
    const linha = el('div', 'cas-linha');
    const mini = icones[s.id].cloneNode(); mini.getContext('2d').drawImage(icones[s.id], 0, 0);
    linha.append(mini, el('span', null, `x3 = ${s.premio}`), el('small', null, RARIDADES[s.tier].nome.toLowerCase()));
    tabela.append(linha);
  }
  tabela.append(el('div', 'cas-linha par', `linha do meio · 2 iguais = ${PREMIO_PAR} · a cada ${GIROS_ATE_GARANTIA + 1} giros sem trio, o próximo é garantido`));

  maq.append(fechar, letreiro, tela, painel, alavanca, bandeja, tabela, el('p', 'cas-nota', 'de brincadeira: fichas virtuais, sem dinheiro de verdade'));

  // --- coleção de skins (cartão separado) ---
  const colBox = el('div', 'cas-colecao-caixa'); colBox.hidden = true;
  const colecao = el('div', 'cas-colecao');
  colBox.append(colecao);

  raiz.append(maq, colBox);
  document.body.append(raiz);

  let aberto = false, girando = false, naColecao = false;

  // cada rolo mostra 3 símbolos (cima, meio, baixo); "fita" é a lista de símbolos e "pos" a linha que está no topo da janela.
  // Durante o giro pos diminui, então os símbolos descem pela janela, rolando de pixel em pixel.
  function desenharFita(i, fita, pos) {
    const ctx = rolos[i].getContext('2d');
    ctx.clearRect(0, 0, 16, 48);
    const base = Math.floor(pos), resto = pos - base;
    for (let k = 0; k < 4; k++) {
      const s = fita[base + k];
      if (s) ctx.drawImage(icones[s.id], 0, Math.round((k - resto) * 16));
    }
  }
  const mostrarRolo = (i, tres) => desenharFita(i, tres, 0);
  function atualizar() {
    fichasTxt.textContent = String(estado.fichas);
    aoMudarFichas?.(estado.fichas);
    const semFicha = estado.fichas < CUSTO;
    btnGirar.disabled = girando || semFicha;
    alavanca.disabled = girando || semFicha;
    btnGratis.hidden = !semFicha || girando;
    btnSom.classList.toggle('apagado', !estado.som);
    ledSom.classList.toggle('on', estado.som);
    ledGirar.classList.toggle('on', !girando && !semFicha);
    ledAjuda.classList.toggle('on', !tabela.hidden);
    maq.classList.toggle('girando', girando);
    maq.classList.toggle('pronto', !girando && !semFicha);
    maq.classList.toggle('sem-ficha', semFicha);
  }
  function mostrarMensagem(txt, cls = '') { mensagem.textContent = txt; mensagem.className = 'cas-msg ' + cls; }

  function renderColecao() {
    colecao.replaceChildren();
    const cab = el('div', 'cas-cabecalho');
    const total = SKINS.filter((s) => !s.padrao).length;
    const voltar = el('button', 'cas-btn', 'VOLTAR'); voltar.onclick = () => alternarColecao(false);
    cab.append(el('h3', null, `SKINS (${estado.skins.length}/${total})`), voltar);
    colecao.append(cab);
    for (const cat of CATEGORIAS) {
      colecao.append(el('h4', null, cat.nome.toUpperCase()));
      const grade = el('div', 'cas-grade');
      for (const s of SKINS.filter((k) => k.cat === cat.id)) {
        const tem = s.padrao || estado.skins.includes(s.id);
        const equipada = estado.equipadas[cat.id] === s.id;
        const card = el('div', 'cas-card' + (equipada ? ' equipada' : '') + (tem ? '' : ' bloqueada'));
        card.style.setProperty('--r', RARIDADES[s.raridade].cor);
        const amostra = el('div', 'amostra');
        const cores = cat.id === 'planeta' ? [s.cores.marFundo, s.cores.marRaso, s.cores.areia, s.cores.grama0, s.cores.grama2]
          : cat.id === 'arvores' ? [s.cores.copa[0], s.cores.copa[1], s.cores.copa2]
            : [s.cores.fundo, s.cores.estrelas, s.cores.nuvens];
        for (const c of cores) { const q = el('i'); q.style.background = tem ? hex(c) : '#2a2440'; amostra.append(q); }
        card.append(amostra, el('b', null, tem ? s.nome : '???'), el('small', null, RARIDADES[s.raridade].nome));
        const b = el('button', 'cas-btn pequeno', equipada ? 'EQUIPADA' : tem ? 'EQUIPAR' : 'TRAVADA');
        b.disabled = !tem || equipada;
        b.onclick = () => equipar(s);
        card.append(b);
        grade.append(card);
      }
      colecao.append(grade);
    }
  }
  function equipar(skin) {
    estado.equipadas[skin.cat] = skin.id;
    salvar();
    aoMudarSkins({ ...estado.equipadas });
    bip(estado, 660, 0.06);
    if (naColecao) renderColecao();
  }
  function alternarColecao(ligar) {
    naColecao = ligar;
    maq.hidden = ligar;
    colBox.hidden = !ligar;
    if (ligar) renderColecao(); else btnGirar.focus();
  }

  // atraso: tempo até os rolos arrancarem (a alavanca leva um instante para chegar ao fim do curso)
  function girar(atraso = 0) {
    if (!aberto || girando || estado.fichas < CUSTO) return;
    estado.fichas -= CUSTO;
    estado.giros += 1;
    const res = sortear(estado);
    girando = true;
    premioBox.hidden = true;
    janela.classList.remove('vitoria'); maq.classList.remove('vitoria');
    mostrarMensagem('GIRANDO...');
    atualizar();
    // o símbolo da linha do meio é o sorteado; cima e baixo são aleatórios (sem formar trio, que não pagaria)
    const topos = [simboloAleatorio(), simboloAleatorio(), simboloAleatorio()];
    const bases = [simboloAleatorio(), simboloAleatorio(), simboloAleatorio()];
    for (const linha of [topos, bases]) {
      if (linha[0] === linha[1] && linha[1] === linha[2]) linha[2] = SIMBOLOS[(SIMBOLOS.indexOf(linha[2]) + 1) % SIMBOLOS.length];
    }
    const VEL = 14; // linhas por segundo girando
    const FREIO = 450; // ms de desaceleração no fim (percorre as últimas 3 linhas)
    const duracoes = [1100, 1600, 2100]; // cada rolo para um pouco depois do anterior
    const linhasTotal = duracoes.map((d) => Math.round((VEL * (d - FREIO)) / 1000) + 3);
    const fitas = res.simbolos.map((meio, i) => {
      const fita = [topos[i], meio, bases[i]]; // os 3 últimos a aparecer, na ordem de cima para baixo
      while (fita.length < linhasTotal[i] + 3) fita.push(simboloAleatorio());
      return fita;
    });
    const posicao = (i, ms) => {
      const cruzeiro = duracoes[i] - FREIO;
      if (ms < cruzeiro) return linhasTotal[i] - (VEL * ms) / 1000;
      const u = Math.min(1, (ms - cruzeiro) / FREIO);
      return 3 * (1 - u) ** 3;
    };
    const arrancar = () => {
      const inicio = performance.now();
      const parado = [false, false, false];
      const linhaAnterior = [-1, -1, -1];
      let motorDesligado = false;
      const zumbido = ligarMotor(estado);
      for (const r of rolosEl) r.classList.add('girando');
      const passo = (t) => {
        const dt = Math.max(0, t - inicio);
        for (let i = 0; i < 3; i++) {
          if (parado[i]) continue;
          if (dt >= duracoes[i]) {
            parado[i] = true;
            rolosEl[i].classList.remove('girando');
            desenharFita(i, fitas[i], 0);
            pancada(estado, 150 - i * 12, 0.13, 0.11); // o rolo trava com um "tum" e um estalo de metal
            estalo(estado, 1100 + i * 350, 0.06, 0.09);
            bip(estado, 330 + i * 110, 0.1, 'square', 0.025);
          } else {
            const pos = posicao(i, dt);
            desenharFita(i, fitas[i], pos);
            const linha = Math.floor(pos); // cada símbolo que passa pela janela faz um "tec"; na freada os tecs ficam mais espaçados
            if (linha !== linhaAnterior[i]) {
              if (linhaAnterior[i] >= 0) estalo(estado, 1500 + i * 450, 0.022, 0.05);
              linhaAnterior[i] = linha;
            }
          }
        }
        if (!motorDesligado && dt >= duracoes[2] - FREIO) { motorDesligado = true; zumbido?.sair(FREIO / 1000 + 0.1); }
        if (parado.every(Boolean)) fim(res); else requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    };
    if (atraso > 0) setTimeout(arrancar, atraso); else arrancar();
  }

  function chover(fichas) { // moedinhas caem na bandeja (mais fichas, mais moedas)
    const n = Math.min(10, Math.max(2, Math.ceil(fichas / 25)));
    for (let k = 0; k < n; k++) {
      const m = el('i', 'moeda caindo');
      m.style.left = `${14 + Math.random() * 68}%`;
      m.style.animationDelay = `${k * 0.09}s`;
      m.addEventListener('animationend', () => m.remove());
      bandeja.append(m);
      estalo(estado, 3400 + Math.random() * 900, 0.04, 0.05, 0.55 + k * 0.09); // tilintar na bandeja
    }
  }

  function fim(res) {
    girando = false;
    estado.fichas += res.fichas;
    estado.semTrio = res.tipo === 'trio' ? 0 : estado.semTrio + 1;
    if (res.skin) estado.skins.push(res.skin.id);
    salvar();
    if (res.fichas > 0) chover(res.fichas);
    if (res.tipo === 'trio') {
      mostrarMensagem(`TRIO! +${res.fichas}`, 'ganhou');
      janela.classList.add('vitoria'); maq.classList.add('vitoria');
      [523, 659, 784, 1047].forEach((f, k) => bip(estado, f, 0.14, 'square', 0.05, k * 0.11));
    } else if (res.tipo === 'par') {
      mostrarMensagem(`PAR! +${res.fichas}`, 'par');
      bip(estado, 523, 0.1); bip(estado, 659, 0.1, 'square', 0.04, 0.1);
    } else {
      mostrarMensagem(estado.semTrio >= GIROS_ATE_GARANTIA ? 'QUASE! PRÓXIMO É TRIO' : 'TENTE DE NOVO');
    }
    if (res.skin) {
      premioBox.replaceChildren();
      premioBox.style.setProperty('--r', RARIDADES[res.skin.raridade].cor);
      const cat = CATEGORIAS.find((c) => c.id === res.skin.cat).nome;
      premioBox.append(el('b', null, 'NOVA SKIN!'), el('span', null, `${cat}: ${res.skin.nome} (${RARIDADES[res.skin.raridade].nome})`));
      const b = el('button', 'cas-mini', 'EQUIPAR');
      b.onclick = () => { equipar(res.skin); b.disabled = true; b.textContent = 'OK'; };
      premioBox.append(b);
      premioBox.hidden = false;
      [784, 988, 1175, 1568].forEach((f, k) => bip(estado, f, 0.18, 'triangle', 0.06, 0.5 + k * 0.12));
    }
    atualizar();
  }

  function puxar() { // a alavanca desce (1,1 s de animação) e os rolos arrancam quando ela chega embaixo
    if (!aberto || girando || estado.fichas < CUSTO) return;
    alavanca.classList.add('puxada'); maq.classList.add('puxando');
    setTimeout(() => { alavanca.classList.remove('puxada'); maq.classList.remove('puxando'); }, 1150);
    for (let k = 0; k < 5; k++) estalo(estado, 2600 - k * 150, 0.03, 0.07, 0.07 + k * 0.045); // catraca do mecanismo
    pancada(estado, 95, 0.2, 0.15, 0.34); // batida no fim do curso
    estalo(estado, 900, 0.07, 0.1, 0.34);
    pancada(estado, 330, 0.1, 0.05, 0.76); // mola soltando
    estalo(estado, 2200, 0.05, 0.06, 0.9);
    girar(360);
  }

  function abrir() {
    if (aberto) return;
    aberto = true;
    raiz.classList.add('aberto');
    tabela.hidden = true;
    alternarColecao(false);
    atualizar();
    btnGirar.focus();
  }
  function fecharJanela() {
    if (!aberto || girando) return;
    aberto = false;
    raiz.classList.remove('aberto');
  }

  btnGirar.onclick = () => girar();
  alavanca.onclick = puxar;
  btnAjuda.onclick = () => { tabela.hidden = !tabela.hidden; atualizar(); };
  btnColecao.onclick = () => alternarColecao(true);
  fechar.onclick = fecharJanela;
  btnGratis.onclick = () => { estado.fichas += FICHAS_GRATIS; salvar(); atualizar(); mostrarMensagem('FICHAS DE CORTESIA!'); bip(estado, 880, 0.1); };
  btnSom.onclick = () => { estado.som = !estado.som; salvar(); atualizar(); bip(estado, 660, 0.06); };
  raiz.addEventListener('pointerdown', (e) => { if (e.target === raiz) fecharJanela(); });
  window.addEventListener('keydown', (e) => {
    if (!aberto) return;
    if (e.code === 'Escape') { e.preventDefault(); if (naColecao) alternarColecao(false); else fecharJanela(); }
    else if (e.code === 'Space' && !naColecao && ![btnColecao, btnAjuda, btnSom, btnGratis, fechar].includes(document.activeElement)) { e.preventDefault(); puxar(); }
    else if (e.code === 'KeyC') { e.preventDefault(); alternarColecao(!naColecao); }
  }, true);

  // primeiro desenho dos rolos e aplicação das skins salvas
  for (let i = 0; i < 3; i++) mostrarRolo(i, [simboloAleatorio(), SIMBOLOS[(i * 2) % SIMBOLOS.length], simboloAleatorio()]);
  atualizar();
  aoMudarSkins({ ...estado.equipadas });

  return {
    abrir, fechar: fecharJanela, estaAberto: () => aberto,
    adicionarFichas: (n) => { estado.fichas += n; salvar(); atualizar(); }, // fichas do mapa
    bip: (...a) => bip(estado, ...a),
    somAtivo: () => estado.som,
  };
}
