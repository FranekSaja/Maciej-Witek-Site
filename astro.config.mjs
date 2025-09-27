import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@tailwindcss/vite'

// Prosta konfiguracja dla GitHub Pages
export default defineConfig({
  site: 'https://franeksaja.github.io',
  base: '/Maciej-Witek-Site',
  trailingSlash: 'always',
  build: {
    format: 'file'
  },
  output: 'static',
  integrations: [
    mdx({
      // Minimalna konfiguracja MDX
    }),
    sitemap()
  ],
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
