import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { readFileSync } from "node:fs";
import path from "path";
import { componentTagger } from "lovable-tagger";

const siteConfig = JSON.parse(
  readFileSync(path.resolve(__dirname, "site.config.json"), "utf8"),
) as { siteUrl: string };
const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");

if (!/^https?:\/\//.test(siteUrl)) {
  throw new Error("site.config.json must contain an absolute siteUrl.");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    {
      name: "site-config",
      transformIndexHtml: (html: string) =>
        html.replaceAll("__SITE_URL__", siteUrl),
    },
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
