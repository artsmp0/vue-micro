import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupMicro } from 'vue-micro'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setupMicro(app as any, router, { routePath: '/dynamic-page', componentPath: 'views' })

app.mount('#app')
