<template>
  <div>
    <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide mdui-color-deep-orange-accent mdui-text-color-white">
      <div class="mdui-toolbar">
        <span class="mdui-typo-title">MIUI Official ROMS</span>
        <div class="mdui-toolbar-spacer"></div>
        <img src="/assets/logo/Logo-Full-White.png" title="SiteLogo" width="170px">
        <a class="mdui-text-capitalize lang" mdui-menu="{target: '#lang'}"><label>切换语言：<i class="mdui-icon material-icons">translate</i></label></a>
        <ul class="mdui-menu mdui-text-center" id="lang">
          <li class="mdui-menu-item">
            <a href="/zh-CN/" class="mdui-ripple">中文&emsp;<i class="mdui-icon icon-zh-cn fic"></i></a>
          </li>
          <li class="mdui-menu-item">
            <a href="/en-US/" class="mdui-ripple">English&emsp;<i class="mdui-icon icon-en-us fic"></i></a>
          </li>
        </ul>
      </div>
      <div class="mdui-tab mdui-tab-centered">
        <NuxtLink to="/en-US/" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">home</i><label>HomePage</label></NuxtLink>
        <NuxtLink to="/en-US/tutorial" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">adb</i><label>Tutorial</label></NuxtLink>
        <NuxtLink to="/en-US/weekly" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">developer_mode</i><label>Changelogs</label></NuxtLink>
        <a href="/en-US/devices" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">devices</i><label>Devices</label></a>
        <a href="/en-US/recovery" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">usb</i><label>Recovery</label></a>
        <a href="/en-US/tools" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">computer</i><label>Tools</label></a>
        <NuxtLink to="/en-US/thanks" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">favorites</i><label>Deeply Thanking</label></NuxtLink>
        <NuxtLink to="/en-US/sitelog" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">update</i><label>Site Logs</label></NuxtLink>
        <NuxtLink to="/en-US/friendly" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">folder_special</i><label>Friendly Links</label></NuxtLink>
        <NuxtLink to="/en-US/about" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">perm_identity</i><label>About US</label></NuxtLink>
      </div>
    </div><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
