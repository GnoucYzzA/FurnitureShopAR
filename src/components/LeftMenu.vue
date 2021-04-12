<template>
  <v-card class="rounded-xl">
    <v-list three-lines>
      <template v-for="product in products">
        <v-subheader
          v-if="product.header"
          :key="product.header"
          v-text="product.header"
        ></v-subheader>
        <v-list-item v-else :key="product.title">
          <v-list-item-avatar color="#EFF4F1" size="100" rounded>
            <img :src="product.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="product.title"></v-list-item-title>
            <v-list-item-subtitle v-html="product.subtitle"></v-list-item-subtitle>
            <v-list-item-title v-html="product.money"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "LeftMenu",
  props: ["products"],
  data: () => {
    return {};
  },
};
</script>

<style>

</style>