 # Zasady pracy asystenta

Ten plik definiuje zasady i kontekst pracy dla tego repozytorium.

## 1) Komunikacja z asystentem (Assistant Behavior)
Zasady mojego działania względem powyższych reguł.
- Zawsze stosuję zasady z tego pliku; w razie niejasności – dopytuję.
- Proponuję bezpieczne alternatywy, jeśli coś koliduje z bezpieczeństwem.
- Dzielę duże zadania na kroki i raportuję postęp.
- Uzasadniam decyzje techniczne i powołuję się na odpowiednie sekcje.

## 2) Przegląd projektu (Overview)

- **Cel produktu:**  
  Stworzenie responsywnej strony wizytówkowej dla **Macieja Witka**, pracownika Uniwersytetu Szczecińskiego.  
  Strona ma prezentować jego sylwetkę naukową, obszary badawcze, dorobek oraz umożliwiać łatwy kontakt.  

- **Odbiorcy/użytkownicy:**  
  - Maciej Witek (właściciel i główny użytkownik strony).  
  - Potencjalni współpracownicy naukowi, studenci, instytucje naukowe i osoby zainteresowane jego działalnością.  

- **Kluczowa wartość:**  
  Kompleksowa, profesjonalna prezentacja kompetencji i dorobku naukowego Macieja Witka w formie łatwo dostępnej strony wizytówkowej.  

- **Kryteria sukcesu (biznes/produkt):**  
  Projekt uznajemy za zakończony („done”), gdy spełnione są wszystkie poniższe warunki:  

  1. **Dostępność**
     - Strona opublikowana pod ustalonym adresem URL i dostępna w popularnych przeglądarkach.  
     - Brak błędów krytycznych uniemożliwiających korzystanie.  

  2. **Treści**
     - Strona zawiera:  
       - pełne bio Macieja Witka,  
       - aktualne stanowisko na Uniwersytecie Szczecińskim,  
       - obszary badawcze i kompetencje,  
       - listę publikacji lub link do profilu naukowego (np. Google Scholar, ORCID),  
       - dane kontaktowe (e-mail, formularz lub linki do profili akademickich).  
     - Wszystkie informacje są **zweryfikowane i zaakceptowane** przez Macieja Witka.  

  3. **Akceptacja**
     - Maciej Witek akceptuje treści i wygląd strony jako reprezentatywne dla swojego dorobku.  

  4. **Responsywność**
     - Strona działa poprawnie na desktopie, tablecie i smartfonie.  
     - Układ treści i nawigacja są czytelne i intuicyjne na każdym urządzeniu.  

  5. **Dostępność (WCAG)**
     - Teksty mają odpowiedni kontrast względem tła.  
     - Wszystkie grafiki posiadają opisy alternatywne (`alt`).  
     - Strona obsługiwana jest także przy pomocy klawiatury.  

  6. **Wydajność**
     - Czas ładowania strony < 2 sekundy na standardowym łączu mobilnym.  
     - Brak nieoptymalnych lub nadmiarowych zasobów spowalniających działanie.  

  7. **Stabilność**
     - Brak niedziałających linków i brakujących zasobów.  
     - Formularz kontaktowy (jeśli występuje) działa poprawnie.  


## 3) Priorytety i zasady (MUST/SHOULD/MAY)

### MUST (bezwzględnie)
- Jasny podział na sekcje: **treść**, **logika**, **wygląd**.  
  - Treść: pliki **Markdown** (`.md` / `.mdx`) używane jako źródło danych (frontmatter + zawartość) i prompt dla komponentów / layoutów Astro.  
  - Logika: komponenty **Astro** (`.astro`) i/lub komponenty **React** w architekturze wyspowej (islands), używające **Tailwind CSS** do stylowania.  
  - Wygląd: stylizacja oddzielona od logiki i treści, preferowane style w komponentach lub layoutach.  

- Struktura katalogów zgodna z konwencją Astro:  
  - `src/` – cała logika, komponenty, treści, obrazy, style.  
  - `src/pages/` – folder routingu; pliki `.astro`, `.md`, `.mdx` generują strony automatycznie (file-based routing).  
  - `src/content/` – dla content collections (np. bio, publikacje, artykuły) z frontmatter i walidacją schematów.  
  - `public/` – pliki statyczne bez przetwarzania (np. favicon, PDF-y, ikony).  

