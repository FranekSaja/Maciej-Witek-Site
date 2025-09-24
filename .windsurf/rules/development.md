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
  Stworzenie responsywnej strony wizytówkowej 
  Strona ma prezentować jego sylwetkę naukową, obszary badawcze, dorobek oraz umożliwiać łatwy kontakt.  

- **Kluczowa wartość:**  
  Kompleksowa, profesjonalna prezentacja kompetencji i dorobku naukowego Macieja Witka w formie łatwo dostępnej strony wizytówkowej.  

- **Kryteria sukcesu (biznes/produkt):**  
  Projekt uznajemy za zakończony („done”), gdy spełnione są wszystkie poniższe warunki:  

  1. **Dostępność**
     - Strona opublikowana pod ustalonym adresem URL i dostępna w popularnych przeglądarkach.  
     - Brak błędów krytycznych uniemożliwiających korzystanie.  
  

  2. **Responsywność**
     - Strona działa poprawnie na desktopie, tablecie i smartfonie.  
     - Układ treści i nawigacja są czytelne i intuicyjne na każdym urządzeniu.  

  3. **Dostępność (WCAG)**
     - Teksty mają odpowiedni kontrast względem tła.  
     - Wszystkie grafiki posiadają opisy alternatywne (`alt`).  
     - Strona obsługiwana jest także przy pomocy klawiatury.  

  4. **Wydajność**
     - Czas ładowania strony < 2 sekundy na standardowym łączu mobilnym.  
     - Brak nieoptymalnych lub nadmiarowych zasobów spowalniających działanie.  

  5. **Stabilność**
     - Brak niedziałających linków i brakujących zasobów.  
     - Formularz kontaktowy (jeśli występuje) działa poprawnie.  

---

## 3) Stos technologiczny (Tech Stack)  

- **Frontend / Framework:**  
  - Astro (najświeższa stabilna wersja, np. 5.x)  
  - Komponenty React / Preact / inny framework frontendowy dla fragmentów interaktywnych, jeśli potrzebne  

- **Backend / SSR / API:**  
  - Domyślnie: SSG (static site generation), czyli generowanie stron statycznych  
  - Opcjonalnie: lekkie API / SSR przez funkcje serverless lub hybrydowe podejście, jeżeli zajdzie potrzeba  

- **UI / Styling:**  
  - Tailwind CSS (wersja kompatybilna z Astro)  
    − Rekomendowane: użycie pluginu **`@tailwindcss/vite`** w konfiguracji Vite (dla Tailwind 4)  
    − Alternatywnie: integracja `@astrojs/tailwind` (jeśli korzystasz z Tailwind 3)  
    − W `src/styles/global.css` dodaj:  
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```  
    − Konfiguracja `tailwind.config.*` powinna obejmować rozszerzenia `.astro`, `.mdx`, `.jsx`, `.tsx`, `.html`  

- **Zarządzanie stanem / danymi:**  
  - Treści w plikach Markdown / MDX z użyciem **content collections** (`src/content/`)  
  - Interaktywne fragmenty w React / Preact z lokalnym stanem  

- **Baza danych:**  
  - Brak — treść statyczna  

- **Package manager:**  
  - npm (≥ 9.x) — preferowany  
  - Alternatywnie: yarn lub pnpm (≥ 8.x)  

- **Integracje i narzędzia dodatkowe:**  
  - `@astrojs/mdx` — obsługa MDX  
  - `@astrojs/image` lub `astro:assets` — optymalizacja obrazów  
  - (opcjonalnie) sitemap, RSS, SEO integracje  

- **Wersje środowiskowe:**  
  - Node.js: obsługiwane są **≥ 18.20.8**, **≥ 20.3.0** oraz wersje 22+ (najlepiej trzymać się LTS)  
  - Astro: najnowsza wersja stabilna (np. 5.x)  
  - Tailwind: wersja zgodna z integracją (`3.x` dla `@astrojs/tailwind` albo `4.x` dla `@tailwindcss/vite`)  





