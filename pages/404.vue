<template>
  <div style="margin-top:100px;">
    <div class="mdui-center PNF mdui-text-color-white">HegeKen</div>
    <div class="mdui-center PNF">抱歉，未找到该页面</div>
    <div class="mdui-center PNF"><a href="javascript:history.go(-1)">上一页面</a><span>← →</span><a href="https://roms.miuier.com/">首页</a></div>
    <div class="mdui-center PNF">404. Page Not Found</div>
    <div class="mdui-center PNF"><a href="javascript:history.go(-1)">Previous Page<span>← →</span><a href="https://roms.miuier.com/">HomePage</a></a></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "该页面不存在 - 404 Page Not Found"
    }
  },
  created() {

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
