// Cloudflare workerd 禁止在全局作用域设置定时器（Disallowed operation in global scope），
// 而 sitemap 模块的 experimentalWarmUp 预热插件恰好在 nitro 插件注册时调用 setTimeout，
// 会导致 Cloudflare Pages/Workers 启动失败。因此仅在 Node 运行时（本地/自托管）启用预热。
const isCloudflare = !!(
	process.env.NITRO_PRESET?.startsWith("cloudflare") ||
	process.env.SERVER_PRESET?.startsWith("cloudflare")
);

export default defineNuxtConfig({
	css: ["assets/miuiroms.scss"],

	ssr: true,
	components: true,
	devtools: { enabled: false },

	app: {
		pageTransition: false,
	},

	modules: ["@nuxtjs/sitemap", "@nuxtjs/device", "@nuxtjs/i18n"],

	i18n: {
		locales: [
			{
				code: "zh-cn",
				name: "中文",
			},
			{
				code: "en-us",
				name: "English",
			},
		],
		strategy: "prefix",
		defaultLocale: "zh-cn",
		vueI18n: "./i18n.config.ts",
	},

	vite: {
		define: {
			__BUILD_TIME__: JSON.stringify(new Date().toISOString()),
		},
		server: {
			hmr: { overlay: false },
		},
	},

	site: {
		url: "https://roms.miuier.com",
		name: "MIUI Official ROMS",
	},

	sitemap: {
		// 排除旧版移动端跳转页（/mobile/** 为 302 跳转到新版路径的遗留路由，不应收录）
		exclude: ["/mobile/**"],

		// 为自动扫描到的页面（如 /zh-cn、/zh-cn/about、/zh-cn/devices、/zh-cn/weekly 等）自动填充 lastmod
		autoLastmod: true,

		// 生产环境 SWR 缓存 1 小时（默认 10 分钟）。sitemap 数据来自本地 public/MRData/data，随部署更新，
		// 调高 TTL 可显著降低源站与序列化压力。
		cacheMaxAgeSeconds: 3600,

		// 流式序列化：按 ~64KB 分块输出 XML，避免完整 XML 字符串驻留内存。
		experimentalStreaming: true,

		// 客户端支持时流式 gzip/deflate 压缩（不支持 CompressionStream 的运行时自动降级）。
		// Cloudflare 边缘（含本地 miniflare 模拟）已对响应自动压缩，再开会双重压缩导致 Content-Encoding
		// 与实际 body 不一致，故 Cloudflare 构建时关闭（Node 自托管仍启用）。
		experimentalCompression: !isCloudflare,

		// Nitro 启动后预热各 locale sitemap（源为本地文件，预热开销极小），首次请求不再慢。
		// Cloudflare（workerd）无文件系统且禁止全局定时器，构建时通过 NITRO_PRESET 自动关闭。
		experimentalWarmUp: !isCloudflare,

		// 预热后，sitemap 生成过程在服务端完全消失，客户端请求时直接返回缓存数据
		zeroRuntime: true,
	},

	compatibilityDate: "2025-03-12",
});
