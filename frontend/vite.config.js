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
        target: 'http://localhost:80', // Ajusta el puerto si es necesario
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/deploy/, '/deploy.sh')
      }
    }
  },
})
