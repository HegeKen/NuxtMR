<template>
  <div>
  </div>
</template>
<script>
let baseurl = "https://data.miuier.com/data/weekly/week-";
let week_id = '';
let region = '';
let old_url = "https://old.miuier.com/weekly/logs/week-";
let reurl='';
export default {
  data() {
    return {
      week: [],
      week_id:'',
      reurl:''
    }
  },
  created() {
    week_id = this.$route.params.week.split("-")[1];
    region = this.$route.params.week.split("-")[2];
    reurl = old_url + week_id + "-" + region;

  },
  head() {
    return {
      title: "MIUI 第" + week_id + "周发布公告及更新日志 - MIUI官方ROM仓库",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta:[
        {
          'http-equiv':"refresh",
          content:"0;url= https://old.miuier.com/weekly/"
        }
      ]
    }
  }
}
</script>
