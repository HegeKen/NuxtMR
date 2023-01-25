<template>
  <div>
    <EnPcNav />
    <div class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open" v-for="(data) in site.log">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-red">Updated At：{{ data.sudate }}</div>
          </div>
          <div class="mdui-panel-item-body">
            <p><b>Site Version：</b>{{ data.ver }}</p>
            <p><b>Newly Added devices ：</b>{{ data.newDeviceEn }}</p>
            <div v-if="data.log.length == 0"></div>
            <div v-else><b>Update Log：</b>
              <ol>
                <li v-for="(data) in data.log">{{ data.En }}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EnPcFooter />
  </div>
</template>
<script>
let sitelog = "https://data.miuier.com/data/sitelog.json";
export default {
  data() {
    return {
      site: [],
      title: "Site Logs - MIUI Official ROMs"
    }
  },
  async fetch() {
    this.site = await fetch(sitelog).then(res => res.json())
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
