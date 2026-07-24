<template>
  <button class="dark-mode-toggle mdui-btn mdui-btn-icon mdui-ripple" @click="toggleDarkMode" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
    <i class="mdui-icon material-icons">{{ isDark ? 'brightness_5' : 'brightness_3' }}</i>
  </button>
</template>

<script setup>
const { isDark, initDarkMode, toggleDarkMode } = useDarkMode()

onMounted(() => {
  initDarkMode()
})
</script>

<style scoped>
.dark-mode-toggle {
  color: white;
  margin-left: 8px;
}
</style>
