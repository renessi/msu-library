import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { readdir } from "fs/promises";
import { join } from "node:path";
import catalogContent from './src/02_pages/catalog/catalog.js';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

const partialDirectories = new Set();

const getDirectories = async (source) => {
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(source, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "stories") {
        partialDirectories.add(fullPath);
        await getDirectories(fullPath);
      }
    }
  }
};

await getDirectories(join(__dirname, "./src"));


const pageData = {
  "/index.html": {
    title: "МГУ база знаний",
  },
  "/catalog.html": {
    title: "МГУ каталог",
    content: catalogContent,
  },
};

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: process.env.NODE_ENV === "production" ? "/msu-library/" : "/",
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
  plugins: [
    eslintPlugin(),
    handlebars({
      partialDirectory: Array.from(partialDirectories),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
    createSvgSpritePlugin({
      symbolId: 'icon-[name]',
      include: '**/src/06_shared/img/svg/*.svg',
    }),
  ],
});
