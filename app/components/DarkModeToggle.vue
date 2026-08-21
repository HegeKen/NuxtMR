<template>
  <button
    type="button"
    class="dark-mode-toggle mdui-btn mdui-btn-icon mdui-ripple"
    @click="toggleDarkMode"
    :title="isDark ? $t('lightMode') : $t('darkMode')"
    :aria-label="isDark ? $t('lightMode') : $t('darkMode')"
    :aria-pressed="isDark ? 'true' : 'false'"
  >
    <i class="mdui-icon material-icons" aria-hidden="true">{{ isDark ? 'brightness_5' : 'brightness_3' }}</i>
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
