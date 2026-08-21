<template>
	<ClientOnly>
		<div>
			<Header></Header>
			<main id="main-content" tabindex="-1">
			<div class="mdui-container-fluid">
				<div class="mdui-panel">
					<div class="mdui-panel-item mdui-panel-item-open">
						<div class="mdui-panel-item-header">
							<div class="mdui-panel-item-title branch-title" role="heading" aria-level="2">{{ $t('friendly') }}</div>
						</div>
						<div class="mdui-panel-item-body">
							<span v-if="locale == 'zh-cn'">
								<p><a href="https://sj.biada.cn/" rel="noopener noreferrer">MIUI相关资源导航站</a></p>
								<p><a href="https://www.uotan.cn/" rel="noopener noreferrer">柚坛社区</a></p>
							</span>
							<span v-else>
								<p><a href="https://sj.biada.cn/" rel="noopener noreferrer">MIUI Related Sites</a></p>
								<p><a href="https://www.uotan.cn/" rel="noopener noreferrer">Outan Community</a></p>
							</span>

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
const { locale } = useI18n();
const { t } = useI18n()

useHead({
	title: `${t('friendly')} - ${t('site')}`
})
</script>
