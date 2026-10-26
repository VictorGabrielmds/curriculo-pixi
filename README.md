# Currículo jogável (PixiJS)

Currículo interativo: um personagem anda por um mundo 2D e cada estação revela uma parte da trajetória
(início, experiência, projetos, habilidades, contato). Feito com [PixiJS 8](https://pixijs.com) + Vite, sem imagens:
todo o cenário é desenhado em código.

## Rodar

```bash
npm install
npm run dev
```

Controles: `← →` / `A D` andam, `ESPAÇO` pula. No celular, toque nas laterais da tela (andar) e no meio (pular).
Link direto para uma estação: `?zona=2` (0 a 4).

## Personalizar

Todo o conteúdo está em [`src/data.js`](src/data.js): nome, título e as zonas (título, texto, cor e ícone:
`casa`, `predio`, `foguete`, `estrela`, `carta`). Adicionar uma zona nova estica o mundo automaticamente.

## Publicar no GitHub Pages

```bash
npm run build   # gera dist/ (base relativa, funciona em qualquer nome de repositório)
```

Publique a pasta `dist/` (por exemplo com o workflow oficial de Pages ou o pacote `gh-pages`).
