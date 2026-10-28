// Ambientação de cada fase do jogo de nave: camadas extras por cima do céu (partículas, cometas, relâmpagos, destroços,
// olhos no escuro, portais...). Cada fase combina duas ou três delas (ver arcadeFases.js). "fundo" fica atrás de tudo e
// "frente" por cima do jogo (neblina, clarão de relâmpago), sempre em coordenadas da tela.
const TAU = Math.PI * 2;
const h = (i, k = 0) => { const s = Math.sin(i * 127.1 + k * 311.7 + 7.3) * 43758.5453; return s - Math.floor(s); };
const mod = (a, b) => ((a % b) + b) % b;
const rgba = (cor, a) => `rgba(${cor}, ${a})`;

const CASCOS = [ // silhuetas de naves destruídas
  [[-16, 0], [-8, -8], [8, -6], [18, 0], [8, 7], [-9, 8]],
  [[-12, -5], [0, -9], [14, -3], [12, 6], [-4, 9], [-14, 3]],
  [[-18, -2], [-6, -6], [4, -10], [16, -2], [4, 9], [-10, 6]],
];

// cada efeito: (g, c, o, camada) com c = { camX, camY, t, W, H }
const EFEITOS = {
  // pontinhos que sobem, caem ou deslizam, com brilho opcional (esporos, brasas, poeira de estrelas)
  particulas(g, c, o) {
    const { n = 40, cor = '255, 255, 255', tam = 1, vx = 0, vy = -6, par = 0.4, brilho = 0, alpha = 0.85 } = o;
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 40) - c.camX * par + vx * c.t, c.W + 40) - 20, y = mod(h(i, 2) * (c.H + 40) - c.camY * par + vy * c.t, c.H + 40) - 20;
      const a = alpha * (0.4 + 0.6 * Math.sin(c.t * (1 + h(i, 3) * 2) + i * 2.1) ** 2);
      if (brilho) { g.fillStyle = rgba(cor, a * 0.14); g.beginPath(); g.arc(x, y, brilho * (0.7 + h(i, 4)), 0, TAU); g.fill(); }
      g.fillStyle = rgba(cor, a); const s = tam + (h(i, 5) > 0.82 ? 1 : 0); g.fillRect(Math.round(x), Math.round(y), s, s);
    }
  },
  // riscos compridos (vento, chuva de íons, estrelas esticadas)
  riscos(g, c, o) {
    const { n = 20, cor = '255, 255, 255', comp = 16, vx = -40, vy = 0, par = 0.5, alpha = 0.2 } = o;
    const v = Math.hypot(vx, vy) || 1, dx = (vx / v) * comp, dy = (vy / v) * comp;
    g.strokeStyle = rgba(cor, alpha); g.lineWidth = 1; g.beginPath();
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 120) - c.camX * par + vx * c.t * (0.6 + h(i, 6)), c.W + 120) - 60, y = mod(h(i, 2) * (c.H + 120) - c.camY * par + vy * c.t * (0.6 + h(i, 6)), c.H + 120) - 60;
      g.moveTo(Math.round(x), Math.round(y)); g.lineTo(Math.round(x + dx * (0.6 + h(i, 7))), Math.round(y + dy * (0.6 + h(i, 7))));
    }
    g.stroke();
  },
  // cometas que cruzam o céu de tempos em tempos
  cometas(g, c, o) {
    const { cor = '255, 255, 255', periodo = 10, lanes = 2 } = o;
    for (let k = 0; k < lanes; k++) {
      const fase = (c.t + (k * periodo) / lanes) / periodo, ciclo = Math.floor(fase), u = fase - ciclo;
      if (u > 0.42) continue;
      const w = u / 0.42, sem = ciclo * 7 + k, dir = h(sem, 14) < 0.5 ? 1 : -1, ang = 0.25 + h(sem, 13) * 0.5;
      const cx = Math.cos(ang) * dir, cy = Math.sin(ang), x = (dir > 0 ? -30 : c.W + 30) + cx * w * (c.W + 120), y = h(sem, 12) * c.H * 0.6 + cy * w * 160;
      for (let s = 0; s < 18; s++) { g.fillStyle = rgba(cor, (1 - s / 18) * 0.85); const sz = s < 4 ? 2 : 1; g.fillRect(Math.round(x - cx * s * 4), Math.round(y - cy * s * 4), sz, sz); }
      g.fillStyle = rgba(cor, 0.2); g.beginPath(); g.arc(x, y, 6, 0, TAU); g.fill(); g.fillStyle = '#ffffff'; g.fillRect(Math.round(x) - 1, Math.round(y) - 1, 3, 3);
    }
  },
  // raio no céu e clarão na tela
  relampagos(g, c, o, camada) {
    const { cor = '180, 220, 255', periodo = 5 } = o, ciclo = Math.floor(c.t / periodo), u = c.t - ciclo * periodo;
    if (u > 0.5) return;
    if (camada === 'frente') { g.fillStyle = rgba(cor, 0.16 * (1 - u / 0.5)); g.fillRect(0, 0, c.W, c.H); return; }
    const sem = ciclo * 13; let x = h(sem, 1) * c.W; const pts = [[x, 0]];
    for (let i = 1; i <= 8; i++) { x += (h(sem + i, 2) - 0.5) * 46; pts.push([x, (i * c.H) / 8]); }
    g.lineJoin = 'round'; g.lineCap = 'round';
    for (const [w, a] of [[6, 0.14], [3, 0.35], [1, 1]]) { g.strokeStyle = w === 1 ? '#ffffff' : rgba(cor, a * (1 - u / 0.5)); g.lineWidth = w; g.beginPath(); pts.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py))); g.stroke(); }
  },
  // manchas grandes e suaves que flutuam
  neblina(g, c, o) {
    const { n = 5, cor = '120, 120, 200', par = 0.5, alpha = 0.12, raio = 90, vx = 5 } = o;
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 2 * raio) - c.camX * par + vx * c.t * (0.4 + h(i, 6)), c.W + 2 * raio) - raio, y = mod(h(i, 2) * (c.H + 2 * raio) - c.camY * par, c.H + 2 * raio) - raio, r = raio * (0.7 + h(i, 3) * 0.7);
      const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, rgba(cor, alpha * (0.7 + 0.3 * Math.sin(c.t * 0.5 + i)))); gr.addColorStop(1, rgba(cor, 0));
      g.fillStyle = gr; g.fillRect(x - r, y - r, 2 * r, 2 * r);
    }
  },
  // carcaças de naves à deriva
  destrocos(g, c, o) {
    const { n = 6, cor = '255, 200, 120', par = 0.5 } = o;
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 120) - c.camX * par + c.t * (3 + h(i, 6) * 5), c.W + 120) - 60, y = mod(h(i, 2) * (c.H + 120) - c.camY * par, c.H + 120) - 60;
      const rot = h(i, 3) * TAU + c.t * (h(i, 4) - 0.5) * 0.3, esc = 0.8 + h(i, 5) * 1.1, casco = CASCOS[i % CASCOS.length];
      g.save(); g.translate(Math.round(x), Math.round(y)); g.rotate(rot); g.scale(esc, esc);
      g.fillStyle = 'rgba(8, 6, 16, 0.9)'; g.beginPath(); casco.forEach(([px, py], k) => (k ? g.lineTo(px, py) : g.moveTo(px, py))); g.closePath(); g.fill();
      g.strokeStyle = rgba(cor, 0.35); g.lineWidth = 1; g.stroke();
      if (Math.sin(c.t * 2 + i * 5) > 0.3) { g.fillStyle = rgba(cor, 0.8); g.fillRect(-2, -1, 2, 2); }
      g.restore();
    }
  },
  // pares de olhos brilhando no escuro
  olhos(g, c, o) {
    const { n = 12, cor = '255, 60, 80', par = 0.3 } = o;
    for (let i = 0; i < n; i++) {
      const b = Math.sin(c.t * 0.6 + i * 3.7); if (b < 0.5) continue;
      const a = Math.min(1, (b - 0.5) * 4), x = mod(h(i, 1) * (c.W + 60) - c.camX * par + c.t * 1.5, c.W + 60) - 30, y = mod(h(i, 2) * (c.H + 60) - c.camY * par, c.H + 60) - 30;
      g.fillStyle = rgba(cor, a * 0.16); g.beginPath(); g.arc(x + 2, y, 8, 0, TAU); g.fill();
      g.fillStyle = rgba(cor, a); g.fillRect(Math.round(x), Math.round(y), 2, 2); g.fillRect(Math.round(x) + 5, Math.round(y), 2, 2);
    }
  },
  // ondas se alargando a partir de um ponto distante
  ondas(g, c, o) {
    const { cor = '120, 200, 255', periodo = 2.4, px = 0.7, py = 0.3, alpha = 0.4 } = o, cx = c.W * px - c.camX * 0.05, cy = c.H * py - c.camY * 0.05;
    for (let k = 0; k < 3; k++) { const u = (c.t / periodo + k / 3) % 1; g.strokeStyle = rgba(cor, alpha * (1 - u)); g.lineWidth = 1 + (1 - u); g.beginPath(); g.arc(cx, cy, u * 190, 0, TAU); g.stroke(); }
    g.fillStyle = rgba(cor, 0.9); g.fillRect(Math.round(cx) - 1, Math.round(cy) - 1, 3, 3);
  },
  // feixes giratórios, como um farol
  feixes(g, c, o) {
    const { cor = '140, 210, 255', n = 2, vel = 0.5, px = 0.75, py = 0.3 } = o, cx = c.W * px - c.camX * 0.05, cy = c.H * py - c.camY * 0.05;
    for (let k = 0; k < n; k++) {
      const a = c.t * vel + (k * TAU) / n, l = c.W, w = 0.07;
      g.fillStyle = rgba(cor, 0.09 + 0.05 * Math.sin(c.t * 8)); g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a - w) * l, cy + Math.sin(a - w) * l); g.lineTo(cx + Math.cos(a + w) * l, cy + Math.sin(a + w) * l); g.closePath(); g.fill();
      g.strokeStyle = rgba(cor, 0.35); g.lineWidth = 1; g.beginPath(); g.moveTo(cx, cy); g.lineTo(cx + Math.cos(a) * l, cy + Math.sin(a) * l); g.stroke();
    }
    g.fillStyle = '#ffffff'; g.fillRect(Math.round(cx) - 1, Math.round(cy) - 1, 3, 3);
  },
  // cubos de arame girando (o tesseract)
  grade(g, c, o) {
    const { n = 4, cor = '120, 220, 255', par = 0.3 } = o;
    const V = []; for (const a of [-1, 1]) for (const b of [-1, 1]) for (const d of [-1, 1]) V.push([a, b, d]);
    const E = [[0, 1], [0, 2], [0, 4], [1, 3], [1, 5], [2, 3], [2, 6], [3, 7], [4, 5], [4, 6], [5, 7], [6, 7]];
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 100) - c.camX * par + c.t * 2, c.W + 100) - 50, y = mod(h(i, 2) * (c.H + 100) - c.camY * par, c.H + 100) - 50, r = 10 + h(i, 3) * 12;
      const ax = c.t * 0.5 + i, ay = c.t * 0.35 + i * 2, P = V.map(([vx, vy, vz]) => { let y1 = vy * Math.cos(ax) - vz * Math.sin(ax), z1 = vy * Math.sin(ax) + vz * Math.cos(ax); const x1 = vx * Math.cos(ay) + z1 * Math.sin(ay), z2 = -vx * Math.sin(ay) + z1 * Math.cos(ay); const k = 1 / (1 + z2 * 0.18); return [x + x1 * r * k, y + y1 * r * k]; });
      g.strokeStyle = rgba(cor, 0.38); g.lineWidth = 1; g.beginPath(); for (const [a, b] of E) { g.moveTo(Math.round(P[a][0]), Math.round(P[a][1])); g.lineTo(Math.round(P[b][0]), Math.round(P[b][1])); } g.stroke();
    }
  },
  // portais pulsando
  portais(g, c, o) {
    const { n = 2, cor = '170, 130, 255', par = 0.35 } = o;
    for (let i = 0; i < n; i++) {
      const x = mod(h(i, 1) * (c.W + 120) - c.camX * par, c.W + 120) - 60, y = mod(h(i, 2) * (c.H + 120) - c.camY * par, c.H + 120) - 60;
      g.fillStyle = 'rgba(4, 2, 14, 0.7)'; g.beginPath(); g.ellipse(x, y, 11, 24, 0.3, 0, TAU); g.fill();
      for (let k = 0; k < 4; k++) { g.strokeStyle = rgba(cor, 0.5 - k * 0.1); g.lineWidth = 1; g.beginPath(); g.ellipse(x, y, 11 + k * 4 + Math.sin(c.t * 2 + k + i) * 1.5, 24 + k * 5, 0.3, 0, TAU); g.stroke(); }
    }
  },
  // rede de filamentos de luz (a teia cósmica)
  filamentos(g, c, o) {
    const { cor = '180, 150, 255', par = 0.5, cel = 64 } = o, lx = c.camX * par, ly = c.camY * par;
    const c0 = Math.floor((lx - c.W / 2 - 40) / cel), c1 = Math.floor((lx + c.W / 2 + 40) / cel), r0 = Math.floor((ly - c.H / 2 - 40) / cel), r1 = Math.floor((ly + c.H / 2 + 40) / cel);
    const no = (cx, cy) => [cx * cel - lx + c.W / 2 + h(cx, cy) * cel * 0.7, cy * cel - ly + c.H / 2 + h(cy, cx + 5) * cel * 0.7];
    g.lineWidth = 1;
    for (let cy = r0; cy <= r1; cy++) for (let cx = c0; cx <= c1; cx++) {
      const a = no(cx, cy);
      for (const [dx, dy] of [[1, 0], [0, 1], [1, 1]]) {
        if (h(cx * 3 + dx, cy * 5 + dy) > 0.55) continue;
        const b = no(cx + dx, cy + dy); g.strokeStyle = rgba(cor, 0.2); g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
        const u = (c.t * 0.35 + h(cx, cy + dx)) % 1; g.fillStyle = rgba(cor, 0.9); g.fillRect(Math.round(a[0] + (b[0] - a[0]) * u), Math.round(a[1] + (b[1] - a[1]) * u), 2, 2);
      }
      g.fillStyle = rgba(cor, 0.55); g.fillRect(Math.round(a[0]) - 1, Math.round(a[1]) - 1, 3, 3);
    }
  },
  // lente gravitacional: disco de acreção em volta de um buraco escuro
  lente(g, c, o) {
    const { cor = '255, 170, 80' } = o, cx = c.W * 0.7 - c.camX * 0.04, cy = c.H * 0.35 - c.camY * 0.04;
    for (let k = 1; k <= 4; k++) { g.strokeStyle = rgba(cor, 0.05 + 0.015 * k); g.lineWidth = 1; g.beginPath(); g.arc(cx, cy, 20 + k * 22, 0, TAU); g.stroke(); }
    g.save(); g.translate(cx, cy); g.rotate(-0.35);
    for (const [rx, ry, a, w] of [[60, 11, 0.25, 5], [50, 9, 0.45, 3], [40, 7, 0.8, 1]]) { g.strokeStyle = rgba(cor, a); g.lineWidth = w; g.beginPath(); g.ellipse(0, 0, rx, ry, 0, 0, TAU); g.stroke(); }
    g.restore();
    g.fillStyle = '#000000'; g.beginPath(); g.arc(cx, cy, 16, 0, TAU); g.fill();
    g.strokeStyle = rgba('255, 240, 200', 0.9); g.lineWidth = 1; g.beginPath(); g.arc(cx, cy, 17 + Math.sin(c.t * 2), 0, TAU); g.stroke();
  },
  // fitas de aurora
  aurora(g, c, o) {
    const { cor1 = '80, 255, 180', cor2 = '120, 140, 255', y = 0.2 } = o;
    for (let r = 0; r < 3; r++) {
      const cor = r % 2 ? cor2 : cor1;
      for (let x = 0; x < c.W; x += 4) {
        const yy = c.H * y + r * 15 + Math.sin(x * 0.03 + c.t * 0.5 + r * 2) * 10 + Math.sin(x * 0.011 - c.camX * 0.002 + c.t * 0.2) * 8, a = 0.1 + 0.07 * Math.sin(x * 0.05 + c.t + r);
        const gr = g.createLinearGradient(0, yy, 0, yy + 26); gr.addColorStop(0, rgba(cor, a)); gr.addColorStop(1, rgba(cor, 0)); g.fillStyle = gr; g.fillRect(x, yy, 4, 26);
      }
    }
  },
};

export function desenharAmbiente(g, ambientes, camada, c) {
  for (const [tipo, o] of ambientes) if ((o.camada || 'fundo') === camada || (tipo === 'relampagos' && camada === 'frente')) EFEITOS[tipo]?.(g, c, o, camada);
}
