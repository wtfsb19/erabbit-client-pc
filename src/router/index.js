import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/App.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
