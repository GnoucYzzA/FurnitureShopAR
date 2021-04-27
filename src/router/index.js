import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../components/home/LandingPage.vue'
import AllProducts from '../components/AllProducts.vue'
import Register from '@/components/auth/Register.vue'
import Login from '@/components/auth/Login.vue'
import UserProfile from '@/components/profile/UserProfile.vue'
import EditUserProfile from '@/components/action/EditUserProfile.vue'
import Admin from '@/components/admin/Admin.vue'
import AddProduct from '@/components/action/AddProduct.vue'
import EditProduct from '@/components/action/EditProduct.vue'
import UserManagement from '@/components/admin/UserManagement.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
 routes: [
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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile/:id',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-profile/:id',
    name: 'EditUserProfile',
    component: EditUserProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-product/',
    name: 'AddProduct',
    component: AddProduct,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-product/:product_slug',
    name: 'EditProduct',
    component: EditProduct,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user-management',
    name: 'UserManagement',
    component: UserManagement,
    meta: {
      requiresAuth: true
    }
  },
  
  
  ]
})

router.beforeEach((to, from, next) =>{
  //check to see if route requires Auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
  //check Auth state of user
  let user = firebase.auth().currentUser
  if(user){
    // user signed in, proceed to route   
    next()
  } else {
    // no user signed in, redirect to login 
    next({ name: 'Login' })
  }
  } else {
    next()
  }
})



// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
