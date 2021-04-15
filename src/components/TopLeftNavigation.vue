<template>
  <v-card class="mb-2 pa-1 borderLeft" color="#4FC694">
    <v-toolbar color="#4FC694" dark flat>
      <v-tabs align-with-title>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab>
          <v-btn dark icon>
            <router-link :to="{ name: 'LandingPage'}"><v-icon>fas fa-home</v-icon></router-link>
          </v-btn>
        </v-tab>
        <v-tab>
          <v-btn dark icon>
            <v-badge content="2" color="orange">
              <v-icon>fas fa-shopping-cart</v-icon>
            </v-badge>
          </v-btn>
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    name: 'TopLeftNavigation',
};
</script>

<style scoped>
.v-application a{
  text-decoration: none;
  color: white;
}
.borderLeft {
  border-radius: 0px 50px 0px 50px !important;
}
</style>