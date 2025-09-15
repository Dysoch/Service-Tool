import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Service-Tool/', // required for GitHub Pages
  plugins: [react()],
})
