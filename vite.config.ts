import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async ({ command, mode }) => {

  const env = loadEnv(mode, process.cwd(), 'ALTEREM_');
  const port = parseInt(env.ALTEREM_PORT || '1420', 10);

  return {
    envPrefix: "ALTEREM_",
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    clearScreen: false,
    server: {
      port,
      strictPort: true,
      host: host || false,
      hmr: host
        ? {
          protocol: "ws",
          host,
          port: 1421,
        }
        : undefined,
      watch: {
        ignored: ["**/src-tauri/**"],
      },
    },
  }
});
