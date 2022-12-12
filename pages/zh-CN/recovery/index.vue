<template>
  <div>
    <CnPcNav />
    <br />
    <div class="mdui-container-fluid" id="Xiaomi">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">小米手机</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">小米系列：</div>
            <div v-for="{ code, cnname } in devices.mi" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米SE系列：</div>
            <div v-for="{ code, cnname } in devices.mise" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米CC系列：</div>
            <div v-for="{ code, cnname } in devices.micc" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米Note系列：</div>
            <div v-for="{ code, cnname } in devices.minote" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米MAX系列：</div>
            <div v-for="{ code, cnname } in devices.mimax" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米MIX系列：</div>
            <div v-for="{ code, cnname } in devices.mimix" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米Civi系列：</div>
            <div v-for="{ code, cnname } in devices.micivi" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米A系列：</div>
            <div v-for="{ code, cnname } in devices.mia" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">小米平板系列：</div>
            <div v-for="{ code, cnname } in devices.mipad" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">其他小米手机：</div>
            <div v-for="{ code, cnname } in devices.miothers" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-container-fluid" id="Redmi">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">Redmi 手机</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">Redmi系列：</div>
            <div v-for="{ code, cnname } in devices.rm" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">Redmi Note系列：</div>
            <div v-for="{ code, cnname } in devices.rmnote" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">Redmi K系列：</div>
            <div v-for="{ code, cnname } in devices.rmk" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">Redmi Pad系列：</div>
            <div v-for="{ code, cnname } in devices.rmpad" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">其他Redmi手机：</div>
            <div v-for="{ code, cnname } in devices.rmothers" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mdui-container-fluid" id="POCO">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-0" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">POCO 手机</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="series">POCO C 系列：</div>
            <div v-for="{ code, cnname } in devices.pococ" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">POCO F 系列：</div>
            <div v-for="{ code, cnname } in devices.pocof" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">POCO M 系列：</div>
            <div v-for="{ code, cnname } in devices.pocom" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
            <div class="series">POCO X 系列：</div>
            <div v-for="{ code, cnname } in devices.pocox" class="mdui-chip">
              <a :href="('zh-CN/devices/' + code)"><span class="mdui-chip-title"> {{ cnname }} </span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CnPcFooter />
  </div>
</template>
<script>
let baseurl = "https://data.miuier.com/data/";
let index = baseurl + "index.json";
let devices = baseurl + "devices.json"
export default {
  data() {
    return {
      site: [],
      devices: [],
      title: "下载Recovery - MIUI官方ROM仓库"
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
        lang: "zh-CN",
      }
    }
  }
}
</script>
