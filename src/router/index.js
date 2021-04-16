import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopping from '../views/Shopping.vue'
import LandingPage from '../components/home/LandingPage.vue'
import AllProducts from '../components/AllProducts.vue'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/allproducts',
    name: 'AllProducts',
    component: AllProducts
  },
  {
    path: '/store',
    name: 'Shopping',
    component: Shopping
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
