<template>
  <div>
    <CnPcNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-red">
            衷心感谢以下个人以及团队（排列不分先后）
          </div>
          <div class="mdui-panel-item-body">
            <p><a href="https://github.com/KHwang9883">Kevin Huang</a></p>
            <p><a href="https://github.com/mooseIre">moose</a></p>
            <p><a href="https://github.com/wzsx150">wzsx150</a></p>
            <p><a href="https://rom.52mail.cn/">rom.52mail.cn</a> 网站！</p>
            <p><a href="https://xiaomifirmwareupdater.com/">Xiaomi Firmware Updater </a> 网站！</p>
            <p><a href="https://web.archive.org/">Internet Web Archive </a> 网站！</p>
            <div>
              <ul>
                <li>阿飞（小米6）</li>
                <li>老猫(小米6)</li>
                <li>小笼包(小米6)</li>
                <li>博(小米6X)</li>
                <li>怒放集团（小米8屏幕指纹版）</li>
                <li>云雨子（小米8 SE）</li>
                <li>海力力(小米9)</li>
                <li>迷迷迷（小米9 Pro 5G）</li>
                <li>慕璃(小米Note3)</li>
                <li>旋律(红米Note5)</li>
                <li>纵容你（Redmi Note 8）</li>
                <li>小八（Redmi Note 8）</li>
              </ul>
            </div>
            <p>衷心感谢：原MIUI论坛所有维护机型历史包帖子的朋友！</p>
          </div>
        </div>
      </div>
    </div>

    <CnPcFooter />
  </div>
</template>

<script>
let baseurl = "https://data.miuier.com/data/";
let index = baseurl + "index.json";
let devices = baseurl + "devices.json"
export default {
  data() {
    return {
      site: [],
      devices: [],
      title: "衷心感谢 - MIUI官方ROM仓库"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: true,
  fetchKey: 'site-sidebar',
  fetchKey(getCounter) {
    return this.someOtherData + getCounter('sidebar')
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "zh-CN",
      }
    }
  }
}
</script>
