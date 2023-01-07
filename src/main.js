import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import BootstrapVue from 'bootstrap-vue'


import App from './App.vue'
import router from './router'


import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App)

// app.use(BootstrapVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
