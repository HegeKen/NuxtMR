<template>
  <div>
    <EnPcNav />
    <br />
    <div class="mdui-tab" mdui-tab>
      <a href="#MiFlash" class="mdui-ripple mdui-text-capitalize tools mdui-text-color-black-text mdui-tab-active">MiFlash</a>
      <a href="#MiPCSuite" class="mdui-ripple mdui-text-capitalize tools mdui-text-color-black-text">Mi PC Suite(Mi Assistant)</a>
    </div>
    <div id="MiFlash" class="mdui-container-fluid">
      <br />
      <div v-for="(data) in tools.miflash">
        <p><b>MiFlash Version：</b>{{ data.version }}</p>
        <p><b>File Name：</b>{{ data.FileName }}</p>
        <p><b>Download Links：</b>
          <span v-if="data.url == '' && data.FileName == ''">N/A</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">Xiaomi Official</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiFlash/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">Xiaomi Official</a> | <a :href="('https://files.miuier.com/tools/MiFlash/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
        </p>
      </div>
    </div>
    <div id="MiPCSuite" class="mdui-container-fluid">
      <br />
      <div v-for="(data) in tools.mipcsuite" class="mdui-container-fluid" id="pcsuite">
        <p><b>PC Suite Version：</b>{{ data.version }}(English)</p>
        <p><b>Update：</b>{{ data.date }}</p>
        <p><b>File Name：</b>{{ data.FileName }}</p>
        <p><b>Download Links：</b>
          <span v-if="data.url == '' && data.FileName == ''">N/A</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">Xiaomi Official</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">Xiaomi Official</a> | <a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
        </p>
        <p v-show="data.showattentions == 'true'">
          <b>Notes：</b>
        <ol>
          <li v-for="(data) in data.attentions" v-show="data.En != ''">{{ data.En }}</li>
        </ol>
        </p>
        <p v-show="data.showlogs == 'true'">
          <b>Changelogs：</b>
        <ol>
          <li v-for="(data) in data.logs" v-show="data.En != ''">{{ data.En }}</li>
        </ol>
        </p>
      </div>
      <hr />
      <div v-for="(data) in tools.miassistant" class="mdui-container-fluid" id="miassistant">
        <p><b>PC Suite Version：</b>{{ data.version }}(Chinese)</p>
        <p><b>Update：</b>{{ data.date }}</p>
        <p><b>File Name：</b>{{ data.FileName }}</p>
        <p><b>Download Links：</b>
          <span v-if="data.url == '' && data.FileName == ''">N/A</span>
          <span v-else-if="data.url != '' && data.FileName == ''"><a :href="(data.url)">Xiaomi Official</a></span>
          <span v-else-if="data.url == '' && data.FileName != ''"><a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
          <span v-else-if="data.url != '' && data.FileName != ''"><a :href="(data.url)">Xiaomi Official</a> | <a :href="('https://files.miuier.com/tools/MiAssistant/' + data.FileName)" class="mdui-text-capitalize">MIUIROMS Files</a></span>
        </p>
        <p v-show="data.showattentions == 'true'">
          <b>Notes：</b>
        <ol>
          <li v-for="(data) in data.attentions" v-show="data.En != ''">{{ data.En }}</li>
        </ol>
        </p>
        <p v-show="data.showlogs == 'true'">
          <b>Changelogs：</b>
        <ol>
          <li v-for="(data) in data.logs" v-show="data.En != ''">{{ data.En }}</li>
        </ol>
        </p>
      </div>
    </div>
    <EnPcFooter />
  </div>
</template>
<script>
let url = "https://data.miuier.com/data/tools.json";
export default {
  data() {
    return {
      tools: [],
      title: "Flashing Tools - MIUI Official ROMs"
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
        lang: "en-US",
      }
    }
  }
}
</script>
