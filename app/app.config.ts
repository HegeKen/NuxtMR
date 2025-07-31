export default defineAppConfig({
  title: 'miuiroms',
  ssr: true,
  target: "static",
  components: true,
  loading: {
    color: "#ff6900",
    height: "5px",
  },
  app: {
    head: {
      charset: 'utf-8',
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
    }
  }
})