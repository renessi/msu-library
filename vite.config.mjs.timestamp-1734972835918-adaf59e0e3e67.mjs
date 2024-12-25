// vite.config.mjs
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///F:/msufr/msu-library/node_modules/vite/dist/node/index.js";
import eslintPlugin from "file:///F:/msufr/msu-library/node_modules/vite-plugin-eslint/dist/index.mjs";
import { resolve } from "path";
import handlebars from "file:///F:/msufr/msu-library/node_modules/vite-plugin-handlebars/dist/index.js";
import { readdir } from "fs/promises";
import { join } from "node:path";

// src/02_pages/catalog/catalog.js
var catalog_default = {
  text: "catalog from context"
};

// vite.config.mjs
import createSvgSpritePlugin from "file:///F:/msufr/msu-library/node_modules/vite-plugin-svg-sprite/esm/index.js";
var __vite_injected_original_dirname = "F:\\msufr\\msu-library";
var __vite_injected_original_import_meta_url = "file:///F:/msufr/msu-library/vite.config.mjs";
var partialDirectories = /* @__PURE__ */ new Set();
var getDirectories = async (source) => {
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
await getDirectories(join(__vite_injected_original_dirname, "./src"));
var pageData = {
  "/index.html": {
    title: "\u041C\u0413\u0423 \u0431\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u0438\u0439"
  },
  "/catalog.html": {
    title: "\u041C\u0413\u0423 \u043A\u0430\u0442\u0430\u043B\u043E\u0433",
    content: catalog_default
  }
};
var vite_config_default = defineConfig({
  root: resolve(__vite_injected_original_dirname, "src"),
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    outDir: resolve(__vite_injected_original_dirname, "dist"),
    emptyOutDir: true,
    target: "ES2022",
    rollupOptions: {
      input: {
        index: resolve(__vite_injected_original_dirname, "src/index.html"),
        catalog: resolve(__vite_injected_original_dirname, "src/catalog.html")
      }
    }
  },
  plugins: [
    eslintPlugin(),
    handlebars({
      partialDirectory: Array.from(partialDirectories),
      context(pagePath) {
        return pageData[pagePath];
      }
    }),
    createSvgSpritePlugin({
      symbolId: "icon-[name]",
      include: "**/src/06_shared/img/svg/*.svg"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIiwgInNyYy8wMl9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxtc3VmclxcXFxtc3UtbGlicmFyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXN1ZnJcXFxcbXN1LWxpYnJhcnlcXFxcdml0ZS5jb25maWcubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9tc3Vmci9tc3UtbGlicmFyeS92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tIFwidml0ZS1wbHVnaW4tZXNsaW50XCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgaGFuZGxlYmFycyBmcm9tIFwidml0ZS1wbHVnaW4taGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgeyByZWFkZGlyIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCBjYXRhbG9nQ29udGVudCBmcm9tICcuL3NyYy8wMl9wYWdlcy9jYXRhbG9nL2NhdGFsb2cuanMnO1xyXG5pbXBvcnQgY3JlYXRlU3ZnU3ByaXRlUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1zcHJpdGUnO1xyXG5cclxuY29uc3QgcGFydGlhbERpcmVjdG9yaWVzID0gbmV3IFNldCgpO1xyXG5cclxuY29uc3QgZ2V0RGlyZWN0b3JpZXMgPSBhc3luYyAoc291cmNlKSA9PiB7XHJcbiAgY29uc3QgZW50cmllcyA9IGF3YWl0IHJlYWRkaXIoc291cmNlLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XHJcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4oc291cmNlLCBlbnRyeS5uYW1lKTtcclxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgIGlmIChlbnRyeS5uYW1lICE9PSBcInN0b3JpZXNcIikge1xyXG4gICAgICAgIHBhcnRpYWxEaXJlY3Rvcmllcy5hZGQoZnVsbFBhdGgpO1xyXG4gICAgICAgIGF3YWl0IGdldERpcmVjdG9yaWVzKGZ1bGxQYXRoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmF3YWl0IGdldERpcmVjdG9yaWVzKGpvaW4oX19kaXJuYW1lLCBcIi4vc3JjXCIpKTtcclxuXHJcblxyXG5jb25zdCBwYWdlRGF0YSA9IHtcclxuICBcIi9pbmRleC5odG1sXCI6IHtcclxuICAgIHRpdGxlOiBcIlx1MDQxQ1x1MDQxM1x1MDQyMyBcdTA0MzFcdTA0MzBcdTA0MzdcdTA0MzAgXHUwNDM3XHUwNDNEXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM5XCJcclxuICB9LFxyXG4gIFwiL2NhdGFsb2cuaHRtbFwiOiB7XHJcbiAgICB0aXRsZTogXCJcdTA0MUNcdTA0MTNcdTA0MjMgXHUwNDNBXHUwNDMwXHUwNDQyXHUwNDMwXHUwNDNCXHUwNDNFXHUwNDMzXCIsXHJcbiAgICBjb250ZW50OiBjYXRhbG9nQ29udGVudCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICByb290OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXHJcbiAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCIuL1wiIDogXCIvXCIsXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6IHJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIiksXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIHRhcmdldDogXCJFUzIwMjJcIixcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBpbmRleDogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgY2F0YWxvZzogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2NhdGFsb2cuaHRtbFwiKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBlc2xpbnRQbHVnaW4oKSxcclxuICAgIGhhbmRsZWJhcnMoe1xyXG4gICAgICBwYXJ0aWFsRGlyZWN0b3J5OiBBcnJheS5mcm9tKHBhcnRpYWxEaXJlY3RvcmllcyksXHJcbiAgICAgIGNvbnRleHQocGFnZVBhdGgpIHtcclxuICAgICAgICByZXR1cm4gcGFnZURhdGFbcGFnZVBhdGhdO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBjcmVhdGVTdmdTcHJpdGVQbHVnaW4oe1xyXG4gICAgICBzeW1ib2xJZDogJ2ljb24tW25hbWVdJyxcclxuICAgICAgaW5jbHVkZTogJyoqL3NyYy8wNl9zaGFyZWQvaW1nL3N2Zy8qLnN2ZycsXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxtc3VmclxcXFxtc3UtbGlicmFyeVxcXFxzcmNcXFxcMDJfcGFnZXNcXFxcY2F0YWxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcbXN1ZnJcXFxcbXN1LWxpYnJhcnlcXFxcc3JjXFxcXDAyX3BhZ2VzXFxcXGNhdGFsb2dcXFxcY2F0YWxvZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbXN1ZnIvbXN1LWxpYnJhcnkvc3JjLzAyX3BhZ2VzL2NhdGFsb2cvY2F0YWxvZy5qc1wiO2V4cG9ydCBkZWZhdWx0IHtcclxuICAgIHRleHQ6ICdjYXRhbG9nIGZyb20gY29udGV4dCdcclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1AsU0FBUyxlQUFlLFdBQVc7QUFDelIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsZUFBZTtBQUN4QixTQUFTLFlBQVk7OztBQ040UixJQUFPLGtCQUFRO0FBQUEsRUFDNVQsTUFBTTtBQUNWOzs7QURNQSxPQUFPLDJCQUEyQjtBQVJsQyxJQUFNLG1DQUFtQztBQUE2RyxJQUFNLDJDQUEyQztBQVV2TSxJQUFNLHFCQUFxQixvQkFBSSxJQUFJO0FBRW5DLElBQU0saUJBQWlCLE9BQU8sV0FBVztBQUN2QyxRQUFNLFVBQVUsTUFBTSxRQUFRLFFBQVEsRUFBRSxlQUFlLEtBQUssQ0FBQztBQUM3RCxhQUFXLFNBQVMsU0FBUztBQUMzQixVQUFNLFdBQVcsS0FBSyxRQUFRLE1BQU0sSUFBSTtBQUN4QyxRQUFJLE1BQU0sWUFBWSxHQUFHO0FBQ3ZCLFVBQUksTUFBTSxTQUFTLFdBQVc7QUFDNUIsMkJBQW1CLElBQUksUUFBUTtBQUMvQixjQUFNLGVBQWUsUUFBUTtBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLE1BQU0sZUFBZSxLQUFLLGtDQUFXLE9BQU8sQ0FBQztBQUc3QyxJQUFNLFdBQVc7QUFBQSxFQUNmLGVBQWU7QUFBQSxJQUNiLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxFQUNYO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLFFBQVEsa0NBQVcsS0FBSztBQUFBLEVBQzlCLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxPQUFPO0FBQUEsRUFDckQsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVEsUUFBUSxrQ0FBVyxNQUFNO0FBQUEsSUFDakMsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsT0FBTyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLFFBQzFDLFNBQVMsUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQSxNQUNoRDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsTUFDVCxrQkFBa0IsTUFBTSxLQUFLLGtCQUFrQjtBQUFBLE1BQy9DLFFBQVEsVUFBVTtBQUNoQixlQUFPLFNBQVMsUUFBUTtBQUFBLE1BQzFCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxzQkFBc0I7QUFBQSxNQUNwQixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
