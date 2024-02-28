<template>
  
</template>
<script setup>
const route = useRoute();
navigateTo({ path: '/zh-cn/devices/'+route.params.codename })
</script>