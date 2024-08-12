import About from '@/components/About.vue'
import Cancel from '@/components/Cancel.vue'
import Home from '@/components/Home.vue'
import Success from '@/components/Success.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: Cancel
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'mooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
