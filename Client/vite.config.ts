import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    __DEFINES__: {},
    __HMR_CONFIG_NAME__: JSON.stringify('Latera Portfolio'),
    __BASE__: JSON.stringify('/'),
    __SERVER_HOST__: JSON.stringify('localhost'),
    __HMR_PROTOCOL__: JSON.stringify('ws'),
    __HMR_PORT__: JSON.stringify('5173'), // default vite port or your actual dev port
    __HMR_HOSTNAME__: JSON.stringify('localhost'),
    __HMR_BASE__: JSON.stringify('/'),
    __HMR_DIRECT_TARGET__: JSON.stringify(''),
    __WS_TOKEN__: JSON.stringify(''),
     __HMR_ENABLE_OVERLAY__: JSON.stringify(true),
  }
})
