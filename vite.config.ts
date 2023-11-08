import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vuetify from 'vite-plugin-vuetify'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), checker({ vueTsc: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: './src/web-comp.ts',
      formats: ['es', 'cjs'],
      name: 'vue-web-comp',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    sourcemap: true,
    target: 'esnext',
    minify: false
  },
  server: {
    port: 8080
  }
})
