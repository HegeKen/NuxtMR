<template>
	<title>{{ $t('devices') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<br />
		<div class="mdui-container-fluid">
			<div class="mdui-panel mdui-panel-gapless" mdui-panel="{accordion: true}">
				<div v-for="brand in devices.brands" class="mdui-panel-item">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title" :class="[brand.brand]">{{ brand[locale] }}</div>
						<i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
					</div>
					<div class="mdui-panel-item-body" v-for="series in brand.series">
						{{ series[locale] }} ：
						<span v-for="device in series.devices">	
							<div class="mdui-chip">
							<a :href="'/'+locale+'/devices/'+device.code"><span class="mdui-chip-icon">{{ brand.brand[0] }}</span>
							<span class="mdui-chip-title">{{ device[locale] }}({{ device.code }})</span></a>
						</div>&nbsp;
					</span>
					</div>
				</div>
			</div>
		</div>
		<br />
		<Disclaimer></Disclaimer>
		<Footer></Footer>
		<NuxtMR></NuxtMR>
	</div>
</template>

<script setup>
const { locale } = useI18n();
const { data: devices } = await useFetch("https://data.miuier.com/data/devlist.json")
</script>