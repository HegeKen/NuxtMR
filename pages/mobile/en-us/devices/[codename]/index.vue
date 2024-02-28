<template>
  
</template>
<script setup>
const route = useRoute();
navigateTo({ path: '/en-us/devices/'+route.params.codename })
</script>