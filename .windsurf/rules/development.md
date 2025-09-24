---
trigger: always_on
---

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
  - Kontrast zgodny z WCAG 2.1 AA