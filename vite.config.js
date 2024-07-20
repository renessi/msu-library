import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        catalog: resolve(__dirname, "src/catalog.html"),
      },
    },
  },
  plugins: [eslintPlugin(),
            createSvgSpritePlugin({
            symbolId: 'icon-[name]-[hash]',
            input: '**/shared/img/svg/**.svg',
            output: 'dist/img/sprite.svg'
          }),
           ]
});
