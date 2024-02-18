export default defineNuxtConfig({
  css: [
    'assets/miuiroms.css'
  ],
  modules: [
    'nuxt-simple-sitemap',
    '@nuxtjs/i18n',
    '@nuxtjs/device'
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
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
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