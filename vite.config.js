import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const paginasAlternativas = {
  name: 'paginas-alternativas',
  closeBundle() {
    const pastaDist = resolve('dist');
    const indexPath = resolve(pastaDist, 'index.html');
    const html = readFileSync(indexPath, 'utf8');

    // GitHub Pages serve as personagens como páginas reais e mantém os assets na raiz.
    for (const rota of ['yas', 'fer']) {
      const pastaRota = resolve(pastaDist, rota);
      mkdirSync(pastaRota, { recursive: true });
      writeFileSync(resolve(pastaRota, 'index.html'), html.replace('<head>', '<head>\n    <base href="../">'));
    }

    // Fallback para links diretos em hospedagens estáticas que não conhecem as rotas do Vite.
    copyFileSync(indexPath, resolve(pastaDist, '404.html'));
  },
};

// base relativo: funciona no GitHub Pages em qualquer nome de repositório
export default defineConfig({ base: './', plugins: [paginasAlternativas] });
