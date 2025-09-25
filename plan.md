

### **Plan Rozwoju Strony**

[ ] 0. Stwórz infrastrkture do testowania strony
[ ] 1. Napisz testy dla routingu strony
[ ] 2. Napisz testy, które potwierdzają, ze wszystkie podstrony z katalogu `src/content/parts/` są widoczne w menu








# **Plan Rozwoju Strony - Szczegółowa Wersja dla AI Developera**

## **FAZA 1: INFRASTRUKTURA TESTOWANIA** 
*Status: [ ] PENDING*

### **Krok 1.1: Analiza obecnego stanu projektu**
- [ ] **Przejrzyj strukturę projektu** - sprawdź katalogi [src/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src:0:0-0:0), [package.json](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/package.json:0:0-0:0), [astro.config.mjs](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/astro.config.mjs:0:0-0:0)
- [ ] **Zidentyfikuj istniejące komponenty** - [MenuBar.astro](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/components/MenuBar.astro:0:0-0:0), `[part].astro`, [MainLayout.astro](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/layouts/MainLayout.astro:0:0-0:0)
- [ ] **Sprawdź konfigurację kolekcji** - [src/content.config.ts](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content.config.ts:0:0-0:0)
- [ ] **Przeanalizuj routing** - dynamiczne ścieżki w [src/pages/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/pages:0:0-0:0)

### **Krok 1.2: Wybór frameworka testowego**
- [ ] **Zdecyduj o frameworku testowym** - rekomendacja: Vitest (kompatybilny z Astro) lub Playwright dla E2E
- [ ] **Sprawdź kompatybilność** - upewnij się, że wybrany framework działa z Astro 5.x
- [ ] **Zainstaluj zależności** - dodaj `@astrojs/testing`, `vitest`, `@testing-library/jest-dom`

### **Krok 1.3: Konfiguracja środowiska testowego**
- [ ] **Utwórz plik konfiguracyjny** - `vitest.config.ts` lub `playwright.config.ts`
- [ ] **Skonfiguruj test runner** - ustawienia dla Astro, TypeScript, środowiska
- [ ] **Dodaj skrypty testowe** - do [package.json](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/package.json:0:0-0:0): `"test": "vitest run"`, `"test:watch": "vitest"`
- [ ] **Utwórz katalog testów** - `src/__tests__/` lub `__tests__/`

### **Krok 1.4: Weryfikacja konfiguracji**
- [ ] **Uruchom testy** - sprawdź czy środowisko działa bez błędów
- [ ] **Napisz test sanity** - prosty test sprawdzający czy Astro uruchamia się poprawnie
- [ ] **Poproś o feedback** - "Czy konfiguracja testowa jest zadowalająca?"

---

## **FAZA 2: TESTY ROUTINGU**
*Status: [ ] PENDING*

### **Krok 2.1: Testy jednostkowe dla routingu**
- [ ] **Przeanalizuj routing** - sprawdź `src/pages/[part].astro` i `getStaticPaths()`
- [ ] **Napisz test dla `[part].astro`** - sprawdź generowanie ścieżek dla kolekcji [parts](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content/parts:0:0-0:0)
- [ ] **Testuj funkcję `getStaticPaths()`** - weryfikuj zwracane parametry
- [ ] **Sprawdź obsługę błędów** - test przekierowania dla nieistniejących partów

### **Krok 2.2: Testy integracyjne routingu**
- [ ] **Testuj nawigację** - sprawdź czy linki w `MenuBar` prowadzą do poprawnych URL
- [ ] **Weryfikuj generowanie stron** - upewnij się, że wszystkie pliki z [src/content/parts/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content/parts:0:0-0:0) generują strony
- [ ] **Testuj przekierowania** - sprawdź mechanizm fallback dla nieprawidłowych slugów

### **Krok 2.4: Weryfikacja i optymalizacja**
- [ ] **Uruchom wszystkie testy routingu** - sprawdź pokrycie i wyniki
- [ ] **Analizuj raporty** - sprawdź czy wszystkie testy przechodzą
- [ ] **Poproś o feedback** - "Czy routing działa zgodnie z oczekiwaniami?"

