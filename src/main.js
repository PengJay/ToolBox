import './assets/main.css'
import '@mdi/font/css/materialdesignicons.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