- Strona generowana statycznie: ustawienie `output: 'static'` w `astro.config.mjs`.  
- Responsywność na wszystkich ekranach (mobile, tablet, desktop).  
- Kod zgodny z dobrymi praktykami i standardami dokumentacji Astro.  
- Brak błędów krytycznych podczas `astro build` ani w konsoli przeglądarki.  

### SHOULD (zalecane)
- Użycie **content collections** (`src/content/`) do organizacji treści (np. publikacje, bio), z walidacją frontmatter.  
- Tailwind 4: definicja kolorów/czcionek w `@theme` (np. w `src/styles/global.css`) lub osobnych warstwach; jeśli Tailwind 3 (legacy) – standardowo w `tailwind.config.*`.  
- Minimalne użycie globalnego CSS – preferowane style w Tailwind i w komponentach.  
- Optymalizacja obrazów (np. WebP, dostosowane rozmiary, `astro:assets` lub komponent `<Image />`).  
- Lazy loading dużych grafik i multimediów.  
- Podstawowe wytyczne **WCAG 2.1** (kontrast, alt-texty, semantyczna struktura).  

### MAY (opcjonalne)
- Tryb **dark mode / light mode** przełączany przez użytkownika.  
- Animacje i mikrointerakcje (np. Framer Motion) zwiększające nowoczesność wyglądu.  
- Integracje zewnętrzne (np. API ORCID do automatycznej listy publikacji).  
- Wstępna konfiguracja **i18n** (wielojęzyczność) pod przyszłe potrzeby.  

### Trade-offs
- **Statyczna generacja (SSG) > SSR**, jeśli treści są rzadko aktualizowane i nie wymagają dynamiczności.  
- **Czytelność kodu i spójna struktura > mikrooptymalizacje wydajnościowe.**  
- **Dostępność > efekty wizualne**, jeśli występuje konflikt.  
- **Prostota architektury > eksperymentalne rozwiązania.**  


## 4) Stos technologiczny (Tech Stack)

- **Frontend / Framework:**  
  - Astro (najświeższa stabilna wersja, np. 5.x)  
  - Komponenty React (dla interaktywnych elementów, jeśli potrzebne)  

- **Backend / SSR / API:**  
  - Brak dedykowanego backendu – pełna generacja statyczna (SSG)  
  - Opcjonalnie: lekkie API przez funkcje serverless, jeśli zajdzie potrzeba  

- **UI / Styling:**  
  - Tailwind CSS 4 (preferowane) przez plugin Vite (`astro add tailwind`), import w `src/styles/global.css`: `@import "tailwindcss";`  
  - Legacy: jeśli świadomie używamy Tailwind 3, zaznacz to w projekcie i korzystaj z integracji `@astrojs/tailwind` + `tailwind.config.*`  

- **Zarządzanie stanem / danymi:**  
  - Treści w plikach Markdown / MDX z użyciem **content collections** (`src/content/`)  
  - Interaktywne fragmenty w React z prostym stanem lokalnym (bez ciężkich bibliotek typu Redux)  

- **Baza danych:**  
  - Brak – treść statyczna  

- **Package manager:**  
  - pnpm (>= 8.x) – preferowany  
  - Alternatywnie: npm (>= 9.x)  

- **Integracje i narzędzia dodatkowe:**  
  - `@astrojs/tailwind` – integracja Tailwind  
  - `@astrojs/mdx` – obsługa MDX  
  - `@astrojs/image` lub `astro:assets` – optymalizacja obrazów  

- **Wersje środowiskowe:**  
  - Node.js: >= 20.3.0 (rekomendowane >= 22.0.0 zgodnie z wymaganiami Astro)  
  - Astro: najnowsza stabilna (np. 5.x)  
  - Tailwind: zgodny z Astro (np. 3.x)  


## 5) Konwencje kodu (Conventions)

Ustalony styl i standardy pisania kodu, struktur projektowych i treści.

