import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "tsconfig.build.json",
    }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
    },
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
  },
});
