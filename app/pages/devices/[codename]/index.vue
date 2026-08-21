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
                <span v-show="device.ismiui == '0'">
                  <a :href="buildHyperOSLink(device.codename)" class="HyperBlue">{{ $t('released') }}</a>
                </span>
                <span v-show="device.ismiui == '1'">{{ $t('notyet') }}</span>
                <span v-show="device.ismiui == ''">{{ $t('notsupported') }}</span>
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

useHead({
  title: computed(() => {
    if (device.value) {
      return `${device.value[locale.value]}(${device.value.codename}) ${t('download')} - ${t('site')}`
    }
    return `${t('site')}`
  })
})
</script>