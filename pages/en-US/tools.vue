<template>
  <div>
    <EnPcNav />
    <br />
    <div class="mdui-container-fluid">
      <div mdui-panel="" class="mdui-panel mdui-panel-gapless mdui-shadow-0">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-red">MiFlash</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
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
        </div>
      </div>
      <div mdui-panel="" class="mdui-panel mdui-panel-gapless mdui-shadow-0">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-red">Mi PC Suite(English)</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div v-for="(data) in tools.mipcsuite" class="mdui-container-fluid" id="pcsuite">
              <p><b>Mi PC Suite Version：</b>{{ data.version }}</p>
              <p><b>Updated at：</b>{{ data.date }}</p>
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
        </div>
      </div>
      <div mdui-panel="" class="mdui-panel mdui-panel-gapless mdui-shadow-0">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-red">Mi PC Suite(Chinese)</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div v-for="(data) in tools.miassistant" class="mdui-container-fluid" id="miassistant">
              <p><b>Mi PC Suite Version：</b>{{ data.version }}</p>
              <p><b>Updated at：</b>{{ data.date }}</p>
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
        </div>
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
