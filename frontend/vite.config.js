import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173, // Use Render's port or fallback to 5173
    host: '0.0.0.0',
    allowedHosts: ["ez-test-2hce.onrender.com"] ,
  }
})
