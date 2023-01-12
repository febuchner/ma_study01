import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue-3'


import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(BootstrapVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
