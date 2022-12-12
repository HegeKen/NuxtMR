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
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米SE系列：<span v-for="{ code, cnname } in devices.mise">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米CC系列：<span v-for="{ code, cnname } in devices.micc">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米Note系列：<span v-for="{ code, cnname } in devices.minote">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米MAX系列：<span v-for="{ code, cnname } in devices.mimax">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米MIX系列：<span v-for="{ code, cnname } in devices.mimix">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米平板系列：<span v-for="{ code, cnname } in devices.mipad">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米Civi系列：<span v-for="{ code, cnname } in devices.micivi">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>小米A系列：<span v-for="{ code, cnname } in devices.mia">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>其他小米手机：<span v-for="{ code, cnname } in devices.miothers">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi系列：<span v-for="{ code, cnname } in devices.rm">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi Note系列：<span v-for="{ code, cnname } in devices.rmnote">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi K系列：<span v-for="{ code, cnname } in devices.rmk">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi系列：<span v-for="{ code, cnname } in devices.rm">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi 平板：<span v-for="{ code, cnname } in devices.rmpad">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>Redmi 系列：<span v-for="{ code, cnname } in devices.rm">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>其余 Redmi 手机：<span v-for="{ code, cnname } in devices.rmothers">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>POCO C系列：<span v-for="{ code, cnname } in devices.pococ">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>POCO F系列：<span v-for="{ code, cnname } in devices.pocof">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>POCO M系列：<span v-for="{ code, cnname } in devices.pocom">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
              </li>
              <li>POCO X系列：<span v-for="{ code, cnname } in devices.pocox">
                  <NuxtLink :to="('zh-CN/devices/' + code)"> {{ cnname }} /</NuxtLink></span>
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