---

### Nazewnictwo

- Komponenty Astro / React: **PascalCase** (np. `Header.astro`, `ProfileCard.jsx`).  
- Pliki zawierające logikę / moduły pomocnicze: **camelCase** (np. `fetchPublications.js`, `useUserData.jsx`).  
- Klasy CSS / Utility Tailwind: używaj klas zgodnych z Tailwind – nie tworzymy nadmiarowych prefiksów unless naprawdę potrzebne.  
- Nazwy folderów: pojedyncza liczba, bez spacji, małe litery (np. `components`, `layouts`, `content`, `styles`).  

---

### Struktura folderów

Projekt powinien trzymać się konwencji Astro:

.
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   └── (statyczne zasoby, np. favicon, pliki PDF, ikony)
├── src/
│   ├── pages/
│   │   └── index.astro, about.astro, etc.
│   ├── components/
│   │   └── Astro i React komponenty
│   ├── layouts/
│   │   └── layouty stron (np. MainLayout.astro)
│   ├── content/
│   │   └── content collections (np. bio, publikacje) w Markdown / MDX
│   ├── styles/
│   │   └── global.css / tailwind konfiguracje / style wspólne
│   ├── images/ (opcjonalnie) – jeśli potrzebne obrazy do optymalizacji
│   └── utils/ albo lib/ – funkcje pomocnicze, parse’y, fetch’e itp.


- Folder `public/`: tylko zasoby statyczne, które nie są przetwarzane przez Astro (np. pliki, które muszą być serwowane “takie jakie są”).  
- Folder `src/pages/`: wszystkie pliki, które mają generować strony / trasy (file-based routing). `.astro`, `.md`, `.mdx` w tym katalogu tworzą trasy automatycznie.  
- `src/content/`: content collections — jeśli są grupy treści o spójnej strukturze (np. publikacje, artykuły), to trzymane w kolekcjach z frontmatter, schematami itp.  

---

### Porządek importów

- Importy od **zewnątrz** (biblioteki, np. `react`, `astro`) → potem **własne moduły** lub komponenty → importy relatywne (np. `../utils/something`).  
- Kolejność:  
  1. biblioteki z `node_modules`  
  2. integracje / frameworki (np. `@astrojs/react`)  
  3. komponenty lokalne, layouty  
  4. pliki treści / funkcje pomocnicze  

---

### Lint / Format

- Używamy **ESLint** + **Prettier** + konfiguracja, która obejmuje pliki `.astro`, `.js`/`.jsx`/`.ts`/`.tsx`, `.md`/`.mdx`.  
- Formatowanie “on save” w edytorze — jeśli to możliwe.  
- Włączony **type checking** jeśli używasz TypeScript albo chociaż strict mode w `tsconfig.json`.  
- Reguły lintowania:  
  - zakaz unused imports  
  - preferowanie semantycznych HTML tagów  
  - zakaz inline style’ów w komponentach (chyba że konieczne)  

---

### Style commitów

