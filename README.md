# Tauri + Vue + Vite + Tailwind CSS + Element Plus Template Project

![Build Status](https://github.com/alterem/tauri-vue-template/actions/workflows/build.yml/badge.svg) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/alterem/tauri-vue-template)

> **Note:** The badges above might still link to the original Vue repository. Please update them to point to your new Vue repository if you fork/create one based on this template.

A modern, fast cross-platform desktop application template.

## ✨ Project Overview

This template uses **Tauri** to build lightweight, secure cross-platform desktop applications. It integrates a modern frontend tech stack: **Vue** (UI), **Vite** (build tool), **Tailwind CSS** (CSS framework), and **Element Plus** (UI component library). It uses **pnpm** for dependency management and **TypeScript** to enhance developer experience and code quality.

Combining a Rust backend with a modern frontend, it's an ideal starting point for building high-performance, secure desktop applications.

## 🚀 Tech Stack

This project integrates the following core technologies:

*   **Tauri**: Builds lightweight, secure, cross-platform desktop applications, leveraging Rust as the backend.
*   **Vue**: A progressive JavaScript framework for building user interfaces.
*   **Vite**: A next-generation frontend build tool, known for its fast development server startup and build speeds.
*   **Tailwind CSS**: A utility-first CSS framework that allows rapid UI building by composing classes.
    *   **Integration Method**: Uses the `@tailwindcss/vite` plugin and is imported via `@import "tailwindcss";` in the main CSS file.
*   **Element Plus**: A Vue 3 UI component library for developers, designers and product managers, ready to use out-of-the-box.
*   **pnpm**: A fast and disk-space efficient package manager.
*   **TypeScript**: A superset of JavaScript that provides static type checking, improving code maintainability.
*   **@types/node**: Provides type definitions for Node.js APIs, ensuring type safety when using Node.js modules in files like `vite.config.ts`.

## 📋 Prerequisites

Before cloning and running the project, ensure your development environment meets the following requirements:

1.  **Rust**: Tauri's backend relies on Rust.
    *   **Installation**: Recommended to install using [Rustup](https://rustup.rs/).
    *   **Verification**: After installation, run `rustc --version` and `cargo --version` to check.
2.  **Node.js**: Required to run the frontend toolchain.
    *   **Installation**: Recommended to use the [LTS version](https://nodejs.org/). You can download the installer or use a version manager (like nvm).
    *   **Verification**: After installation, run `node --version` to check.
3.  **pnpm**: The package manager used by the project.
    *   **Installation**: If not installed, install via npm: `npm install -g pnpm`
    *   **Verification**: After installation, run `pnpm --version` to check.
4.  **Tauri System Dependencies**: Building Tauri applications requires specific system libraries and tools.
    *   **Installation**: Depending on your operating system, you might need to install additional dependencies. Refer to the official Tauri documentation for a detailed list:
        *   [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites)
    *   **Common Dependencies**:
        *   **Windows**: The "Desktop development with C++" workload from Visual Studio 2022 (or later).
        *   **macOS**: Xcode Command Line Tools (`xcode-select --install`).
        *   **Linux**: Various development libraries and tools, depending on your distribution (e.g., `webkit2gtk`, `libappindicator3-dev`, `librsvg2-dev`, etc.). Consult the official documentation.

## Quick Start

Follow these steps to clone the repository, install dependencies, and start the development server:

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd tauri-vue-template # Assuming you cloned the repository into this directory
    ```
    *Replace `<repository_url>` with the actual repository URL.*

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Run in development mode**:
    ```bash
    pnpm dev
    ```
    Starts the Tauri application, loading the Vite development server, providing development conveniences like hot reloading.

## 🏗️ Building the Application

To build the production executable, run:

```bash
pnpm build
```

After building, the executable is typically found in the `src-tauri/target/release/` directory.

## 📂 Project Structure

The core project directory structure is:

```
.
├── src/             # Frontend Vue application code
│   ├── main.ts      # Application entry point (mounts Vue app)
│   ├── App.vue      # Main component
│   ├── index.css    # Main style file (often includes Tailwind imports)
│   ├── components/  # Reusable Vue components
│   └── ...          # Other views, utility functions, assets, etc.
├── src-tauri/       # Tauri backend (Rust) code and configuration
│   ├── src/         # Rust source code
│   │   └── main.rs  # Rust application entry point
│   ├── tauri.conf.json # Tauri configuration file
│   └── ...          # Other Rust modules or resources
├── index.html       # Application's HTML entry file
├── vite.config.ts   # Vite configuration file
├── tailwind.config.js # Tailwind CSS configuration file
├── package.json     # Project dependencies and scripts
├── pnpm-lock.yaml   # pnpm lock file
└── ...              # Other configuration files (.gitignore, README.md, etc.)
```

## 📸 Screenshots

Application screenshots showcasing the default **Vue + Element Plus** interface and integration:

![Application Main Interface Screenshot 1](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/21/Alterem2025-05-21_17-55-33.jpg)

![Application Main Interface Screenshot 2](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/21/Alterem2025-05-21_17-55-39.jpg)

![Application Main Interface Screenshot 2](https://raw.githubusercontent.com/alterem/picFB/master/uPic/2025/05/21/Alterem2025-05-21_17-55-44.jpg)

**Note:** The screenshot links above are placeholders from the original template. Please replace them with actual screenshots of your Vue + Element Plus application interface. Place screenshot files in a suitable location (e.g., a `screenshots` folder or link from a hosting service) and update the image URLs.

## ⚙️ Customization

*   **Frontend**: Modify the **Vue code** in the `src/` directory (**`.vue` files**), style files (`src/index.css` or others), and `tailwind.config.js` to customize the UI and functionality. **Utilize Element Plus components as needed.**
*   **Backend**: Modify `src-tauri/src/main.rs` and `src-tauri/tauri.conf.json` to adjust Tauri configuration, add Rust backend logic, or call system APIs.
*   **Dependencies**: Use `pnpm add <package>` or `pnpm remove <package>` to manage project dependencies.

## 📄 License

This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.