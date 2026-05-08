<template>
  <div id="top">
    <div v-if="isMobile">
      <div class="mdui-color-deep-orange-accent mdui-text-color-white mdui-appbar mdui-appbar-fixed">
        <div class="mdui-toolbar">
          <a href="javascript:;">
            <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-yellow" mdui-drawer="{target: '#main-drawer', swipe: true}" mdui-drawer-close>
              <i class="mdui-icon material-icons">menu</i>
            </span>
          </a>
          <span class="mdui-typo-title">{{ $t('site') }}</span>
          <div class="mdui-toolbar-spacer"></div>
          <img src="https://roms.miuier.com/images/logo/Logo-Str-White.png" title="SiteLogo" width="160px">
        </div>
      </div>
      <div class="mdui-drawer mdui-drawer-close mdui-text-color-black-text" id="main-drawer">
        <div class="mdui-color-deep-orange-accent mdui-text-color-white">
          <div class="mdui-toolbar">
            <a href="javascript:;" mdui-drawer-close>
              <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-yellow">
                <i class="mdui-icon material-icons">arrow_back</i>
              </span>
            </a>
            <span class="mdui-typo-title">{{ $t('site') }}</span>
          </div>
        </div>
        <ul class="mdui-list" mdui-collapse="{accordion: false}">
          <a :href="'/' + locale">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">home</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('home') }}</div>
            </li>
          </a>
          <a href="/search.html">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">search</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('search') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/weekly'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">developer_mode</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('dev') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/devices'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">devices</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('devices') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/tools'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">laptop_windows</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('tools') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/thanks'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">favorite_border</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('thanks') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/sitelog'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">update</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('sitelog') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/friendly'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">link</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('friendly') }}</div>
            </li>
          </a>
          <a :href="'/' + locale + '/about'">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">perm_identity</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ $t('about') }}</div>
            </li>
          </a>
          <li class="mdui-list-item" @click="toggleDarkMode"><i class="mdui-list-item-icon mdui-icon material-icons">{{ isDark ? 'brightness_5' : 'brightness_3' }}</i>
            <div class="mdui-list-item-content">{{ isDark ? $t('lightMode') : $t('darkMode') }}</div>
          </li>
          <a v-for="loc in availableLocales" :key="loc.code" :href="switchLocalePath(loc.code)">
            <li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">&#xe8e2;</i>
              <div class="mdui-list-item-content mdui-text-capitalize">{{ loc.name }}</div>
            </li>
          </a>
        </ul>
      </div>
      <br /><br /><br />
    </div>
    <div v-else>
      <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide mdui-color-deep-orange-accent mdui-text-color-white mdui-shadow-0">
        <div class="mdui-toolbar">
          <span class="mdui-typo-title">{{ $t('site') }}</span>
          <div class="mdui-toolbar-spacer"></div>
          <img src="https://roms.miuier.com/images/logo/Logo-Full-White.png" title="SiteLogo" width="170px" />
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
        <div class="mdui-tab mdui-tab-centered mdui-text-color-white">
          <a :href="'/' + locale"><i class="mdui-icon material-icons">home</i><label class="mdui-text-capitalize">{{ $t('home') }}</label></a>
          <a href="/search.html"><i class="mdui-icon material-icons">search</i><label class="mdui-text-capitalize">{{ $t('search') }}</label></a>
          <a :href="'/' + locale + '/weekly'"><i class="mdui-icon material-icons">developer_mode</i><label class="mdui-text-capitalize">{{ $t('dev') }}</label></a>
          <a :href="'/' + locale + '/devices'"><i class="mdui-icon material-icons">devices</i><label class="mdui-text-capitalize">{{ $t('devices') }}</label></a>
          <a :href="'/' + locale + '/tools'"><i class="mdui-icon material-icons">laptop_windows</i><label class="mdui-text-capitalize">{{ $t('tools') }}</label></a>
          <a :href="'/' + locale + '/thanks'"><i class="mdui-icon material-icons">favorite_border</i><label class="mdui-text-capitalize">{{ $t('thanks') }}</label></a>
          <a :href="'/' + locale + '/sitelog'"><i class="mdui-icon material-icons">update</i><label class="mdui-text-capitalize">{{ $t('sitelog') }}</label></a>
          <a :href="'/' + locale + '/friendly'"><i class="mdui-icon material-icons">link</i><label class="mdui-text-capitalize">{{ $t('friendly') }}</label></a>
          <a :href="'/' + locale + '/about'"><i class="mdui-icon material-icons">perm_identity</i><label class="mdui-text-capitalize">{{ $t('about') }}</label></a>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>
<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
const isMobile = ref(false)
const isDark = ref(false)

onMounted(() => {
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  const savedMode = localStorage.getItem('dark-mode')
  if (savedMode === 'true') {
    isDark.value = true
    document.body.classList.add('mdui-theme-layout-dark')
  } else if (savedMode === 'false') {
    isDark.value = false
    document.body.classList.remove('mdui-theme-layout-dark')
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark.value) {
      document.body.classList.add('mdui-theme-layout-dark')
    }
  }
})

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.classList.add('mdui-theme-layout-dark')
    localStorage.setItem('dark-mode', 'true')
  } else {
    document.body.classList.remove('mdui-theme-layout-dark')
    localStorage.setItem('dark-mode', 'false')
  }
}
</script>
