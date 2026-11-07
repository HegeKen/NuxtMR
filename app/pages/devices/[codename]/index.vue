<template>
  <ClientOnly>
    <Header></Header>
    <main id="main-content" tabindex="-1">
    <div v-if="error" class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title branch-title mdui-text-color-red" role="heading" aria-level="2">{{ $t('error') || '加载失败' }}</div>
          </div>
          <div class="mdui-panel-item-body">
            <p>{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="device" class="mdui-container-fluid">
      <div class="mdui-panel">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title branch-title" role="heading" aria-level="2">{{ $t('devinfo') }}</div>
          </div>
          <div class="mdui-panel-item-body">
            <ul class="mdui-list">
              <li><b>{{ $t('devname') }} ：</b>{{ device[locale] }}</li><br />
              <li><b>{{ $t('devcode') }} ：</b>{{ device.codename }}</li><br />
              <li><b>Hyper<span class="HyperBlue">OS</span> ：</b>
                <span v-if="hyperosStatus === 'released'">
                  <a :href="buildHyperOSLink(device.codename)" class="HyperBlue">{{ $t('released') }}</a>
                </span>
                <span v-else-if="hyperosStatus === 'notyet'">{{ $t('notyet') }}</span>
                <span v-else>{{ $t('notsupported') }}</span>
              </li><br />
              <li><b>{{ $t('devapi') }} ：</b>
                <span class="devapi-links">
                  <a v-for="api in deviceApis" :key="api" :href="buildDeviceApiLink(api)" target="_blank" rel="noopener noreferrer">{{ api }}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title branch-title" role="heading" aria-level="2">{{ $t('attentions') }}</div>
          </div>
          <div class="mdui-panel-item-body">
            <ul class="mdui-list" style="list-style:none;margin:0;padding:0;">
              <li><b>{{ $t('bllock') }} ：</b>{{ $t('unlock') }},
                <a href="https://www.miui.com/unlock/download.html" v-if="locale == 'zh-cn'" rel="noopener noreferrer">{{ $t('applyurl') }}</a>
                <a href="https://play.google.com/store/apps/details?id=com.mi.global.bbs" v-else rel="noopener noreferrer">{{ $t('applyurl') }}</a>
              </li><br />
              <template v-for="attention in device.attentions" :key="attention[locale]">
                <li v-if="attention[locale] != ''">{{ attention[locale] }}</li>
                <br v-if="attention[locale] != ''" />
              </template>
              <li><b>{{ $t('vernote') }} ：</b>{{ $t('vermess') }}</li><br />
              <li><b class="mdui-text-color-red">{{ $t('dutyfree') }} : </b>{{ $t('notice') }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div mdui-panel="{accordion: true}" class="mdui-panel" v-for="branch in device.branches" v-show="branch.show == 1" :key="branch[locale]">
        <div class="mdui-panel-item">
          <div class="mdui-panel-item-header" role="button" tabindex="0" v-panel-header>
            <div class="mdui-panel-item-title branch-title" role="heading" aria-level="2">{{ branch[locale] }}</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons" aria-hidden="true">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="mdui-table-fluid mdui-shadow-0">
              <table class="mdui-table mdui-shadow-0">
                <caption class="sr-only">{{ branch[locale] }} {{ $t('download') }}</caption>
                <thead>
                  <tr>
                    <th scope="col" class="mdui-text-center">{{ $t('numeric') }}</th>
                    <th scope="col" class="mdui-text-center" v-show="branch.branch == 'msap'">{{ $t('version') }}</th>
                    <th scope="col" class="mdui-text-center" v-show="branch.branch != 'msap'">{{ $t('miui') }}</th>
                    <th scope="col" class="mdui-text-center">{{ $t('android') }}</th>
                    <th scope="col" class="mdui-text-center">{{ $t('release') || '发布时间' }}</th>
                    <th scope="col">{{ $t('recovery') }}</th>
                    <th scope="col">{{ $t('fastboot') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, index) in branch.links" :key="data.miui + '-' + data.android">
                    <td class="mdui-text-center">{{ branch.links.length - index }}</td>
                    <td class="mdui-text-center">{{ data.miui }}</td>
                    <td class="mdui-text-center">{{ data.android }}</td>
                    <td class="mdui-text-center">{{ data.release || 'N/A' }}</td>
                    <td v-if="data.recovery == ''">{{ $t('na') }}</td>
                    <td v-else><a :href="buildDownloadLink(data.miui, data.recovery)">
                        <span>{{ $t('recovery') }}</span>
                      </a></td>
                    <td v-if="data.fastboot == ''">{{ $t('na') }}</td>
                    <td v-else><a :href="buildDownloadLink(data.miui, data.fastboot)">
                        <span>{{ $t('fastboot') }}</span>
                      </a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
    <br />
    <Disclaimer></Disclaimer>
    <Footer></Footer>
    <Analystics></Analystics>
    <NuxtMR></NuxtMR>
  </ClientOnly>
</template>

<script setup>
import { validateCodename, sanitizeString } from '~/utils/validation'
import { API_CONFIG } from '~/config/api'

const route = useRoute()
const { locale } = useI18n()
const { t } = useI18n()

const buildDownloadLink = (miui, filename) => {
  return `${API_CONFIG.EXTERNAL_URLS.OSS_BUCKET}/${miui}/${filename}`
}

const buildHyperOSLink = (codename) => {
  return `${API_CONFIG.EXTERNAL_URLS.HYPEROS_FANS}/${locale.value.slice(0, 2)}/devices/${codename}`
}

const buildDeviceApiLink = (api) => {
  return `${API_CONFIG.DATA_API_BASE}/${api}/devices/${device.value.codename}.json`
}

const codename = computed(() => {
  const param = route.params.codename
  if (Array.isArray(param)) {
    return param[0]
  }
  return param
})

const { data: device, error } = await useAsyncData(
  'device-' + codename.value,
  async () => {
    const sanitizedCodename = sanitizeString(codename.value)

    if (!validateCodename(sanitizedCodename)) {
      throw new Error(t('invalidDevice') || '无效的设备代号')
    }

    const data = await $fetch(`${API_CONFIG.BASE_URL}/devices/${sanitizedCodename}.json`)
    return data
  }
)

// API 返回的 ismiui 可能是数字 0/1，统一转成字符串再判断，避免 0 == '' 之类的宽松比较误判
const hyperosStatus = computed(() => {
  const status = String(device.value?.ismiui ?? '')
  if (status === '0') {
    return 'released'
  }
  if (status === '1') {
    return 'notyet'
  }
  return 'unsupported'
})

// v1 / v3 为所有机型的数据接口，仅支持 HyperOS 的机型额外提供 v2
const deviceApis = computed(() => {
  return hyperosStatus.value === 'released' ? ['v1', 'v2', 'v3'] : ['v1', 'v3']
})

useHead({
  title: computed(() => {
    if (device.value) {
      return `${device.value[locale.value]}(${device.value.codename}) ${t('download')} - ${t('site')}`
    }
    return `${t('site')}`
  })
})
</script>