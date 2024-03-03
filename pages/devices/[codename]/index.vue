<template>
  <title>{{ device[locale] }}({{ device.codename }}) {{ $t('download') }} - {{ $t('site') }}</title>
  <Header></Header>
  <div class="mdui-container-fluid">
    <div class="mdui-panel">
      <div class="mdui-panel-item mdui-panel-item-open">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title branch-title">{{ $t('devinfo') }}</div>
        </div>
        <div class="mdui-panel-item-body">
          <ul class="mdui-list">
            <li><b>{{ $t('devname') }} ：</b>{{ device[locale] }}</li><br />
            <li><b>{{ $t('devcode') }} ：</b>{{ device.codename }}</li><br />
            <li><b>Hyper<span class="HyperBlue">OS</span> ：</b>
              <span v-show="device.ismiui == '0'">
                <a :href="('https://hyperos.fans/' + locale.slice(0, 2) + '/devices/' + device.codename)" class="HyperBlue">{{ $t('released') }}</a>
              </span>
              <span v-show="device.ismiui == '1'">{{ $t('notyet') }}</span>
              <span v-show="device.ismiui == ''">{{ $t('notsupported') }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mdui-panel-item mdui-panel-item-open">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title branch-title">{{ $t('attentions') }}</div>
        </div>
        <div class="mdui-panel-item-body">
          <li><b>{{ $t('bllock') }} ：</b>{{ $t('unlock') }},
            <a href="https://www.miui.com/unlock/download.html" v-if="locale == 'zh-cn'">{{ $t('applyurl') }}</a>
            <a href="https://play.google.com/store/apps/details?id=com.mi.global.bbs" v-else>{{ $t('applyurl') }}</a>
          </li><br />
          <span v-for="attention in device.attentions" v-show="attention[locale] != ''">
            <li>{{ attention[locale] }}</li><br />
          </span>
          <li><b>{{ $t('vernote') }} ：</b>{{ $t('vermess') }}</li><br />
          <li><b class="mdui-text-color-red">{{ $t('dutyfree') }} : </b>{{ $t('notice') }}</li>
        </div>
      </div>
    </div>
    <div mdui-panel="{accordion: true}" class="mdui-panel" v-for="branch in device.branches" v-show="branch.show == 1">
      <div class="mdui-panel-item">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title branch-title">{{ branch[locale] }}</div>
          <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
          <div class="mdui-table-fluid mdui-shadow-0">
            <table class="mdui-table mdui-shadow-0">
              <thead>
                <tr>
                  <th class="mdui-text-center">{{ $t('numeric') }}</th>
                  <th class="mdui-text-center" v-show="branch.branch == 'msap'">{{ $t('version') }}</th>
                  <th class="mdui-text-center" v-show="branch.branch != 'msap'">{{ $t('miui') }}</th>
                  <th class="mdui-text-center">{{ $t('android') }}</th>
                  <th>{{ $t('recovery') }}</th>
                  <th>{{ $t('fastboot') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in branch.links">
                  <td class="mdui-text-center">{{ branch.links.length - index }}</td>
                  <td class="mdui-text-center">{{ data.miui }}</td>
                  <td class="mdui-text-center">{{ data.android }}</td>
                  <td v-if="data.recovery == ''">{{ $t('na') }}</td>
                  <td v-else><a :href="('https://cdn-ota.azureedge.net/' + data.miui + '/' + data.recovery)">
                      <span>{{ $t('recovery') }}</span>
                      <!-- <span v-if="$device.isDesktopOrTablet">{{ data.recovery }}</span>
                        <span v-else></span> -->
                    </a></td>
                  <td v-if="data.fastboot == ''">{{ $t('na') }}</td>
                  <td v-else><a :href="('https://cdn-ota.azureedge.net/' + data.miui + '/' + data.fastboot)">
                      <span>{{ $t('fastboot') }}</span>
                      <!-- <span v-if="$device.isDesktopOrTablet">{{ data.fastboot }}</span>
                        <span v-else></span> -->
                    </a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <Disclaimer></Disclaimer>
  <Footer></Footer>
  <Analystics></Analystics>
  <NuxtMR></NuxtMR>
</template>

<script setup>
import Analystics from '~/components/Analystics.vue';

const route = useRoute();
const { locale } = useI18n();
const { data: device } = useFetch("https://data.miuier.com/data/devices/" + route.params.codename + ".json")
</script>