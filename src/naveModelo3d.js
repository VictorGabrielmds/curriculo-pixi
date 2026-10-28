// As peças da nave montada na garagem, em 3D, para o ícone da estação no planeta. É o mesmo projeto do jogo: cada peça aparece
// no seu encaixe (armas na frente, motores embaixo, reator em volta do casco, placas no topo, módulos nas laterais).
import * as THREE from 'three';
import { encaixesDoProjeto, normalizarProjeto } from './naveModular.js';
import { CHAMAS } from './naveDesenho.js';

const cor = (css) => parseInt(css.slice(1), 16);

// mat: fábrica de materiais do main.js; metal: material do metal da nave (muda com o tema da rota)
export function construirPecas3D(projeto, { mat, metal }) {
  const proj = normalizarProjeto(projeto), g = new THREE.Group();
  const brilho = (c, i = 0.9) => mat(c, { emissive: c, emissiveIntensity: i });
  const ciano = mat(0x55e2e0, { emissive: 0x197c9c, emissiveIntensity: 0.8 }), violeta = mat(0x6c5cff, { emissive: 0x302080, emissiveIntensity: 0.7 });
  const verde = mat(0x7dff9a, { emissive: 0x1a803f, emissiveIntensity: 0.7 }), vermelho = mat(0xff5a59, { emissive: 0x9c2020, emissiveIntensity: 0.7 });
  const escuro = mat(0x2d3348), claro = mat(0xc9cdd8);
  const add = (geo, material, x, y, z, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, material); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; g.add(m); return m; };
  const cil = (r1, r2, h, seg = 8) => new THREE.CylinderGeometry(r1, r2, h, seg);

  for (const e of encaixesDoProjeto(proj)) {
    if (!e.peca) continue;
    const sx = (e.x - 12) / 12, sy = (e.y - 12) / 12;
    switch (e.peca.id) {
      // ---- armas: canos para a frente (+z), na altura do casco ----
      case 'canhao': { const x = sx * 1.4; add(cil(0.09, 0.13, 0.9), metal, x, 2.0, 0.8, Math.PI / 2); add(cil(0.06, 0.06, 0.12), brilho(0xffe14a), x, 2.0, 1.28, Math.PI / 2); break; }
      case 'duplo': { const x = sx * 1.4; for (const d of [-0.2, 0.2]) { add(cil(0.08, 0.11, 1.1), metal, x + d, 2.0, 0.82, Math.PI / 2); add(cil(0.05, 0.05, 0.1), brilho(0xffe14a), x + d, 2.0, 1.36, Math.PI / 2); } break; }
      case 'rail': { const x = sx * 1.4; add(new THREE.BoxGeometry(0.22, 0.2, 1.8), metal, x, 2.05, 0.8); add(new THREE.BoxGeometry(0.07, 0.08, 1.9), ciano, x, 2.17, 0.82); break; }
      case 'dispersor': { const x = sx * 1.4; for (const d of [-1, 0, 1]) add(cil(0.07, 0.1, 0.95), d === 0 ? ciano : metal, x + d * 0.3, 2.0, 0.76, Math.PI / 2, 0, d * 0.5); break; }
      case 'bobina': { const x = sx * 1.4; for (let k = 0; k < 4; k++) add(new THREE.TorusGeometry(0.13, 0.04, 6, 10), k % 2 ? violeta : claro, x, 2.0, 0.55 + k * 0.2); add(new THREE.SphereGeometry(0.13, 8, 8), brilho(0xe6d2ff, 1.2), x, 2.0, 1.4); break; }
      // ---- motores: bocais embaixo, com a chama do tipo do motor ----
      case 'quimico': case 'ionico': case 'plasma': case 'vetorial': {
        const x = sx * 1.7, z = -0.05, c = CHAMAS[e.peca.id], tam = e.peca.id === 'plasma' ? 1.2 : 0.9;
        if (e.peca.id === 'plasma') add(new THREE.TorusGeometry(0.4, 0.1, 8, 20), violeta, x, 1.08, z, Math.PI / 2);
        else if (e.peca.id === 'vetorial') for (let k = 0; k < 3; k++) { const a = (k * Math.PI * 2) / 3, b = add(new THREE.ConeGeometry(0.13, 0.5, 8), verde, x + Math.cos(a) * 0.3, 0.95, z + Math.sin(a) * 0.3, Math.PI); b.rotation.z += Math.cos(a) * 0.3; b.rotation.x += Math.sin(a) * 0.3; }
        else add(cil(0.17, 0.24, 0.45, 10), metal, x, 1.08, z);
        add(new THREE.ConeGeometry(e.peca.id === 'plasma' ? 0.34 : 0.2, 0.7 * tam, 10), brilho(cor(c[1]), 1.1), x, 0.66, z, Math.PI);
        add(new THREE.ConeGeometry(e.peca.id === 'plasma' ? 0.2 : 0.11, 0.45 * tam, 8), brilho(cor(c[0]), 1.3), x, 0.78, z, Math.PI);
        break;
      }
      // ---- reatores: um cinturão luminoso em volta do casco ----
      case 'fusao': add(new THREE.TorusGeometry(1.0, 0.08, 8, 28), brilho(0xff7a2a, 1.1), 0, 1.87, 0, Math.PI / 2); break;
      case 'quantico': add(new THREE.IcosahedronGeometry(1.2, 1), new THREE.MeshBasicMaterial({ color: 0xa56bff, wireframe: true, transparent: true, opacity: 0.6 }), 0, 1.86, 0); break;
      case 'solar': for (const s of [-1, 1]) { add(new THREE.BoxGeometry(0.8, 0.05, 0.6), mat(0x3755a8, { emissive: 0x17285f, emissiveIntensity: 0.5 }), s * 1.3, 1.85, 0, 0, 0, s * 0.12); add(new THREE.BoxGeometry(0.1, 0.05, 0.1), metal, s * 0.98, 1.85, 0); } break;
      case 'capacitor': for (const s of [-1, 1]) add(cil(0.1, 0.1, 0.4, 8), mat(0x2f8cff, { emissive: 0x153f85, emissiveIntensity: 0.6 }), s * 0.98, 1.85, -0.2); break;
      // ---- placas: componentes no topo da nave ----
      case 'analogica': add(new THREE.BoxGeometry(0.34, 0.1, 0.34), mat(0x3b4a45), sx * 1.2, 2.62, 0.1 + sy * 0.3); break;
      case 'mira': { const x = sx * 1.2, z = 0.1 + sy * 0.3; add(new THREE.BoxGeometry(0.34, 0.1, 0.34), mat(0x1f6b4a), x, 2.62, z); add(new THREE.SphereGeometry(0.09, 8, 6), vermelho, x, 2.74, z); break; }
      case 'coletor': { const x = sx * 1.2, z = 0.1 + sy * 0.3; add(cil(0.3, 0.3, 0.05, 18), ciano, x, 2.8, z, 0.35, 0, 0.2); add(cil(0.025, 0.025, 0.4, 6), metal, x, 2.65, z); break; }
      case 'overclock': { const x = sx * 1.2, z = 0.1 + sy * 0.3; add(new THREE.BoxGeometry(0.3, 0.1, 0.3), mat(0x1f6b4a), x, 2.62, z); for (const [dx, dz] of [[-0.1, -0.1], [0.1, 0.1]]) add(new THREE.BoxGeometry(0.1, 0.14, 0.1), verde, x + dx, 2.74, z + dz); break; }
      case 'giroscopio': add(new THREE.TorusGeometry(0.17, 0.04, 6, 14), claro, sx * 1.2, 2.7, 0.1 + sy * 0.3); break;
      // ---- módulos: caixas nas laterais ----
      case 'dissipador': { const x = sx * 1.35; for (let k = -1; k <= 1; k++) add(new THREE.BoxGeometry(0.06, 0.5, 0.5), k === 0 ? ciano : claro, x + k * 0.14, 1.75, sy * 0.5); break; }
      case 'barreira': { const x = sx * 1.3; add(new THREE.SphereGeometry(0.22, 10, 8), brilho(0x38c8ff, 1), x, 1.75, sy * 0.5); add(new THREE.TorusGeometry(0.34, 0.03, 6, 20), claro, x, 1.75, sy * 0.5, Math.PI / 2); break; }
      case 'blindagem': add(new THREE.BoxGeometry(0.22, 0.75, 0.55), mat(0x5a6176), sx * 1.38, 1.8, sy * 0.5); break;
      case 'bateria': add(cil(0.2, 0.2, 0.6, 10), escuro, sx * 1.32, 1.75, sy * 0.5); add(cil(0.21, 0.21, 0.12, 10), brilho(0x7dff9a, 0.9), sx * 1.32, 1.9, sy * 0.5); break;
      case 'ima': { const x = sx * 1.32; add(new THREE.TorusGeometry(0.26, 0.07, 6, 14, Math.PI), vermelho, x, 1.75, sy * 0.5, 0, 0, Math.PI); break; }
      default: break;
    }
  }

  // detalhes de cada chassi
  if (proj.chassi === 'interceptor') {
    add(new THREE.ConeGeometry(0.28, 1.1, 6), metal, 0, 1.84, 1.2, Math.PI / 2);
    for (const s of [-1, 1]) add(new THREE.BoxGeometry(0.9, 0.08, 0.5), mat(0xff7a3a), s * 1.0, 1.72, 0.2, 0, 0, s * -0.25);
  } else if (proj.chassi === 'blindado') {
    for (const [x, z] of [[-0.85, -0.55], [0.85, -0.55], [-0.85, 0.55], [0.85, 0.55]]) add(new THREE.BoxGeometry(0.5, 0.35, 0.68), metal, x, 1.84, z, 0, 0, x * 0.12);
  } else if (proj.chassi === 'modular') {
    for (let k = 0; k < 6; k++) { const a = (k * Math.PI) / 3; add(new THREE.OctahedronGeometry(0.16, 0), k % 2 ? ciano : violeta, Math.cos(a) * 1.06, 1.86, Math.sin(a) * 1.06); }
  }
  return g;
}

// escala do casco e do anel de cada chassi (a silhueta da nave do planeta muda com o chassi)
export function formaDoCasco(chassiId) {
  return {
    interceptor: { casco: [1, 0.7, 1.18], anel: 0.96 }, blindado: { casco: [1.14, 0.98, 1.14], anel: 1.12 },
    modular: { casco: [1.06, 0.82, 1.06], anel: 1.06 },
  }[chassiId] || { casco: [1, 0.85, 1], anel: 1 };
}