---

## **FAZA 3: TESTY MENU I WIDOCZNOŚCI PODSTRON**
*Status: [ ] PENDING*

### **Krok 3.1: Analiza komponentu MenuBar**
- [ ] **Przejrzyj [MenuBar.astro](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/components/MenuBar.astro:0:0-0:0)** - sprawdź logikę generowania linków
- [ ] **Zidentyfikuj zależności** - `getCollection('parts')`, mapowanie na linki
- [ ] **Sprawdź kolekcję parts** - weryfikuj strukturę plików w [src/content/parts/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content/parts:0:0-0:0)

### **Krok 3.2: Testy jednostkowe dla MenuBar**
- [ ] **Testuj funkcję `getCollection('parts')`** - sprawdź czy zwraca wszystkie pliki
- [ ] **Weryfikuj mapowanie** - sprawdź czy `entry.slug` i `entry.data.title` są poprawne
- [ ] **Testuj generowanie linków** - sprawdź format URL i etykiet

### **Krok 3.3: Testy integracyjne dla menu**
- [ ] **Testuj widoczność wszystkich partów** - sprawdź czy każdy plik z [src/content/parts/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content/parts:0:0-0:0) ma odpowiadający link w menu
- [ ] **Weryfikuj kolejność** - sprawdź czy menu wyświetla pozycje w oczekiwanej kolejności
- [ ] **Testuj atrybuty dostępności** - sprawdź `aria-label`, role, itp.

### **Krok 3.5: Testy regresyjne**
- [ ] **Dodaj nowy plik part** - sprawdź czy automatycznie pojawia się w menu
- [ ] **Usuń plik part** - sprawdź czy link znika z menu
- [ ] **Zmodyfikuj tytuł** - sprawdź czy zmiana w `frontmatter` aktualizuje menu

### **Krok 3.6: Weryfikacja i dokumentacja**
- [ ] **Uruchom wszystkie testy menu** - sprawdź wyniki i pokrycie
- [ ] **Przeanalizuj raporty** - zidentyfikuj potencjalne problemy
- [ ] **Poproś o feedback** - "Czy wszystkie podstrony są widoczne w menu zgodnie z oczekiwaniami?"

---

## **FAZA 4: INTEGRACJA I CI/CD** 
*Status: [ ] PENDING*

### **Krok 4.1: Integracja z procesem budowania**
- [ ] **Dodaj testy do CI/CD** - skonfiguruj GitHub Actions lub GitLab CI
- [ ] **Ustaw pre-commit hooks** - automatyczne uruchamianie testów
- [ ] **Skonfiguruj raportowanie** - dodaj generowanie raportów pokrycia

### **Krok 4.2: Testy wydajności**
- [ ] **Dodaj testy Lighthouse** - sprawdź wydajność, dostępność, SEO
- [ ] **Testuj czas ładowania** - benchmark dla różnych stron
- [ ] **Weryfikuj responsywność** - testy na różnych urządzeniach

### **Krok 4.3: Dokumentacja testów**
- [ ] **Utwórz README dla testów** - opisz jak uruchamiać i pisać testy
- [ ] **Dodaj komentarze** - dokumentuj cel każdego testu
- [ ] **Utwórz przykłady** - szablony dla nowych testów

---

## **KRYTERIA SUKCESU**
- [ ] Wszystkie testy przechodzą (pass rate: 100%)
- [ ] Pokrycie kodu testami > 80%
- [ ] Brak błędów 404 dla istniejących podstron
- [ ] Menu zawiera wszystkie pozycje z [src/content/parts/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content/parts:0:0-0:0)
- [ ] Routing działa poprawnie dla wszystkich dynamicznych ścieżek

---

**Uwagi do implementacji:**
1. Plan zakłada użycie Vitest jako głównego frameworka testowego (kompatybilny z Astro)
2. Testy są podzielone na warstwy: jednostkowe → integracyjne → E2E
3. Każda faza kończy się weryfikacją i prośbą o feedback
4. AI Developer powinien oznaczać [x] po ukończeniu każdego kroku
5. W przypadku problemów technicznych - prośba o konsultację z nadzorcy
s