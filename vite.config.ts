import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const entry = fileURLToPath(new URL("./src/index.ts", import.meta.url));

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    sourcemap: true,
    lib: {
      entry,
    },
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: [
        {
          format: "esm",
          exports: undefined,
          preserveModules: true,
          entryFileNames: `[name].mjs`,
        },
      ],
    },
  },
});
