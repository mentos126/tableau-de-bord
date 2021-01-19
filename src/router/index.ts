import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Brawlstars = () => import('../views/Brawlstars.vue')
const JobsList = () => import('../views/JobsList.vue')

const routes = [
  {
    path: '/brawlstars',
    name: 'Brawlstars',
    component:  Brawlstars
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsList
  },
  {
    path: '',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
