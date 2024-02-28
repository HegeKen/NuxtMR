<template>
  
</template>
<script setup>
const route = useRoute()
navigateTo({ path: '/en-us/weekly/week-'+route.params.week+'-cn' })
</script>