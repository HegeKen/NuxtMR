<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<div class="mdui-container-fluid">
				<div class="mdui-panel">
					<div v-if="error" class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title branch-title mdui-text-color-red">{{ $t('error') || '加载失败' }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<p>{{ error }}</p>
						</div>
					</div>
					<div v-else-if="thanks" class="mdui-panel-item mdui-panel-item-open" v-for="thank in thanks.thanks">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title branch-title">{{ thank.name[locale] }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<ol class="mdui-list">
								<li v-for="info in thank.info">
									<span>
										<span v-if="info.url == ''">
											<b>{{ info.to[locale] }}</b>
											<span v-show="info.platform[locale] != ''">({{ info.platform[locale] }})</span> :
											<span>{{ info.for[locale] }}</span>
											<br />
										</span>
										<span v-else><a :href="info.url"><b>{{ info.to[locale] }}</b></a> :
											<span>{{ info.for[locale] }}</span>
											<br /></span>
										<br />
									</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
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

const { data: thanks, error } = await useAsyncData(
	'thanks',
	() => $fetch(`${API_CONFIG.BASE_URL}/thanks.json`)
)

useHead({
	title: `${t('thanks')} - ${t('site')}`
})
</script>
