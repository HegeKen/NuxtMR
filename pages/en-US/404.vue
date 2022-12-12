<template>
  <div>
    <EnPcNav />
    <div class="mdui-center PNF">Sorry , this page is not found. 404</div>
    <EnPcFooter />
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
