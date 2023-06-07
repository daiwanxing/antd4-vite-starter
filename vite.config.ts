import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "node:path";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less",
          resolveIcons: true,
        }),
      ],
      dts: "./src/components.d.ts",
      extensions: ["vue", "jsx", "tsx"],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
    }),
  ],
  base: "/antd4-vite-starter/",
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
