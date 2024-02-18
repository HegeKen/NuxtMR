<template>
	<title>{{ $t('site') }} - roms.miuier.com</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
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
				<div class="mdui-panel-item mdui-panel-item-open">
          <div class="mdui-panel-item-header">
            <div class="mdui-panel-item-title mdui-text-color-orange">{{ $t('siteupdate') }}</div>
          </div>
          <div class="mdui-panel-item-body">
						<div><b>{{ $t('version') }}：</b>{{ sitelog.log[0].ver }}</div><br />
						<div><b>{{ $t('updatetime') }}：</b>{{ sitelog.log[0].sudate }}</div><br />
						<span v-if="sitelog.log[0][locale] !=''"><div><b>{{ $t('newdevices') }} ：</b>{{ sitelog.log[0][locale] }}</div><br /></span>
						<span v-else></span>
						<div v-show="sitelog.log[0].log.length > 0"><b>{{ $t('log') }} ：</b>
							<ol style="margin-left:-20px;">
								<li v-for="log in sitelog.log[0].log">{{ log[locale] }}</li>
							</ol>
						</div>

					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title">{{ $t('devupdates') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<div><b>{{ $t('updatetime') }} ：</b>{{ latest.update }}</div><br />
						<div><b>{{ $t('version') }} ：</b>{{ latest.versions }}</div><br />
						<div><b>{{ $t('log') }} ：</b>
							<NuxtLink :to="'/' + locale + '/weekly/week-' + weeks.latest + '-cn'" class="MRLinks">{{ latest[locale] }}</NuxtLink>
						</div><br />
						<div v-show="latest.devices.length > 0"><b>{{ $t('supported') }} ：</b>
							<span v-for="(data, index) in latest.devices">
								<span v-show="index != latest.devices.length - 1">{{ data[locale] }} ; </span>
								<span v-show="index == latest.devices.length - 1">{{ data[locale] }}</span>
							</span>
						</div>
					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open" v-show="home.stable.length > 0">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title">{{ $t('stableupdates') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<div><b>{{ $t('updatetime') }} ：</b>{{ home.date }}</div><br />
						<span v-if="locale == 'zh-cn'"><div><b>收录周期 ：</b>{{ home.year }}年第{{ home.week }}周({{ home.period }})</div><br /></span>
						<span v-else><div><b>Weekly Period ：</b>Week {{ home.week }} of Year {{ home.year }} ({{ home.period }})</div><br /></span>
						<div><b>{{ $t('updatetime') }}：</b></div>
						<ol style="margin-left:-15px;">
							<li v-for="rom in home.stable"><NuxtLink :to="'/'+locale+'/devices/'+rom.code">{{ rom[locale] }}({{ rom.code }})</NuxtLink>：{{ rom.rom }}</li>
						</ol>
					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title">{{ $t('supported') }}</div>
					</div>
					<div class="mdui-panel-item-body">	
						<div v-for="brand in devlist.brands">
							<ul v-for="series in brand.series" style="margin-left:-20px;">
								<li :id="series.series">{{ series[locale] }} ：
									<span v-for="(device,  index) in series.devices">
										<a :href="'/'+locale+'/devices/'+device.code">
											<span v-if="index < series.devices.length - 1 "> {{ device[locale] }} / </span>
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
		<Disclaimer></Disclaimer>
		<Footer></Footer>
		<NuxtMR></NuxtMR>
	</div>
</template>

<script setup>
const { locale } = useI18n()
const index = "https://data.miuier.com/data/index.json"
const devices = "https://data.miuier.com/data/devlist.json"
const site = "https://data.miuier.com/data/sitelog.json"
const weekly = "https://data.miuier.com/data/weekly.json"
const { data: home } = await useFetch(index)
const { data: devlist } = await useFetch(devices)
const { data: sitelog } = await useFetch(site)
const { data: weeks } = await useFetch(weekly)
const { data: latest } = await useFetch('https://data.miuier.com/data/weekly/week-' + weeks.value.latest + '-cn.json')
</script>
