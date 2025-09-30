import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    __DEFINE__: {
    'my.custom.setting': JSON.stringify('value'),
  },
    __BASE__: JSON.stringify('/'),
    __HMR_CONFIG_NAME__: JSON.stringify("Latera Portfolio"),
    __SERVER_HOST__: JSON.stringify("localhost"),
    __HMR_PROTOCOL__: JSON.stringify("ws"),
    __HMR_PORT__: JSON.stringify("5173"),
    __HMR_HOSTNAME__: JSON.stringify("localhost"),
    __HMR_BASE__: JSON.stringify("/"),
    __HMR_DIRECT_TARGET__: JSON.stringify(""),
    __WS_TOKEN__: JSON.stringify(""),
    __HMR_ENABLE_OVERLAY__: JSON.stringify(true)
  }
})