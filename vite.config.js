import { defineConfig } from "vite";

// Vanilla Vite setup (no framework plugin needed)
export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
