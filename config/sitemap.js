import axios from "axios"
const sitemap = {
    path: '/sitemap.xml', // 生成的文件路径
    hostname: 'https://roms.miuier.com/', // 网址
    cacheTime: 1000 * 60 * 60 * 24, // 1天 更新频率，只在 generate: false有用
    gzip: true, // 生成 .xml.gz 压缩的 sitemap
    generate: false, // 允许使用 nuxt generate 生成
    // 排除不要页面
    exclude: [
        '/404' //  这里的路径相对 hostname
    ],
    // xml默认的配置
    defaults: {
        changefreq: 'always',
        lastmod: new Date()
    },
    // 需要生成的xml数据, return 返回需要给出的xml数据
    routes: async () => {

        // 从后台获取数据,拼接url生成更多的xml数据
        const WeeklyUrl = 'https://data.miuier.com/weekly.json'
        const { weekly } = await axios.get(WeeklyUrl)
        const routes = [
            {
                url: "/",  //  这里的路径相对 hostname
                changefreq: "always",
                lastmod: new Date()
            }
        ]
        if (weekly && weekly.latest) {
            let arr = weekly.latest(item => ({
                url: "/blog/" + item.id,
                lastmod: item.update_time,
                changefreq: "weekly"
            }))
            routes.concat(arr)
        }

        return routes
    }
}

export default sitemap
