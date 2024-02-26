<template>
	<title>{{ $t('weekly') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<div class="mdui-panel" v-for="bigver in weeks.versions">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title">{{ bigver.version }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<span v-for="week in bigver.weeks">	
							<div class="mdui-chip" v-if="parseInt(week) == parseInt(weeks.latest)">
							<a :href="'/'+locale+'/weekly/week-'+week+'-cn'">
								<span class="mdui-chip-icon"><i class="mdui-icon material-icons">fiber_new</i></span>
							<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
						</div>
						<div class="mdui-chip" v-if="parseInt(week) >= parseInt(weeks.oldest)">
							<a :href="'/'+locale+'/weekly/week-'+week+'-cn'">
							<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
						</div>
						<div class="mdui-chip" v-if="parseInt(week) < parseInt(weeks.oldest)">
							<a :href="'https://old.miuier.com/weekly/logs/week-'+week+'-cn'" target="_blank">
							<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
						</div>
					</span>
					</div>
				</div>
			</div>
		</div>
		<Disclaimer></Disclaimer>
		<Footer></Footer>
  <Analystics></Analystics>
		<NuxtMR></NuxtMR>
	</div>
</template>

<script setup>
const { locale } = useI18n();
const weekly = "https://data.miuier.com/data/weekly.json"
const { data: weeks } = await useFetch(weekly)
</script>
