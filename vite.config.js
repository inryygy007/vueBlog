import { fileURLToPath, URL } from "node:url";
import Components from "unplugin-vue-components/vite";
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from "unplugin-vue-components/resolvers";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.log(command);
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [
          AntDesignVueResolver(),
          ElementPlusResolver(),
          VantResolver(),
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: "0.0.0.0",
      // 端口号
      port: env.VITE_APP_PORT,
      // 代理
      proxy: {
        api: {
          target: env.VITE_APP_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.repeat(/^\/api/, ""),
        },
      },
    },
  };
});
