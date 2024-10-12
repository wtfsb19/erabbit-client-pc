import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/',
        name: "home",
        component: () => import("@/views/home/index.vue")
      },
      {
        path: '/category/:id',
        name: "category",
        component: () => import("@/views/category")
      },
      {
        path: '/category/sub/:id',
        name: "subcategory",
        component: () => import("@/views/category/sub.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
