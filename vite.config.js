/* eslint-disable import/extensions */
/* eslint-disable import/no-unused-modules */
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // Make sure this matches the Chromium version built into NW.js
    target: 'chrome119',
    outDir: 'dist-vue'
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@@': fileURLToPath(new URL('./tests', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reportsDirectory: './tests/unit/coverage'
    },
    root: '.',
    setupFiles: [
      './tests/unit/setup.js'
    ]
  }
});
