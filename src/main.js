import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue-3'


import App from './App.vue'
import router from './router'


import './assets/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App)

app.use(BootstrapVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
