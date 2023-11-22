<template>
  <div>
    <CnPcNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-1">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">注意：</div>
          </div>
          <div class="mdui-panel-item-body devnotice">
            <ol>
              <li><b>机型名称：</b>{{ roms.cnname }}</li>
              <li><b>机型代号：</b>{{ roms.codename }}</li>
              <li><b>下载教程：</b><a href="https://www.hyperos.fans/zh/tips/403" class="milink">修复403提示</a></li>
              <li v-show="roms.ismiui == '0'"><b>HyperOS：</b>现已发布，<a :href="('https://hyperos.fans/zh/devices/'+roms.codename)">点击前往</a></li>
              <li v-show="roms.ismiui == '1'"><b>HyperOS：</b>尚未发布</li>
              <li v-show="roms.ismiui == ''"><b>HyperOS：</b>暂不支持</li>
              <li v-show="roms.ccshow != ''"><b>社区圈子：</b><a :href="('https://www.xiaomi.cn/board/' + roms.cdid)" v-show="roms.cdid != ''" target="_blank">小米社区&emsp;</a><a :href="('https://new.c.mi.com/global/forum-sub/' + roms.gdid)" v-show="roms.gdid != ''" target="_blank">国际版社区&emsp;</a><a :href="('https://c.po.co/global/circle/circledetail/' + roms.pcid)" v-show="roms.pcid != ''" target="_blank">POCO 社区</a></li>
              <li><b>感谢网站：</b><a href="https://xiaomifirmwareupdater.com" class="milink">Xiaomi Firmware Updater</a></li>
              <li><b>手机解锁：</b>所有线刷都以解锁Bootloader为前提，并且解锁Bootloader时会清除数据，请提前做好备份工作，<a href="https://www.miui.com/unlock" class="milink">传送门</a></li>
              <li><b class="mdui-text-color-red">风险提示：</b>我们不推荐刷入非机型购入地区以外的系统分支，有可能会引起无法刷入，无法识别基带等等问题，请在确定刷入之前做好心理准备，因此引发的问题，本网站概不负责。</li>
              <li v-for="{ cn } in roms.attentions" v-show="cn != ''">{{ cn }}</li>
              <li><b>版本提醒：</b>如果您在线刷包名中发现debug字样，请勿轻易尝试，该类刷机包稳定性较差，不推荐使用</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div id="STABLE">
      <div v-for="{ branch, cnname, show, links } in roms.branches" class="mdui-container-fluid" v-show="show == 1">
        <div mdui-panel="{accordion: true}" class="mdui-panel mdui-panel-gapless">
          <div class="mdui-panel-item">
            <div class="mdui-panel-item-header">
              <div class="mdui-panel-item-title">{{ cnname }}</div>
              <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
            </div>
            <div class="mdui-panel-item-body">
              <div class="mdui-table-fluid">
                <table class="mdui-table">
                  <thead>
                    <tr>
                      <th class="mdui-text-center">序号</th>
                      <th class="mdui-text-center" v-show="branch == 'msap'">版本</th>
                      <th class="mdui-text-center" v-show="branch != 'msap'">米柚</th>
                      <th class="mdui-text-center">安卓</th>
                      <th>卡刷包</th>
                      <th>线刷包</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in links">
                      <td class="mdui-text-center">{{ links.length - index }}</td>
                      <td class="mdui-text-center">{{ data.miui }}</td>
                      <td class="mdui-text-center">{{ data.android }}</td>
                      <td v-if="data.recovery == ''">未公布</td>
                      <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.recovery)">{{ data.recovery }}</a></td>
                      <td v-if="data.fastboot == ''">未公布</td>
                      <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.fastboot)">{{ data.fastboot }}</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="{ branch, cnname, show, links } in roms.branches" class="mdui-container-fluid mdui-hidden" v-show="show != 1">
        <div mdui-panel="{accordion: true}" class="mdui-panel mdui-panel-gapless">
          <div class="mdui-panel-item">
            <div class="mdui-panel-item-header">
              <div class="mdui-panel-item-title">{{ cnname }}</div>
              <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
            </div>
            <div class="mdui-panel-item-body">
              <div class="mdui-table-fluid">
                <table class="mdui-table">
                  <thead>
                    <tr>
                      <th class="mdui-text-center">序号</th>
                      <th class="mdui-text-center" v-show="branch == 'msap'">版本</th>
                      <th class="mdui-text-center" v-show="branch != 'msap'">米柚</th>
                      <th class="mdui-text-center">安卓</th>
                      <th>卡刷包</th>
                      <th>线刷包</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in links">
                      <td class="mdui-text-center">{{ links.length - index }}</td>
                      <td class="mdui-text-center">{{ data.miui }}</td>
                      <td class="mdui-text-center">{{ data.android }}</td>
                      <td v-if="data.recovery == ''">未公布</td>
                      <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.recovery)">{{ data.recovery }}</a></td>
                      <td v-if="data.fastboot == ''">未公布</td>
                      <td v-else><a :href="('https://hugeota.d.miui.com/' + data.miui + '/' + data.fastboot)">{{ data.fastboot }}</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <CnPcDisclaimer />
    <CnPcFooter />
  </div>

</template>

<script>
var codename = "";
var baseurl = "https://data.miuier.com/data/devices/";
var url = "";
export default {
  data() {
    return {
      roms: [],
      branch: []
    }
  },
  created() {
    codename = this.$route.params.codename;
    url = baseurl + codename + ".json";
  },
  async fetch() {
    this.roms = await fetch(url).then(res => res.json());
    this.branch = this.roms.branch;
  },
  fetchOnServer: true,
  head() {
    return {
      title: this.roms.cnname + "(" + this.roms.codename + ") - MIUI官方ROM仓库",
      htmlAttrs: {
        lang: "zh-CN",
      }
    }
  }
}
</script>
