import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        configure: (proxy, options) => {
          // Fallback handler for development without serverless
          proxy.on('error', (err, req, res) => {
            console.log('Proxy error - API endpoint not available');
          });
        }
      }
    }
  }
})
