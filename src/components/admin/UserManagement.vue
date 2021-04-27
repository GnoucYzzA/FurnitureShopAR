<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <AdminSideNav />
      <!-- page-content  -->
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>User Management</h2>
              <div class="table-responsive">
                <table
                  id="pagination-table"
                  class="table table-bordered table-hover mydatatable"
                >
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Full name</th>
                      <th scope="col">Email</th>
                      <th scope="col">User ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.fullName }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.user_id }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- page-content" -->
    </div>
    <!-- <EditProduct/> -->

  </div>
</template>

<script>
import firebase from 'firebase'
import db from "@/firebase/init";
import AdminSideNav from "../layout/AdminSideNav.vue";
export default {
    name: 'UserManagment',
    components: {
        AdminSideNav
    },
    data() {
        return {
            users: []
        }
    },
    beforeCreate() {
    db.collection("users")
      .get()
      .then((snapshot) => {
        if (snapshot) {
          snapshot.forEach((doc) => {
            this.users.push({ 
            id: doc.id,
            user_id: doc.data().user_id,
            fullName: doc.data().fullName,
            email: doc.data().email,
            });
          });
        }
      });
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
  mounted() {
      
  }
}
</script>

<style>

</style>