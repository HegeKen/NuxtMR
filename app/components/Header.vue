<template>
  <header id="top">
    <!-- 跳转到主要内容（键盘用户 / 屏幕阅读器） -->
    <a href="#main-content" class="skip-link">{{ $t('skiptocontent') }}</a>

    <div v-if="isMobile">
      <div class="mdui-color-mi-orange-accent mdui-text-color-white mdui-appbar mdui-appbar-fixed">
        <div class="mdui-toolbar">
          <button
            type="button"
            class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-yellow"
            mdui-drawer="{target: '#main-drawer', swipe: true}"
            :aria-label="$t('openmenu')"
            aria-controls="main-drawer"
            :aria-expanded="menuOpen ? 'true' : 'false'"
          >
            <i class="mdui-icon material-icons" aria-hidden="true">menu</i>
          </button>
          <span class="mdui-typo-title" role="heading" aria-level="1">{{ $t('site') }}</span>
          <div class="mdui-toolbar-spacer"></div>
          <img src="https://roms.miuier.com/images/logo/Logo-Str-White.png" alt="" width="120px" />
        </div>
      </div>
      <div class="mdui-drawer mdui-drawer-close mdui-text-color-black-text" id="main-drawer">
        <div class="mdui-color-mi-orange-accent mdui-text-color-white">
          <div class="mdui-toolbar">
            <button
              type="button"
              class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-yellow"
              mdui-drawer-close
              :aria-label="$t('closemenu')"
            >
              <i class="mdui-icon material-icons" aria-hidden="true">arrow_back</i>
            </button>
            <span class="mdui-typo-title" role="heading" aria-level="2">{{ $t('site') }}</span>
          </div>
        </div>
        <nav :aria-label="$t('sitemenu')">
          <ul class="mdui-list" mdui-collapse="{accordion: false}">
            <li v-for="item in navItems" :key="item.path">
              <a
                :href="item.path"
                class="mdui-list-item"
                :aria-current="isCurrent(item.path) ? 'page' : undefined"
              >
                <i class="mdui-list-item-icon mdui-icon material-icons" aria-hidden="true">{{ item.icon }}</i>
                <span class="mdui-list-item-content mdui-text-capitalize">{{ $t(item.label) }}</span>
              </a>
            </li>
            <li
              class="mdui-list-item"
              role="button"
              tabindex="0"
              @click="toggleDarkMode"
              @keydown.enter.prevent="toggleDarkMode"
              @keydown.space.prevent="toggleDarkMode"
              :aria-pressed="isDark ? 'true' : 'false'"
            >
              <i class="mdui-list-item-icon mdui-icon material-icons" aria-hidden="true">{{ isDark ? 'brightness_5' : 'brightness_3' }}</i>
              <span class="mdui-list-item-content">{{ isDark ? $t('lightMode') : $t('darkMode') }}</span>
            </li>
            <li v-for="loc in availableLocales" :key="loc.code">
              <a :href="switchLocalePath(loc.code)" class="mdui-list-item" :aria-label="loc.name + ' (' + $t('langswitch') + ')'">
                <i class="mdui-list-item-icon mdui-icon material-icons" aria-hidden="true">&#xe8e2;</i>
                <span class="mdui-list-item-content mdui-text-capitalize">{{ loc.name }}</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br /><br /><br />
    </div>
    <div v-else>
      <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide mdui-color-mi-orange-accent mdui-text-color-white mdui-shadow-0">
        <div class="mdui-toolbar">
          <span class="mdui-typo-title" role="heading" aria-level="1">{{ $t('site') }}</span>
          <div class="mdui-toolbar-spacer"></div>
          <img src="https://roms.miuier.com/images/logo/Logo-Full-White.png" alt="" width="170px" />
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
        <nav :aria-label="$t('mainnav')" class="mdui-tab mdui-tab-centered mdui-text-color-white">
          <a
            v-for="item in navItems"
            :key="item.path"
            :href="item.path"
            :aria-current="isCurrent(item.path) ? 'page' : undefined"
          >
            <i class="mdui-icon material-icons" aria-hidden="true">{{ item.icon }}</i>
            <label class="mdui-text-capitalize">{{ $t(item.label) }}</label>
          </a>
        </nav>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </header>
</template>
<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
const { isMobile } = useDevice()
const { isDark, initDarkMode, toggleDarkMode } = useDarkMode()

const navItems = computed(() => {
  const base = '/' + locale.value
  return [
    { label: 'home', path: base, icon: 'home' },
    { label: 'search', path: '/search.html', icon: 'search' },
    { label: 'dev', path: base + '/weekly', icon: 'developer_mode' },
    { label: 'devices', path: base + '/devices', icon: 'devices' },
    { label: 'tools', path: base + '/tools', icon: 'laptop_windows' },
    { label: 'thanks', path: base + '/thanks', icon: 'favorite_border' },
    { label: 'sitelog', path: base + '/sitelog', icon: 'update' },
    { label: 'friendly', path: base + '/friendly', icon: 'link' },
    { label: 'about', path: base + '/about', icon: 'perm_identity' },
  ]
})

const isCurrent = (path) => {
  if (path === '/search.html') return false
  const current = route.path.replace(/\/+$/, '')
  const target = String(path).replace(/\/+$/, '')
  return current === target
}

const menuOpen = ref(false)

onMounted(() => {
  initDarkMode()
  if (import.meta.client) {
    const drawerEl = document.getElementById('main-drawer')
    if (drawerEl) {
      drawerEl.addEventListener('open.mdui.drawer', () => { menuOpen.value = true })
      drawerEl.addEventListener('close.mdui.drawer', () => { menuOpen.value = false })
    }
  }
})
</script>
