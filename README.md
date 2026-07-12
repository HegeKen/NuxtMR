# NuxtMR

新版 MIUI 官方 ROM 仓库网站，基于 Nuxt 4 构建。

The new version of MIUI Official ROM Repository website, built with Nuxt 4.

## 项目简介 | Project Overview

NuxtMR 是一个 MIUI ROM 下载网站，提供小米/红米/POCO 等设备的官方 ROM 下载服务，包括稳定版、开发版等多个版本的卡刷包和线刷包。

NuxtMR is a MIUI ROM download website that provides official ROM download services for Xiaomi/Redmi/POCO devices, including recovery and fastboot ROMs for stable and weekly versions.

## 技术栈 | Tech Stack

- **框架**: Nuxt 4 + Vue 3
- **UI 框架**: MDUI
- **国际化**: @nuxtjs/i18n (中文/English)
- **样式**: CSS
- **包管理器**: pnpm
- **数据源**: JSON 文件 (Git Submodule)
- **爬虫**: Python 脚本

## 主要功能 | Features

- 📱 **设备 ROM 查询** - 按设备代号查看所有可用 ROM
- 📅 **开发版追踪** - 每周更新开发版 ROM 信息
- 🛠️ **工具页面** - 提供刷机工具和相关资源
- 🌙 **暗黑模式** - 支持明暗主题切换
- 🌐 **双语支持** - 中文/English 界面
- 📱 **响应式设计** - 适配桌面端和移动端

## 项目结构 | Project Structure

```
NuxtMR/
├── app/
│   ├── assets/          # 静态资源 (CSS)
│   ├── components/      # Vue 组件
│   ├── composables/     # 组合式函数
│   ├── config/          # 配置文件
│   ├── pages/           # 页面路由
│   │   ├── devices/     # 设备 ROM 页面
│   │   ├── mobile/      # 移动端页面
│   │   └── weekly/      # 开发版页面
│   ├── plugins/         # 插件
│   └── utils/           # 工具函数
├── i18n/                # 国际化配置
├── public/
│   ├── MRData/          # Git Submodule - 数据和资源
│   │   ├── assets/      # MDUI 组件和 JS 库
│   │   ├── data/        # JSON 数据源
│   │   └── scripts/     # Python 爬虫脚本
│   └── images/          # 图片资源
├── nuxt.config.ts       # Nuxt 配置
├── package.json         # 项目依赖
└── tsconfig.json        # TypeScript 配置
```

## 快速开始 | Quick Start

### 环境要求 | Requirements

- Node.js >= 20
- pnpm >= 8

### 安装步骤 | Installation

1. **克隆项目（包含子模块）**

```bash
git clone --recurse-submodules https://github.com/HegeKen/NuxtMR.git
cd NuxtMR
```

如果已克隆但未初始化子模块：

```bash
git submodule update --init --recursive
```

2. **安装依赖**

```bash
pnpm install
```

3. **开发模式运行**

```bash
pnpm run dev
```

访问 http://localhost:3000 查看网站。

### 构建生产版本 | Build for Production

```bash
pnpm run build
```

构建产物将生成在 `.output/public` 目录。

### 预览生产版本 | Preview Production Build

```bash
pnpm run preview
```

## 数据更新 | Data Update

项目使用 Git Submodule 管理数据，数据仓库为 [MRData](https://github.com/HegeKen/MRData)。

The project uses Git Submodule for data management. The data repository is [MRData](https://github.com/HegeKen/MRData).

更新数据：

```bash
cd public/MRData
git pull origin Nuxt3
cd ../..
git add public/MRData
git commit -m "Update MRData"
```

### Python 爬虫脚本 | Python Crawler Scripts

爬虫脚本位于 `public/MRData/scripts/` 目录，用于自动抓取 ROM 信息。

Crawler scripts are located in `public/MRData/scripts/` directory, used for automatically fetching ROM information.

安装脚本依赖：

```bash
cd public/MRData/scripts
pip install -r requirement.txt
```

## 部署 | Deployment

项目使用 GitHub Actions 自动部署到 GitHub Pages。

The project is automatically deployed to GitHub Pages using GitHub Actions.

触发条件：
- 推送代码到 `Nuxt3` 分支
- 手动触发 `workflow_dispatch`

## 贡献 | Contributing

欢迎提交 Issue 和 Pull Request！

Contributions are welcome via Issues and Pull Requests!

## 链接 | Links

- **网站**: https://roms.miuier.com
- **数据仓库**: https://github.com/HegeKen/MRData
