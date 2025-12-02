import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import reveal from './directives/v-reveal.js'

const app = createApp(App)

app.directive('reveal', reveal)

app.use(router)
app.mount('#app')
