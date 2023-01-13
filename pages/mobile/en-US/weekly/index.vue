<template>
  <div>
    <EnMobileNav />
    <div class="mdui-container-fluid" v-for="(data) in weeks.versions">
      <div v-if="data.version =='MIUI 14'">
        <br />
        <div style="padding-left:15px;">{{ data.version }}</div>
        <br />
        <button class="mdui-btn mdui-text-capitalize" v-for="(data) in data.weeks">
          <a :href="('/mobile/en-US/weekly/week-' + data+ '-cn')" v-if="data == weeks.latest"><i class="mdui-icon material-icons">fiber_new</i>Week {{ data }}</a>
          <a :href="('/mobile/en-US/weekly/week-' + data+ '-cn')" v-else>Week {{ data }}</a>
        </button>
      </div>

      <div v-else>
        <br />
        <div style="padding-left:15px;">{{ data.version }}</div>
        <br />
        <button class="mdui-btn mdui-text-capitalize" v-for="(data) in data.weeks"><a :href="('https://old.miuier.com/weekly/logs/week-' + data+ '-cn')" target="_blank">Week {{ data }}</a></button>
      </div>
    </div>
    <EnMobileFooter />
  </div>
</template>
<script>
let url = "https://data.miuier.com/data/weekly.json";
export default {
  data() {
    return {
      weeks: [],
      title: "Weekly Update Logs - MIUI Official ROMs"
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
        lang: "en-US",
      }
    }
  }
}
</script>