- **Conventional Commits** (np. `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).  
- Każdy commit: jasny, krótki opis co zmienia + ewentualna referencja issue.  
- Unikamy commitów łączących niepowiązane zmiany (np. styl + logika + treść).  

---

### Strategia branchy

- Główna gałąź: `main` — zawsze gotowa do produkcji.  
- Rozwojowa: `feature/<nazwa>` lub `feat/<nazwa>`, `fix/<nazwa>`.  
- Pull request / merge przed scaleniem na `main` — obowiązkowy lint + build.  
- Hotfixy: `hotfix/<nazwa>` → scalane bezpośrednio do `main`.  

---


## 6) Architektura i granice modułów

Opis warstw, odpowiedzialności i zasad izolacji.

---

### Warstwy

- **UI (prezentacja):**  
  - Komponenty w `src/components/` i layouty w `src/layouts/`.  
  - Odpowiedzialne wyłącznie za prezentację i interakcję (propsy, sloty).  
  - Stylowane wyłącznie przy użyciu **Tailwind CSS**.  

- **Treść (content/domena):**  
  - Pliki Markdown/MDX w `src/content/`.  
  - Dane o publikacjach, biogramie, CV, linkach – zdefiniowane jako kolekcje treści.  
  - Treści oddzielone od logiki — nie zawierają komponentów UI.  

- **Logika (infrastruktura / utils):**  
  - Funkcje pomocnicze (np. parsowanie danych z Markdown, sortowanie publikacji).  
  - Moduły w `src/utils/` lub `src/lib/`.  
  - Odpowiedzialność: przygotowanie danych do podania w UI, np. filtracja listy publikacji.  

- **Infrastruktura:**  
  - Brak klasycznego backendu — projekt jest **statyczny (SSG)**.  
  - Ewentualne integracje (np. ORCID API) realizowane w helperach / fetch w Astro, z cache statycznym.  

---

### Publiczne API modułów

- `components/`: eksportują wyłącznie **komponenty prezentacyjne** (np. `ProfileCard`, `PublicationList`).  
- `layouts/`: eksportują layouty stron (np. `MainLayout`) z miejscem na sloty.  
- `content/`: eksportuje dane z Markdown poprzez **Astro Content Collections API**.  
- `utils/` lub `lib/`: eksportują funkcje pomocnicze (np. `formatDate`, `sortPublications`).  

---

### Obsługa błędów i logowanie

- **Build-time:** błędy wychwytywane przez Astro (np. brak frontmatter, zła ścieżka do pliku).  
- **Runtime:**  
  - Minimalna obsługa błędów — aplikacja nie ma backendu.  
  - Przy pobieraniu danych z API: try/catch i fallback (np. pusty stan listy publikacji).  
- **Logowanie:**  
  - W czasie developmentu: konsola (`console.error`, `console.warn`).  
  - W produkcji: brak zewnętrznego loggera (SSG), ewentualnie prosty monitoring przez hosting (np. Netlify, Vercel).  

---

### i18n / a11y

- **i18n (wielojęzyczność):**  
  - Domyślnie 1 język (PL).  
  - Możliwość rozbudowy w przyszłości — struktura katalogów `src/content/[lang]/`.  

- **a11y (dostępność):**  
  - Kontrast zgodny z WCAG 2.1 AA.  
  - Teksty alternatywne (`alt`) dla obrazów.  
  - Semantyczne znaczniki HTML (`<main>`, `<nav>`, `<section>`).  
  - Formularze (jeśli dodane): etykiety i focus states.  

---

## 7) Praca lokalna (Local Dev)

Jak uruchomić i rozwijać projekt lokalnie — instrukcje i standardy.

---

### Setup

- Uruchom w terminalu z folderu projektu:  
  `npm install` lub `pnpm install` (lub `yarn install`), w zależności od używanego menedżera pakietów.

---

### Dev

- Główna komenda developerska:  
  `npm run dev` (lub `pnpm dev`, `yarn dev`)  
- Domyślny port, na którym działa lokalny serwer deweloperski to **4321**.  
- Port można zmienić przez flagę `--port` lub w `astro.config.mjs` (opcja `server.port`).

---

### Build

- Komenda budowania wersji produkcyjnej:  
  `npm run build` (lub `pnpm build`, `yarn build`)  
- Po zakończonym budowaniu Astro generuje statyczną wersję strony — domyślnie w katalogu `dist/`.

---

### Preview

- Po buildzie można uruchomić wersję preview, żeby zobaczyć jak strona faktycznie się będzie zachowywać w produkcji:  
  `npm run preview` (lub `pnpm preview`, `yarn preview`)  
 - Serwer preview domyślnie używa tego samego portu co dev (`4321`), chyba że skonfigurowano inaczej.

---

### Lint / Format

- Komenda do lintowania: `npm run lint` (jeśli skonfigurowane) — np. ESLint do sprawdzania błędów składni, niespójności stylu.  
- Komenda do formatowania kodu: `npm run format` — np. przy użyciu Prettiera lub innego formattera, ustawione na zapisywanie plików w czystym stylu.

- Rekomendacja: w skrypcie build dodać kontrolę typów i diagnostykę Astro, np.:
  - `"build": "astro check && astro build"`

---

### Testy

- Jeśli są testy jednostkowe lub integracyjne, standard:  
  `npm test` lub `npm run test` — uruchamia testy jednostkowe / integracyjne.  
- E2E (end-to-end), jeśli używasz takiego podejścia: `npm run test:e2e` — jeśli skonfigurowane.

---

### Inne przydatne skrypty

- `npm run typecheck` — jeśli używasz TypeScript, żeby sprawdzić typy przed buildem.  
- `npm run check` — jeśli masz konfigurację Astro / pluginów, które oferują lint / sprawdzenie konfiguracji / schematów treści.  
- Ewentualnie `npm run clean` — skrypt do usuwania katalogu `dist/`, cache itp., przed buildem.

---


## 8) Standardy jakości i review (QA/CR)

Kryteria jakości i proces kontroli zmian w projekcie.

---

### Code Review Checklist

- **Czytelność**: kod łatwy do zrozumienia, unikanie zbyt złożonych struktur, sensowne komentarze tylko tam, gdzie są potrzebne.  
- **Spójność stylu**: zgodność z ustalonymi konwencjami (`camelCase`, `PascalCase`), poprawny porządek importów.  
- **Typy**: pełne wsparcie TypeScript (jeśli używany) — brak `any` bez uzasadnienia.  
- **Testy**: dla nowej logiki lub komponentów React/Astro dołączone testy jednostkowe lub snapshoty.  
- **Dostępność (a11y)**: alt-texty dla obrazów, semantyczny HTML, etykiety dla formularzy.  
- **Bezpieczeństwo**: brak niebezpiecznego HTML (`dangerouslySetInnerHTML` w React używany tylko gdy to absolutnie konieczne).  
- **Perfekcyjny build**: brak ostrzeżeń i błędów w konsoli (`astro build`, `astro check`).  

---

### Minimalne pokrycie testami

- **Pokrycie testami jednostkowymi i integracyjnymi**: min. **70%**.  
- Krytyczne komponenty (np. layouty, routy, główne funkcje logiki) muszą być testowane w 100%.  
- Testy E2E (np. Playwright, Cypress) dla kluczowych ścieżek użytkownika — np. render strony głównej, linki działające poprawnie, publikacje otwierające się.

---

### Budżet wydajności

- **LCP (Largest Contentful Paint)** < **2.5s** na łączu 3G/4G (mobilne first).  
- **Rozmiar bundla JS**: maksymalnie **150kb** inicjalnego JS (Astro preferuje zerowy JS, więc React ładowany tylko tam, gdzie konieczny).  
- Optymalizacja grafik (`astro:assets`, formaty WebP/AVIF, lazy loading).  
- CSS — generowany przez Tailwind i tree-shaken, brak nieużywanych klas.  

---

### Dostępność (a11y)

- Zgodność z podstawowymi wytycznymi **WCAG 2.1 AA**:  
  - kontrast tekstu i tła min. 4.5:1,  
  - poprawne nagłówki (`h1`–`h6`) w strukturze dokumentu,  
  - obsługa nawigacji klawiaturą,  
  - alternatywne opisy obrazów (`alt`),  
  - aria-labels i role tam, gdzie potrzebne.  
- Lighthouse a11y score: min. **90/100** dla głównych podstron.  

---

## 9) Zasady doboru kontekstu (Context: Include/Exclude)

Zasady określające, które zasoby są istotne przy pracy asystenta (AI), a które należy ignorować.

---

### Include (preferowane)
- Katalogi z kodem źródłowym:  
  - `src/**` — główny kod aplikacji (komponenty Astro/React, logika).  
  - `src/pages/**` — definicje stron w Astro.  
  - `src/layouts/**` — layouty stron.  
  - `src/components/**` — komponenty wielokrotnego użytku.  
  - `src/lib/**` — biblioteki, funkcje pomocnicze.  
  - `src/content/**` — kolekcje treści (Markdown/MDX i schematy).  
  - `src/styles/**` — style globalne/warstwy Tailwind.  
  - `public/**` — statyczne zasoby (obrazy, favicon, PDF-y).  
- Pliki konfiguracyjne:  
  - `astro.config.*`, `tailwind.config.*`, `tsconfig.json`, `eslint.config.*`, `postcss.config.*`  
  - `.env.example` (ale **nie** `.env` z sekretami)  

---

### Exclude (ignoruj)
- Katalogi systemowe i buildowe:  
  - `node_modules/**`  
  - `dist/**`, `build/**`, `.output/**`  
  - `.astro/**`, `node_modules/.astro/**`  
  - `.vercel/**`, `.netlify/**` (jeśli używane)  
- Konfiguracje narzędzi i IDE:  
  - `.git/**`, `.husky/**`, `.vscode/**`, `.idea/**`  
- Pliki testowe i artefakty:  
  - `coverage/**`  
  - `**/__snapshots__/**`  
  - `*.lock` (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`)  
  - Zminifikowane pliki: `*.min.*`  
  - Mapy źródłowe: `*.map`  

---

### Obrazy (astro:assets) – zasady

- Lokalne obrazy w `src/` renderujemy przez `<Image />` z `astro:assets`; `alt` jest obowiązkowy.  
- Obrazy w `public/` – używaj zwykłego `<img>` lub podawaj ręcznie `width`/`height` jeśli chcesz optymalizacji; `<Image />` nie zna wymiarów z `public/`.  
- Zdalne obrazy – dopuszczamy tylko z hostów dodanych do `image.domains`/`image.remotePatterns` w `astro.config.*`.  
- Preferuj formaty WebP/AVIF i generowanie `srcset` (np. przez `<Image />`).  

### MDX – zasady użycia

- Jeśli używamy `.mdx`, wymagane jest dodanie integracji `@astrojs/mdx` do `astro.config.*`.  
- W MDX można używać komponentów Astro/React, pamiętając o dyrektywach `client:*` dla komponentów frameworkowych.  
- Unikaj ciężkich interakcji w MDX; komponenty interaktywne tylko tam, gdzie to uzasadnione.  

### Komponenty React (wyspy) – zasady

- React stosujemy tylko dla elementów wymagających interakcji (formularze, filtry, nawigacja, widgety).  
- Używaj dyrektyw `client:*` (`client:load`, `client:visible`, itp.) odpowiednich do przypadku.  
- Nie mieszamy komponentów Astro wewnątrz komponentów React; jeśli trzeba, renderuj po stronie Astro i przekazuj jako children/slot.  

---
## 10) Konfiguracja astro.config.* (kluczowe pola)

- `site`: absolutny URL witryny (wymagany dla sitemap/RSS).  
- `base`: ustaw, jeśli deploy w podkatalogu (np. GitHub Pages repo).  
- `output: 'static'`: spójnie z założeniem SSG.  
- `integrations`: Tailwind (4 preferowane lub 3 legacy), MDX (jeśli używasz), `@astrojs/sitemap`, ewentualnie usługi obrazów.  
- `image.domains` / `image.remotePatterns`: dozwolone hosty dla zdalnych obrazów.  
- `markdown` / `mdx`: remark/rehype plugins, syntax highlight itp.  
- `experimental.staticImportMetaEnv`: opcjonalnie, zgodność z zachowaniem Astro 6 dla `import.meta.env`.  

Przykład (skrócony):

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite' // Tailwind 4
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://example.com',
  base: '/',
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwind()] },
  image: {
    remotePatterns: [{ protocol: 'https', hostname: '**.example.org' }]
  },
  markdown: { /* remark/rehype config opcjonalna */ },
  experimental: { staticImportMetaEnv: true }
})
```

## 11) Content Collections – konfiguracja i schema

- Wymagamy pliku `src/content.config.ts` i definicji kolekcji przez `defineCollection()` + `z` (Zod).  
- Minimalne kolekcje: `bio` (pojedynczy wpis opisujący sylwetkę), `publications` (lista publikacji).  
- Render: wykorzystywać `getCollection()` w stronach (np. `src/pages/`) do listingu.  

Przykład (skrócony):

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content'
import { glob, file } from 'astro/loaders'

const bio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/bio' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email().optional(),
  })
})

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    authors: z.array(z.string()),
    link: z.string().url().optional(),
  })
})

export const collections = { bio, publications }
```

