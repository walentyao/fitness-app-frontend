import '@/app/assets/main.scss'
import 'primevue/resources/themes/lara-dark-purple/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from '@/app/App.vue'
import router from '@/app/providers/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
