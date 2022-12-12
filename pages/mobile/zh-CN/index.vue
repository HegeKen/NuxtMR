<template>
  <div>
    <CnMobileNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-orange">
            更新时间：{{ site.date }}
          </div>
          <div class="mdui-panel-item-body">
            <div>站点版本：{{ site.ver }}</div>
            <div>新增机型：{{ site.newDeviceCn }}</div>
            <div>稳定版收录：{{ site.update }}</div>
            <p v-if="$fetchState.pending">正在读取....</p>
            <p v-else-if="$fetchState.error">读取失败</p>
            <ul v-else>
              <li v-for="{ NameCn, rom } in site.stable">
                {{ devices["codename"] }}
                {{ NameCn }} :{{ rom }}
              </li>
            </ul>
          </div>
          <div class="mdui-panel-item-body">
            <div>当前支持查询以下机型：</div>
            <ul>
              <li>小米系列：<span v-for="{ code, cnname } in devices.mi">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米SE系列：<span v-for="{ code, cnname } in devices.mise">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米CC系列：<span v-for="{ code, cnname } in devices.micc">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米Note系列：<span v-for="{ code, cnname } in devices.minote">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米MAX系列：<span v-for="{ code, cnname } in devices.mimax">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米MIX系列：<span v-for="{ code, cnname } in devices.mimix">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米平板系列：<span v-for="{ code, cnname } in devices.mipad">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米Civi系列：<span v-for="{ code, cnname } in devices.micivi">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>小米A系列：<span v-for="{ code, cnname } in devices.mia">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>其他小米手机：<span v-for="{ code, cnname } in devices.miothers">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi系列：<span v-for="{ code, cnname } in devices.rm">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi Note系列：<span v-for="{ code, cnname } in devices.rmnote">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi K系列：<span v-for="{ code, cnname } in devices.rmk">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi系列：<span v-for="{ code, cnname } in devices.rm">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi 平板：<span v-for="{ code, cnname } in devices.rmpad">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>Redmi 系列：<span v-for="{ code, cnname } in devices.rm">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>其余 Redmi 手机：<span v-for="{ code, cnname } in devices.rmothers">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>POCO C系列：<span v-for="{ code, cnname } in devices.pococ">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>POCO F系列：<span v-for="{ code, cnname } in devices.pocof">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>POCO M系列：<span v-for="{ code, cnname } in devices.pocom">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
              <li>POCO X系列：<span v-for="{ code, cnname } in devices.pocox">
                  <a :href="('/zh-CN/devices/' + code)"> {{ cnname }} /</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CnMobileFooter />
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
      title: "MIUI官方ROM仓库 - 由米柚发烧友整理维护"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: false,
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
