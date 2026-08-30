import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router' // 1. Import router

const app = createApp(App)

app.use(router) // 2. Tell Vue to use the router

app.mount('#app')