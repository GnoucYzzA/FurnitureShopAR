<template>
 <div class="page-wrapper default-theme sidebar-bg bg1 toggled"
        v-if="user_info">
      <AdminSideNav />
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div ref="product" class="form-group col-md-12">
              <h2>Update {{ user_info.fullName }} Information</h2>
              <div class="col-md-6 mb-1">
                <label for="product-name" class="form-label"
                  >Full Name</label
                >
                <input
                  ref="name"
                  type="text"
                  class="form-control"
                  v-model="user_info.fullName"
                  id="product-name"
                  placeholder="Ex: Desk"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="formFile" class="form-label">Change Avatar</label>
                <input
                  ref="fileInput"
                  class="form-control"
                  type="file"
                  id="formFile"
                  @change="uploadImage"
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
                  @click="Edit"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

import ErrorDialog from '@/components/Dialog/ErrorDialog'
import AdminSideNav from '@/components/layout/AdminSideNav'
export default {
  name: 'EditProfile',
  components: {
    ErrorDialog,
    AdminSideNav
  },
  data() {
    return{
      user: null,
      user_info: null,
      newAva: null,
      showLog: false,
      messages: null
    }
  },
  methods: {
    // catch URL of the selected img
    uploadImage(e){
        let file = e.target.files[0]
        //store image in a folder named: product_image in firestore
        let storageRef = firebase.storage().ref('user_avatar/'+file.name)
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
                this.newAva = downloadURL
                this.showLog = true
                this.messages = 'Upload image successfully'
            })
        }
        )
    },
    Edit(){
        // check if avatar is selected or not
        if(this.newAva)
        {   
  
            db.collection('users').doc(this.user_info.id).update({
              
               fullName: this.user_info.fullName,
               avatar: this.newAva,
            }).then(() =>
            {
                this.$router.push({name: 'Admin'})
            }).catch(err =>
            {
                this.showLog = true 
                this.messages = err
            
            })
        } else {
    
            // //locate this product data location via product_id and update the other fields except image
            db.collection('users').doc(this.user_info.id).update({
                    fullName: this.user_info.fullName,
                }).then(() => {
                    this.$router.push({name: 'Admin'}) //redirect to the user profile page
                }).catch(err => {
                    this.showLog = true
                    this.messages = err
                })
        }
    }
  },
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
}
</script>

<style>

</style>