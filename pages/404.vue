<template>
  <div style="margin-top:100px;">
    <div class="mdui-center PNF">抱歉，未找到该页面</div>
    <div class="mdui-center PNF"><a href="javascript:history.go(-1)">返回上一页面</a></div>
    <div class="mdui-center PNF">404. Page Not Found</div>
    <div class="mdui-center PNF"><a href="javascript:history.go(-1)">Go Back To Previous Page</a></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "该页面不存在 - MIUI官方ROM仓库"
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
