import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News'
import Application from '../views/Application'
import Login from '../views/Login'
import Forget from '../views/Forget'
import VuexCounter from '../views/VuexCounter'

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
    path: '/mail/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mail/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/vuex-counter',
    name: 'VuexCounter',
    component: VuexCounter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
