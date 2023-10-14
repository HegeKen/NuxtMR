<template>
  <div>
    <EnMobileNav />
    <div class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">Notes：</div>
          </div>
          <p><b>Versions：</b>{{ week.versions }}</p>
          <p><b>Release Date：</b>{{ week.update }}</p>
          <p v-show="week.CnBBSID != ''"><b>See Changelogs at China MIUI Forum：</b><a :href="('https://www.miui.com/thread-' + week.CnBBSID + '-1-1.html')" target="_blank">{{ week.titleEn }}</a></p>
          <p v-show="week.CnComID != ''"><b>See Changelogs at Xiaomi Community(China)：</b><a :href="('https://www.xiaomi.cn/post/' + week.CnComID)" target="_blank">{{ week.titleEn }}</a></p>
          <p v-show="week.GbBBSID != ''"><b>See Changelogs at Global Forum：</b><a :href="('https://www.xiaomi.cn/post/' + week.GbBBSID)" target="_blank">{{ week.titleEn }}</a></p>
          <br />
          <div class="mdui-panel-item-body" v-for="(data) in week.addons">
            <span><b>▍{{ data.titleEn }}</b></span>
            <ol>
              <li v-for="(data) in data.details">{{ data.En }}</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="mdui-panel" v-for="(data) in week.logs">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <b class="mdui-text-larger">{{ data.titleEn }}</b>
          </div>
          <div class="mdui-panel-item-body">
            <p><b>▍Changelogs</b></p>
            <div v-for="(data) in data.log">
              <b>{{ data.componentEn }}</b>
              <p v-for="{ changesEn } in data.changes">{{ changesEn }}</p>
            </div>
          </div>
          <div class="mdui-panel-item-body">
          </div>
        </div>
      </div>
      <br />
      <div class="mdui-table-fluid" v-show="week.showdevices != '0'">
        <table class="mdui-table">
          <thead>
            <tr>
              <th class="mdui-text-center">Devices</th>
              <th class="mdui-text-center">MIUI</th>
              <th class="mdui-text-center">Android</th>
              <th>Recovery</th>
              <th>Fastboot</th>
            </tr>
          </thead>
          <tbody v-for="(data) in week.devices">
            <tr>
              <td class="mdui-text-center">{{ data.NameEn }}({{ data.code }})</td>
              <td class="mdui-text-center">{{ data.miui }}</td>
              <td class="mdui-text-center">{{ data.android }}</td>
              <td v-if="data.recovery == ''">N/A</td>
              <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.recovery)">Recovery</a></td>
              <td v-if="data.fastboot == ''">N/A</td>
              <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.fastboot)">Fastboot</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <EnMobileDisclaimer />
    <EnMobileFooter />
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
    et = this.week.titleEn
  },
  fetchOnServer: true,
  head() {
    return {
      title: et + " - MIUI Official ROMs",
      htmlAttrs: {
        lang: "en-US",
      }
    }
  }
}
</script>
