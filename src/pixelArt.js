// Ferramentas pequenas para desenhar sprites em pixel art direto em canvas (sem arquivos de imagem).

export function novoSprite(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  const cor = (v) => { x.fillStyle = v; };
  return {
    c,
    pixel(px, py, v) { cor(v); x.fillRect(px, py, 1, 1); },
    retangulo(px, py, rw, rh, v) { cor(v); x.fillRect(px, py, rw, rh); },
    disco(cx, cy, r, v) {
      cor(v);
      for (let j = -r - 1; j <= r + 1; j++) for (let i = -r - 1; i <= r + 1; i++) if (i * i + j * j <= r * r + 0.5) x.fillRect(cx + i, cy + j, 1, 1);
    },
    elipse(cx, cy, rx, ry, v) {
      cor(v);
      for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
        const dx = (i + 0.5 - cx) / rx, dy = (j + 0.5 - cy) / ry;
        if (dx * dx + dy * dy <= 1) x.fillRect(i, j, 1, 1);
      }
    },
    poligono(pts, v) {
      cor(v);
      for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
        const px = i + 0.5, py = j + 0.5;
        let dentro = false;
        for (let a = 0, b = pts.length - 1; a < pts.length; b = a++) {
          const [xa, ya] = pts[a], [xb, yb] = pts[b];
          if ((ya > py) !== (yb > py) && px < ((xb - xa) * (py - ya)) / (yb - ya) + xa) dentro = !dentro;
        }
        if (dentro) x.fillRect(i, j, 1, 1);
      }
    },
    linha(x0, y0, x1, y1, v) {
      cor(v);
      const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1;
      for (let k = 0; k <= n; k++) x.fillRect(Math.round(x0 + ((x1 - x0) * k) / n), Math.round(y0 + ((y1 - y0) * k) / n), 1, 1);
    },
    // contorno de 1 pixel em volta do desenho
    contorno(v) {
      const img = x.getImageData(0, 0, w, h), d = img.data;
      const cheio = (i, j) => i >= 0 && j >= 0 && i < w && j < h && d[(j * w + i) * 4 + 3] > 0;
      const borda = [];
      for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
        if (!cheio(i, j) && (cheio(i + 1, j) || cheio(i - 1, j) || cheio(i, j + 1) || cheio(i, j - 1))) borda.push([i, j]);
      }
      cor(v);
      for (const [i, j] of borda) x.fillRect(i, j, 1, 1);
      return this;
    },
  };
}

// silhueta toda branca do desenho (usada para "piscar" quando o monstro leva um tiro)
export function silhuetaBranca(canvas) {
  const c = document.createElement('canvas');
  c.width = canvas.width; c.height = canvas.height;
  const x = c.getContext('2d');
  x.drawImage(canvas, 0, 0);
  x.globalCompositeOperation = 'source-in';
  x.fillStyle = '#ffffff';
  x.fillRect(0, 0, c.width, c.height);
  return c;
}
