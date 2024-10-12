import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import { componentPlugin } from '@/components'

import 'normalize.css'
import '@/assets/styles/common.less'

const pinia = createPinia()
// 应用持久化插件
pinia.use(createPersistedState())

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(componentPlugin)
app.mount('#app')
