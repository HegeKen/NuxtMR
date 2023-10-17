<template>
  <div>
    <CnMobileNav />
    <div class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">新的起点</div>
          </div>
          <div class="mdui-panel-item-body">
            <div style="font-size: 30px;"><a href="https://hyperos.fans" style="text-decoration: none;color: black;font-weight: bolder;">Xiaomi Hyper<span style="color: #155ffe;">OS</span></a></div>
            <div style="font-size: 20px;font-weight: bold;">小 米 澎 湃 O S</div>
            <div style="font-size: 20px;font-weight: lighter;">即将到来.....</div>
            <div style="font-size: 20px;font-weight: lighter;"><a href="https://hyperos.fans" style="text-decoration: none;color: black;font-weight: bolder;">即刻<span style="color: #155ffe;">前往</span></a></div>
          </div>
        </div>
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">站点： {{ site.ver }} </div>
          </div>
          <div class="mdui-panel-item-body">
            <div><b>更新时间：</b>{{ site.sudate }}</div>
            <br />
            <div v-if="site.newDeviceCn !=''"><b>新增机型 ：</b>{{ site.newDeviceCn }}</div>
            <br />
            <div v-show="site.log.length > 0"><b>更新日志 ：</b></div>
            <div v-for="( log, index ) in site.log" v-show="site.log['0'].Cn != ''">
              <p>{{ index + 1 }} . {{ log.Cn }}</p>
            </div>
          </div>
        </div>
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">开发版更新</div>
          </div>
          <div class="mdui-panel-item-body">
            <b>更新时间 ：</b>{{ weeks.update }}<br /><br />
            <b>更新版本 ：</b><span>{{ weeks.versions }}</span>
            <br />
            <br />
            <b>第{{site.latest}}周日志 ：</b><span><a :href="('/mobile/zh-CN/weekly/week-' + site.latest + '-cn')" target="_blank">{{ weeks.titleCn }}</a></span>
            <br />
            <br />
            <p v-show="weeks.showdevices != 0"><b>本次开发版支持 ：</b><span v-for="(data, index) in weeks.devices">
              <span v-show="index != weeks.devices.length - 1">{{ data.NameCn }};</span>
              <span v-show="index == weeks.devices.length - 1">{{ data.NameCn }}</span>
            </span><b>等{{ weeks.devices.length }}款机型。</b></p>
          </div>
        </div>
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">稳定版/正式版更新</div>
          </div>
          <div class="mdui-panel-item-body">
            <div><b>最近更新 ：</b>{{ site.date }}</div>
            <div><b>收录周期 ：</b>{{ site.year }}年第{{ site.week }}周({{ site.period }})</div>
            <div><b>收录内容：</b></div>
            <p v-if="$fetchState.pending">正在读取....</p>
            <p v-else-if="$fetchState.error">读取失败</p>
            <ol v-else>
              <li v-for="{ NameCn, rom, code } in site.stable">
                {{ NameCn }}({{ code }}) :{{ rom }}
              </li>
            </ol>
          </div>
        </div>
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">站点支持</div>
          </div>
          <div class="mdui-panel-item-body">
            <div><b>当前支持查询以下{{ devices.mi.length + devices.mise.length + devices.micc.length + devices.minote.length + devices.minote.length + devices.mimax.length + devices.mimix.length + devices.mipad.length + devices.micivi.length + devices.mia.length + devices.miothers.length + devices.rm.length + devices.rmnote.length + devices.rmk.length + devices.rmpad.length + devices.rmothers.length + devices.pococ.length + devices.pocof.length + devices.pocom.length + devices.pocox.length - 7 }}款机型：</b></div>
            <ul>
              <li>小米系列 ：<span v-for="(data, index) in devices.mi">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mi.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mi.length - 1"> {{ data.NameCn }} </a>
                </span></li>
              <li>小米 SE 系列 ：<span v-for="(data, index) in devices.mise">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mise.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mise.length - 1"> {{ data.NameCn }} </a>
                </span></li>
              <li>小米 CC 系列 ：<span v-for="(data, index) in devices.micc">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.micc.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.micc.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米 Note 系列 ：<span v-for="(data, index) in devices.minote">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.minote.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.minote.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米 MAX 系列 ：<span v-for="(data, index) in devices.mimax">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mimax.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mimax.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米 MIX 系列 ：<span v-for="(data, index) in devices.mimix">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mimix.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mimix.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米平板 系列 ：<span v-for="(data, index) in devices.mipad">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mipad.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mipad.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米 Civi 系列 ：<span v-for="(data, index) in devices.micivi">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.micivi.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.micivi.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>小米 A 系列 ：<span v-for="(data, index) in devices.mia">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.mia.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.mia.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>其他小米手机 ：<span v-for="(data, index) in devices.miothers">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.miothers.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.miothers.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi 系列 ：<span v-for="(data, index) in devices.rm">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rm.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rm.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi Note 系列 ：<span v-for="(data, index) in devices.rmnote">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmnote.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmnote.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi K 系列 ：<span v-for="(data, index) in devices.rmk">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmk.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmk.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>Redmi 平板 ：<span v-for="(data, index) in devices.rmpad">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmpad.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmpad.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>其余 Redmi 手机 ：<span v-for="(data, index) in devices.rmothers">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.rmothers.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.rmothers.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO C 系列 ：<span v-for="(data, index) in devices.pococ">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pococ.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pococ.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO F 系列 ：<span v-for="(data, index) in devices.pocof">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocof.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocof.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO M 系列 ：<span v-for="(data, index) in devices.pocom">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocom.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocom.length - 1"> {{ data.NameCn }} </a></span>
              </li>
              <li>POCO X 系列 ：<span v-for="(data, index) in devices.pocox">
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index != devices.pocox.length - 1"> {{ data.NameCn }} /</a>
                  <a :href="('/mobile/zh-CN/devices/' + data.code)" v-show="index == devices.pocox.length - 1"> {{ data.NameCn }} </a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CnMobileDisclaimer />
<CnMobileFooter />
  </div>
</template>

<script>
let index = "https://data.miuier.com/data/index.json";
let devices = "https://data.miuier.com/data/devices.json";
let week = ''
export default {
  data() {
    return {
      site: [],
      devices: [],
      weeks: [],
      beta: [],
      title: "MIUI官方ROM仓库 - 由米柚发烧友整理维护"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
    this.week = "https://data.miuier.com/data/weekly/week-" + this.site.latest + "-cn.json"
    this.weeks = await fetch(this.week).then(res => res.json())
  },
  fetchOnServer: true,
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
