<template>
  <div class="EditProduct">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled"
        v-if="product_info">
      <AdminSideNav />
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div ref="product" class="form-group col-md-12">
              <h2>Update {{ product_info.name }} Information</h2>
              <div class="col-md-6 mb-1">
                <label for="product-name" class="form-label"
                  >Product Name</label
                >
                <input
                  ref="name"
                  type="text"
                  class="form-control"
                  v-model="product_info.name"
                  id="product-name"
                  placeholder="Ex: Desk"
                  required
                />
              </div>
              <div class="col-md-6 mb-1">
                <label for="product-description" class="form-label"
                  >Description</label
                >
                <textarea
                  ref="description"
                  class="form-control"
                  v-model="product_info.description"
                  id="product-description"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-md-6 mb-1">
                <label for="price" class="form-label">Price ($)</label>
                <input
                  ref="price"
                  type="number"
                  class="form-control"
                  v-model="product_info.price"
                  id="price"
                  placeholder="Ex: Desk"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="formFile" class="form-label">Image</label>
                <input
                  ref="fileInput"
                  class="form-control"
                  type="file"
                  id="formFile"
                  @change="uploadImage"
                  required
                />
              </div>
              <div class="col-md-6 mb-1">
                <label for="arURL" class="form-label">AR link</label>
                <input
                  type="url"
                  class="form-control"
                  v-model="product_info.arURL"
                  id="arURL"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="arID" class="form-label">AR ID</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="product_info.arID"
                  id="arID"
                  required
                />
              </div>

              <div v-if="showLog">
                <ErrorDialog :textMsg="messages" />
              </div>

              <div class="col-md-6 mb-1">
                <button
                  type="submit"
                  class="btn btn-primary button-pink"
                  @click="handleEdit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import slugify from 'slugify'
import AdminSideNav from "../layout/AdminSideNav.vue";
import ErrorDialog from '../Dialog/ErrorDialog.vue'
export default {
  name: "EditProduct",
  components: {
    AdminSideNav,
    ErrorDialog
  },
  data() {
      return{
          product_info: null,
          newImage: null,
          showLog: false,
          messages: null,
      }
  },

  methods: {
    // catch URL of the selected img
    uploadImage(e){
        let file = e.target.files[0]
        //store image in a folder named: product_image in firestore
        let storageRef = firebase.storage().ref('product_image/'+file.name)
        let uploadTask = storageRef.put(file)
        
        uploadTask.on('state_changed', () =>
        {
            this.showLog = true   
            this.messages = 'Please wait until upload successfuly'
        }, (error) =>
        {
            this.showLog = true
            this.messsages = error
        }, () =>
        {
            //get the image link and set it to current image   
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>
            {
                this.newImage = downloadURL
                this.showLog = true
                this.messages = 'Upload image successfully'
            })
        }
        )
    },
    handleEdit(){
        // check if avatar is selected or not
        if(this.newImage && this.product_info.name)
        {   
         
            this.product_info.slug = slugify(this.product_info.name, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true,
            })
            db.collection('products').doc(this.product_info.id).update({
               name: this.product_info.name,
               description: this.product_info.description,
               price: this.product_info.price,
               image: this.newImage,
               arURL: this.product_info.arURL, 
               arID: this.product_info.arID,
               slug: this.product_info.slug 
            }).then(() =>
            {
                this.$router.push({name: 'Admin'})
            }).catch(err =>
            {
                this.showLog = true 
                this.messages = err
            
            })
        } else {
             this.product_info.slug = slugify(this.product_info.name, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true,
            })
            // //locate this product data location via product_id and update the other fields except image
            db.collection('products').doc(this.product_info.id).update({
                    name: this.product_info.name,
                    description: this.product_info.description,
                    price: this.product_info.price,
                    arURL: this.product_info.arURL, 
                    arID: this.product_info.arID,
                    slug: this.product_info.slug 
                }).then(() => {
                    this.$router.push({name: 'Admin'}) //redirect to the user profile page
                }).catch(err => {
                    this.showLog = true
                    this.messages = err
                })
        }
    }
  },
  created(){
      // loop current data of product and put it into form
      let ref = db.collection('products').where('slug', '==', this.$route.params.product_slug)
      ref.get().then(snapshot => {
          snapshot.forEach(doc => {
              this.product_info = doc.data()
              this.product_info.id = doc.id
          })
      })
  }
};
</script>

<style>
</style>