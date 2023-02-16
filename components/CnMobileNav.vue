<template>
  <div>
    <div class="mdui-color-deep-orange-accent mdui-text-color-white">
      <div class="mdui-toolbar">
        <div><a href="javascript:;" class="mdui-btn mdui-btn-icon tri" mdui-drawer="{target:'#main-drawer', swipe: true}" mdui-drawer-close><i class="mdui-icon material-icons">menu</i></a><span class="mdui-typo-title">MIUI官方ROM仓库</span></div>
        <div class="mdui-toolbar-spacer"></div>
        <img src="/assets/logo/Logo-Str-White.png" title="SiteLogo" width="150px">
      </div>
      <div class="mdui-drawer mdui-drawer-close mdui-drawer-left mdui-text-color-black-text" id="main-drawer">
        <ul class="mdui-list">
          <a href="/mobile/zh-CN/"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">home</i><div class="mdui-list-item-content">首页</div></li></a>
          <a href="/mobile/zh-CN/tutorial"><li class="mdui-list-item mdui-hidden"><i class="mdui-list-item-icon mdui-icon material-icons">adb</i><div class="mdui-list-item-content">刷机教程</div></li></a>
          <a href="/mobile/zh-CN/weekly/"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">developer_mode</i><div class="mdui-list-item-content">橙色星期五</div></li></a>
          <a href="/mobile/zh-CN/devices"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">devices</i><div class="mdui-list-item-content">机型列表</div></li></a>
          <a href="https://files.miuier.com/recovery/"><li class="mdui-list-item mdui-hidden"><i class="mdui-list-item-icon mdui-icon material-icons">usb</i><div class="mdui-list-item-content">Recovery</div></li></a>
          <a href="/mobile/zh-CN/tools"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">computer</i><div class="mdui-list-item-content">刷机工具</div></li></a>
          <a href="/mobile/zh-CN/thanks"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">favorites</i><div class="mdui-list-item-content">衷心感谢</div></li></a>
          <a href="/mobile/zh-CN/sitelog"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">update</i><div class="mdui-list-item-content">站点日志</div></li></a>
          <a href="/mobile/zh-CN/friendly"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">folder_special</i><div class="mdui-list-item-content">友情链接</div></li></a>
          <a href="/mobile/zh-CN/about"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">perm_identity</i><div class="mdui-list-item-content">关于本站</div></li></a>
          <a :href="(zh)"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon icon-zh-cn fic"></i><div class="mdui-list-item-content">中文</div></li></a>
          <a :href="(en)"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon icon-en-us fic"></i><div class="mdui-list-item-content">English</div></li></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let path="";
export default {
  data() {
    return {
      zh:"",
      en:""
    }
  },
  created() {
    path = this.$route.path;
    this.zh = path.replace(/en-US/, "zh-CN");
    this.en = path.replace(/zh-CN/, "en-US");
  }
}
</script>
