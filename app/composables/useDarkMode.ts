export const useDarkMode = () => {
  const isDark = ref(false)

  const initDarkMode = () => {
    if (!import.meta.client) return
    
    const savedMode = localStorage.getItem('dark-mode')
    if (savedMode === 'true') {
      isDark.value = true
      document.body.classList.add('mdui-theme-layout-dark')
    } else if (savedMode === 'false') {
      isDark.value = false
      document.body.classList.remove('mdui-theme-layout-dark')
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (isDark.value) {
        document.body.classList.add('mdui-theme-layout-dark')
      }
    }
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.body.classList.add('mdui-theme-layout-dark')
      localStorage.setItem('dark-mode', 'true')
    } else {
      document.body.classList.remove('mdui-theme-layout-dark')
      localStorage.setItem('dark-mode', 'false')
    }
  }

  return {
    isDark,
    initDarkMode,
    toggleDarkMode
  }
}
