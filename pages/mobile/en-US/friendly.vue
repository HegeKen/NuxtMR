<template>
  <div>
    <EnMobileNav />
    <br />
    <br />
    <div class="mdui-container-fluid">
      <p><a href="https://sj.biada.cn/">StarSky Team's MIUI Resources</a></p>
      <br />
      <p><a href="https://www.uotan.cn/">Outan Forum</a></p>
    </div>
    <EnMobileFooter />
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
      title: "Friendly Links - MIUI Official ROMs"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: true,
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
