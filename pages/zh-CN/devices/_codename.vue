<template>
  <div>
    <CnPcNav />
    <br />
    <div class="mdui-container-fluid">
      <div class="mdui-panel mdui-panel-gapless mdui-shadow-1" mdui-panel="">
        <div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">注意：</div>
          </div>
          <div class="mdui-panel-item-body">
            <div><b>机型名称：</b>{{ roms.cnname }}</div>
            <div><b>机型代号：</b>{{ roms.codename }}</div>
            <div><b>感谢网站：</b><a href="https://xiaomifirmwareupdater.com" class="milink">Xiaomi Firmware Updater</a></div>
            <div><b>手机解锁：</b>所有线刷都以解锁Bootloader为前提，并且解锁Bootloader时会清除数据，请提前做好备份工作，<a href="https://www.miui.com/unlock" class="milink">传送门</a></div>
            <div v-for="{ cn } in roms.attentions">{{ cn }}</div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div id="STABLE">
      <div v-for="{ cnname, show , links } in roms.branches" class="mdui-container-fluid" v-show="show==1">
      <div mdui-panel="" class="mdui-panel mdui-panel-gapless">
        <div class="mdui-panel-item">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title">{{ cnname }}</div>
            <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
          </div>
          <div class="mdui-panel-item-body">
            <div class="mdui-table-fluid">
              <table class="mdui-table">
                <thead>
                  <tr>
                    <th class="mdui-text-center">No.</th>
                    <th class="mdui-text-center">MIUI</th>
                    <th class="mdui-text-center">Android</th>
                    <th>卡刷包</th>
                    <th>线刷包</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data,index) in links">
                    <td class="mdui-text-center">{{links.length - index }}</td>
                    <td class="mdui-text-center">{{data.miui}}</td>
                    <td class="mdui-text-center">{{data.android}}</td>
                    <td v-if="data.recovery==''">未公布</td>
                    <td v-else><a :href="('https://bigota.d.miui.com/' + data.miui + '/' + data.recovery)">{{data.recovery}}</a></td>
                    <td v-if="data.fastboot==''">未公布</td>
                    <td v-else><a :href="('https://bigota.d.miui.com/' + data.miui + '/' + data.fastboot)">{{data.fastboot}}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


    <CnPcFooter />
  </div>

</template>

<script>
var codename = "";
var baseurl = "https://next.miuier.com/data/devices/";
var url = "";
var a = 0;
var list = [
  "mione_plus",
  "aries",
  "taurus",
  "wt93007",
  "pisces",
  "lcsh92_wet_xm_td",
  "lcsh92_wet_jb9",
  "mocha",
  "armani",
  "wt93807",
  "wt96007",
  "cancro",
  "dior",
  "gucci",
  "wt86047",
  "wt88047",
  "wt86047_pro",
  "wt88047_pro",
  "virgo",
  "virgo_lte_ct",
  "leo",
  "lte26007",
  "ferrari",
  "hermes",
  "libra",
  "hennessy",
  "kenzo",
  "latte",
  "ido_xhdpi",
  "aqua",
  "gemini",
  "kate",
  "hydrogen",
  "helium",
  "land",
  "omega",
  "nikel",
  "capricorn",
  "natrium",
  "lithium",
  "scorpio",
  "prada",
  "markw",
  "rolex",
  "mido",
  "santoni",
  "meri",
  "cappu",
  "sagit",
  "oxygen",
  "tiffany",
  "ugglite",
  "ugg",
  "tissot",
  "chiron",
  "jason",
  "riva",
  "rosy",
  "vince",
  "whyred",
  "polaris",
  "wayne",
  "ysl",
  "dipper",
  "sirius",
  "equuleus",
  "ursa",
  "cereus",
  "cactus",
  "sakura",
  "clover",
  "nitrogen",
  "jasmine",
  "daisy",
  "beryllium",
  "platina",
  "tulip",
  "perseus",
  "lotus",
  "violet",
  "lavender",
  "cepheus",
  "grus",
  "andromeda",
  "onclite",
  "tiare",
  "onc",
  "pine",
  "davinci",
  "raphael",
  "vela",
  "pyxis",
  "laurus",
  "laurel",
  "ginkgo",
  "begonia",
  "raphaels",
  "crux",
  "olive",
  "olivelite",
  "tucana",
  "willow",
  "phoenix",
  "picasso",
  "olivewood",
  "umi",
  "cmi",
  "excalibur",
  "lmi",
  "monet",
  "vangogh",
  "toco",
  "joyeuse",
  "picasso",
  "merlin",
  "atom",
  "bomb",
  "picasso_48m",
  "lancelot",
  "dandelion",
  "gram",
  "cezanne",
  "cas",
  "angelica",
  "angelican",
  "surya",
  "shiva",
  "apollo",
  "citrus",
  "lime",
  "cannon",
  "gauguin",
  "venus",
  "haydn",
  "alioth",
  "mojito",
  "sweet",
  "rosemary",
  "rosemary_p",
  "thyme",
  "vayu",
  "courbet",
  "star",
  "renoir",
  "cetus",
  "ares",
  "biloba",
  "camellia",
  "chopin",
  "lilac",
  "odin",
  "nabu",
  "elish",
  "enuma",
  "selene",
  "vili",
  "cattail",
  "mona",
  "curtana",
  "selenes",
  "evergo",
  "pissarro",
  "evergreen",
  "lisa",
  "cupid",
  "zeus",
  "psyche",
  "pissarroin",
  "spes",
  "spesn",
  "vida",
  "veux",
  "fleur",
  "ingres",
  "viva",
  "light",
  "munch",
  "rubens",
  "matisse",
  "fog",
  "opal",
  "zijin",
  "xaga",
  "frost",
  "daumier",
  "mayfly",
  "unicorn",
  "thor",
  "taoyao",
  "diting",
  "agate",
  "zizhan",
  "dagu",
  "rock",
  "ice",
  "ziyi",
  "plato",
  "sunstone",
  "ruby",
  "yunluo"
];
export default {
  data() {
    return {
      roms: [],
      branch: []
    }
  },
  created() {
    codename = this.$route.params.codename;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === codename) {
        a = 1;
      }
    }
    if (a == 0) {
      this.$router.replace('/zh-CN/404');
    }
    url = baseurl + codename + ".json";
  },
  async fetch() {
    this.roms = await fetch(url).then(res => res.json());
    this.branch = this.roms.branch;
  },
  fetchOnServer: true,
  fetchKey: 'site-sidebar',
  fetchKey(getCounter) {
    return this.someOtherData + getCounter('sidebar')
  },
  head() {
    return {
      title: this.roms.cnname + "(" + this.roms.codename + ") - MIUI官方ROM仓库",
      htmlAttrs: {
        lang: "zh-CN",
      }
    }
  }
}
</script>
