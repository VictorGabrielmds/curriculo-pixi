// Futebol no planeta: leve a bola andando (ela rola na sua frente a cada toque) até o gol. Ao marcar, saem cruzes de malta
// como os corações da Mazzy, e o gol e a bola vão para outros lugares do planeta. Os gols ficam contados no navegador.
import * as THREE from 'three';
import { soltarCruzes } from './carinhos.js';

const CHAVE = 'curriculo-futebol-v1';
const RAIO_BOLA = 0.25; // unidades do mundo
const CONTATO = 0.085; // rad: a que distância o personagem chuta a bola
const ATRITO = 1.6; // por segundo: a bola perde velocidade e o personagem a alcança para o próximo toque
const GOL_L = 1.8, GOL_A = 0.9, GOL_P = 0.6; // largura, altura e profundidade do gol
const CIMA = new THREE.Vector3(0, 1, 0);
const VISTA = new THREE.Vector3(0, 0.4, 0.92).normalize(); // de onde a câmera olha o planeta (para a primeira bola e o primeiro gol nascerem à vista)

function lerGols() { try { return JSON.parse(localStorage.getItem(CHAVE))?.gols | 0; } catch { return 0; } }
function guardarGols(n) { try { localStorage.setItem(CHAVE, JSON.stringify({ gols: n })); } catch { /* sem armazenamento */ } }

// ---------- modelos ----------
function modeloBola() { // icosaedro com os 12 "pentágonos" pretos nos vértices, como uma bola de couro clássica
  const g = new THREE.IcosahedronGeometry(RAIO_BOLA, 2);
  const f = (1 + Math.sqrt(5)) / 2;
  const base = [];
  for (const a of [-1, 1]) for (const b of [-f, f]) base.push([0, a, b], [a, b, 0], [b, 0, a]);
  const vertices = base.map((v) => new THREE.Vector3(...v).normalize());
  const pos = g.attributes.position, cores = new Float32Array(pos.count * 3), c = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 3) {
    c.set(0, 0, 0);
    for (let k = 0; k < 3; k++) c.add(new THREE.Vector3(pos.getX(i + k), pos.getY(i + k), pos.getZ(i + k)));
    c.normalize();
    const preto = vertices.some((v) => c.dot(v) > Math.cos(0.36));
    for (let k = 0; k < 3; k++) cores.set(preto ? [0.07, 0.07, 0.1] : [0.97, 0.97, 0.97], (i + k) * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(cores, 3));
  return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.55 }));
}

function texturaRede() {
  const c = document.createElement('canvas');
  c.width = c.height = 8;
  const x = c.getContext('2d');
  x.fillStyle = 'rgba(255,255,255,0.9)';
  x.fillRect(0, 0, 8, 1); x.fillRect(0, 0, 1, 8);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  return t;
}
function modeloGol() { // frente voltada para +z; o fundo fica em z = -GOL_P
  const g = new THREE.Group();
  const trave = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.5, flatShading: true });
  const cil = (comp) => new THREE.CylinderGeometry(0.045, 0.045, comp, 6);
  const barra = (comp, x, y, z, eixo) => {
    const m = new THREE.Mesh(cil(comp), trave);
    m.position.set(x, y, z);
    if (eixo === 'x') m.rotation.z = Math.PI / 2; else if (eixo === 'z') m.rotation.x = Math.PI / 2;
    g.add(m);
  };
  for (const x of [-GOL_L / 2, GOL_L / 2]) for (const z of [0, -GOL_P]) barra(GOL_A, x, GOL_A / 2, z, 'y'); // quatro postes
  for (const z of [0, -GOL_P]) { barra(GOL_L + 0.09, 0, GOL_A, z, 'x'); barra(GOL_L + 0.09, 0, 0.04, z, 'x'); } // travessões e rodapés
  for (const x of [-GOL_L / 2, GOL_L / 2]) { barra(GOL_P, x, GOL_A, -GOL_P / 2, 'z'); barra(GOL_P, x, 0.04, -GOL_P / 2, 'z'); }
  const rede = (w, h) => { // plano com a malha da rede
    const t = texturaRede(); t.repeat.set(w / 0.15, h / 0.15);
    return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, depthWrite: false }));
  };
  const fundo = rede(GOL_L, GOL_A); fundo.position.set(0, GOL_A / 2, -GOL_P);
  const topo = rede(GOL_L, GOL_P); topo.rotation.x = Math.PI / 2; topo.position.set(0, GOL_A, -GOL_P / 2);
  g.add(fundo, topo);
  for (const x of [-GOL_L / 2, GOL_L / 2]) { const l = rede(GOL_P, GOL_A); l.rotation.y = Math.PI / 2; l.position.set(x, GOL_A / 2, -GOL_P / 2); g.add(l); }
  g.traverse((o) => { if (o.isMesh && o.material === trave) { o.castShadow = true; } });
  return g;
}

