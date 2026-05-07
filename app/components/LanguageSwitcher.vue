<template>
  <div class="language-select-wrapper">
    <select class="mdui-select" mdui-select ref="selectRef" @change="onLocaleChange">
      <option v-for="loc in availableLocales" :key="loc.code" :value="loc.code" :selected="loc.code === currentLocale">
        {{ getFlag(loc.code) }} {{ loc.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const selectRef = ref(null)
let mduiSelect = null

const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return locales.value
})

const getFlag = (code) => {
  const flags = {
    'zh-cn': '🇨🇳',
    'en-us': '🇺🇸'
  }
  return flags[code] || '🌐'
}

const onLocaleChange = (event) => {
  const targetCode = event.target.value
  const path = switchLocalePath(targetCode)
  if (process.client) {
    const finalPath = path || (targetCode === 'zh-cn' ? '/' : `/${targetCode}`)
    window.location.href = finalPath
  }
}

onMounted(() => {
  if (process.client && selectRef.value) {
    if (typeof mdui !== 'undefined' && mdui.Select) {
      mduiSelect = new mdui.Select(selectRef.value, {
        position: 'top'
      })
    }
  }
})
</script>

<style scoped>
.language-select-wrapper {
  display: inline-block;
  overflow: visible;
  position: relative;
  z-index: 99999;
}

.mdui-select {
  color: white;
}
</style>