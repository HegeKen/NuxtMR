<template>
	<title>{{ $t('sitelog') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<br />
		<div class="mdui-container-fluid">
			<div class="mdui-panel mdui-panel-gapless">
				<div class="mdui-panel-item mdui-panel-item-open" v-for="sitelog in logs">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title mdui-text-color-orange">{{ $t('version') }} ：{{ sitelog.ver }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<div><b>{{ $t('updatetime') }} ：</b>{{ sitelog.sudate }}</div><br />
						<div v-if="sitelog[locale] != ''"><b>{{ $t('newdevices') }} ：</b>{{ sitelog[locale] }}</div><br />
						<div v-show="sitelog.log.length > 0"><b>{{ $t('log') }} ：</b>
							<ol style="margin-left:-20px;">
								<li v-for="log in sitelog.log">{{ log[locale] }}</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br />
		<Disclaimer></Disclaimer>
		<Footer></Footer>
  <Analystics></Analystics>
		<NuxtMR></NuxtMR>
	</div>
</template>

<script setup>
const { locale } = useI18n();
const site = await useFetch("https://data.miuier.com/data/sitelog.json")
const logs = site.data.value.log
</script>
