<template>
  <div>
    <EnMobileNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header mdui-text-color-red">
            With development of this site, we used partial data from folowwing persons and websites（ List Not in perticular order ）,I thank you all with the support.
          </div>
          <div class="mdui-panel-item-body">
            <p><a href="https://github.com/KHwang9883">Kevin Huang</a></p>
            <p><a href="https://github.com/mooseIre">moose</a></p>
            <p><a href="https://github.com/wzsx150">wzsx150</a></p>
            <p><a href="https://rom.52mail.cn/">rom.52mail.cn</a> Website</p>
            <p><a href="https://xiaomifirmwareupdater.com/">Xiaomi Firmware Updater </a> Website</p>
            <p><a href="https://web.archive.org/">Internet Web Archive </a> Website</p>
            <div>
              <ul>
                <li>阿飞（Mi 6）</li>
                <li>老猫(Mi 6)</li>
                <li>小笼包(Mi 6)</li>
                <li>博(Mi 6X)</li>
                <li>怒放集团（Mi 8 Pro）</li>
                <li>云雨子（Mi 8 SE）</li>
                <li>海力力(Mi 9)</li>
                <li>迷迷迷（Mi 9 Pro 5G）</li>
                <li>慕璃(Mi Note3)</li>
                <li>旋律(Redmi Note5)</li>
                <li>纵容你（Redmi Note 8）</li>
                <li>小八（Redmi Note 8）</li>
              </ul>
            </div>
            <p>And also, thanks to all former MiFan Collectors on MIUI Forum & Mi BBS & Mi Community.</p>
          </div>
        </div>
      </div>
    </div>

    <EnMobileFooter />
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
      title: "Deeply Thanking - MIUI Official ROMs"
    }
  },
  async fetch() {
    this.site = await fetch(index).then(res => res.json())
    this.devices = await fetch(devices).then(res => res.json())
  },
  fetchOnServer: true,
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: "en-US",
      }
    }
  }
}
</script>
