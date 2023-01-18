import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'icons',
      fileName: (format) => `index.${format}.js`,
    },
    outDir: 'dist/',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outputDir: 'dist/types',
    }),
  ],
})
