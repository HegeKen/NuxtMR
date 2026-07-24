export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const { initDarkMode } = useDarkMode()
    initDarkMode()
  }
})
