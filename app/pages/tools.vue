<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<br />
			<div class="mdui-panel mdui-container-fluid" mdui-panel>
				<div v-if="error" class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title mdui-text-color-red">{{ $t('error') || '加载失败' }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<p>{{ error }}</p>
					</div>
				</div>
				<template v-else-if="tools">
					<div v-for="tool in tools.tools" :key="tool.id" class="mdui-panel-item">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title branch-title">{{ tool[locale] }}</div>
							<i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
						</div>
						<div class="mdui-panel-item-body">
							<template v-for="(packs, index) in tool.packages" :key="index">
								<div><b>{{ $t('version') }} :</b> {{ packs.version }}</div><br />
								<div><b>{{ $t('updatetime') }} :</b> {{ packs.date }}</div><br />
								<div v-if="packs.FileName"><b>{{ $t('filename') }} :</b> {{ packs.FileName }}</div><br v-if="packs.FileName" />
								<div v-if="packs.url"><b>{{ $t('dllink') }} :</b> <a :href="packs.url">{{ packs.FileName }}</a></div><br v-if="packs.url" />
								<template v-if="packs.attentions?.length">
									<b>{{ $t('attentions') }} : </b>
									<ol style="margin-left:-20px;">
										<li v-for="(attention, i) in packs.attentions" :key="i">{{ attention[locale] }}</li>
									</ol>
								</template>
								<template v-if="packs.logs?.length">
									<b>{{ $t('log') }} : </b>
									<ol style="margin-left:-20px;">
										<li v-for="(log, i) in packs.logs" :key="i">{{ log[locale] }}</li>
									</ol>
								</template>
								<div class="mdui-typo">
									<hr />
								</div><br />
							</template>
						</div>
					</div>
				</template>
			</div>
			<br />
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

const { data: tools, error } = await useAsyncData(
	'tools',
	() => $fetch(`${API_CONFIG.BASE_URL}/tools.json`)
)

const initMdui = () => {
	if (typeof mdui !== 'undefined' && tools.value) {
		nextTick(() => {
			mdui.mutation()
		})
	} else {
		setTimeout(initMdui, 100)
	}
}

onMounted(() => {
	initMdui()
})

useHead({
	title: `${t('tools')} - ${t('site')}`
})
</script>