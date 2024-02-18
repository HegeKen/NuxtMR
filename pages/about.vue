<template>
	<title>{{ $t('about') }} - {{ $t('site') }}</title>
	<div>
		<Header></Header>
		<div class="mdui-container-fluid">
			<div class="mdui-panel">
				<div class="mdui-panel-item mdui-panel-item-open">
					<div class="mdui-panel-item-header">
						<div class="mdui-panel-item-title branch-title">{{ $t('about') }}</div>
					</div>
					<div class="mdui-panel-item-body mdui-typo">
						<span v-if="locale == 'zh-cn'">
							<p>大家好，我是<strong>海力力。</strong></p>
							<p>我本人之前在MIUI论坛时期长时间泡在论坛，那时论坛氛围是真的好，你可以肆意遨游在刷机的海洋里，刷机资源到处都是，也有完善的教程资源，还有解答组等在评论区解答用户的疑惑。</p>
							<p>这样下来，跟着论坛的教程学习、实践，逐步学会了一些刷机的知识，开始玩机之路。我最初的机器是Redmi Note 1 LTE(dior), 1+8 的版本，到手就刷了开发版玩，相对于我的第一台ZTE U793可以说是有质的提升，刷机资源丰富，可以说爽歪歪。</p>
							<p>此后逐步知晓了内测版、体验版的存在，经历了几次申请被拒的情况后终于通过，也借此开启了另一番冒险。</p>
							<p>当时也能很清楚的看到论坛每个机型的板块的置顶帖都会整理好机型相关内容稳定版、开发版等版本刷机包数据，特别方便。</p>
							<p>正如此前解答组的Slogan，“为了延续曾经被帮助的感动”, 我也想着是不是可以尝试为论坛和米粉们做点什么。说来也巧，看到了“荣誉开发组”的招募贴，在接到楠姐的私信通知时真的特激动，凭着这份激动，学习“荣组”相关工作细节和操作时格外认真，也是顺利的通过了考核，正式成为了“荣组”的一员</p>
							<p>我自己开始想着去做刷机包合集的契机，是我买了一台罪恶之源 - 小米6。仗着小米6的出色表现，我在论坛获得了额外的关注，也有不少朋友们信任我，在私信、评论区等地方向我提问，我与米粉朋友们同步学习进步，相处的相当融洽。后来我开始同时整理小米MIX 2S、小米9、Redmi K20系列的刷机包，这个时候开发版决定不再公开发布，论坛本身的下载站也不再更新了，我通过前期存储的数据和爬虫继续收集更新帖子，后来的发展也是可以遇见的，但是关停论坛，其实时出乎我本人的预料的。</p>
							<p>官方选择关停论坛，主要原因其实还是小米调整了公司发展战略，决定与小米社区合并，重新建立一套新的米粉社区。</p>
							<p>后来，我们这群“荣组”成员开始转到新社区成为圈主参与新社区建设，但是由于新社区对帖子管理更为严格<del>[怂]</del>，开发版更是不让直接放在帖子里，因此我决定建立一个站点去收集，在那里更新。这就是当前站点的来源。</p>
							<p>近期小米公司开始限制常规链接下的下载速度，当前也确实没有办法，也不知道能撑到什么时候了。感谢大家一直以来的支持，希望可以一直与大家一起在这里相遇。</p>
						</span>
						<span v-else>
							<p>Hi, I'm <strong>HegeKen</strong></p>
							<p>I personally spent a long time on the MIUI forum before, and the atmosphere was really good. You could freely explore things about ROMs andall, with flashing resources everywhere and complete tutorial resources. There were also answer groups in the comment section to answer users' questions.</p>
							<p>In this way, I followed the tutorials on the forum to learn and practice, gradually learning some knowledge about flashing machines, and began the journey of playing games. My initial phone was Redmi Note 1 LTE (dior), the 1+8 version, and I flashed the development version when I first got it. Compared to my first ZTE U793, it can be said that there is a qualitative improvement, and the resources for flashing are abundant, which can be said refreshing.</p>
							<p>Afterwards, I gradually became aware of the existence of the beta and alpha versions, and after experiencing several applications being rejected, I finally passed, which also opened up another adventure.</p>
							<p>At that time, it was also very clear to see that the top posts of each model section on the forum would organize the stable version, development version, and other version flashing package data related to the model, which was particularly convenient.</p>
							<p>Just like the former answer group's Slogan, "in order to continue the feeling of being helped", I also wondered if I could try to do something for the forum and MiFans. Coincidentally, upon seeing the recruitment post for the "Honory Developer Group", I was extremely excited when I received a private message notification from NanJie. With this excitement, I studied the details and operations related to the "Honory Developer Group" with great care and successfully passed the assessment, officially becoming a member of the "Honory Developer Group"</p>
							<p>I started thinking about the opportunity to create a collection of ROM packages myself when I bought a "notorious" device - Mi 6. Thanks to the excellent performance of Mi 6, I got extra attention in the MIUI forum, and many friends trusted me, They asked me questions in private messages, comment areas and other places. I learned and made progress with all MiFans synchronously, we got along very well. Later on, I began to organize the flashing packages for the Xiaomi MIX 2S, Xiaomi 9, and Redmi K20 series simultaneously. At this time, Xiaomi decided to stop releasing beta version publicly, and the official download site itself was no longer updated. I continued to collect and update posts through the data stored in the early stage and web crawlers I built. Later developments were also forseeable, but shutting down the forum was actually unexpected for me.</p>
							<p>The main reason for the official decision to close the forum is that Xiaomi has adjusted its development strategy and decided to merge with Xiaomi Community to establish a new community for MiFans.</p>
							<p>Later, our group of "Honory Developer Group" members began to move to the new community to participate in the construction of the new community. However, due to the stricter management of posts in the new community, they does not allow beta version to be listed in posts. Therefore, I decided to establish a site to collect and update there. This is the source of the current site.</p>
							<p>Recently, Xiaomi has started to limit the download speed under regular links, and there is currently no simple way to fix that, and I don't know how long it will last. Thank you all for your continuous support. I hope to meet you all here, always.</p>

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
