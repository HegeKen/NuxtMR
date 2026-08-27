import { resolve } from 'node:path'
import { defineNitroPlugin } from 'nitropack/runtime'

// sitemap 支持的语言（multi-sitemap 下每个 locale 独立一个 sitemap，i18n 策略为 prefix，
// 即 zh-cn / en-us 均带语言前缀）。
const SITEMAP_LOCALES = ['zh-cn', 'en-us']

// 数据源：优先读本地 public/MRData/data（随仓库部署的 MRData 子模块），缺失时回退到线上 API，
// 保证 sitemap 与页面 useFetch 的数据一致。
const REMOTE_DATA_BASE = 'https://data.miuier.com/data'

// node:fs 仅在 Node 运行时（本地构建 / node-server 自托管）可用；Cloudflare Workers / Pages 等
// 无文件系统的运行时上动态 import 会失败，自动降级为远程 API，保证 sitemap 在两个环境都可用。
let fsPromise: Promise<typeof import('node:fs') | null> | null = null
function getNodeFs(): Promise<typeof import('node:fs') | null> {
  fsPromise ||= import('node:fs').catch(() => null)
  return fsPromise
}

// 运行时按 locale 注入周次页 / 机型详情页的真实 URL，使 sitemap 收录动态详情页。
// 注意：`sitemap:sources` 是 Nitro 运行时钩子，必须通过 defineNitroPlugin 注册，
// 不能写在 nuxt.config.ts 的 nitro.hooks（构建时 NestedHooks<NitroHooks>）中。
async function resolveDataRoot(): Promise<string | null> {
  const fs = await getNodeFs()
  if (!fs || typeof process === 'undefined') return null
  try {
    const cwd = process.cwd()
    const candidates = [
      resolve(cwd, 'public/MRData/data'),
      resolve(cwd, '.output/public/MRData/data'),
      resolve(cwd, '../public/MRData/data'),
    ]
    return candidates.find((c) => fs.existsSync(c)) || candidates[0]!
  } catch {
    return null
  }
}

async function loadJson(dataRoot: string | null, file: string): Promise<any> {
  const fs = await getNodeFs()
  if (dataRoot && fs) {
    const local = resolve(dataRoot, file)
    try {
      if (fs.existsSync(local)) {
        return JSON.parse(fs.readFileSync(local, 'utf-8'))
      }
    } catch (e) {
      console.warn(`[sitemap] 读取本地 ${file} 失败，回退远程：`, (e as Error).message)
    }
  }
  const res = await $fetch(`${REMOTE_DATA_BASE}/${file}`)
  return res
}

export default defineNitroPlugin((nitroApp) => {
  let DATA_ROOT: string | null = null

  nitroApp.hooks.hook('sitemap:sources', async ({ sitemapName, sources }) => {
    if (!SITEMAP_LOCALES.includes(sitemapName)) return
    if (DATA_ROOT === null) DATA_ROOT = await resolveDataRoot()
    console.log('[sitemap:sources] fired for', sitemapName, 'DATA_ROOT=', DATA_ROOT)
    try {
      // 两个 locale 变体都推入每个 sitemap 的 sources，由模块按 _sitemap 过滤，
      // 并据此为每个详情页生成 zh-cn/en-us 两种 hreflang 互链。
      const urls: { loc: string }[] = []

      // 周次页：与页面一致只收录 oldest（560）及以上的周次，更早的周次由页面外链到 old.miuier.com。
      // 数据异常（缺少 oldest 字段）时不收录周次页，避免向 sitemap 注入无内容页。
      const weekly = await loadJson(DATA_ROOT, 'weekly.json')
      const oldest = Number(weekly.oldest)
      if (Number.isFinite(oldest)) {
        const weeks = new Set<string>()
        for (const v of weekly.versions || []) {
          for (const week of v.weeks || []) {
            if (Number(week) >= oldest) weeks.add(String(week))
          }
        }
        const sortedWeeks = [...weeks].sort((a, b) => Number(a) - Number(b))
        for (const week of sortedWeeks) {
          urls.push({ loc: `/zh-cn/weekly/week-${week}-cn` })
          urls.push({ loc: `/en-us/weekly/week-${week}-cn` })
        }
      }

      // 机型详情页：devlist.json（与机型列表页同源）→ brands[].series[].devices[].code
      const devlist = await loadJson(DATA_ROOT, 'devlist.json')
      const codes = new Set<string>()
      for (const brand of devlist.brands || []) {
        for (const series of brand.series || []) {
          for (const d of series.devices || []) codes.add(d.code)
        }
      }
      for (const code of [...codes].sort()) {
        urls.push({ loc: `/zh-cn/devices/${code}` })
        urls.push({ loc: `/en-us/devices/${code}` })
      }

      if (urls.length) {
        sources.push({ context: { name: 'data' }, urls })
        console.log('[sitemap:sources] injected', urls.length, 'urls for', sitemapName)
      }
    } catch (e) {
      console.warn('[sitemap] 加载 data 来源失败：', (e as Error).message)
    }
  })
})
