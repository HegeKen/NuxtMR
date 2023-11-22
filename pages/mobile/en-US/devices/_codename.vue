<template>
  <div>
    <EnMobileNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-1">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">Notes：</div>
          </div>
          <div class="mdui-panel-item-body devnotice">
            <ol>
              <li><b>Device Name：</b>{{ roms.enname }}</li>
              <li><b>Codename：</b>{{ roms.codename }}</li>
              <li><b>下载教程：</b><a href="https://www.hyperos.fans/en/tips/403" class="milink">Fix for 403 error</a></li>
              <li v-show="roms.ismiui == '0'"><b>HyperOS：</b>Available now，<a :href="('https://hyperos.fans/zh/devices/'+roms.codename)">check it out!</a></li>
              <li v-show="roms.ismiui == '1'"><b>HyperOS：</b>Not released yet.</li>
              <li v-show="roms.ismiui == ''"><b>HyperOS：</b>No.</li>
              <li v-show="roms.ccshow != ''"><b>Communitys：</b><a :href="('https://www.xiaomi.cn/board/' + roms.cdid)" v-show="roms.cdid != ''" target="_blank">Mi Community(China)&emsp;</a><a :href="('https://new.c.mi.com/global/forum-sub/' + roms.gdid)" v-show="roms.gdid != ''" target="_blank">Xiaomi Community&emsp;</a><a :href="('https://c.po.co/global/circle/circledetail/' + roms.pcid)" v-show="roms.pcid != ''" target="_blank">POCO Community</a></li>
              <li><b>Thanks to：</b><a href="https://xiaomifirmwareupdater.com" class="milink">Xiaomi Firmware Updater</a></li>
              <li><b>Unlock Your Bootloader：</b>You need to unlock your phone's bootloader if you want to flash a rom into your phone via fastboot method, and your data could be deleted as you choose, please make sure you have backed up your personal data. <a href="https://en.miui.com/unlock/download_en.html" class="milink">Apply for Bootloader Unlock here.</a></li>
              <li><b class="mdui-text-color-red">Risks：</b>We don't recommend flashing different ROM version out of your region, you may get flash errors, lose vendor data, or even brick your device，please make sure you are able to deal with those situation befor flashing, and flash ROMs on your own risk.</li>
              <li v-for="{ en } in roms.attentions" v-show="en != ''">{{ en }}</li>
              <li><b>Package Notice：</b>If you find 'debug' in the filename, do not try to flash the rom easily, those roms aren't stable enough.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div id="STABLE">
      <div v-for="{ branch, enname, show, links } in roms.branches" class="mdui-container-fluid" v-show="show == 1">
        <div mdui-panel="{accordion: true}" class="mdui-panel mdui-panel-gapless">
          <div class="mdui-panel-item">
            <div class="mdui-panel-item-header">
              <div class="mdui-panel-item-title">{{ enname }}</div>
              <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
            </div>
            <div class="mdui-panel-item-body">
              <div class="mdui-table-fluid">
                <table class="mdui-table">
                  <thead>
                    <tr>
                      <th class="mdui-text-center">No.</th>
                      <th class="mdui-text-center" v-show="branch == 'msap'">Version</th>
                      <th class="mdui-text-center" v-show="branch != 'msap'">MIUI</th>
                      <th class="mdui-text-center">Android</th>
                      <th>Recovery</th>
                      <th>Fastboot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in links">
                      <td class="mdui-text-center">{{ links.length - index }}</td>
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
          </div>
        </div>
      </div>
      <div v-for="{ branch, enname, show, links } in roms.branches" class="mdui-container-fluid mdui-hidden" v-show="show != 1">
        <div mdui-panel="{accordion: true}" class="mdui-panel mdui-panel-gapless">
          <div class="mdui-panel-item">
            <div class="mdui-panel-item-header">
              <div class="mdui-panel-item-title">{{ enname }}</div>
              <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
            </div>
            <div class="mdui-panel-item-body">
              <div class="mdui-table-fluid">
                <table class="mdui-table">
                  <thead>
                    <tr>
                      <th class="mdui-text-center">No.</th>
                      <th class="mdui-text-center" v-show="branch == 'msap'">Version</th>
                      <th class="mdui-text-center" v-show="branch != 'msap'">MIUI</th>
                      <th class="mdui-text-center">Android</th>
                      <th>Recovery</th>
                      <th>Fastboot</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in links">
                      <td class="mdui-text-center">{{ links.length - index }}</td>
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
          </div>
        </div>
      </div>
    </div>
    <br />
    <EnMobileDisclaimer />
    <EnMobileFooter />
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
      title: this.roms.enname + "(" + this.roms.codename + ") - MIUI Official ROMs",
      htmlAttrs: {
        lang: "en-US",
      }
    }
  }
}
</script>
