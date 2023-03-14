import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue-3'
import vueCookies from 'vue-cookies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faShareNodes, faSpinner, faArrowRight, faEnvelope, faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import {faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faTelegram} from '@fortawesome/free-brands-svg-icons'
library.add(faShareNodes, faSpinner, faArrowRight, faFacebookF, faTwitter, faLinkedinIn, faWhatsapp, faTelegram, faEnvelope, faCircleNotch)

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(BootstrapVue)
app.use(createPinia())
app.use(vueCookies)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
