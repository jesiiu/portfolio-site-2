import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import App from './App.vue'

const app = createApp(App)
addIcons()
app.component('v-icon', OhVueIcon)
app.mount('#app')
