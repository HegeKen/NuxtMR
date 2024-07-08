<template>
  <!-- <div v-if="$device.isDesktopOrTablet" class="mdui-bottom-nav mdui-color-white">
    <a href="https://github.com/HegeKen" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon icon-GitHub MRIcons"></i><label>GitHub</label></a>
    <a href="https://gitlab.com/HegeKen" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon icon-gitlab MRIcons"></i><label>GitLab</label></a>
    <a href="https://weibo.com/Heliljan" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon icon-weibo MRIcons"></i><label>{{ $t('weibo') }}</label></a>
    <a v-if="locale == 'zh-cn'" href="https://web.vip.miui.com/page/info/mio/mio/homePage?uid=311975809" class="mdui-ripple mdui-bottom-nav-active">
      <i class="mdui-icon icon-MiBBS MRIcons"></i><label>{{ $t('micom') }}</label></a>
    <a v-else href="https://new.c.mi.com/global/user/5692555c0d0409658cac04821b801e55/" class="mdui-ripple mdui-bottom-nav-active">
      <i class="mdui-icon icon-MiCommunity MRIcons"></i><label>{{ $t('micom') }}</label></a>
    <a href="https://space.bilibili.com/19940729" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon icon-bilibili MRIcons"></i><label>{{ $t('bilibili') }}</label></a>
    <a href="#top" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">arrow_upward</i><label>{{ $t('totop') }}</label></a>
  </div>
  <div v-else class="mdui-bottom-nav mdui-color-white">
    <a :href="'/' + locale" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">home</i><label class="mdui-text-capitalize">{{ $t('home') }}</label></a>
    <a :href="'/' + locale + '/weekly'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">developer_mode</i><label class="mdui-text-capitalize">{{ $t('dev') }}</label></a>
    <a :href="'/' + locale + '/devices'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">devices</i><label class="mdui-text-capitalize">{{ $t('devices') }}</label></a>
    <a :href="'/' + locale + '/tools'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">laptop_windows</i><label class="mdui-text-capitalize">{{ $t('tools') }}</label></a>
    <a href="#top" class="mdui-bottom-nav-active"><i class="mdui-icon material-icons">arrow_upward</i><label>返回顶部</label></a>
  </div> -->
  <div class="mdui-bottom-nav mdui-color-white">
    <a :href="'/' + locale" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">home</i><label class="mdui-text-capitalize">{{ $t('home') }}</label></a>
    <a :href="'/' + locale + '/weekly'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">developer_mode</i><label class="mdui-text-capitalize">{{ $t('dev') }}</label></a>
    <a :href="'/' + locale + '/devices'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">devices</i><label class="mdui-text-capitalize">{{ $t('devices') }}</label></a>
    <a :href="'/' + locale + '/tools'" class="mdui-ripple mdui-bottom-nav-active"><i class="mdui-icon material-icons">laptop_windows</i><label class="mdui-text-capitalize">{{ $t('tools') }}</label></a>
    <a href="#top" class="mdui-bottom-nav-active"><i class="mdui-icon material-icons">arrow_upward</i><label>返回顶部</label></a>
  </div>
</template>
<script setup>
const { locale } = useI18n();
</script>