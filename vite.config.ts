import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/poker-hands/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
    devSourcemap: false,
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true
      },
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('radix-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
        pure_funcs: [],
        passes: 1,
        keep_fnames: true,
        keep_classnames: true
      },
      mangle: false
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-core': ['vue'],
          'vue-router': ['vue-router'],
          'vue-pinia': ['pinia'],
          'radix-vue': ['radix-vue']
        },
        format: 'es',
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]'
      }
    },
    modulePreload: {
      polyfill: false
    },
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 0,
    assetsDir: 'assets'
  },
  optimizeDeps: {
    include: ['vue', 'radix-vue', 'reka-ui'],
    force: true
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Access-Control-Allow-Origin': '*'
    }
  }
})