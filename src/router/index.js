import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopping from '../views/Shopping.vue'
import LandingPage from '../components/home/LandingPage.vue'
import AllProducts from '../components/AllProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/shop',
    name: 'Shop',
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
