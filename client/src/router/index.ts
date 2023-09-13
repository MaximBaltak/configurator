import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/ConfiguratorCoffeeMachinePage.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/ConfiguratorModelsPage.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/create'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
