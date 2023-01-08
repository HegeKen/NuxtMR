<template>
  <div>
    <CnMobileNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-orange">
            更新时间：{{ site.sudate }}
          </div>
          <div class="mdui-panel-item-body">
            <div>站点版本：{{ site.ver }}</div>
            <br />
            <div>新增机型：{{ site.newDeviceCn }}</div>
            <br />
            <div v-show="site.log['0'].cn != ''">更新日志：</div>
            <div v-for="( log, index ) in site.log" v-show="site.log['0'].cn != ''">
              <p>{{ index + 1 }} . {{ log.cn }}</p>
            </div>
            开发版更新日期：{{ site.btdate }}<br /><br />收录版本：<span v-for="(data, index) in site.beta">
              <span v-show="index != site.beta.length - 1">{{ data.ver }};</span>
              <span v-show="index == site.beta.length - 1">{{ data.ver }}</span>
            </span>
            <br />
            <br />
            上述开发版支持：<span v-for="(data, index) in site.devices">
              <span v-show="index != site.devices.length - 1">{{ data.NameCn }};</span>
              <span v-show="index == site.devices.length - 1">{{ data.NameCn }}</span>
            </span>
            <br />
            <br />
            <div>稳定版收录：{{ site.stdate }}</div>
            <p v-if="$fetchState.pending">正在读取....</p>
            <p v-else-if="$fetchState.error">读取失败</p>
            <ul v-else>
              <li v-for="{ NameCn, rom } in site.stable">
                {{ NameCn }} :{{ rom }}
              </li>
            </ul>
          </div>
          <div class="mdui-panel-item-body">
            <div>当前支持查询以下{{ devices.mi.length + devices.mise.length + devices.micc.length + devices.minote.length + devices.minote.length + devices.mimax.length - 1 + devices.mimix.length + devices.mipad.length + devices.micivi.length + devices.mia.length + devices.miothers.length + devices.rm.length + devices.rmnote.length + devices.rmk.length + devices.rmpad.length + devices.rmothers.length + devices.pococ.length + devices.pocof.length + devices.pocom.length + devices.pocox.length - 20 }}款机型：</div>
            <ul>
              <li>小米系列：<span v-for="(data, index) in devices.mi">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mi.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mi.length - 1"> {{ data.NameCn }} </a>
                </span></li>
              <li>小米SE 系列：<span v-for="(data, index) in devices.mise">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mise.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mise.length - 1"> {{ data.NameCn }} </a>
                </span></li>
              <li>小米CC 系列：<span v-for="(data, index) in devices.micc">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.micc.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.micc.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米Note 系列：<span v-for="(data, index) in devices.minote">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.minote.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.minote.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米MAX 系列：<span v-for="(data, index) in devices.mimax">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mimax.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mimax.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米MIX 系列：<span v-for="(data, index) in devices.mimix">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mimix.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mimix.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米平板 系列：<span v-for="(data, index) in devices.mipad">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mipad.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mipad.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米Civi 系列：<span v-for="(data, index) in devices.micivi">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.micivi.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.micivi.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米A 系列：<span v-for="(data, index) in devices.mia">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mia.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mia.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>其他小米手机：<span v-for="(data, index) in devices.miothers">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.miothers.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.miothers.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi 系列：<span v-for="(data, index) in devices.rm">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rm.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rm.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi Note系列：<span v-for="(data, index) in devices.rmnote">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmnote.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmnote.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi K系列：<span v-for="(data, index) in devices.rmk">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmk.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmk.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi 平板：<span v-for="(data, index) in devices.rmpad">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmpad.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmpad.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>其余 Redmi 手机：<span v-for="(data, index) in devices.rmothers">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmothers.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmothers.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO C系列：<span v-for="(data, index) in devices.pococ">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pococ.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pococ.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO F系列：<span v-for="(data, index) in devices.pocof">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocof.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocof.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO M系列：<span v-for="(data, index) in devices.pocom">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocom.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocom.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO X系列：<span v-for="(data, index) in devices.pocox">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocox.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocox.length - 1"> {{ data.NameCn }} </a></span>
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
