<template>
  <div>
    <div class="mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide mdui-color-deep-orange-accent mdui-text-color-white">
      <div class="mdui-toolbar">
        <span class="mdui-typo-title">MIUI官方ROM仓库</span>
        <div class="mdui-toolbar-spacer"></div>
        <img src="/assets/logo/Logo-Full-White.png" title="SiteLogo" width="170px">
        <a class="mdui-text-capitalize lang" mdui-menu="{target: '#lang'}"><label>Language：<i class="mdui-icon material-icons">translate</i></label></a>
        <ul class="mdui-menu mdui-text-center" id="lang">
          <li class="mdui-menu-item">
            <a :href="(zh)">中文&emsp;<i class="mdui-icon icon-zh-cn fic"></i></a>
          </li>
          <li class="mdui-menu-item">
            <a :href="(en)">English&emsp;<i class="mdui-icon icon-en-us fic"></i></a>
          </li>
        </ul>
      </div>
      <div class="mdui-tab mdui-tab-centered mdui-text-color-white main-tab">
        <a href="/zh-CN/" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">home</i><label>首页</label></a>
        <a href="/zh-CN/tutorial" class="mdui-ripple mdui-text-capitalize mdui-tab-active mdui-hidden"><i class="mdui-icon material-icons">adb</i><label>刷机教程</label></a>
        <a href="/zh-CN/weekly/" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">developer_mode</i><label>橙色星期五</label></a>
        <a href="/zh-CN/devices" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">devices</i><label>机型列表</label></a>
        <a href="https://files.miuier.com/recovery/" class="mdui-ripple mdui-text-capitalize mdui-tab-active mdui-hidden"><i class="mdui-icon material-icons">usb</i><label>Recovery</label></a>
        <a href="/zh-CN/tools" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">computer</i><label>刷机工具</label></a>
        <a href="/zh-CN/thanks" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">favorites</i><label>衷心感谢</label></a>
        <a href="/zh-CN/sitelog" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">update</i><label>站点日志</label></a>
        <a href="/zh-CN/friendly" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">folder_special</i><label>友情链接</label></a>
        <a href="/zh-CN/about" class="mdui-ripple mdui-text-capitalize mdui-tab-active"><i class="mdui-icon material-icons">perm_identity</i><label>关于本站</label></a>
      </div>
    </div><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
let path = "";
export default {
  data() {
    return {
      zh: "",
      en: ""
    }
  },
  created() {
    path = this.$route.path;
    this.zh = path.replace(/en-US/, "zh-CN");
    this.en = path.replace(/zh-CN/, "en-US");
  }
}
</script>
