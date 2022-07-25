import { createApp } from 'vue'
import App from './App.vue'
import { globalStyles } from "../stitches.config";

globalStyles()
createApp(App).mount('#app')
