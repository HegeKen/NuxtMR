<template>
  <div>
    <CnMobileNav />
    <div class="mdui-container-fluid" v-for="(data) in weeks.versions">
      <div v-if="data.version == 'MIUI 14'">
        <br />
        <div style="padding-left:15px;">{{ data.version }}</div>
        <br />
        <button class="mdui-btn" v-for="(data) in data.weeks">
          <a :href="('/weekly/logs/week-' + data + '-cn')" v-if="data == weeks.latest"><i class="mdui-icon material-icons">fiber_new</i>第{{ data }}周</a>
          <a :href="('/weekly/logs/week-' + data + '-cn')" v-else>第{{ data }}周</a>
        </button>
      </div>

      <div v-else>
        <br />
        <div style="padding-left:15px;">{{ data.version }}</div>
        <br />
        <button class="mdui-btn" v-for="(data) in data.weeks">
          <a :href="('/weekly/logs/week-' + data + '-cn')" target="_blank" v-if="data >= weeks.oldest - 1">第{{ data }}周</a>
          <a :href="('https://old.miuier.com/weekly/logs/week-' + data + '-cn')" target="_blank" v-else>第{{ data }}周</a>
        </button>
      </div>
    </div>
    <br />
    <CnMobileDisclaimer />
    <CnMobileFooter />
  </div>
</template>
<script>
let url = "https://data.miuier.com/data/weekly.json";
export default {
  data() {
    return {
      weeks: [],
      title: "橙色星期五 - MIUI官方ROM仓库"
    }
  },
  async fetch() {
    this.weeks = await fetch(url).then(res => res.json())
  },
  fetchOnServer: true,
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
