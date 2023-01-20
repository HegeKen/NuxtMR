<template>
  <div>
    <CnMobileNav />
    <br />
    <div class="mdui-tab" mdui-tab>
      <a href="#MiFlash" class="mdui-ripple mdui-text-capitalize tools mdui-text-color-black-text mdui-tab-active">MiFlash</a>
      <a href="#MiPCSuite" class="mdui-ripple mdui-text-capitalize tools mdui-text-color-black-text">小米助手</a>
    </div>
    <div id="MiFlash" class="mdui-container-fluid">
      <br />
      <div v-for="(data) in tools.miflash">
        <p><b>MiFlash版本：</b>{{ data.version }}</p>
        <p><b>文件名称：</b>{{ data.FileName }}</p>
        <p><b>下载链接：</b>
          <span v-if="data.url == '' && data.FileName == ''">无该版本链接信息。</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">小米官方链接</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiFlash/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">小米官方链接</a> | <a :href="('https://files.miuier.com/tools/MiFlash/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>
        </p>
      </div>
    </div>
    <div id="MiPCSuite" class="mdui-container-fluid">
      <br />
      <div v-for="(data) in tools.miassistant" class="mdui-container-fluid" id="miassistant">
        <p><b>助手版本：</b>{{ data.version }}(中文版)</p>
        <p><b>更新日期：</b>{{ data.date }}</p>
        <p><b>文件名称：</b>{{ data.FileName }}</p>
        <p><b>下载链接：</b>
          <span v-if="data.url == '' && data.FileName == ''">无该版本链接信息。</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">小米官方链接</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">小米官方链接</a> | <a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>

        </p>
        <p v-show="data.showattentions == 'true'">
          <b>注意事项：</b>
        <ol>
          <li v-for="(data) in data.attentions" v-show="data.Cn != ''">{{ data.Cn }}</li>
        </ol>
        </p>
        <p v-show="data.showlogs == 'true'">
          <b>更新日志：</b>
        <ol>
          <li v-for="(data) in data.logs" v-show="data.Cn != ''">{{ data.Cn }}</li>
        </ol>
        </p>
      </div>
      <hr />
      <div v-for="(data) in tools.mipcsuite" class="mdui-container-fluid" id="pcsuite">
        <p><b>助手版本：</b>{{ data.version }}(English)</p>
        <p><b>更新日期：</b>{{ data.date }}</p>
        <p><b>文件名称：</b>{{ data.FileName }}</p>
        <p><b>下载链接：</b>
          <span v-if="data.url == '' && data.FileName == ''">无该版本链接信息。</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">小米官方链接</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">小米官方链接</a> | <a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS网盘链接</a></span>
        </p>
        <p v-show="data.showattentions == 'true'">
          <b>注意事项：</b>
        <ol>
          <li v-for="(data) in data.attentions" v-show="data.Cn != ''">{{ data.Cn }}</li>
        </ol>
        </p>
        <p v-show="data.showlogs == 'true'">
          <b>更新日志：</b>
        <ol>
          <li v-for="(data) in data.logs" v-show="data.Cn != ''">{{ data.Cn }}</li>
        </ol>
        </p>
      </div>
    </div>
    <CnMobileFooter />
  </div>
</template>
<script>
let url = "https://data.miuier.com/data/tools.json";
export default {
  data() {
    return {
      tools: [],
      title: "刷机工具 - MIUI官方ROM仓库"
    }
  },
  async fetch() {
    this.tools = await fetch(url).then(res => res.json())
  },
  fetchOnServer: true,
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
