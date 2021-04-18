<template>
  <div class="add-product">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <AdminSideNav />
      <main class="page-content pt-2">
        <div id="overlay" class="overlay"></div>
        <div class="container-fluid p-5">
          <div class="row">
            <div class="form-group col-md-12">
              <h2>Add a new Product</h2>
              <div class="col-md-6 mb-1">
                <label for="product-name" class="form-label"
                  >Product Name</label
                >
                <input
                  type="text"
                  class="form-control"
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
                  class="form-control"
                  id="product-description"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-md-6 mb-1">
                <label for="price" class="form-label">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Ex: Desk"
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="formFile" class="form-label"
                  >Image</label
                >
                <input class="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AdminSideNav from "../layout/AdminSideNav.vue";
export default {
  name: "AddProduct",
  components: {
    AdminSideNav,
  },
};
</script>

<style>
</style>