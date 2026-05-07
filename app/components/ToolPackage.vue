<template>
	<div>
		<div><b>{{ translations.version }} :</b> {{ packageData.version }}</div><br />
		<div><b>{{ translations.updatetime }} :</b> {{ packageData.date }}</div><br />
		<div v-if="packageData.FileName"><b>{{ translations.filename }} :</b> {{ packageData.FileName }}</div><br v-if="packageData.FileName" />
		<div v-if="packageData.url"><b>{{ translations.dllink }} :</b> <a :href="packageData.url">{{ packageData.FileName }}</a></div><br v-if="packageData.url" />

		<template v-if="packageData.attentions && packageData.attentions.length">
			<b>{{ translations.attentions }} : </b>
			<ol style="margin-left:-20px;">
				<li v-for="(attention, i) in packageData.attentions" :key="i">{{ attention[locale] }}</li>
			</ol>
		</template>

		<template v-if="packageData.logs && packageData.logs.length">
			<b>{{ translations.log }} : </b>
			<ol style="margin-left:-20px;">
				<li v-for="(log, i) in packageData.logs" :key="i">{{ log[locale] }}</li>
			</ol>
		</template>

		<div class="mdui-typo">
			<hr />
		</div>
		<br />
	</div>
</template>

<script setup>
defineProps({
	packageData: {
		type: Object,
		required: true
	},
	locale: {
		type: String,
		required: true
	},
	translations: {
		type: Object,
		required: true
	}
})
</script>