<template>
	<title>{{ $t('friendly') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ $t('friendly') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<span v-if="locale == 'zh-cn'">
							<p><a href="https://sj.biada.cn/">MIUI相关资源导航站</a></p>
							<p><a href="https://www.uotan.cn/">柚坛社区</a></p>
						</span>
						<span v-else>
							<p><a href="https://sj.biada.cn/">MIUI Related Sites</a></p>
							<p><a href="https://www.uotan.cn/">Outan Community</a></p>
						</span>

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
const { locale } = useI18n();
</script>
