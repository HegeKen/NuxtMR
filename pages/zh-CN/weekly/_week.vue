<template>
  <!-- <div>{{ $route.params.week }}</div> -->
  <div>
    <div class="mdui-container-fluid">
      <CnPcNav />
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">注意：</div>
          </div>
          <p><b>本周版本：</b>{{ week.versions }}</p>
          <p><b>发布日期：</b>{{ week.redate }}</p>
          <p><b>收录日期：</b>{{ week.update }}</p>
          <p v-show="week.CnBBSID != ''"><b>论坛链接：</b><a :href="('https://www.miui.com/thread-' + week.CnBBSID + '-1-1.html')" target="_blank">{{ week.CommTitle }}</a></p>
          <p v-show="week.CnComID != ''"><b>社区链接：</b><a :href="('https://www.xiaomi.cn/post/' + week.CnComID)" target="_blank">{{ week.CommTitle }}</a></p>
          <p v-show="week.GbBBSID != ''"><b>Global Forum：</b><a :href="('https://www.xiaomi.cn/post/' + week.GbBBSID)" target="_blank">{{ week.CommTitle }}</a></p>
          <br />
          <div class="mdui-panel-item-body" v-for="(data) in week.addons">
            <span><b>▍{{ data.titleCn }}</b></span>
            <ol>
              <li v-for="(data) in data.details">{{ data.Cn }}</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="mdui-panel" v-for="(data) in week.logs">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <b class="mdui-text-larger">{{ data.titleCn }}</b>
          </div>
          <div class="mdui-panel-item-body">
            <p><b>▍更新日志</b></p>
            <div v-for="(data) in data.log">
              <b>{{ data.componentCn }}</b>
              <p v-for="{ changesCn } in data.changes">{{ changesCn }}</p>
            </div>
          </div>
          <div class="mdui-panel-item-body">
          </div>
        </div>
      </div>
      <div class="mdui-table-fluid" v-show="week.showdevices !='0'">
        <table class="mdui-table">
          <thead>
            <tr>
              <th>机型</th>
              <th>米柚</th>
              <th>安卓</th>
              <th>卡刷包</th>
              <th>线刷包</th>
            </tr>
          </thead>
          <tbody v-for="(data) in week.devices">
            <tr>
              <td class="mdui-text-center">{{ data.NameCn }}</td>
              <td class="mdui-text-center">{{ data.miui }}</td>
              <td class="mdui-text-center">{{ data.android }}</td>
              <td v-if="data.recovery == ''">未公布</td>
              <td v-else><a :href="('https://bigota.d.miui.com/' + data.miui + '/' + data.recovery)">{{ data.recovery }}</a></td>
              <td v-if="data.fastboot == ''">未公布</td>
              <td v-else><a :href="('https://bigota.d.miui.com/' + data.miui + '/' + data.fastboot)">{{ data.fastboot }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <CnPcFooter />
    </div>
  </div>

</template>
<script>
let baseurl = "https://data.miuier.com/data/weekly/week-";
let week_url = '';
let week_id = '';
let region = '';
let et = '';
export default {
  data() {
    return {
      week: []
    }
  },
  created() {
    week_id = this.$route.params.week.split("-")[1];
    region = this.$route.params.week.split("-")[2];
    week_url = baseurl + week_id + "-" + region + ".json";
  },
  async fetch() {
    this.week = await fetch(week_url).then(res => res.json())
    et = this.week.titleCn
  },
  fetchOnServer: true,
  head() {
    return {
      title: et + " - MIUI官方ROM仓库",
      htmlAttrs: {
        lang: "zh-CN",
      }
    }
  }
}
</script>
