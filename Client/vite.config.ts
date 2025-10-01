import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // The 'define' block was removed to let Vite manage its own HMR configuration.
  // If you have custom global variables, you can add a 'define' block with only those.
})