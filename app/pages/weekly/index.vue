<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<main id="main-content" tabindex="-1">
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
				<div v-else-if="weeks" class="mdui-panel" v-for="bigver in weeks.versions" :key="bigver.version">
					<div class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title" role="heading" aria-level="2">{{ bigver.version }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<template v-for="week in bigver.weeks" :key="week">
								<div class="mdui-chip" v-if="parseInt(week) == parseInt(weeks.latest)">
									<a :href="'/' + locale + '/weekly/week-' + week + '-cn'">
										<span class="mdui-chip-icon"><i class="mdui-icon material-icons" aria-hidden="true">fiber_new</i></span>
										<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
								</div>
								<div class="mdui-chip" v-if="parseInt(week) >= parseInt(weeks.oldest)">
									<a :href="'/' + locale + '/weekly/week-' + week + '-cn'">
										<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
								</div>
								<div class="mdui-chip" v-if="parseInt(week) < parseInt(weeks.oldest)">
									<a :href="'https://old.miuier.com/weekly/logs/week-' + week + '-CN'" target="_blank" rel="noopener noreferrer">
										<span class="mdui-chip-title">{{ $t('num') }} {{ week }} {{ $t('week') }}</span></a>
								</div>
							</template>
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
import { API_CONFIG } from '~/config/api'

const { locale } = useI18n()
const { t } = useI18n()

const { data: weeks, error } = await useAsyncData(
	'weeks',
	() => $fetch(`${API_CONFIG.BASE_URL}/weekly.json`)
)

useHead({
	title: `${t('weekly')} - ${t('site')}`
})
</script>
