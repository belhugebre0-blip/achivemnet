import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { useAuth } from './stores/auth.js'

const app = createApp(App)

app.use(router)

const { init } = useAuth()
init()

app.mount('#app')
