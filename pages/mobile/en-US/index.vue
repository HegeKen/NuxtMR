<template>
  <div>
    <EnMobileNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-orange">
            Updated at：{{ site.sudate }}
          </div>
          <div class="mdui-panel-item-body">
            <div>Site Version：{{ site.ver }}</div>
            <br />
            <div>Newly Added Devices：{{ site.newDeviceEn }}</div>
            <br />
            <div v-show="site.log['0'].en != ''">Update Log：</div>
            <div v-for="( log, index ) in site.log" v-show="site.log['0'].en != ''">
              <p>{{ index + 1 }} . {{ log.en }}</p>
            </div>
            China Beta Updated At：{{ site.btdate }}<br /><br /> Versions: <span v-for="(data, index) in site.beta">
              <span v-show="index != site.beta.length - 1">{{ data.ver }};</span>
              <span v-show="index == site.beta.length - 1">{{ data.ver }}</span>
            </span>
            <br />
            <br />
            China Beta ROM Supports：<span v-for="(data, index) in site.devices">
              <span v-show="index != site.devices.length - 1">{{ data.NameEn }};</span>
              <span v-show="index == site.devices.length - 1">{{ data.NameEn }}</span>
            </span>
            <br />
            <br />
            <div>Newly Added Stable ROM：{{ site.stdate }}</div>
            <p v-if="$fetchState.pending">Fetching Data....</p>
            <p v-else-if="$fetchState.error">Fetching Failed.</p>
            <ul v-else>
              <li v-for="{ NameEn, rom } in site.stable">
                {{ NameEn }} :{{ rom }}
              </li>
            </ul>
          </div>
          <div class="mdui-panel-item-body">
            <div>Our site currently supports following {{ devices.mi.length + devices.mise.length + devices.micc.length + devices.minote.length + devices.minote.length + devices.mimax.length - 1 + devices.mimix.length + devices.mipad.length + devices.micivi.length + devices.mia.length + devices.miothers.length + devices.rm.length + devices.rmnote.length + devices.rmk.length + devices.rmpad.length + devices.rmothers.length + devices.pococ.length + devices.pocof.length + devices.pocom.length + devices.pocox.length - 20 }} devices：</div>
            <ul>
              <li>Mi Series：<span v-for="(data, index) in devices.mi">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mi.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mi.length - 1"> {{ data.NameEn }} </a>
                </span></li>
              <li>Mi SE Series：<span v-for="(data, index) in devices.mise">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mise.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mise.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi CC Series：<span v-for="(data, index) in devices.micc">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.micc.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.micc.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi Note Series：<span v-for="(data, index) in devices.minote">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.minote.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.minote.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi MAX Series：<span v-for="(data, index) in devices.mimax">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mimax.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mimax.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi MIX Series：<span v-for="(data, index) in devices.mimix">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mimix.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mimix.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi Pad Series：<span v-for="(data, index) in devices.mipad">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mipad.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mipad.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Xiaomi Civi Series：<span v-for="(data, index) in devices.micivi">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mipad.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mipad.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Mi A Series：<span v-for="(data, index) in devices.mia">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mia.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mia.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Other Mi Phones：<span v-for="(data, index) in devices.miothers">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mia.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mia.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Redmi Series：<span v-for="(data, index) in devices.rm">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.mia.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.mia.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Redmi Note Series：<span v-for="(data, index) in devices.rmnote">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.rmnote.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.rmnote.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Redmi K Series：<span v-for="(data, index) in devices.rmk">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.rmk.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.rmk.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Redmi Pad：<span v-for="(data, index) in devices.rmpad">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.rmpad.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.rmpad.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>Other Redmi Phones：<span v-for="(data, index) in devices.rmothers">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.rmothers.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.rmothers.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>POCO C Series：<span v-for="(data, index) in devices.pococ">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.pococ.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.pococ.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>POCO F Series：<span v-for="(data, index) in devices.pocof">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.pocof.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.pocof.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>POCO M Series：<span v-for="(data, index) in devices.pocom">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.pocom.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.pocom.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
              <li>POCO X Series：<span v-for="(data, index) in devices.pocox">
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index != devices.pocox.length - 1"> {{ data.NameEn }} /</a>
                  <a :href="('/mobile/en-US/devices/' + data.code)" v-show="index == devices.pocox.length - 1"> {{ data.NameEn }} </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <EnMobileFooter />
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
