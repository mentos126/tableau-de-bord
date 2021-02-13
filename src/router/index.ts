import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Brawlstars = () => import('../views/Brawlstars.vue')
const JobsList = () => import('../views/JobsList.vue')
const SportsGuia = () => import('../views/SportsGuia.vue')
const TestRecognition = () => import('../views/SpeechRecognitionTest.vue')

const routes: RouteRecordRaw  = [
  {
    label: 'Test Recognition',
    path: '/test-recognition',
    name: 'TestRecognition',
    component: TestRecognition
  },
  {
    label: 'Brawlstar',
    path: '/brawlstars',
    name: 'Brawlstars',
    component: Brawlstars
  },
  {
    label: 'Guia Sport',
    path: '/sports-guia',
    name: 'sportsGuia',
    component: SportsGuia
  },
  {
    label: 'Jobs',
    path: '/jobs',
    name: 'Jobs',
    component: JobsList
  },
  {
    label: 'Home',
    path: '/:pathMatch(.*)*',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
