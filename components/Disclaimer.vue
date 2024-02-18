<template>
  <div v-if="$device.isDesktopOrTablet" class="mdui-container-fluid">
    <div class="mdui-center mdui-text-center">© 2019- {{ new Date().getFullYear() }} | {{ $t('dispc') }}</div>
  </div>
  <div v-else class="mdui-container-fluid">
    <div class="mdui-center mdui-text-center">© 2019- {{ new Date().getFullYear() }} | {{ $t('dismob') }}</div>
  </div>
</template>
<script setup>
const {locale} = useI18n();
</script>