<template>
  <div>
    <NavBar />
    <section>
      <div class="imgBx">
        <img src="bg.jpg" alt="" />
      </div>
      <div class="contentBx">
        <div class="formBx">
          <h2>Sign Up</h2>
          <form @submit.prevent="handleSignup">
            <div class="inputBx">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                v-model="user.firstName"
                id="firstName"
                :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
              />
              <div
                v-if="submitted && !$v.user.firstName.required"
                class="invalid-feedback"
              >
                First Name is required
              </div>
            </div>
            <div class="inputBx">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                v-model="user.lastName"
                id="lastName"
                :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
              />
              <div
                v-if="submitted && !$v.user.lastName.required"
                class="invalid-feedback"
              >
                Last Name is required
              </div>
            </div>
            <div class="inputBx">
              <span>Email</span>
              <input
                type="email"
                name="email"
                v-model="user.email"
                id="email"
                :class="{ 'is-invalid': submitted && $v.user.email.$error }"
              />
              <div
                v-if="submitted && $v.user.email.$error"
                class="invalid-feedback"
              >
                <span class="invalid-feedback" v-if="!$v.user.email.required">Email is required</span>
                <span  class="invalid-feedback" v-if="!$v.user.email.email">Email is invalid</span>
              </div>
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input
                type="password"
                name="password"
                v-model="user.password"
                id="password"
                :class="{ 'is-invalid': submitted && $v.user.password.$error }"
              />
              <div
                v-if="submitted && $v.user.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.password.required"
                  >Password is required</span
                >
                <span v-if="!$v.user.password.minLength"
                  >Password must be at least 6 characters</span
                >
              </div>
            </div>

            <div v-if="showLog">
              <ErrorDialog :textMsg="messages" />
            </div>

            <div class="inputBx">
              <input type="submit" value="Sign Up" />
            </div>
            <div class="inputBx">
              <p>
                Already have an account?
                <router-link :to="{ name: 'Login' }">Login Now</router-link>
              </p>
            </div>
          </form>
          <h3>Sign up with social media</h3>
          <ul class="sci">
            <li><img src="@/assets/facebook.png" alt="fb" /></li>
            <li><img src="@/assets/twitter.png" alt="twitter" /></li>
            <li><img src="@/assets/instagram.png" alt="insta" /></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <Footer/> -->
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import NavBar from "@/components/layout/NavBar.vue";
import ErrorDialog from "@/components/Dialog/ErrorDialog"
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "Register",
  components: {
    NavBar,
    ErrorDialog
  },
  data() {
    return {
      user: 
      {
        email: "",
        firstName: null,
        lastName: null,
        fullName: "",
        password: "",
        slug: null,
        avatar: ""
      },
      submitted: false,
      messages: null,
      showLog: false,
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    }
  },
  methods: {
    handleSignup() {
      this.submitted = true;
      this.user.fullName = this.user.firstName + " " + this.user.lastName;
      this.user.slug = slugify(this.user.fullName, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true,
      });
      //doc mean find a doc in the collection
      let ref = db.collection("users").doc(this.user.slug);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(cred => 
        {
                ref.set(
                {
                    fullName: this.user.fullName,
                    user_id: cred.user.uid,
                    //set the defaul avatar for the new user
                    avatar:
                        'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
                })
        })
            .then(() => 
            {
              this.$router.push({ name: "LandingPage" }); //after register, redirect to the user home page
            })
            .catch(err => 
            {
              this.showLog = true
              this.messages = err
            });

          //Stop here if form is invalid
          this.$v.$touch();
          if (this.$v.$invalid) 
          {
            return;
          }
        }
    },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}
section .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
}
section .imgBx:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(225deg, #e91e63, #03a9f4);
  z-index: 1;
  mix-blend-mode: screen;
}
section .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
section .contentBx {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}
section .contentBx .formBx {
  width: 50%;
}
section .contentBx .formBx h2 {
  color: #607d8b;
  font-weight: 600;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-bottom: 4px solid #ff4584;
  display: inline-block;
  letter-spacing: 1px;
}
section .contentBx .formBx .inputBx {
  margin-bottom: 20px;
}
section .contentBx .formBx .inputBx span {
  font-size: 16px;
  margin-bottom: 5px;
  display: inline-block;
  color: #607db8;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
}
section .contentBx .formBx .inputBx input {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 30px;
}
section .contentBx .formBx .inputBx input[type="submit"] {
  background: #ff4584;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
}
section .contentBx .formBx .inputBx input[type="submit"]:hover {
  background: #f53677;
}
section .contentBx .formBx .remember {
  margin-bottom: 10px;
  color: #607d8b;
  font-weight: 400;
  font-size: 14px;
}
section .contentBx .formBx p {
  color: #607d8b;
}
section .contentBx .formBx .invalid-feedback span {
  font-size: 13px;
  color: red !important;
}
section .contentBx .formBx .invalid-feedback  {
  font-size: 13px;
  color: red !important;
}

section .contentBx .formBx p a {
  color: #ff4584;
}
section .contentBx .formBx h3 {
  color: #607d8b;
  text-align: center;
  margin: 80px 0 10px;
  font-weight: 500;
}
section .contentBx .formBx .sci {
  display: flex;
  justify-content: center;
  align-items: center;
}
section .contentBx .formBx .sci li {
  list-style: none;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #607d8b;
  border-radius: 50%;
  margin: 0 7px;
  cursor: pointer;
}
section .contentBx .formBx .sci li:hover {
  background: #ff4584;
}
section .contentBx .formBx .sci li img {
  transform: scale(0.5);
  filter: invert(1);
}

@media (max-width: 768px) {
  section .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  section .contentBx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  section .contentBx .formBx {
    width: 100%;
    padding: 40px;
    background: rgba(255 255 255 / 0.9);
    margin: 50px;
  }
  section .contentBx .formBx h3 {
    color: #607d8b;
    text-align: center;
    margin: 30px 0 10px;
    font-weight: 500;
  }
}
</style>