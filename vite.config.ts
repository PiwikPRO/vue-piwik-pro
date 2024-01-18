import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), typescript()],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'VuePiwikPro',
      fileName: (format) => `vue-piwik-pro.${format}.js`,
    },
  },
})
