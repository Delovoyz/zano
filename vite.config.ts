// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ------------------------------------------------------------------
//  ВАЖНО: base должен точно совпадать с именем репозитория "zano"
// ------------------------------------------------------------------

export default defineConfig(({ mode }) => ({
  base: '/zano/',             // <-- вот эту строку добавь
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',          // явно указываем папку сборки
  },
}));
