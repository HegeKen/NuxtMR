<template>
		<title>{{ weekly[locale] }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ $t('devdetail') }}</div>
					</div>
					<div class="mdui-panel-item-body">
						<p><b>{{ $t('release') }} ：</b>{{ weekly.update }}</p>
						<p><b>{{ $t('version') }} ：</b>{{ weekly.versions }}</p>
						<p v-show="weekly.CnBBSID != ''"><b>{{ $t('mfc') }} ：</b><a :href="('https://www.miui.com/thread-' + weekly.CnBBSID + '-1-1.html')" target="_blank">{{ weekly[locale] }}</a></p>
						<p v-show="weekly.CnComID != ''"><b>{{ $t('mcc') }} ：</b><a :href="('https://www.xiaomi.cn/post/' + weekly.CnComID)" target="_blank">{{ weekly[locale] }}</a></p>
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
						<table class="mdui-table mdui-table-fluid mdui-shadow-0">
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
                      <td v-else><a :href="('https://cdnorg.d.miui.com/' + device.miui + '/' + device.recovery)">
                        <span v-if="$device.isDesktopOrTablet">{{ device.recovery }}</span>
                        <span v-else></span>
                      </a></td>
                      <td v-if="device.fastboot == ''">{{ $t('na') }}</td>
                      <td v-else><a :href="('https://cdnorg.d.miui.com/' + device.miui + '/' + device.fastboot)">
                        <span v-if="$device.isDesktopOrTablet">{{ device.fastboot }}</span>
                        <span v-else></span>
                      </a></td>
                    </tr>
                  </tbody>
                </table>
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
const route = useRoute();
const { locale } = useI18n();
const { data: weekly } = useFetch("https://data.miuier.com/data/weekly/week-" + route.params.week + "-cn.json")
</script>