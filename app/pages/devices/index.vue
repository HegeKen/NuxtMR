<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<main id="main-content" tabindex="-1">
			<br />
			<div class="mdui-container-fluid">
				<div v-if="error" class="mdui-panel">
					<div class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title mdui-text-color-red" role="heading" aria-level="2">{{ $t('error') || '加载失败' }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<p>{{ error }}</p>
						</div>
					</div>
				</div>
				<div v-else-if="devices" class="mdui-panel mdui-panel-gapless" mdui-panel="{accordion: true}">
					<div v-for="brand in devices.brands" :key="brand.brand" class="mdui-panel-item">
						<div class="mdui-panel-item-header" role="button" tabindex="0" v-panel-header>
							<div :class="[brand.brand]" class="mdui-panel-item-title" role="heading" aria-level="2">{{ brand[locale] }}</div>
							<i class="mdui-panel-item-arrow mdui-icon material-icons" aria-hidden="true">keyboard_arrow_down</i>
						</div>
						<div class="mdui-panel-item-body" v-for="series in brand.series" :key="series.series">
							{{ series[locale] }} ：
							<template v-for="device in series.devices" :key="device.code">
								<div class="mdui-chip">
									<a :href="'/' + locale + '/devices/' + device.code"><span class="mdui-chip-icon" aria-hidden="true">{{ brand.brand[0] }}</span>
										<span class="mdui-chip-title">{{ device[locale] }}({{ device.code }})</span></a>
								</div>&nbsp;
							</template>
						</div>
					</div>
				</div>
			</div>
			<br />
			</main>
			<Disclaimer></Disclaimer>
			<Footer></Footer>
			<Analystics></Analystics>
			<NuxtMR></NuxtMR>
		</div>
	</ClientOnly>
</template>

<script setup>
import { API_CONFIG } from '~/config/api'

const { locale } = useI18n()
const { t } = useI18n()

const { data: devices, error } = await useAsyncData(
	'devices',
	() => $fetch(`${API_CONFIG.BASE_URL}/devlist.json`)
)

useHead({
	title: `${t('devices')} - ${t('site')}`
})
</script>