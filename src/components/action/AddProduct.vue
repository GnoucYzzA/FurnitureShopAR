<template>
  <div class="add-product">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <AdminSideNav />
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div
              ref="product"
              class="form-group col-md-12"
            >
              <h2>Add a new Product</h2>
              <div class="col-md-6 mb-1">
                <label for="product-name" class="form-label"
                  >Product Name</label
                >
                <input
                  ref="name"
                  type="text"
                  class="form-control"
                  v-model="product.name"
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
                  v-model="product.description"
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
                  v-model="product.price"
                  id="price"
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
                  @change="handlePreview"
                  required
                />
                <img
                  v-if="showImage"
                  class="preview-image"
                  :src="srcImage"
                  @click="handleChangeImage"
                />
              </div>
              <div class="col-md-6 mb-1">
                <label for="arURL" class="form-label">AR link</label>
                <input
                  type="url"
                  class="form-control"
                  v-model="product.arURL"
                  id="arURL"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="arID" class="form-label">AR ID</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="product.arID"
                  id="arID"
                  required
                />
              </div>

              <div v-if="showLog">
                <ErrorDialog :textMsg="messages" />
              </div>

              <div class="col-md-6 mb-1">
                <button type="submit" class="btn btn-primary button-pink" @click="handleUpload">
                  Add
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
import ErrorDialog from '@/components/Dialog/ErrorDialog.vue'
import AdminSideNav from "../layout/AdminSideNav.vue";
import firebase from "firebase";
import db from "@/firebase/init";
import slugify from 'slugify';
export default {
  name: "AddProduct",
  components: {
    AdminSideNav,
    ErrorDialog
  },
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: null,
        file: null,
        arURL: "",
        arID: "",
      },
      srcImage: "",
      showImage: false,
      selectedPicture: false,
      messages: null,
      showLog: false,
      slug: null,
    };
  },
  methods: {
    handleChangeImage() {
      this.$refs.fileInput.click();
    },
    handlePreview(event) {
      var file = event.target.files[0];

      if (file) {
        this.product.file = file;
        this.srcImage = URL.createObjectURL(file);
        this.showImage = true;
        this.selectedPicture = true;
      }
    },
    handleUpload() {
      console.log("handleUpload");
      // this.$refs.product.validate((valid) => {
      //   if (valid) {
          this.showLog = false;
          if (this.product.file) {
            // Upload image
            var storageRef = firebase
              .storage()
              .ref("product_image/" + this.product.file.name);
            var uploadTask = storageRef.put(this.product.file);

            uploadTask.on(
              "state_changed",
              () => {
                this.showLog = true;
                this.messages = "Please wait until the image upload";
                this.uploadSuccess = false;
              },
              (error) => {
                this.showLog = true;
                this.messages = error;
              },
              () => {
                // Get the image link and set it to current image
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                  this.showLog = true;
                  this.messages = "Update image successfully";

                  // Save product from the left to right order
                  this.saveProduct(
                    this.product.name,
                    this.product.description,
                    this.product.price,
                    downloadURL,
                    this.product.arURL,
                    this.product.arID
                  );
                });
              }
            );
          } else {
            this.saveProduct(
              this.product.name,
              this.product.description,
              this.product.price,
              null,
              this.product.arURL,
              this.product.arID
            );
          }
      //   }
      // });
    },
    saveProduct(name, description, price, image, arURL, arID) {
        // create a slug
        this.slug = slugify(this.product.name, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        })
        db.collection('products').add({
            name: name,
            description: description,
            price: price,
            image: image,   
            arURL: arURL,
            arID: arID,
            slug: this.slug
        })
        .then(() => {
            // this.closeFormNewProduct('');
            this.$router.push({ name: 'Admin'})
        })
        .catch(err => {
            this.showLog = true 
            this.messages = err
        })
    },
    closeFormNewProduct(data) {
        //Reset form value   
        // Object.assign(this.$data, this.$options.data.apply(this));
        this.selectedPicture = false
        this.showImage = false
        this.srcImage = ''

        if (!data) {
            data = ''
        }

        this.$emit('handleEvent', 'closeFormNewProduct', '')
    }
  },
};
</script>

<style scoped>
.button-pink {
  background: #f53677;
  border-color: #f53677;
  width: 10em;
}
.button-pink:hover {
  background: #f15086;
  border-color: #f53677;
}
 .preview-image {
  width: 150px;
  height: 150px;
  float: left;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
}
</style>