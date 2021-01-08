import { createWebHistory, createRouter } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Brawlstars = () => import('../views/Brawlstars.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brawlstars',
    name: 'Brawlstars',
    component:  Brawlstars
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
