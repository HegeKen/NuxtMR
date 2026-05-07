<template>
  <ClientOnly>
    <div v-if="$device.isDesktop" class="mdui-container-fluid">
      <br />
      <div class="mdui-center mdui-text-center">© 2019 - {{ new Date().getFullYear() }} | {{ $t('dispc') }}</div>
      <br />
    </div>
    <div v-else class="mdui-container-fluid">
      <br />
      <div class="mdui-center mdui-text-center">© 2019 - {{ new Date().getFullYear() }} | {{ $t('dismob') }}</div>
      <br />
    </div>
  </ClientOnly>
</template>
<script setup>
const { locale } = useI18n();
</script>