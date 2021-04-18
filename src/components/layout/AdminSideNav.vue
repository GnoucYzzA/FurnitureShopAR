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
          <router-link :to="{ name: 'LandingPage'}">Protype</router-link>
          <div id="close-sidebar" @click="toggleMenu">
            <i class="fas fa-times"></i>
          </div>
        </div>
        
        <!-- sidebar-header  -->
        <div
          class="sidebar-item sidebar-header d-flex flex-nowrap"
          v-if="user_info"
        >
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              :src="user_info.avatar"
              alt="User picture"
            />
            <div class="overlay">
            <router-link :to="{ name: 'EditUserProfile', params: {id: this.user_info.id }}" class="icon" title=" Edit User Profile">
              <i class="fas fa-pen"></i>
            </router-link>
          </div>
          </div>
          <div class="user-info">
            <strong>{{ user_info.fullName }}</strong>
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
                <span class="badge badge-pill badge-warning">New</span>
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
              <a href="#">
                <i class="fa fa-calendar"></i>
                <span class="menu-text">Calendar</span>
              </a>
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
.v-application a {
    color: white !important;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20%;
  width: 20%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: black;
  border-radius: 50%;
}
.user-pic:hover .overlay {
  opacity: 1;
}
.icon {
  color: white;
  font-size: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.fa-pen:hover {
  color: #eee;
}

</style>