import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import './assets/main.css'
import router from './router' // <---

createApp(App).use(router).mount('#app')

