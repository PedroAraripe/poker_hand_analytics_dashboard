import Analysis from '@/pages/analysis/Index.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/analysis',
    name: 'analysis',
    component: Analysis,
    meta: {
      title: 'Home',
      icon: 'Home'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Home',
      icon: 'Home'
    }
  },
]

const router = createRouter({
  history: createWebHistory('/poker-hands/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

export default router