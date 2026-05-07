<template>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<ClientOnly>
				<div class="mdui-panel">
					<div class="mdui-panel-item mdui-panel-item-open HOSPanel">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title HOS">
								<a href="https://hyperos.fans">{{ $t('new') }}<span class="HyperBlue">{{ $t('start') }}</span></a>
							</div>
						</div>
						<div class="mdui-panel-item-body HOS">
							<div style="font-size: 30px;font-weight: bold;"><a href="https://hyperos.fans">Xiaomi Hyper<span class="HyperBlue">OS</span></a></div><br />
							<div style="font-size: 20px;font-weight: bold;"><a href="https://hyperos.fans">小 米 澎 湃 <span class="HyperBlue">O S</span></a></div><br />
							<div style="font-size: 20px;"><a href="https://hyperos.fans">{{ $t('mihyper') }}<span class="HyperBlue">OS</span>{{ $t('gethyper') }}</a></div>
						</div>
					</div>
					<div v-if="sitelog" class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title mdui-text-color-orange">{{ $t('siteupdate') }}</div>
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
									<li v-for="log in sitelog.log[0].log">{{ log[locale] }}</li>
								</ol>
							</div>
						</div>
					</div>
					<div v-if="home && home.stable.length > 0" class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title">{{ $t('stableupdates') }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<div><b>{{ $t('updatetime') }} ：</b>{{ home.date }}</div><br />
							<span v-if="locale == 'zh-cn'">
								<div><b>收录周期 ：</b>{{ home.year }}年第{{ home.week }}周({{ home.period }})</div><br />
							</span>
							<span v-else>
								<div><b>Weekly Period ：</b>Week {{ home.week }} of Year {{ home.year }} ({{ home.period }})</div><br />
							</span>
							<div><b>{{ $t('updatetime') }}：</b></div>
							<ol style="margin-left:-15px;">
								<li v-for="rom in home.stable"><a :href="'/' + locale + '/devices/' + rom.code">{{ rom[locale] }}({{ rom.code }})</a>：{{ rom.rom }}</li>
							</ol>
						</div>
					</div>
					<div v-if="devlist" class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title">{{ $t('supported') }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<div v-for="brand in devlist.brands">
								<ul v-for="series in brand.series" style="margin-left:-20px;">
									<li :id="series.series">{{ series[locale] }} ：
										<span v-for="(device, index) in series.devices">
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
			</ClientOnly>
		</div>
		<Disclaimer></Disclaimer>
		<Footer></Footer>
		<Analystics></Analystics>
		<NuxtMR></NuxtMR>
	</div>
</template>

<script setup>
definePageMeta({
	ssr: false
})

import { API_CONFIG } from '~/config/api'

const { locale } = useI18n()
const { t } = useI18n()

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
