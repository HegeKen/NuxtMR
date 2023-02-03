<template>
  <div>
    <CnPcNav />
    <div class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open" v-for="(data) in site.log">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-red">更新日期：{{ data.sudate }}</div>
          </div>
          <div class="mdui-panel-item-body">
            <p><b>站点版本：</b>{{ data.ver }}</p>
            <p v-show="data.newDeviceCn !=''"><b>新增机型：</b>{{ data.newDeviceCn }}</p>
            <div v-if="data.log.length == 0"></div>
            <div v-else><b>更新日志：</b>
              <ol>
                <li v-for="(data) in data.log">{{ data.Cn }}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CnPcFooter />
  </div>
</template>
<script>
let sitelog = "https://data.miuier.com/data/sitelog.json";
export default {
  data() {
    return {
      site: [],
      title: "站点日志 - MIUI官方ROM仓库"
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
        lang: "zh-CN",
      }
    }
  }
}
</script>
