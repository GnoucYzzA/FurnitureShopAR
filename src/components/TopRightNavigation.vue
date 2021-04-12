<template>
  <v-card class="mb-2 borderRight" colors="#4FC694">
    <v-toolbar color="#4FC694" dark flat>
      <v-avatar class="ml-14 mr-2 border" size="35">
        <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" alt="avatar" />
      </v-avatar>
      <v-toolbar-title class="title white--text pl-0 mr-3"
        >Azzy Nguyen</v-toolbar-title
      >
      <v-icon small>fas fa-chevron-down</v-icon>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    name: 'TopRightNavigation',
};
</script>

<style scoped>

.borderRight {
  border-radius: 50px 0px 50px 0px !important;
}
</style>