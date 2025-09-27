import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@tailwindcss/vite'

// Konfiguracja dla GitHub Pages
export default defineConfig({
  site: 'https://franeksaja.github.io',
  base: '/Maciej-Witek-Site', // Usunięcie końcowego ukośnika
  trailingSlash: 'always', // Zawsze używaj ukośników na końcu URL-i
  build: {
    format: 'file' // Generuj pliki .html dla każdej strony
  },
  // Wyłącz przekierowania, które mogą powodować problemy
  // redirects: {},
  output: 'static',
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwind()] },
  image: {
    // Dodaj dozwolone hosty dla zdalnych obrazów, kiedy będą potrzebne
    remotePatterns: []
  },
  markdown: {
    // Miejsce na remark/rehype plugins, jeśli będą wymagane
  },
  experimental: { staticImportMetaEnv: true },
  env: {
    schema: {
      // Przykład klucza publicznego dostępnego w kliencie
      PUBLIC_CONTACT_FORM_URL: envField.string({ context: 'client', access: 'public', optional: true })
    }
  }
})
