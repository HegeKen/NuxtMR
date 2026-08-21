<template>
  <footer :aria-label="$t('footernav')">
    <div v-if="isDesktop">
      <div class="mdui-bottom-nav mdui-color-theme">
        <a href="https://github.com/HegeKen" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer"><i class="mdui-icon icon-GitHub MRIcons" aria-hidden="true"></i><label>GitHub</label></a>
        <a href="https://gitlab.com/HegeKen" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer"><i class="mdui-icon icon-gitlab MRIcons" aria-hidden="true"></i><label>GitLab</label></a>
        <a href="https://weibo.com/Heliljan" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer"><i class="mdui-icon icon-weibo MRIcons" aria-hidden="true"></i><label>{{ $t('weibo') }}</label></a>
        <a v-if="locale == 'zh-cn'" href="https://web.vip.miui.com/page/info/mio/mio/homePage?uid=311975809" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer">
          <i class="mdui-icon icon-MiBBS MRIcons" aria-hidden="true"></i><label>{{ $t('micom') }}</label></a>
        <a v-else href="https://new.c.mi.com/global/user/5692555c0d0409658cac04821b801e55/" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer">
          <i class="mdui-icon icon-MiCommunity MRIcons" aria-hidden="true"></i><label>{{ $t('micom') }}</label></a>
        <a href="https://space.bilibili.com/19940729" class="mdui-ripple mdui-bottom-nav-active" rel="noopener noreferrer"><i class="mdui-icon icon-bilibili MRIcons" aria-hidden="true"></i><label>{{ $t('bilibili') }}</label></a>
        <a href="#top" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">arrow_upward</i><label>{{ $t('totop') }}</label></a>
      </div>
    </div>
    <div v-else>
      <div class="mdui-bottom-nav mdui-color-theme">
        <a :href="'/' + locale" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">home</i><label class="mdui-text-capitalize">{{ $t('home') }}</label></a>
        <a href="/search.html" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">search</i><label class="mdui-text-capitalize">{{ $t('search') }}</label></a>
        <a :href="'/' + locale + '/devices'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">devices</i><label class="mdui-text-capitalize">{{ $t('devices') }}</label></a>
        <a :href="'/' + locale + '/tools'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">laptop_windows</i><label class="mdui-text-capitalize">{{ $t('tools') }}</label></a>
        <a href="#top" class="mdui-bottom-nav-active"><i class="mdui-icon material-icons" aria-hidden="true">arrow_upward</i><label>{{ $t('totop') }}</label></a>
      </div>
    </div>
  </footer>
</template>
<script setup>
const { locale } = useI18n()
const { isDesktop, isMobile } = useDevice()

onMounted(() => {
  if (isMobile) {
    document.body.classList.add('mdui-bottom-nav-fixed')
  }
})

onUnmounted(() => {
  document.body.classList.remove('mdui-bottom-nav-fixed')
})
</script>
