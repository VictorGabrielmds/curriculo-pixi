import { defineConfig } from 'vite';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const paginasAlternativas = {
  name: 'paginas-alternativas',
  closeBundle() {
    const pastaDist = resolve('dist');
    const indexPath = resolve(pastaDist, 'index.html');
    const html = readFileSync(indexPath, 'utf8');

    // GitHub Pages serve /yas/ como uma página real e mantém os assets na raiz do projeto.
    const pastaYas = resolve(pastaDist, 'yas');
    mkdirSync(pastaYas, { recursive: true });
    writeFileSync(resolve(pastaYas, 'index.html'), html.replace('<head>', '<head>\n    <base href="../">'));

    // Fallback para links diretos em hospedagens estáticas que não conhecem as rotas do Vite.
    copyFileSync(indexPath, resolve(pastaDist, '404.html'));
  },
};

// base relativo: funciona no GitHub Pages em qualquer nome de repositório
export default defineConfig({ base: './', plugins: [paginasAlternativas] });
