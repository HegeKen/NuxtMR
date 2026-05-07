<template>
	<div>
		<Header></Header>
		<br />
		<div class="mdui-container-fluid">
			<div class="mdui-panel mdui-panel-gapless">
				<div v-if="error" class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title mdui-text-color-red">{{ $t('error') || '加载失败' }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<p>{{ error }}</p>
					</div>
				</div>
				<div v-else-if="logs" class="mdui-panel-item mdui-panel-item-open" v-for="sitelog in logs">
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
import { API_CONFIG } from '~/config/api'

const { locale } = useI18n()
const { t } = useI18n()

const { data: sitelogData, error } = await useAsyncData(
	'sitelog',
	() => $fetch(`${API_CONFIG.BASE_URL}/sitelog.json`)
)

const logs = computed(() => sitelogData.value?.log)

useHead({
	title: `${t('sitelog')} - ${t('site')}`
})
</script>