## 12) Zmienne środowiskowe (astro:env)

- Definiujemy schemę w `astro.config.*` (`env.schema` + `envField`).  
- Rozróżniamy: public/client, public/server, secret/server.  
- Użycie: `astro:env/client` (na kliencie) i `astro:env/server` (na serwerze).  

Przykład (skrócony):

```js
// astro.config.mjs (fragment)
import { envField } from 'astro/config'
export default defineConfig({
  env: {
    schema: {
      PUBLIC_CONTACT_FORM_URL: envField.string({ context: 'client', access: 'public' }),
      ANALYTICS_KEY: envField.string({ context: 'server', access: 'secret', optional: true })
    }
  }
})
```

Użycie:

```ts
// klient
import { PUBLIC_CONTACT_FORM_URL } from 'astro:env/client'
// serwer
import { ANALYTICS_KEY } from 'astro:env/server'
```

## 13) SEO i metadane

- Ustalanie `<title>`, `<meta name="description">`, Open Graph/Twitter meta.  
- `@astrojs/sitemap` (wymaga `site`) + `robots.txt` (statyczny w `public/robots.txt` lub endpoint `src/pages/robots.txt.ts`).  
- Favikona, `manifest.webmanifest` (jeśli potrzebny) w `public/`.  

## 14) Routing i przekierowania

