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
              <h2>Product List</h2>
              <div class="table-responsive">
                <table
                  id="pagination-table"
                  class="table table-bordered table-hover mydatatable"
                >
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Product name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Image</th>
                      <th scope="col">AR Link</th>
                      <th scope="col">AR ID</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.name }}</td>
                      <td>{{ product.description }}</td>
                      <td>{{ product.price }}</td>
                      <td>
                        <img :src="product.image" alt="" class="product__img" />
                      </td>
                      <td>{{ product.arURL }}</td>
                      <td>{{ product.arID }}</td>
                      <td>
                        <button  class="btn btn-primary">
                            <router-link :to="{ name: 'EditProduct', params: { product_slug: product.slug } }">
                                Update
                            </router-link>
                        </button>
                        <button
                          @click="deleteProduct(product.id)"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
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
// import EditProduct from "../action/EditProduct.vue"
import $ from 'jquery'

export default {
  name: "admin",
  components: {
    AdminSideNav,
    // EditProduct
  },
  data() {
    return {
      products: [],

    };
  },
  methods: {
    editProduct() {
        $('#edit').modal('show');
    },
    deleteProduct(doc) {
      if (confirm("Are you sure ?")) {
        console.log(doc)
        console.log(this.products)
        db.collection("products")
          .doc(doc)
          .delete()
          .then(() => {
            console.log("Product successfully deleted!");
          })
          .catch((error) => {
            console.error("Error removing product: ", error);
          });
      }
    },
  },


  beforeCreate() {
    db.collection("products")
      .get()
      .then((snapshot) => {
        if (snapshot) {
          snapshot.forEach((doc) => {
            this.products.push({ 
            id: doc.id,
            image: doc.data().image,
            description: doc.data().description,
            name: doc.data().name,
            price: doc.data().price,
            arURL: doc.data().arURL,
            arID: doc.data().arID,
            slug: doc.data().slug
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
};
</script>

<style scoped>
a {
    color: #fff;
}
table tbody tr td .product__img {
  width: 150px;
}
</style>