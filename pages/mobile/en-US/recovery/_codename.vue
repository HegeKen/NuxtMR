<template>
  <div>
    <div>
      {{ $route.params.codename }}
    </div>
  </div>

</template>
<script>
var codename = "";
var baseurl = "https://data.miuier.com/data/devices/";
var url = "";
export default {
  created() {
    codename = this.$route.params.codename;
    url = baseurl + codename + ".json";
  },
  data() {
    return {
      site: [],
      devices: [],
      title: "MIUI Official ROMs"
    }
  },
  async fetch() {
    this.roms = await fetch(url).then(res => res.json());
  },
  fetchOnServer: false,
  fetchKey: 'site-sidebar',
  fetchKey(getCounter) {
    return this.someOtherData + getCounter('sidebar')
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
