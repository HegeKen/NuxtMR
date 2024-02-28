<template>
  
</template>
<script setup>
const route = useRoute()
navigateTo({ path: '/zh-cn/weekly/week-'+route.params.week+'-cn' })
</script>