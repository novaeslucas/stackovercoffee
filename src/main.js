import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import { makeServer } from "./server"
import 'bootstrap'
import moment from 'moment';

const app = createApp(App)

if (process.env.NODE_ENV === "development") {
    makeServer()
}

app.use(router)

app.mount('#app')

app.config.globalProperties.$filters = {
    formatarData(value) {
        if (value) {
            return moment(String(value)).format("DD/MM/YYYY")
        }
    },

    formatarDataHora(value) {
        if (value) {
            return moment(String(value)).format("DD/MM/YYYY hh:mm")
        }
    }
}
