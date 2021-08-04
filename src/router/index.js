import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News'
import Application from '../views/Application'
import MailPage from '../views/MailPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/application',
    name: 'Application',
    component: Application
  },
  {
    path: '/mail',
    name: 'Mail',
    component: MailPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
