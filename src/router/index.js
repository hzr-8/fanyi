import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Exc',
    component: () => import('../views/exc.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
