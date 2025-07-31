<template>
	<title>{{ $t('thanks') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open" v-for="thank in thanks.thanks">
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
</template>

<script setup>
const { locale } = useI18n();
const { data: thanks } = await useFetch("https://data.miuier.com/data/thanks.json")
</script>
