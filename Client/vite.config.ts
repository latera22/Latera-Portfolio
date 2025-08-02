import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    __DEFINES__: {},
    __HMR_CONFIG_NAME__: JSON.stringify('Latera Portfolio') // This defines it properly at build time
  }
})
