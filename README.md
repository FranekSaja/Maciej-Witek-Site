# Maciej Witek — Strona w Astro

Szkielet projektu Astro z Tailwind 4, MDX, sitemap i Content Collections.

## Wymagania
- Node.js >= 20.3 (zalecane >= 22)
- pnpm >= 8 (zalecane) lub npm >= 9

## Instalacja
```sh
pnpm install
```

## Development
```sh
pnpm dev
```
Aplikacja domyślnie uruchomi się na http://localhost:4321/

## Build
```sh
pnpm build
pnpm preview
```
Wynik budowania znajdziesz w katalogu `dist/`.

## Pliki i katalogi
- `astro.config.mjs` — konfiguracja Astro (ustaw docelowe `site`).
- `tsconfig.json` — TypeScript + aliasy `@components/*`, `@layouts/*`.
- `src/content.config.ts` — Content Collections: `bio`, `publications` (Zod).
- `src/pages/` — strony (`index.astro`, `404.astro`).
- `src/layouts/MainLayout.astro` — główny layout + meta/OG.
- `src/styles/global.css` — Tailwind 4 przez `@tailwindcss/vite`.
- `public/` — statyczne pliki (`favicon.svg`, `robots.txt`).

## Treści
- Edytuj `src/content/bio/index.md` (frontmatter: `name`, `title`, opcjonalnie `email`).
- Dodawaj publikacje w `src/content/publications/*.md` (`title`, `year`, `authors[]`, `link`).

## Uwaga dot. lint/typów
- Błędy typu „module not found” z `astro:content`/`astro/loaders` znikną po instalacji zależności i uruchomieniu `astro dev`.
- Reguła `@theme` w `src/styles/global.css` jest częścią Tailwind 4 — działa z wtyczką `@tailwindcss/vite` (może być podświetlana jako ostrzeżenie przez edytor do czasu uruchomienia Vite).

## Dostosuj
- Zmień `site` i `base` w `astro.config.mjs` pod docelowy hosting (Netlify/Vercel/GitHub Pages).
- Jeśli wdrożysz na GitHub Pages w podkatalogu, ustaw `base: "/nazwa-repo"`.
- Jeśli chcesz RSS lub dodatkowe integracje, zobacz sekcję „RSS” i „SEO” w `/.windsurf/rules.md`.
