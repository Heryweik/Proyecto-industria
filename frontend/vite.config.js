import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    proxy: {
      '/deploy': {
        target: 'https://www.dentalservices.me', // Ajusta el puerto si es necesario
        changeOrigin: true,
      }
    }
  },
})
