import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import RecipeInfo from '../components/RecipeInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recipe/:id',
    name: 'info',
    component: RecipeInfo,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
