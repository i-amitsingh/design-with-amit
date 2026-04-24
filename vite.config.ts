import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/notion-api': {
        target: 'https://www.notion.so/api/v3',
        changeOrigin: true,
        secure: false, 
        rewrite: (path) => path.replace(/^\/notion-api/, ''),
        // NEW: This block intercepts the request and spoofs the headers
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            proxyReq.setHeader('Origin', 'https://www.notion.so');
            proxyReq.setHeader('Referer', 'https://www.notion.so/');
            // Some Notion endpoints also require this to accept the JSON body
            proxyReq.setHeader('Content-Type', 'application/json');
          });
        }
      }
    }
  }
});
