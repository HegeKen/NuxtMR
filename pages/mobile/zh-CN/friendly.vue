<template>
  <div>
    <CnMobileNav />
    <br />
    <br />
    <div class="mdui-container-fluid">
      <p><a href="https://sj.biada.cn/">MIUI相关资源导航站</a></p>
      <br />
      <p><a href="https://www.uotan.cn/">柚坛社区</a></p>
    </div>
    <CnMobileFooter />
  </div>
</template>

<script>
let baseurl = "https://data.miuier.com/data/";
let index = baseurl + "index.json";
let devices = baseurl + "devices.json"
export default {
  data() {
    return {
      site: [],
      devices: [],
      title: "友情链接 - MIUI官方ROM仓库"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: true,
  fetchKey: 'site-sidebar',
  fetchKey(getCounter) {
    return this.someOtherData + getCounter('sidebar')
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
