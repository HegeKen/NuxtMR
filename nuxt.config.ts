export default defineNuxtConfig({
  css: [
    'assets/miuiroms.css'
  ],
  modules: [
    '@nuxtjs/sitemap',
    // '@nuxtjs/device',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'zh-cn',
        name: '中文'
      },
      {
        code: 'en-us',
        name: 'English'
      }
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'zh-cn',
    vueI18n: './i18n.config.ts'
  },
  vite: {
    server: {
      hmr: { overlay: false }
    }
  },
  site: {
    url: 'https://roms.miuier.com',
  }
})