- Dynamiczne trasy w SSG wymagają `getStaticPaths()`.  
- Konfiguracja `redirects` w `astro.config.*` dla stałych przekierowań (w tym zewnętrznych).  

## 15) RSS (opcjonalnie)

- `@astrojs/rss` + endpoint `src/pages/rss.xml.js`.  
- Integracja z kolekcjami treści przez `getCollection()` do budowy listy wpisów.  

## 16) Wdrożenie

- Hosting: Netlify / Vercel / GitHub Pages.  
  - Static (SSG) nie wymaga adaptera; SSR wymaga adaptera dostawcy.  
  - GitHub Pages często wymaga `base`.  
- Build: `astro build` → artefakty w `dist/`.  

## 17) TypeScript i aliasy

- `tsconfig.json`:  
  - `extends: "astro/tsconfigs/strict"`  
  - `include: [".astro/types.d.ts", "**/*"]`  
  - `exclude: ["dist"]`  
- Alias importów:  

```json
// tsconfig.json (fragment)
{
  "compilerOptions": {
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"]
    }
  }
}
```

## 18) Testy i CI

- Unit: Vitest. E2E: Playwright/Cypress.  
- Pipeline minimalny: lint → `astro check` → build → testy.  
- Opcjonalnie: Lighthouse (raport wydajności w CI).  

