import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/static/",
  plugins: [react()],
  build: {
    outDir: resolve('./dist'),
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
    },
  },
  server: {
    origin: "http://localhost:5173",
    cors: {
      allowedHeaders: "*"
    }
  }
})
