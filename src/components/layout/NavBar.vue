<template>
  <header class="l-header" id="header">
    <nav class="nav bd-grid">
      <div
        class="nav__toggle"
        id="nav-toggle"
        @click="showMenu('nav-toggle', 'nav-menu')"
      >
        <i class="fas fa-th"></i>
      </div>

      <router-link :to="{ name: 'LandingPage' }" class="nav__logo"
        >Roby</router-link
      >
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link :to="{ name: 'AllProducts' }" class="nav__link active"
              >Products</router-link
            >
          </li>
          <li class="nav__item">
            <a href="#featured" class="nav__link">Features</a>
          </li>
          <li class="nav__item">
            <a href="#women" class="nav__link">Women</a>
          </li>
          <li class="nav__item" v-if="!user">
            <!-- <a href="#new" class="nav__link">New</a> -->
            <router-link :to="{ name: 'Register' }" class="nav__link"
              >Register</router-link
            >
          </li>
          <li class="nav__item" v-if="!user">
            <router-link :to="{ name: 'Login' }" class="nav__link"
              >Login</router-link
            >
          </li>
          <li class="nav__item" v-if="user"><a @click="logout">Logout</a></li>
          <li class="nav__item">
            <router-link
              v-if="user_info"
              :to="{ name: 'UserProfile', params: { id: this.user_info.id } }"
            >
              <span class="full-name">
                {{ user_info.fullName }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- <div class="nav__shop">
        <i class="fas fa-shopping-basket"></i>
      </div> -->

      <div v-if="user_info" class="profile-pic">
        <router-link
          :to="{ name: 'EditUserProfile', params: { id: this.user_info.id } }"
        >
          <img class="ava-profile" :src="user_info.avatar" />
          <div class="overlay">
            <a href="#" class="icon" title="User Profile">
              <i class="fas fa-pen"></i>
            </a>
          </div>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "NavBar",
  data() {
    return {
      user: null,
      user_info: null,
    };
  },
  methods: {
    showMenu(toggleId, navId) {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
        });
      }
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
          this.user = null;
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        let ref = db.collection("users").where("user_id", "==", this.user.uid);
        ref.get().then((snapshot) => {
          if (snapshot) {
            snapshot.forEach((doc) => {
              if (doc) {
                this.user_info = doc.data();
                this.user_info.id = doc.id;
              }
            });
          }
        });
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
ul {
  margin: 0;
}
ul {
  padding: 0;
  list-style: none;
}
.v-application a {
  text-decoration: none;
  color: var(--dark-color);
}
.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--dark-color-lighten);
}
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: var(--header-height);
    left: -100%;
    width: 70%;
    height: 100vh;
    padding: 2rem;
    background-color: var(--white-color);
    transition: 0.5s;
  }
}

.nav__item {
  margin-bottom: var(--mb-4);
}

.nav__logo {
  font-weight: var(--font-semi-bold);
}

.nav__toggle,
.nav__shop {
  font-size: 1.3rem;
  cursor: pointer;
}

.nav__toggle {
  margin-left: 5px;
}

.nav__shop {
  margin-right: 5px;
}

/* Show menu*/
.show {
  left: 0;
}
/*Active Link */
.active {
  position: relative;
}

.active::before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 45%;
  width: 4px;
  height: 4px;
  background-color: var(--dark-color);
  border-radius: 50%;
}
/*Change color header*/
.scroll-header {
  background-color: var(--white-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__menu {
    margin-left: auto;
  }
  .nav__list {
    display: flex;
  }
  .nav__item {
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
}
/* Avatar */
.ava-profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.profile-pic {
  position: relative;
  width: 100%;
  max-width: 40px;
  max-height: 40px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: black;
  border-radius: 50%;
}

.profile-pic:hover .overlay {
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