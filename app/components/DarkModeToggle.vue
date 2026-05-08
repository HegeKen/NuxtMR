<template>
  <button class="dark-mode-toggle mdui-btn mdui-btn-icon mdui-ripple" @click="toggleDarkMode" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
    <i class="mdui-icon material-icons">{{ isDark ? 'brightness_5' : 'brightness_3' }}</i>
  </button>
</template>

<script setup>
const isDark = ref(false)

onMounted(() => {
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
})

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
</script>

<style scoped>
.dark-mode-toggle {
  color: white;
  margin-left: 8px;
}
</style>