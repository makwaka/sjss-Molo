// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//     // Other configurations
//   assetsInclude: ['**/*.docx'],
//   plugins: [react()],
//     base: '/School-React/',
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // Other configurations
  assetsInclude: ['**/*.docx'],
  plugins: [react()],
  base: '/sjss-Molo/', 
})
