import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'
import { dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      sourceMap: true,
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'VuePiwikPro',
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: Object.keys(dependencies),
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
