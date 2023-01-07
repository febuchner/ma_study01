import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue-3'


import App from './App.vue'
import router from './router'


import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App)

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

app.use(BootstrapVue)
app.use(store)
app.use(createPinia())
app.use(router)

app.mount('#app')
