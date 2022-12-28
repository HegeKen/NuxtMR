<template>
  <div>
    <div class="mdui-color-deep-orange-accent mdui-text-color-white">
      <div class="mdui-toolbar">
        <div><a href="javascript:;" class="mdui-btn mdui-btn-icon tri" mdui-drawer="{target:'#main-drawer', swipe: true}"><i class="mdui-icon material-icons">menu</i></a><span class="mdui-typo-title">MIUI Roms</span></div>
        <div class="mdui-toolbar-spacer"></div>
        <img src="/assets/logo/Logo-Str-White.png" title="SiteLogo" width="160px">
      </div>
      <div class="mdui-drawer mdui-drawer-left mdui-text-color-black-text" id="main-drawer">
        <ul class="mdui-list">
          <a href="/mobile/en-US/"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">home</i><div class="mdui-list-item-content">HomePage</div></li></a>
          <a href="/mobile/en-US/tutorial"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">adb</i><div class="mdui-list-item-content">Tutorial</div></li></a>
          <a href="https://old.miuier.com/weekly/"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">developer_mode</i><div class="mdui-list-item-content">Changelogs</div></li></a>
          <a href="/mobile/en-US/devices"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">devices</i><div class="mdui-list-item-content">Devices</div></li></a>
          <a href="https://recovery.miuier.com/recovery/"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">usb</i><div class="mdui-list-item-content">Recovery</div></li></a>
          <a href="https://old.miuier.com/tools"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">computer</i><div class="mdui-list-item-content">Tools</div></li></a>
          <a href="/mobile/en-US/thanks"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">favorites</i><div class="mdui-list-item-content">Deeply Thanking</div></li></a>
          <a href="/mobile/en-US/sitelog"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">update</i><div class="mdui-list-item-content">Site Log</div></li></a>
          <a href="/mobile/en-US/friendly"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">folder_special</i><div class="mdui-list-item-content">Friendly Links</div></li></a>
          <a href="/mobile/en-US/about"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon material-icons">perm_identity</i><div class="mdui-list-item-content">About US</div></li></a>
          <a :href="(zh)"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon icon-zh-cn fic"></i><div class="mdui-list-item-content">中文</div></li></a>
          <a :href="(en)"><li class="mdui-list-item"><i class="mdui-list-item-icon mdui-icon icon-en-us fic"></i><div class="mdui-list-item-content">English</div></li></a>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
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
