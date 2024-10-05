import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'


const pinia = createPinia()
pinia.use(createPersistedState())
createApp(App).use(router).use(pinia).mount('#app')
