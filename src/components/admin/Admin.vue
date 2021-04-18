<template>
  <div class="admin">
      <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
          <AdminSideNav/>
        <!-- page-content  -->
        <main class="page-content pt-2">
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="form-group col-md-12">
                        <h2>Pro Sidebar</h2>
                        <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>
                    </div>
                </div>
            </div>
        </main>
        <!-- page-content" -->
    </div>
  </div>
</template>

<script>

// import firebase from 'firebase'
// import db from '@/firebase/init'
import AdminSideNav from '../layout/AdminSideNav.vue'
export default {
    name: 'admin',
    components: {
        AdminSideNav
    },
    data(){
        return {
            user: null,
            user_info: null
        }
    },
    methods:{
        
        
    },

    
}
</script>

<style scoped>

</style>