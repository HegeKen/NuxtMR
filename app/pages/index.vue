<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<main id="main-content" tabindex="-1">
				<div class="mdui-container-fluid">
					<div class="mdui-panel">
						<a href="https://hub.miuier.com">
							<div class="mdui-panel-item mdui-panel-item-open">
								<div class="mdui-panel-item-header">
									<div class="mdui-panel-item-title" role="heading" aria-level="2">{{ $t('hubbeta') }}</div>
								</div>
								<div class="mdui-panel-item-body">
									{{ $t('hubbetadesc') }}
								</div>
							</div>
						</a>
						<div class="mdui-panel-item mdui-panel-item-open HOSPanel">
							<div class="mdui-panel-item-header">
								<div class="mdui-panel-item-title HOS" role="heading" aria-level="2">
									<a href="https://hyperos.fans">{{ $t('new') }}<span class="HyperBlue">{{ $t('start') }}</span></a>
								</div>
							</div>
							<div class="mdui-panel-item-body HOS">
								<div style="font-size: 30px;font-weight: bold;"><a href="https://hyperos.fans"><span class="mdui-text-color-black">Xiaomi Hyper</span><span class="HyperBlue">OS</span></a></div><br />
								<div style="font-size: 20px;font-weight: bold;"><a href="https://hyperos.fans"><span class="mdui-text-color-black">小 米 澎 湃 </span><span class="HyperBlue">O S</span></a></div><br />
								<div style="font-size: 20px;"><a href="https://hyperos.fans">{{ $t('mihyper') }}<span class="HyperBlue">OS</span>{{ $t('gethyper') }}</a></div>
							</div>
						</div>
						<div v-if="sitelog" class="mdui-panel-item mdui-panel-item-open">
							<div class="mdui-panel-item-header">
								<div class="mdui-panel-item-title mdui-text-color-orange" role="heading" aria-level="2">{{ $t('siteupdate') }}</div>
							</div>
							<div class="mdui-panel-item-body">
								<div><b>{{ $t('version') }}：</b>{{ sitelog.log[0].ver }}</div><br />
								<div><b>{{ $t('updatetime') }}：</b>{{ sitelog.log[0].sudate }}</div><br />
								<span v-if="sitelog.log[0][locale] != ''">
									<div><b>{{ $t('newdevices') }} ：</b>{{ sitelog.log[0][locale] }}</div><br />
								</span>
								<span v-else></span>
								<div v-show="sitelog.log[0].log.length > 0"><b>{{ $t('log') }} ：</b>
									<ol style="margin-left:-20px;">
										<li v-for="log in sitelog.log[0].log" :key="log[locale]">{{ log[locale] }}</li>
									</ol>
								</div>
							</div>
						</div>
						<div v-if="home && home.stable.length > 0" class="mdui-panel-item mdui-panel-item-open">
							<div class="mdui-panel-item-header">
								<div class="mdui-panel-item-title" role="heading" aria-level="2">{{ $t('stableupdates') }}</div>
							</div>
							<div class="mdui-panel-item-body">
								<div><b>{{ $t('updatetime') }} ：</b>{{ home.date }}</div><br />
								<div><b>{{ $t('buildtime') }} ：</b>{{ formattedBuildTime }}</div><br />
								<span v-if="locale == 'zh-cn'">
									<div><b>收录周期 ：</b>{{ home.year }}年第{{ home.week }}周({{ home.period }})</div><br />
								</span>
								<span v-else>
									<div><b>Weekly Period ：</b>Week {{ home.week }} of Year {{ home.year }} ({{ home.period }})</div><br />
								</span>
								<div><b>{{ $t('updatetime') }}：</b></div>
								<ol style="margin-left:-15px;">
									<li v-for="rom in home.stable" :key="rom.code"><a :href="'/' + locale + '/devices/' + rom.code">{{ rom[locale] }}({{ rom.code }})</a>：{{ rom.rom }}</li>
								</ol>
							</div>
						</div>
						<div v-if="devlist" class="mdui-panel-item mdui-panel-item-open">
							<div class="mdui-panel-item-header">
								<div class="mdui-panel-item-title" role="heading" aria-level="2">{{ $t('supported') }}</div>
							</div>
							<div class="mdui-panel-item-body">
								<div v-for="brand in devlist.brands" :key="brand.brand">
									<ul v-for="series in brand.series" :key="series.series" style="margin-left:-20px;">
										<li :id="series.series">{{ series[locale] }} ：
											<span v-for="(device, index) in series.devices" :key="device.code">
												<a :href="'/' + locale + '/devices/' + device.code">
													<span v-if="index < series.devices.length - 1"> {{ device[locale] }} / </span>
													<span v-else>{{ device[locale] }}</span>
												</a>
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Disclaimer></Disclaimer>
			<Footer></Footer>
			<Analystics></Analystics>
			<NuxtMR></NuxtMR>
		</div>
	</ClientOnly>
</template>

<script setup>
definePageMeta({
	ssr: false
})

import { API_CONFIG } from '~/config/api'

const { locale } = useI18n()
const { t } = useI18n()

const formattedBuildTime = computed(() => {
	const buildDate = new Date(__BUILD_TIME__)
	const year = buildDate.getFullYear()
	const month = String(buildDate.getMonth() + 1).padStart(2, '0')
	const day = String(buildDate.getDate()).padStart(2, '0')
	const hours = String(buildDate.getHours()).padStart(2, '0')
	const minutes = String(buildDate.getMinutes()).padStart(2, '0')
	const seconds = String(buildDate.getSeconds()).padStart(2, '0')
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
})

const { data: home, error: homeError } = await useAsyncData(
	'home',
	() => $fetch(`${API_CONFIG.BASE_URL}/index.json`)
)

const { data: devlist, error: devlistError } = await useAsyncData(
	'devlist',
	() => $fetch(`${API_CONFIG.BASE_URL}/devlist.json`)
)

const { data: sitelog, error: sitelogError } = await useAsyncData(
	'sitelog',
	() => $fetch(`${API_CONFIG.BASE_URL}/sitelog.json`)
)

useHead({
	title: `${t('site')} - roms.miuier.com`
})
</script>

<style scoped>
.hub-banner {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding-bottom: 12px;
	margin-bottom: 16px;
	border-bottom: 1px solid #ddd;
}

.hub-banner__title {
	font-size: 22px;
	font-weight: bold;
	color: #ff6900 !important;
	text-decoration: none !important;
}

.hub-banner__desc {
	font-size: 15px;
	color: #2655ff !important;
	text-decoration: none !important;
}

.hub-banner__title:hover,
.hub-banner__desc:hover {
	opacity: 0.8;
}
</style>
