import sitemap from './config/sitemap'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MIUIROMS",
    injectScripts: false,
    crossorigin: "anonymous",
    meta: [
      { charset: "utf-8" },
      { name: "author", Content: "HegeKen" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "chinaz-site-verification", content: "5BDB6F3CEC5D6F6F" },
      {
        name: "google-site-verification",
        content: "1eNyA6u9gVIE5LzXP0FGw3I6yT9JnVNt0DVo4ujE-8Q",
      },
      { name: "format-detection", content: "telephone" },
      { name: "yandex-verification", content: "fdd09793a3436dce" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://data.miuier.com/assets/logo/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "https://data.miuier.com/assets/mdui/css/mdui.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://font.sec.miui.com/font/css?family=MiSans:300,450,500,650:Chinese_Simplify,Latin&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://data.miuier.com/assets/miuiroms.css",
      },
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/c/font_2478867_iq2uuq05ql.css",
      },
    ],
    script: [
      { src: "https://data.miuier.com/assets/mdui/js/mdui.min.js" },
      { src: "https://data.miuier.com/assets/jquery/jquery.min.js" },
      { src: "https://data.miuier.com/assets/miuiroms.js" },
      {
        body: true,
        defer: true,
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token":"4e0818275b9944a59d625e2df596aaca"}',
      },
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-153213840-1",
      },
      {
        async: true,
        crossorigin: "anonymous",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9354463786843100",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/sitemap'
  ],
  sitemap:sitemap,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: "#fe7700",
    height: "5px",
  },
};
