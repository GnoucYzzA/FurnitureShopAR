<template>
<div class="side-nav">
    <div
      id="show-sidebar"
      class="btn btn-sm btn-dark"
      @click="toggleMenu"
    >
      <i class="fas fa-bars"></i>
    </div>
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <!-- sidebar-brand  -->
        <div class="sidebar-item sidebar-brand">
          <router-link class="logo-sidebar" :to="{ name: 'LandingPage'}"><img  src="LogoWhite.png" alt=""></router-link>
          <div id="close-sidebar" @click="toggleMenu">
            <i class="fas fa-times"></i>
          </div>
        </div>
        
        <!-- sidebar-header  -->
        <!-- class="sidebar-item sidebar-header d-flex flex-nowrap" -->
        <div
          class="sidebar-item sidebar-header d-flex flex-nowrap"
          v-if="user_info"
        >
          <div class="user-pic">
            <router-link :to="{ name: 'EditUserProfile', params: {id: this.user_info.id }}" title=" Edit User Profile">
            <img
              class="img-responsive img-rounded"
              :src="user_info.avatar"
              alt="User picture"
            />
                 
            </router-link>
          </div>
          <div class="user-info">
            <router-link :to="{ name: 'EditUserProfile', params: {id: this.user_info.id }}" title=" Edit User Profile">
              <strong>{{ user_info.fullName }} <i class="fas fa-pen"></i></strong>
            </router-link>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>

        <!-- sidebar-menu  -->
        <div class="sidebar-item sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>General</span>
            </li>
            <li class="sidebar-dropdown">
              <router-link :to="{ name : 'Admin'}">
                <i class="fa fa-tachometer-alt"></i>
                <span class="menu-text">Dashboard</span>
              </router-link>
            </li>

            <li class="header-menu">
              <span>Extra</span>
            </li>
            <li>
              <router-link :to="{ name: 'AddProduct'}">
                <i class="fas fa-plus"></i>
                <span class="menu-text">Add Product</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UserManagement'}">
                <i class="fa fa-user"></i>
                <span class="menu-text">User Management</span>
              </router-link>
            </li>
            <li v-if="user">
              <a href="#" @click="logOut">
                <i class="fas fa-sign-out-alt"></i>
                <span class="menu-text">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
    </nav>
 </div> 
</template>

<script>
import $ from 'jquery'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'AdminSideNav',
    data() {
        return {
            user: null,
            user_info: null
        }
    },
    methods: {
        // Toggle the sidebar
        toggleMenu(){
            $(".page-wrapper").toggleClass("toggled");
        },

        // Log user out and redirect to Login page 
        logOut() {
            firebase.auth().signOut().then(() =>
            {
                this.$router.push({
                    name: 'Login'
                }),
                this.user = null,
                this.user_info = null
            })
        }
    },

    // Get data of a current user from db before render
    created() {
        firebase.auth().onAuthStateChanged((user) => 
        {
            if (user) {
                this.user = user; 
                let ref = db.collection('users').where('user_id', '==', this.user.uid)
                ref.get().then(snapshot => {
                    if (snapshot) {
                        snapshot.forEach(doc => {
                            if (doc) {
                                this.user_info = doc.data()
                                this.user_info.id = doc.id
                            }
                        })
                    } else {
                        this.user = null
                    }
                })
            }
        })
    }
};
</script>

<style scoped>
.fa-pen{
  margin-left: .5em;
  font-size: .8em;
}
.fa-pen:hover {
  color: #eee;
}
.user-pic img {
  border-radius: 50%;
  width: 60px !important;
  height: 60px !important;
}
.sidebar-wrapper .sidebar-header .user-pic {
  width: 70px;
  margin-right: 14px;
}
.logo-sidebar img{
  width: 200px !important;

}
</style>