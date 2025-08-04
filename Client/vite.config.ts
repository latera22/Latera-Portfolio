import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  /*define: {
   // __DEFINES__: {
      'my.custom.setting': JSON.stringify('value'), // ✅ OK
  //  },
    __HMR_CONFIG_NAME__: JSON.stringify("Latera Portfolio"),
    __SERVER_HOST__: JSON.stringify("localhost"),
    __HMR_PROTOCOL__: JSON.stringify("ws"),
    __HMR_PORT__: JSON.stringify("5173"),
    __HMR_HOSTNAME__: JSON.stringify("localhost"),
    __HMR_BASE__: JSON.stringify("/"),
    __HMR_DIRECT_TARGET__: JSON.stringify(""),
    __WS_TOKEN__: JSON.stringify(""),
    __HMR_ENABLE_OVERLAY__: JSON.stringify(true)
  }*/
})
