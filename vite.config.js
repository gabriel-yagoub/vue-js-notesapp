import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = {
  publicPath: 'https://gabriel-yagoub.github.io/vue-js-notesapp/'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
