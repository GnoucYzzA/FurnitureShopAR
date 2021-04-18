import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import router from './router'
import Vue from 'vue';
import store from './store'
import Vuelidate from 'vuelidate'
import firebase from 'firebase'
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/styles/app.scss'

Vue.config.productionTip = false
Vue.use(Vuelidate)

let app = null;
// wait for firebase auth to init before creating the app    
firebase.auth().onAuthStateChanged(() =>{

  // init app if not already created
  if(!app){
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
})    
