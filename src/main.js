import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate';
import App from './App.vue'
import router from './router'

import 'normalize.css'
import '@/assets/styles/common.less'

const pinia = createPinia()
pinia.use(createPersistedState())
createApp(App).use(router).use(pinia).mount('#app')
