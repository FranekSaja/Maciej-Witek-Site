---
trigger: manual
---

Jasne, oto ten sam plan w formie listy zadań (checkboxów), podzielony na cztery główne segmenty.

### **Plan Rozwoju Strony**

---

#### **1. Stabilna i intuicyjna struktura (Fundamenty)**

*   [ ] **1.1. Finalizacja struktury Content Collections:** Zdefiniowanie ostatecznych schematów dla wszystkich typów treści w [src/content.config.ts](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content.config.ts:0:0-0:0).
*   [ ] **1.2. Ustalenie finalnych tras i nazw podstron:** Zmiana `part-1` na docelowe nazwy (np. `o-mnie`, `badania`) w `src/content/parts/` i aktualizacja `MenuBar`.
*   [ ] **1.3. Weryfikacja dynamicznego routingu (SSG):** Upewnienie się, że `src/pages/[part].astro` poprawnie generuje strony dla wszystkich wpisów z kolekcji `parts`.

---

#### **2. Implementacja właściwej treści (Wypełnienie)**

*   [ ] **2.1. Wprowadzenie treści do kolekcji:** Uzupełnienie plików [.mdx](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/pages/part-3.mdx:0:0-0:0) w [src/content/](cci:7://file:///Users/franciszeksaja/Desktop/code/praca-z-ojcem/Maciej%20Witek%20Site/src/content:0:0-0:0) finalnymi tekstami.
*   [ ] **2.2. Zarządzanie obrazami i zasobami:** Dodanie grafik do `src/assets/` i użycie komponentu `<Image />` z `astro:assets` do ich optymalizacji.

---

#### **3. Szlify (Optymalizacja i Wygląd)**

*   [ ] **3.1. Poprawa wyglądu i UX:** Wdrożenie przełącznika trybu ciemnego/jasnego, poprawa typografii (`prose`) i dodanie podświetlenia aktywnej zakładki w `MenuBar`.
*   [ ] **3.2. Optymalizacja wydajności:** Zastosowanie `lazy-loading` dla obrazów i weryfikacja wyników w Lighthouse/PageSpeed Insights.
*   [ ] **3.3. Dostępność (Accessibility):** Przeprowadzenie audytu WCAG (kontrast, atrybuty `alt`, nawigacja klawiaturą, semantyka HTML).

---

#### **4. Deployment (Uruchomienie)**

*   [ ] **4.1. Konfiguracja SEO:** Ustawienie `site` w `astro.config.mjs`, wygenerowanie `sitemap.xml` i stworzenie `public/robots.txt`.
*   [ ] **4.2. Wybór i konfiguracja platformy hostingowej:** Połączenie repozytorium GitLab z Vercel/Netlify w celu automatyzacji wdrożeń.
*   [ ] **4.3. Finalne testy i uruchomienie:** Sprawdzenie strony na docelowym URL pod kątem błędów przed oficjalnym startem.