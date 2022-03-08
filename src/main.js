import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from "./server"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

if (process.env.NODE_ENV === "development") {
    makeServer()
}

createApp(App).mount('#app')
