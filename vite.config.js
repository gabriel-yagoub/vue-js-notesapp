import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = {
  publicPath: '/vue-js-notesapp/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
