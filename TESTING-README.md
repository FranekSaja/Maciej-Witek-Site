# Testowanie w Projekcie Maciej Witek Site

Ten dokument opisuje strategię testowania i sposób uruchamiania testów w projekcie Astro.

## 📋 Przegląd

Projekt wykorzystuje **Vitest** jako główny framework testowy, kompatybilny z Astro 5.x. Testy są podzielone na warstwy:

- **Testy jednostkowe** - testowanie pojedynczych funkcji i komponentów
- **Testy integracyjne** - testowanie interakcji między komponentami
- **Testy E2E** - testowanie kompletnych ścieżek użytkownika (planowane)

## 🛠️ Konfiguracja

### Wymagania
- Node.js ≥ 18.20.8
- npm ≥ 9.x

### Instalacja zależności testowych
```bash
npm install
```

### Dostępne skrypty
```bash
# Uruchomienie wszystkich testów
npm test

# Uruchomienie testów w trybie watch
npm run test:watch

# Interfejs użytkownika Vitest
npm run test:ui

# Generowanie raportów pokrycia
npm run test:coverage

# Budowanie projektu (z testami)
npm run build
```

## 📁 Struktura testów

```
src/__tests__/
├── setup.ts                    # Konfiguracja testów
├── sanity.test.ts             # Testy sanity
├── routing.test.ts            # Testy routingu
├── getStaticPaths.test.ts     # Testy generowania ścieżek
├── error-handling.test.ts     # Testy obsługi błędów
├── redirects.test.ts          # Testy przekierowań
├── integration-routing.test.ts # Testy integracyjne routingu
├── menubar-analysis.test.ts   # Analiza komponentu MenuBar
├── menubar-unit.test.ts       # Testy jednostkowe MenuBar
├── menubar-integration.test.ts # Testy integracyjne MenuBar
├── menubar-accessibility.test.ts # Testy dostępności MenuBar
├── menubar-regression.test.ts # Testy regresyjne MenuBar
├── performance.test.ts        # Testy wydajności
└── lighthouse.test.ts         # Testy Lighthouse
```

## 🎯 Zakres testów

### Routing (25 testów)
- ✅ Pobieranie kolekcji `parts`
- ✅ Generowanie ścieżek statycznych
- ✅ Obsługa błędów i przekierowań
- ✅ Sprawdzanie unikalności slugów
- ✅ Walidacja wzorców nazw

### MenuBar (28 testów)
- ✅ Generowanie struktury menu
- ✅ Widoczność wszystkich podstron
- ✅ Poprawność kolejności elementów
- ✅ Walidacja URL i etykiet
- ✅ Testy regresyjne dla zmian w plikach
- ✅ Testy dostępności (WCAG)

### Wydajność (10 testów)
- ✅ Testy Lighthouse (Performance, Accessibility, Best Practices, SEO)
- ✅ Core Web Vitals
- ✅ Responsywność na różnych urządzeniach

## 📊 Raporty pokrycia

### Generowanie raportów
```bash
npm run test:coverage
```

### Próg pokrycia
- **Branches**: ≥ 80%
- **Functions**: ≥ 80%
- **Lines**: ≥ 80%
- **Statements**: ≥ 80%

### Wykluczenia z pokrycia
- `node_modules/`
- `dist/`
- `src/__tests__/`
- `**/*.d.ts`
- `**/*.config.*`
- `astro.config.mjs`

## 🔄 CI/CD

### Integracja z procesem budowania
Testy są automatycznie uruchamiane przed budowaniem:
```bash
npm run build  # Uruchamia testy + astro check + astro build
```

### Pre-commit hooks
Zalecane jest skonfigurowanie pre-commit hooks:
```bash
# husky setup
npx husky install
npx husky add .husky/pre-commit "npm test"
```

## 🧪 Pisanie nowych testów

### Struktura testu
```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mockowanie zależności (jeśli potrzebne)
vi.mock('astro:content', () => ({
  getCollection: vi.fn()
}));

describe('Nazwa grupy testów', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('powinien robić coś', async () => {
    // Arrange
    const mockData = { /* dane testowe */ };

    // Act
    const result = await testedFunction(mockData);

    // Assert
    expect(result).toBe(expectedValue);
  });
});
```

### Najlepsze praktyki
1. **Opisywanie testów** - używaj opisowych nazw dla `describe` i `it`
2. **Mockowanie** - mockuj tylko niezbędne zależności
3. **Asynchroniczność** - używaj `async/await` dla operacji asynchronicznych
4. **Asercje** - używaj odpowiednich asercji z Vitest
5. **AAA pattern** - Arrange, Act, Assert

## 🐛 Debugowanie

### Tryb watch
```bash
npm run test:watch
```

### Interfejs użytkownika
```bash
npm run test:ui
```

### Debugowanie pojedynczego testu
```bash
npx vitest run src/__tests__/nazwa-testu.test.ts
```

## 📈 Metryki sukcesu

- ✅ **Pass rate**: 100%
- ✅ **Coverage**: > 80%
- ✅ **Brak błędów 404** dla istniejących podstron
- ✅ **Menu zawiera wszystkie pozycje** z `src/content/parts/`
- ✅ **Routing działa poprawnie** dla wszystkich dynamicznych ścieżek
- ✅ **Czas ładowania** < 2 sekundy na łączu mobilnym
- ✅ **Responsywność** na wszystkich urządzeniach

## 🤝 Współpraca

### Zgłaszanie błędów
1. Uruchom testy: `npm test`
2. Sprawdź logi błędów
3. Zgłoś issue z logami i opisem problemu

### Dodawanie testów
1. Utwórz nowy plik w `src/__tests__/`
2. Napisz testy zgodnie z konwencją
3. Uruchom testy: `npm test`
4. Zaktualizuj dokumentację

## 📚 Zasoby

- [Dokumentacja Vitest](https://vitest.dev/)
- [Dokumentacja Astro Testing](https://docs.astro.build/en/guides/testing/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)

---

*Ostatnia aktualizacja: 2025-09-25*
