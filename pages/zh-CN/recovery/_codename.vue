<template>
  <div>
    <div>
      {{ $route.params.codename }}
    </div>
  </div>

</template>

<script>
var codename = "";
var baseurl = "https://data.miuier.com/data/recovery/";
var url = "";
export default {
  data() {
    return {
      site: [],
      devices: [],
      roms:[]
    }
  },
  created() {
    codename = this.$route.params.codename;
    url = baseurl + codename + ".json";
  },
  async fetch() {
    this.roms = await fetch(url).then(res => res.json())
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
