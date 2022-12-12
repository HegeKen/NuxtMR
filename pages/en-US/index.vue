<template>
  <div>
    <EnPcNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-orange">
            Updated at：{{ site.date }}
          </div>
          <div class="mdui-panel-item-body">
            <div>Site Version：{{ site.ver }}</div>
            <div>Newly Added Devices：{{ site.newDeviceEn }}</div>
            <div>Newly Added Stable ROM：{{ site.update }}</div>
            <p v-if="$fetchState.pending">Fetching Data....</p>
            <p v-else-if="$fetchState.error">Fetching Failed.</p>
            <ul v-else>
              <li v-for="{ NameEn, rom } in site.stable">
                {{ devices["codename"] }}
                {{ NameEn }} :{{ rom }}
              </li>
            </ul>
          </div>
          <div class="mdui-panel-item-body">
            <div>Our site currently supports following devices：</div>
            <ul>
              <li>Mi Series：<span v-for="{ code, enname } in devices.mi">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi SE Series：<span v-for="{ code, enname } in devices.mise">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi CC Series：<span v-for="{ code, enname } in devices.micc">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi Note Series：<span v-for="{ code, enname } in devices.minote">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi MAX Series：<span v-for="{ code, enname } in devices.mimax">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi MIX Series：<span v-for="{ code, enname } in devices.mimix">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi Pad Series：<span v-for="{ code, enname } in devices.mipad">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Xiaomi Civi Series：<span v-for="{ code, enname } in devices.micivi">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Mi A Series：<span v-for="{ code, enname } in devices.mia">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Other Mi Phones：<span v-for="{ code, enname } in devices.miothers">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi Series：<span v-for="{ code, enname } in devices.rm">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi Note Series：<span v-for="{ code, enname } in devices.rmnote">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi K Series：<span v-for="{ code, enname } in devices.rmk">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi Series：<span v-for="{ code, enname } in devices.rm">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi Pad：<span v-for="{ code, enname } in devices.rmpad">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Redmi Series：<span v-for="{ code, enname } in devices.rm">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>Other Redmi Phones：<span v-for="{ code, enname } in devices.rmothers">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>POCO C Series：<span v-for="{ code, enname } in devices.pococ">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>POCO F Series：<span v-for="{ code, enname } in devices.pocof">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>POCO M Series：<span v-for="{ code, enname } in devices.pocom">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
              <li>POCO X Series：<span v-for="{ code, enname } in devices.pocox">
                <a :href="('/en-US/devices/' + code)"> {{ enname }} /</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <EnPcFooter />
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
      title: "MIUI Official ROMS - A MiFan\'s MIUI Roms Collection Site"
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
