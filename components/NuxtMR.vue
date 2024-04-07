<template>
	<body class="mdui-bottom-nav-fixed padding-bottom"></body>
</template>
<script setup>
useHead({
	script: [
		{
			src: "https://data.miuier.com/assets/mdui/js/mdui.min.js",
			defer: true,
		},
		{
			body: true,
			defer: true,
			src: "https://static.cloudflareinsights.com/beacon.min.js",
			"data-cf-beacon": '{"token":"4e0818275b9944a59d625e2df596aaca"}',
		},
		{
			async: true,
			src: "https://www.googletagmanager.com/gtag/js?id=UA-153213840-1",
		},
	],
	link: [
		{
			rel: "icon",
			type: "image/x-icon",
			href: "https://data.miuier.com/assets/logo/favicon.ico",
		},
		{
			rel: "stylesheet",
			href: "https://data.miuier.com/assets/mdui/css/mdui.min.css",
			crossorigin: "",
		},
		{
			rel: "stylesheet",
			href: "https://at.alicdn.com/t/c/font_2478867_8cprgbi0nm.css",
		},
		{
			rel: "stylesheet",
			href: "https://cdn-font.hyperos.mi.com/font/css?family=MiSans:100,200,300,400,450,500,600,650,700,900:Chinese_Simplify,Latin&display=swap",
		}
	]
});
</script>
