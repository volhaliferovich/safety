import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/safety-select/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  experimental: {
    renderBuiltUrl(filename, { hostId, hostType, type }) {
      if (hostType !== 'css') {
        return 'https://volhaliferovich.github.io/safety-select/' + filename
      }
    }
  }
})
