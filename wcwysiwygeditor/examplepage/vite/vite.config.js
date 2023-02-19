import { defineConfig } from 'vite'
const { resolve } = require('path')
export default defineConfig({
  root:resolve(__dirname, '../-/'),
  build:{
	emptyOutDir:true,
	outDir:resolve(__dirname, 'build'),
	target:'es2015'
  }
})
