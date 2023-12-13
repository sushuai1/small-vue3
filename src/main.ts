import { createApp } from 'vue';
import router from "@/router"
import './style.css'
import App from './App.vue'

App.use(router)

createApp(App).mount('#app')
