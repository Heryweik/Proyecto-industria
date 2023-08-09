import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 80,
    proxy: {
      '/deploy': {
        // Esta URL no importa, ya que la solicitud se manejará en el servidor
        target: 'http://localhost',
        changeOrigin: true,
        onProxyReq: async (proxyReq, req, res) => {
          if (req.method === 'GET') {
            try {
              // Lee el contenido de deploy.sh
              const deployScriptContent = readFileSync('/deploy.sh', 'utf-8');
              
              // Envía el contenido como respuesta
              res.end(deployScriptContent);
            } catch (error) {
              console.error('Error al leer deploy.sh:', error);
              res.status(500).end('Error interno');
            }
          }
        }
      }
    }
  },
})
