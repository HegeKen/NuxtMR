<template>
  <div>
    <EnMobileNav />
    <EnMobileFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "404 Page Not Found"
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "en-US",
      }
    }
  }
}
</script>
