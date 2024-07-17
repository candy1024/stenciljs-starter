import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ComponentLibrary } from 'vue-lib/lib';

const app = createApp(App)

app.use(router).use(ComponentLibrary)

app.mount('#app')