## 19) Strony błędów i fallbacki

- Strony `404`/`500` statyczne (np. `src/pages/404.astro`).  
- Fallback pustych stanów (np. „Brak publikacji” przy pustej kolekcji).  

## 20) Polityki bezpieczeństwa

- CSP (meta lub nagłówki platformy hostingowej).  
- Zasady dla zewnętrznych skryptów/iframe/fontów (np. ograniczenia domen, `rel="noopener"`).  

## 21) Typografia i obrazy w treściach

- Dłuższe treści: `@tailwindcss/typography` + komponent `<Prose />` opakowujący render Markdown.  
- Zasady: preferuj `<Image />` dla obrazów lokalnych z `src/`; w treściach MD renderowanych programowo uwzględnij ograniczenia (np. komponenty w MDX, zwykłe `<img>` dla `public/`).  

## 22) UX: motyw i i18n (opcjonalnie)

- Dark mode: sterowanie klasą `dark`, zapamiętywanie preferencji (localStorage / media query).  
- i18n: struktura np. `src/content/[lang]/`, doprecyzowanie integracji z sitemap (hreflang).  

## 23) Proces aktualizacji treści

- Edycja treści w `src/content/` przez PR; schema kolekcji to kontrakt.  
- Opcjonalnie CMS (np. Keystatic): jeśli wprowadzimy, trzymamy schemę zgodną z Content Collections.  
