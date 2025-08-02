import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // Your base path
  plugins: [react()],
  define: {
    __DEFINES__: {},
    __HMR_CONFIG_NAME__: JSON.stringify('some_value'),
    __BASE__: JSON.stringify('/')  // Define __BASE__ as stringified base path
  }
})
