import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chunkSplitPlugin()],
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
})
