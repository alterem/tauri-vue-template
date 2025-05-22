# Tauri + Vue + Vite + Tailwind CSS + Element Plus 模板项目

![Build Status](https://github.com/alterem/tauri-vue-template/actions/workflows/build.yml/badge.svg) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/alterem/tauri-vue-template)

> **注意:** 上面的徽章可能仍然链接到原始仓库。如果您基于此模板 fork 请更新它们指向您的新仓库。

一个现代、快速的跨平台桌面应用模板。

A modern, fast cross-platform desktop application template.

## ✨ 项目概览

此模板使用 **Tauri** 构建轻量、安全的跨平台桌面应用。它集成了现代前端技术栈：**Vue** (UI)、**Vite** (构建工具)、**Tailwind CSS** (CSS 框架) 和 **Element Plus** (UI 组件库)。它使用 **pnpm** 进行依赖管理，并使用 **TypeScript** 提升开发者体验和代码质量。

结合 Rust 后端和现代前端，它是构建高性能、安全桌面应用的理想起点。

## 🚀 技术栈

本项目集成了以下核心技术：

*   **Tauri**: 构建轻量、安全、跨平台的桌面应用，利用 Rust 作为后端。
*   **Vue**: 一个用于构建用户界面的渐进式 JavaScript 框架。
*   **Vite**: 下一代前端构建工具，以其快速的开发服务器启动和构建速度而闻名。
*   **Tailwind CSS**: 一个实用至上的 CSS 框架，通过组合类名实现快速 UI 构建。
*   **Element Plus**: 一个面向开发者、设计师和产品经理的 Vue 3 UI 组件库，开箱即用。
*   **pnpm**: 一个快速且节省磁盘空间的包管理器。
*   **TypeScript**: JavaScript 的超集，提供静态类型检查，提高代码可维护性。
*   **@types/node**: 提供 Node.js API 的类型定义。
*   **Vue Router**: Vue 官方的路由管理器，用于构建单页面应用。
*   **Pinia**: 推荐用于 Vue 3 的状态管理库，轻量且易于使用。
*   **Vitest**: 一个快速的单元测试框架，专为 Vite 项目设计。
*   **Lodash-es**: 提供各种实用工具函数，用于处理数组、对象、字符串等。

## 📋 前提条件

在克隆和运行项目之前，请确保您的开发环境满足以下要求：

1.  **Rust**: Tauri 的后端依赖于 Rust。
    *   **安装**: 推荐使用 [Rustup](https://rustup.rs/) 进行安装。
    *   **验证**: 安装后，运行 `rustc --version` 和 `cargo --version` 进行检查。
2.  **Node.js**: 运行前端工具链所需。
    *   **安装**: 推荐使用 [LTS 版本](https://nodejs.org/)。您可以下载安装程序或使用版本管理器（如 nvm）。
    *   **验证**: 安装后，运行 `node --version` 进行检查。
3.  **pnpm**: 项目使用的包管理器。
    *   **安装**: 如果未安装，通过 npm 安装：`npm install -g pnpm`
    *   **验证**: 安装后，运行 `pnpm --version` 进行检查。
4.  **Tauri 系统依赖**: 构建 Tauri 应用需要特定的系统库和工具。
    *   **安装**: 根据您的操作系统，您可能需要安装额外的依赖。请参考官方 Tauri 文档获取详细列表：
        *   [Tauri 前提条件](https://tauri.app/v1/guides/getting-started/prerequisites)
    *   **常见依赖**:
        *   **Windows**: Visual Studio 2022（或更高版本）的“使用 C++ 的桌面开发”工作负载。
        *   **macOS**: Xcode 命令行工具 (`xcode-select --install`)。
        *   **Linux**: 各种开发库和工具，具体取决于您的发行版（例如，`webkit2gtk`、`libappindicator3-dev`、`librsvg2-dev` 等）。请查阅官方文档。

## 快速开始

按照以下步骤克隆仓库、安装依赖并启动开发服务器：

1.  **克隆仓库**:
    ```bash
    git clone <repository_url>
    cd tauri-vue-template # 假设您将仓库克隆到此目录
    ```
    *将 `<repository_url>` 替换为实际的仓库 URL。*

2.  **安装依赖**:
    ```bash
    pnpm install
    ```

3.  **在开发模式下运行**:
    ```bash
    pnpm dev
    ```
    启动 Tauri 应用，加载 Vite 开发服务器，提供热重载等开发便利。

## 🏗️ 构建应用

要构建生产可执行文件，运行：

```bash
pnpm build
```

构建后，可执行文件通常位于 `src-tauri/target/release/` 目录中。

## 📂 项目结构

核心项目目录结构如下：

```
.
├── public/             # 存放静态资源，如图标、字体等
├── src/             # 前端 Vue 应用代码
│   ├── assets/        # 存放静态资源，如图片、字体等
│   ├── components/  # 存放可复用 Vue 组件
│   ├── router/        # 存放 Vue Router 路由配置
│   ├── stores/        # 存放 Pinia 状态管理模块
│   ├── views/         # 存放页面组件
│   ├── main.ts      # 应用入口文件
│   ├── App.vue      # 主组件，包含路由视图和导航
│   ├── style.css    # 主样式文件
│   └── vite-env.d.ts  # Vite 相关的 TypeScript 类型定义
├── src-tauri/       # Tauri 后端 (Rust) 代码和配置
│   ├── build.rs       # Rust 构建脚本
│   ├── Cargo.lock     # Rust 依赖锁文件
│   ├── Cargo.toml     # Rust 依赖清单
│   ├── tauri.conf.json # Tauri 配置文件
│   ├── capabilities/  # Tauri 能力配置
│   ├── icons/         # 应用图标
│   └── src/         # Rust 源代码
│       ├── lib.rs     # Rust 库文件
│       └── main.rs  # Rust 应用入口文件
├── test/            # 存放单元测试文件
├── index.html       # 应用的 HTML 入口文件
├── vite.config.ts   # Vite 配置文件
├── tailwind.config.js # Tailwind CSS 配置文件
├── package.json     # 项目依赖和脚本
├── pnpm-lock.yaml   # pnpm 锁文件
├── pnpm-workspace.yaml # pnpm 工作区配置文件
├── README.md        # 项目说明文件
├── tsconfig.json    # TypeScript 配置文件
└── tsconfig.node.json # Node 环境的 TypeScript 配置文件
```

## 📸 截图

展示默认 **Vue + Element Plus** 界面和集成的应用截图：

![Home](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/22/Alterem2025-05-22_11-57-14.jpg)

![Counter](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/22/Alterem2025-05-22_11-57-18.jpg)

![About](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/22/Alterem2025-05-22_11-57-24.jpg)

![Dark](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/22/lSlwqZ.png)

**注意:** 上面的截图链接是原始模板的占位符。请将它们替换为您实际的 Vue + Element Plus 应用界面截图。将截图文件放在合适的位置（例如，`screenshots` 文件夹或链接到托管服务），并更新图片 URL。

## ⚙️ 定制

*   **前端**: 修改 `src/` 目录中的 **Vue 代码**（**`.vue` 文件**）、样式文件（`src/index.css` 或其他）和 `tailwind.config.js` 来定制 UI 和功能。**根据需要使用 Element Plus 组件。**
*   **后端**: 修改 `src-tauri/src/main.rs` 和 `src-tauri/tauri.conf.json` 来调整 Tauri 配置、添加 Rust 后端逻辑或调用系统 API。
*   **依赖**: 使用 `pnpm add <package>` 或 `pnpm remove <package>` 管理项目依赖。

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [`LICENSE`](LICENSE) 文件。