function sombrinha(raio) {
  const c = document.createElement('canvas');
  c.width = c.height = 32;
  const x = c.getContext('2d'), g = x.createRadialGradient(16, 16, 1, 16, 16, 15);
  g.addColorStop(0, 'rgba(0,0,0,0.8)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 32, 32);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(raio * 2, raio * 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: 0.5, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.03;
  return m;
}

// ---------- o jogo ----------
export function criarFutebol({ planeta, fincar, R, q, altura, NIVEL_MAR, dirsZonas, raioBloqueio, obstaculos, dirsSitios, camera, rotulosEl, camDir, bip }) {
  let gols = lerGols(), tempo = 0, estado = 'jogando', fimFesta = 0, ultimoToque = -1;
  const qInv = new THREE.Quaternion(), qRot = new THREE.Quaternion(), qRolar = new THREE.Quaternion(), qPiv = new THREE.Quaternion();
  const bw = new THREE.Vector3(), gw = new THREE.Vector3(), tmp = new THREE.Vector3(), eixo = new THREE.Vector3(), dAntes = new THREE.Vector3(), jogador = new THREE.Vector3();

  // bola
  const bolaObj = new THREE.Group(), rolar = modeloBola(), sombraBola = sombrinha(0.35);
  rolar.position.y = RAIO_BOLA;
  rolar.castShadow = true;
  const topoBola = new THREE.Object3D(); topoBola.position.y = 0.85;
  bolaObj.add(sombraBola, rolar, topoBola);
  const bola = { d: new THREE.Vector3(0, 1, 0), ue: 0, un: 0, escala: 1, piv: null };
  bola.piv = fincar(bolaObj, bola.d.clone(), 0);

  // gol
  const golObj = modeloGol(), topoGol = new THREE.Object3D(); topoGol.position.set(0, 1.5, -GOL_P / 2);
  golObj.add(topoGol);
  const gol = { d: new THREE.Vector3(0, 1, 0), ex: new THREE.Vector3(), ez: new THREE.Vector3(), escala: 1, piv: null };
  gol.piv = fincar(golObj, gol.d.clone(), 0);

  // nomes em cima da bola e do gol
  const rotulo = (txt) => { const e = document.createElement('div'); e.className = 'rotulo pet'; e.textContent = txt; rotulosEl.append(e); return e; };
  const rotuloBola = rotulo('bola'), rotuloGol = rotulo('gol');
  const textoGol = () => (gols ? `gol · ${gols}` : 'gol');
  function ancorar(el, ponto, visivel) {
    if (!visivel) { el.style.opacity = '0'; return; }
    ponto.getWorldPosition(tmp).project(camera);
    el.style.transform = `translate(${Math.round((tmp.x * 0.5 + 0.5) * window.innerWidth)}px, ${Math.round((-tmp.y * 0.5 + 0.5) * window.innerHeight)}px) translate(-50%, -100%)`;
    el.style.opacity = '1';
  }

  // sorteia um ponto de terra firme longe de estações, árvores, pedras e dos cantinhos da Jasmim e da Mazzy
  const eixos = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((a) => new THREE.Vector3(...a));
  function sortear({ folga, jogadorMin = 0, jogadorMax = Math.PI, visivel = -1, longe = [], tentativas = 400 }) {
    jogador.copy(CIMA).applyQuaternion(qInv.copy(q).invert());
    const dir = new THREE.Vector3();
    for (let t = 0; t < tentativas; t++) {
      dir.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      const aj = dir.angleTo(jogador);
      if (aj < jogadorMin || aj > jogadorMax) continue;
      if (visivel > -1 && tmp.copy(dir).applyQuaternion(q).dot(VISTA) < visivel) continue; // do lado do planeta que a câmera vê
      if (altura(dir) < NIVEL_MAR + 0.1) continue;
      if (eixos.some((a) => altura(tmp.copy(dir).addScaledVector(a, 0.07).normalize()) < NIVEL_MAR + 0.03)) continue; // longe da beira da água
      if (longe.some(({ d, min }) => dir.angleTo(d) < min)) continue;
      if (dirsZonas.some((z, k) => dir.angleTo(z) < raioBloqueio[k] + folga + 0.1)) continue;
      if (obstaculos.some((o) => dir.angleTo(o.d) < o.r + folga)) continue;
      if (Object.values(dirsSitios).some((s) => dir.angleTo(s) < 0.25 + folga)) continue;
      return dir.clone();
    }
    return null;
  }

  function colocarGol(d, giro) {
    gol.d.copy(d);
    gol.piv.quaternion.setFromUnitVectors(CIMA, d);
    golObj.rotation.y = giro;
    qPiv.copy(gol.piv.quaternion).multiply(qRot.setFromAxisAngle(CIMA, giro)); // eixos do gol no referencial do planeta
    gol.ex.set(1, 0, 0).applyQuaternion(qPiv);
    gol.ez.set(0, 0, 1).applyQuaternion(qPiv);
    gol.escala = 0.01;
  }
  function colocarBola(d) {
    bola.d.copy(d);
    bola.piv.quaternion.setFromUnitVectors(CIMA, d);
    bola.ue = bola.un = 0;
    bola.escala = 0.01;
  }
  function sortearTudo(primeira) {
    // vai afrouxando as exigências até achar um lugar (na primeira vez, de preferência à vista e não muito longe)
    const g = sortear({ folga: 0.3, jogadorMin: 0.9, jogadorMax: primeira ? 1.7 : Math.PI, visivel: primeira ? 0.3 : -1 })
      ?? sortear({ folga: 0.2, jogadorMin: 0.7, jogadorMax: primeira ? 1.9 : Math.PI, visivel: primeira ? 0.1 : -1, tentativas: 800 })
      ?? sortear({ folga: 0.1, tentativas: 800 }) ?? gol.d.clone();
    colocarGol(g, Math.random() * Math.PI * 2);
    const b = sortear({ folga: 0.12, jogadorMin: 0.55, jogadorMax: primeira ? 1.0 : Math.PI, visivel: primeira ? 0.5 : -1, longe: [{ d: g, min: 0.9 }] })
      ?? sortear({ folga: 0.06, jogadorMin: 0.4, tentativas: 800 }) ?? bola.d.clone();
    colocarBola(b);
  }
  sortearTudo(true);

  function marcar() {
    estado = 'comemorando';
    fimFesta = tempo + 1.0;
    gols += 1;
    guardarGols(gols);
    rotuloGol.textContent = textoGol();
    topoGol.getWorldPosition(tmp).project(camera);
    const px = (tmp.x * 0.5 + 0.5) * window.innerWidth, py = (-tmp.y * 0.5 + 0.5) * window.innerHeight;
    soltarCruzes(px, py + 40, 6);
    const e = document.createElement('div');
    e.className = 'popup'; e.textContent = 'GOL!'; e.style.left = `${Math.round(px)}px`; e.style.top = `${Math.round(py)}px`; e.style.fontSize = '30px';
    document.body.append(e);
    setTimeout(() => e.remove(), 1000);
    [523, 659, 784, 1047, 1319].forEach((f, k) => bip(f, k === 4 ? 0.4 : 0.11, 'square', 0.05, k * 0.09));
  }

  return {
    teste: { bola, gol, colocarBola, colocarGol, golsAtuais: () => gols }, // para conferir no navegador (modo de desenvolvimento)
    // dir: dados do personagem neste quadro; pausado = um jogo aberto
    atualizar(dt, { vLeste, vNorte, VEL, pulando, pausado }) {
      if (pausado) return;
      tempo += dt;
      qInv.copy(q).invert();
      const festa = estado === 'comemorando';

      // --- a bola ---
      dAntes.copy(bola.d);
      bw.copy(bola.d).applyQuaternion(q); // onde ela está no mundo (o personagem fica no topo, em (0,1,0))
      const a = Math.acos(Math.min(1, Math.max(-1, bw.y)));
      if (!festa && !pulando && a < CONTATO) {
        const ne = bw.x, nn = -bw.z, nl = Math.hypot(ne, nn) || 1; // de onde o personagem está para onde a bola está (leste, norte)
        const pe = vLeste * VEL, pn = vNorte * VEL, ps = Math.hypot(pe, pn);
        let ke, kn, vel;
        if (ps > 0.12 && (pe * ne + pn * nn) / (ps * nl) > -0.2) { // andando em direção à bola: um toque que a leva à frente
          ke = (pe / ps) * 0.75 + ne / nl * 0.65; kn = (pn / ps) * 0.75 + nn / nl * 0.65;
          vel = Math.max(Math.hypot(bola.ue, bola.un), ps * 1.5 + 0.25);
        } else { ke = ne / nl; kn = nn / nl; vel = 0.5; } // parado (ou de costas para ela): só a empurra para fora
        const kl = Math.hypot(ke, kn) || 1;
        bola.ue = (ke / kl) * vel; bola.un = (kn / kl) * vel;
        if (ps > 0.12 && tempo - ultimoToque > 0.22) { ultimoToque = tempo; bip(170, 0.06, 'sine', 0.08); bip(95, 0.08, 'sine', 0.06, 0.02); }
      }
      const atrito = Math.exp(-(festa ? 5 : ATRITO) * dt);
      bola.ue *= atrito; bola.un *= atrito;
      const vb = Math.hypot(bola.ue, bola.un);
      if (vb < 0.01) { bola.ue = bola.un = 0; } else {
        eixo.set(-bola.un, 0, -bola.ue).normalize(); // andar para leste = girar em volta de -z; para norte = em volta de -x
        qRot.setFromAxisAngle(eixo, vb * dt);
        bw.applyQuaternion(qRot);
        bola.d.copy(bw).applyQuaternion(qInv).normalize();
      }
      // obstáculos: a bola não atravessa estações, árvores nem pedras
      const bate = (o, r) => {
        const cosr = Math.cos(r);
        if (bola.d.dot(o) <= cosr) return;
        eixo.crossVectors(o, bola.d);
        if (eixo.lengthSq() < 1e-9) eixo.set(1, 0, 0);
        eixo.normalize();
        bola.d.applyQuaternion(qRot.setFromAxisAngle(eixo, r - Math.acos(Math.min(1, bola.d.dot(o))))).normalize();
        bola.ue *= 0.3; bola.un *= 0.3;
      };
      dirsZonas.forEach((z, k) => bate(z, raioBloqueio[k] + 0.03));
      for (const o of obstaculos) bate(o.d, o.r + 0.03);
      // o pivô acompanha o deslocamento da bola sem torcer
      bola.piv.quaternion.premultiply(qRot.setFromUnitVectors(dAntes, bola.d));
      // rolando: gira em volta do eixo perpendicular ao movimento
      if (vb >= 0.01) {
        tmp.set(bola.ue, 0, -bola.un).normalize().applyQuaternion(qInv).applyQuaternion(qPiv.copy(bola.piv.quaternion).invert());
        eixo.crossVectors(CIMA, tmp);
        if (eixo.lengthSq() > 1e-9) rolar.quaternion.premultiply(qRolar.setFromAxisAngle(eixo.normalize(), (vb * R * dt) / RAIO_BOLA));
      }
      bola.escala = bola.escala + (1 - bola.escala) * (1 - Math.exp(-6 * dt));
      bolaObj.scale.setScalar(bola.escala);

      // --- o gol ---
      gol.escala = gol.escala + (1 - gol.escala) * (1 - Math.exp(-6 * dt));
      golObj.scale.setScalar(gol.escala * (festa ? 1 + Math.sin((tempo - fimFesta) * 20) * 0.06 : 1));
      if (!festa) { // dentro do gol (entre as traves e o fundo)?
        tmp.copy(bola.d).sub(gol.d);
        const lx = tmp.dot(gol.ex) * R, lz = tmp.dot(gol.ez) * R + GOL_P / 2;
        if (Math.abs(lx) < GOL_L / 2 - 0.12 && Math.abs(lz) < GOL_P / 2 - 0.02 && Math.abs(tmp.dot(gol.d)) < 0.2) marcar();
      } else if (tempo >= fimFesta) { estado = 'jogando'; sortearTudo(false); }

      // --- nomes ---
      gw.copy(gol.d).applyQuaternion(q);
      ancorar(rotuloBola, topoBola, bw.dot(camDir) > 0.2);
      ancorar(rotuloGol, topoGol, gw.dot(camDir) > 0.2);
    },
  };
}
