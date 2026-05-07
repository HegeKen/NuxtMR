<script setup>
import { API_CONFIG } from '~/config/api'

onMounted(() => {
  if (process.client && typeof window !== 'undefined') {
    const head = document.head || document.getElementsByTagName('head')[0];

    const baiduScript = document.createElement('script');
    baiduScript.async = true;
    baiduScript.src = `https://hm.baidu.com/hm.js?${API_CONFIG.ANALYTICS.BAIDU.ID}`;
    head.appendChild(baiduScript);

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${API_CONFIG.ANALYTICS.GOOGLE_ANALYTICS.ID}`;
    head.appendChild(gtagScript);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${API_CONFIG.ANALYTICS.GOOGLE_ANALYTICS.ID}');
    `;
    head.appendChild(inlineScript);

    setTimeout(() => {
      window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
      const clarityScript = document.createElement('script');
      clarityScript.async = true;
      clarityScript.defer = true;
      clarityScript.src = `https://www.clarity.ms/tag/${API_CONFIG.ANALYTICS.CLARITY.ID}?ref=bwt`;
      document.body.appendChild(clarityScript);
    }, 2000);
  }
})
</script>
<template>
  <div style="display: none;"></div>
</template>