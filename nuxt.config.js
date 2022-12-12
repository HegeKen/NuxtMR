export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MIUIROMS',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name : "author", Content:"HegeKen"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'chinaz-site-verification', content: '5BDB6F3CEC5D6F6F' },
      { name: 'google-site-verification', content: '1eNyA6u9gVIE5LzXP0FGw3I6yT9JnVNt0DVo4ujE-8Q' },
      { name: 'format-detection', content: 'telephone' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/mdui/css/mdui.min.css' },
      { rel: 'stylesheet', href: 'https://font.sec.miui.com/font/css?family=MiSans:300,450,500,650:Chinese_Simplify,Latin&display=swap' },
      { rel: 'stylesheet', href: 'https://data.miuier.com/miuiroms.css' },
      { rel: 'stylesheet', href: 'https://at.alicdn.com/t/c/font_2478867_iq2uuq05ql.css' }
    ],
    script: [
      {src : '/assets/mdui/js/mdui.min.js'},
      {src : '/assets/jquery/jquery.min.js'},
      {src : '/assets/miuiroms.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loading: {
    color: '#fe7700',
    height: '5px'
  },
  generate: {
    fallback: true
  }
}
