export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  devServer: {
    port: 3010,
  },
  vite: {
    server: {
      allowedHosts: true,
      hmr: false,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },
  app: {
    head: {
      title: 'Open NCCU - 政大學生設計，設計給政大學生',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '政大學生設計，設計給政大學生！Open NCCU 提供政大學生最實用的工具與資源。' },
        { property: 'og:title', content: 'Open NCCU — 政大學生設計，設計給政大學生' },
        { property: 'og:description', content: '由政大學生發起的非營利組織，打造專屬政大的數位工具並推廣開放資源。' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#4ECBA5' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
  },
})
