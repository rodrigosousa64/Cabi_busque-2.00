import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expõe para a rede (celular)
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Aponta para o seu Django
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
