<template>
  <div>
    <!-- <NavBar /> -->
    <section>
      <div class="imgBx">
        <img src="bg.jpg" alt="" />
      </div>
      <div class="contentBx">
        <div class="formBx">
          <router-link :to="{ name: 'LandingPage' }"><i class="fas fa-arrow-left fa-lg"></i></router-link>
          <h2>Add a New Product</h2>
          <form ref="product" :model="product"  @submit.prevent="handleUpload">
            <div class="inputBx">
              <span>Product name</span>
              <input
                ref="name"
                type="text"
                name="product"
                v-model="product.name"
                id="product-name"
                :class="{ 'is-invalid': submitted && $v.product.name.$error }"
              />
              <div
                v-if="submitted && $v.product.name.$error"
                class="invalid-feedback"
              >
                <span class="invalid-feedback" v-if="!$v.product.name.required"
                  >Product name is required</span
                >
                <span class="invalid-feedback" v-if="!$v.product.name.alphaNum"
                  >Name must be number or alphabet</span
                >
              </div>
            </div>
            <div class="inputBx">
              <span>Description</span>
              <textarea
                ref="description"
                type="text"
                name="description"
                v-model="product.description"
                id="description"
                :class="{
                  'is-invalid': submitted && $v.product.description.$error,
                }"
              />
              <div
                v-if="submitted && $v.product.description.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.product.description.required"
                  >Description is required</span
                >
                <span v-if="!$v.product.description.minLength"
                  >Description must be at least 20 characters</span
                >
              </div>
            </div>

            <div class="inputBx">
              <span>Price ($)</span>
              <input
                ref="price"
                type="number"
                name="price"
                v-model="product.price"
                id="price"
                :class="{ 'is-invalid': submitted && $v.product.price.$error }"
              />
              <div
                v-if="submitted && $v.product.price.$error"
                class="invalid-feedback"
              >
                <span class="invalid-feedback" v-if="!$v.product.price.required"
                  >Price is required</span
                >
                <span class="invalid-feedback" v-if="!$v.product.price.numeric"
                  >Price must be a number</span
                >
                <span class="invalid-feedback" v-if="!$v.product.price.between"
                  >Price must be between 0 and 999999</span
                >
              </div>
            </div>

            <div class="inputBx">
              <span>Product Image</span>
              <input
                ref="fileInput"
                type="file"
                name="file"
                palceholder="Select picture"
                style="border-radius: 30px}"
                :class="{
                  'is-invalid': submitted && $v.product.image.$error,
                  hidden: selectedPicture,
                }"
                @change="handlePreview"
              />
              <div
                v-if="submitted && $v.product.image.required"
                class="invalid-feedback"
              >
                Product image is required
              </div>
              <img
                v-if="showImage"
                class="preview-image"
                :src="srcImage"
                @click="handleChangeImage"
              />
            </div>

            <div class="inputBx">
              <span>Product AR Link</span>
              <input
                ref="url"
                type="url"
                name="arURL"
                v-model="product.arURL"
                id="arURL"
                :class="{ 'is-invalid': submitted && $v.product.arURL.$error }"
              />
              <div
                v-if="submitted && $v.product.arURL.$error"
                class="invalid-feedback"
              >
                <span class="invalid-feedback" v-if="!$v.product.arURL.required"
                  >AR URL is required</span
                >
                <span class="invalid-feedback" v-if="!$v.product.arURL.url"
                  >URL is invalid</span
                >
              </div>
            </div>

            <div class="inputBx">
              <span>Product AR ID</span>
              <input
                type="text"
                name="arID"
                v-model="product.arID"
                id="arimage"
                :class="{ 'is-invalid': submitted && $v.product.arID.$error }"
              />
              <div
                v-if="submitted && $v.product.arID.required"
                class="invalid-feedback"
              >
                ID is required
              </div>
            </div>

            <div v-if="showLog">
              <ErrorDialog :textMsg="messages" />
            </div>

            <div class="inputBx">
              <input type="submit" value="Upload" />
            </div>
          </form>
        </div>
      </div>
    </section>



    <!-- <Footer/> -->
  </div>
</template>

<script>
// import NavBar from "@/components/layout/NavBar.vue";
import ErrorDialog from "@/components/Dialog/ErrorDialog";
import {
  required,
  alphaNum,
  between,
  url,
  numeric,
  minLength,
  helpers
} from "vuelidate/lib/validators";
import firebase from "firebase";
import db from '@/firebase/init'
const isNameValid = helpers.regex('isNameValid',/^[a-z0-9_ ]*$/i)
export default {
  name: "Login",
  components: {
    // NavBar,
    ErrorDialog,
    // Footer,
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
      srcImage: '',
      showImage: false,
      selectedPicture: false,
      submitted: false,
      messages: null,
      showLog: false,

    };
  },
  
  validations: {
    product: {
      name: { required, alphaNum, isNameValid },
      description: { required, minLength: minLength(20) },
      price: { required, numeric, between: between(0, 999999) },
      image: { required },
      arURL: { required, url },
      arID: { required },
    },
  },
  methods: {
      handleChangeImage() {
          this.$refs.fileInput.click()
      },
      handlePreview(event) {
        var file = event.target.files[0]

        if (file) {
            this.product.file = file
            this.srcImage = URL.createObjectURL(file)
            this.showImage = true
            this.selectedPicture = true
        }
      },
      handleUpload() {
        console.log('handleUpload')     
        // this.$refs.product.validate(valid => {
        //     if (valid) {
              this.submitted = true
                this.showLog =false

                if (this.product.file) {
                    // Upload image
                    var storageRef = firebase.storage().ref('product_image/'+this.product.file.name)
                    var uploadTask = storageRef.put(this.product.file)

                    uploadTask.on('state_changed', () => {
                        this.showLog = true
                        this.messages = 'Please wait until the image upload'
                        this.uploadSuccess = false
                    }, (error) => {
                        this.showLog = true 
                        this.messages = error
                    }, () =>
                    {
                        // Get the image link and set it to current image
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.showLog = true
                            this.messages = 'Update image successfully'

                            // Save product from the left to right order
                            this.saveProduct(this.product.name, this.product.description, this.product.price, downloadURL, this.product.arURL, this.product.arID)
                        })
                    })
                } else {
                    this.saveProduct(this.product.name, this.product.description, this.product.price, null, this.product.arURL, this.product.arID)
                }
        //     }
        // })
      //Stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
    saveProduct(name, description, price, image, arURL, arID) {
        db.collection('products').add({
            name: name,
            description: description,
            price: price,
            image: image,   
            arURL: arURL,
            arID: arID
        })
        .then(() => {
            this.closeFormNewProduct('');
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
  width: 80%;
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
section .contentBx .formBx .inputBx .invalid-feedback span {
  font-size: 13px;
  color: red !important;
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

section .contentBx .formBx .inputBx textarea {
  width: 100%;
  padding: 10px 20px;
  outline: none;
  font-weight: 400;
  border: 1px solid #607d8b;
  font-size: 16px;
  letter-spacing: 1px;
  color: #607d8b;
  background: transparent;
  border-radius: 50px;
}
section .contentBx .formBx .inputBx .preview-image {
  width: 150px;
  height: 150px;
  float: left;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
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

section .contentBx .formBx p {
  color: #607d8b;
}

section .contentBx .formBx p a {
  color: #ff4584;
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
  section .contentBx .formBx .inputBx {
  margin-bottom: .1em;
}
}
.fa-arrow-left{
  margin-right: 6em;
  color: #ff4584;
}
</style>