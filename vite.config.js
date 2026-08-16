import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'YOUR_REPOSITORY_NAME' with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', 
})