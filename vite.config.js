import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@services', replacement: path.resolve(__dirname, './src/services') },
      { find: '@helpers', replacement: path.resolve(__dirname, './src/helpers') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@context', replacement: path.resolve(__dirname, './src/context') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },

    ],
  },
})
