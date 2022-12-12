<template>
  <div>
    <EnMobileNav />
    <br />
    <div class="mdui-container-fluid" id="Xiaomi">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">Xiaomi Phones</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">Mi Series：</div>
            <div v-for="{ code, enname } in devices.mi" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi SE Series：</div>
            <div v-for="{ code, enname } in devices.mise" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi CC Series：</div>
            <div v-for="{ code, enname } in devices.micc" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi Note Series：</div>
            <div v-for="{ code, enname } in devices.minote" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi MAX Series：</div>
            <div v-for="{ code, enname } in devices.mimax" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">小米MIXSeries：</div>
            <div v-for="{ code, enname } in devices.mimix" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Xiaomi Civi Series：</div>
            <div v-for="{ code, enname } in devices.micivi" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi A Series：</div>
            <div v-for="{ code, enname } in devices.mia" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Mi Pad Series：</div>
            <div v-for="{ code, enname } in devices.mipad" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Other Xiaomi Phones：</div>
            <div v-for="{ code, enname } in devices.miothers" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-container-fluid" id="Redmi">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">Redmi Phones</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">RedmiSeries：</div>
            <div v-for="{ code, enname } in devices.rm" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Redmi Note Series：</div>
            <div v-for="{ code, enname } in devices.rmnote" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Redmi K Series：</div>
            <div v-for="{ code, enname } in devices.rmk" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Redmi Pad Series：</div>
            <div v-for="{ code, enname } in devices.rmpad" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">Other Redmi Phones：</div>
            <div v-for="{ code, enname } in devices.rmothers" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-container-fluid" id="POCO">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">POCO Phones</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">POCO C Series：</div>
            <div v-for="{ code, enname } in devices.pococ" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">POCO F Series：</div>
            <div v-for="{ code, enname } in devices.pocof" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">POCO M Series：</div>
            <div v-for="{ code, enname } in devices.pocom" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
            <div class="series">POCO X Series：</div>
            <div v-for="{ code, enname } in devices.pocox" class="mdui-chip">
              <a :href="('/mobile/en-US/devices/' + code )"><span class="mdui-chip-title"> {{ enname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EnMobileFooter />
  </div>
</template>

<script>
let baseurl = "https://next.miuier.com/data/";
let index = baseurl + "index.json";
let devices = baseurl + "devices.json"
export default {
  data() {
    return {
      site: [],
      devices: [],
      title: "Device List - MIUI Official ROMs"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
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
        lang: "en-US",
      }
    }
  }
}
</script>
