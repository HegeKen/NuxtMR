<template>
  <div>
    <CnPcNav />
    <div class="mdui-center PNF">抱歉，未找到该页面</div>
    <CnPcFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "该页面不存在 - MIUI官方ROM仓库"
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "zh-CN",
      }
    }
  }
}
</script>
