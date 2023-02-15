<template>
  <div>
    <EnPcNav />
    <div class="mdui-center PNF">This Page is under development.</div>
    <EnPcDisclaimer />
    <EnPcFooter />
  </div>
</template>
<script>
let baseurl = "https://data.miuier.com/data/";
let index = baseurl + "index.json";
let devices = baseurl + "devices.json"
export default {
  data() {
    return {
      devices: []
    }
  },
  async fetch() {
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: true,
  head() {
    return {
      title: "About US - MIUI Official ROMs",
      htmlAttrs: {
        lang: "en-US",
      }
    }
  }
}
</script>
