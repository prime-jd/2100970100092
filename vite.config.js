import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    
    proxy :{
      "/test" :" http://localhost:8000http://20.244.56.144/test"
    }
  
}
})
