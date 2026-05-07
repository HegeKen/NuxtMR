<template>
	<div>
		<Header></Header>
		<div v-if="error" class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title mdui-text-color-red">{{ $t('error') || '加载失败' }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<p>{{ error }}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="weekly" class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ $t('devdetail') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<p><b>{{ $t('release') }} ：</b>{{ weekly.update }}</p>
						<p><b>{{ $t('version') }} ：</b>{{ weekly.versions }}</p>
						<p v-show="weekly.CnBBSID != ''"><b>{{ $t('mfc') }} ：</b><a :href="buildMiuiThreadLink(weekly.CnBBSID)" target="_blank">{{ weekly[locale] }}</a></p>
						<p v-show="weekly.CnComID != ''"><b>{{ $t('mcc') }} ：</b><a :href="buildXiaomiPostLink(weekly.CnComID)" target="_blank">{{ weekly[locale] }}</a></p>
					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open" v-for="addon in weekly.addons">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">▍{{ addon[locale] }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<ol style="margin-left:-20px;">
							<li v-for="detail in addon.details">{{ detail[locale] }}</li>
						</ol>
					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open" v-for="logs in weekly.logs">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ logs[locale] }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<div v-for="log in logs.log">
							<b>{{ log[locale] }}</b><br />
							<ol class="mdui-list">
								<li v-for="change in log.changes">{{ change[locale] }}</li>
							</ol>
						</div>
					</div>
				</div>
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">▍{{ $t('package') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<div class="mdui-table-fluid mdui-shadow-0">
							<table class="mdui-table">
								<thead>
									<tr>
										<th class="mdui-text-center">{{ $t('device') }}</th>
										<th class="mdui-text-center">{{ $t('miui') }}</th>
										<th class="mdui-text-center">{{ $t('android') }}</th>
										<th>{{ $t('recovery') }}</th>
										<th>{{ $t('fastboot') }}</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="device in weekly.devices">
										<td class="mdui-text-center">{{ device[locale] }}({{ device.code }})</td>
										<td class="mdui-text-center">{{ device.miui }}</td>
										<td class="mdui-text-center">{{ device.android }}</td>
										<td v-if="device.recovery == ''">{{ $t('na') }}</td>
										<td v-else><a :href="buildDownloadLink(device.miui, device.recovery)">
												<span>{{ $t('recovery') }}</span>
											</a></td>
										<td v-if="device.fastboot == ''">{{ $t('na') }}</td>
										<td v-else><a :href="buildDownloadLink(device.miui, device.fastboot)">
												<span>{{ $t('fastboot') }}</span>
											</a></td>
									</tr>
								</tbody>
							</table>
						</div>
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
import { validateWeekNumber, sanitizeString } from '~/utils/validation'
import { API_CONFIG } from '~/config/api'

const route = useRoute()
const { locale } = useI18n()
const { t } = useI18n()

const buildDownloadLink = (miui, filename) => {
	return `${API_CONFIG.EXTERNAL_URLS.OSS_BUCKET}/${miui}/${filename}`
}

const buildMiuiThreadLink = (threadId) => {
	return `https://www.miui.com/thread-${threadId}-1-1.html`
}

const buildXiaomiPostLink = (postId) => {
	return `https://www.xiaomi.cn/post/${postId}`
}

const weekParam = computed(() => {
	const param = route.params.week
	if (Array.isArray(param)) {
		return param[0]
	}
	return param
})

const { data: weekly, error } = await useAsyncData(
	'weekly-' + weekParam.value,
	async () => {
		const sanitizedWeek = sanitizeString(weekParam.value)

		if (!validateWeekNumber(sanitizedWeek)) {
			throw new Error(t('invalidWeek') || '无效的周数')
		}

		const data = await $fetch(`${API_CONFIG.BASE_URL}/weekly/week-${sanitizedWeek}-cn.json`)
		return data
	}
)

useHead({
	title: computed(() => {
		if (weekly.value) {
			return `${weekly.value[locale.value]} - ${t('site')}`
		}
		return `${t('site')}`
	})
})
</script>