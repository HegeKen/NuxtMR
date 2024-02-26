<template>
	<title>{{ $t('tools') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
			<div class="mdui-panel mdui-container-fluid">
				<div class="mdui-panel-item mdui-panel-item-open" mdui-panel="{accordion: true}" v-for="tool in tools.tools">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ tool[locale] }}</div>
						<i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
					</div>
					<div class="mdui-panel-item-body">
						<div v-for="packs in tool.packages">
							<div><b>{{ $t('version') }} :</b> {{ packs.version }}</div><br />
							<div><b>{{ $t('updatetime') }} :</b> {{ packs.date }}</div><br />
							<span v-show="packs.FileName != ''">
								<div><b>{{ $t('filename') }} :</b> {{ packs.FileName }}</div><br />
							</span>
							
							<span v-show="packs.url != ''">
								<div><b>{{ $t('dllink') }} :</b> <a :href="packs.url">{{ packs.FileName }}</a></div><br />
							</span>
							<span v-show="packs.attentions.length != 0">
								<div><b>{{ $t('attentions') }} : </b>
									<ol style="margin-left:-20px;">
										<li v-for="attention in packs.attentions">{{ attention[locale] }}</li>
									</ol>
								</div>
							</span>
							<span v-show="packs.logs.length != 0">
								<div><b>{{ $t('log') }} : </b>
									<ol style="margin-left:-20px;">
										<li v-for="log in packs.logs">{{ log[locale] }}</li>
									</ol>
								</div>
							</span>
							<div class="mdui-typo">
								<hr />
							</div>
							<br />
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
const { data: tools } = await useFetch("https://data.miuier.com/data/tools.json")
</script>
