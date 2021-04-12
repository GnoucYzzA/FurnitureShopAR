<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3">
          <topleftnav></topleftnav>
          <leftmenu :products="products"></leftmenu>
        </v-col>
        <products></products>
        <v-col cols="12" sm="3">
          <toprightnav></toprightnav>
          <rightmenu :friends="friends"></rightmenu>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TopLeftNavigation from "../components/TopLeftNavigation.vue";
import TopRightNavigation from "../components/TopRightNavigation.vue"
import LeftMenu from "../components/LeftMenu.vue";
import RightMenu from "../components/RightMenu.vue"
import Products from "../components/Products.vue";
export default {
  name: 'Home',
  components: {
    topleftnav: TopLeftNavigation,
    toprightnav: TopRightNavigation,
    leftmenu: LeftMenu,
    rightmenu: RightMenu,
    products: Products,
  },
  data: () => ({
    products: [
      { header: "Top Selling" },
      {
        avatar: "desk.png",
        title: `<strong>Computer Desk</strong>`,
        subtitle: "650",
        money: `<strong>$235</strong>`,
      },
      {
        avatar: "sofa.png",
        title: `<strong>Small Sofa</strong>`,
        subtitle: "760",
        money: `<strong>$400</strong>`,
      },
      {
        avatar: "sofa2.png",
        title: `<strong>Modern Sofa</strong>`,
        subtitle: "712",
        money: `<strong>$500</strong>`,
      },
      {
        avatar: "desk.png",
        title: `<strong>Computer Desk v2</strong>`,
        subtitle: "690",
        money: `<strong>$600</strong>`,
      },
      {
        avatar: "sofa.png",
        title: `<strong>Sofa v2</strong>`,
        subtitle: "554",
        money: `<strong>$264</strong>`,
      },
      {
        avatar: "sofa2.png",
        title: `<strong>Modern Sofa v2</strong>`,
        subtitle: "539",
        money: `<strong>$214</strong>`,
      },
    ],
    friends: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        actions: "15 mins",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend.`,
        title: `<strong>me, Scrott, Jenifer (19)</strong>`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        actions: "15 mins",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend.`,
        title: `<strong>Hanshinshin (19)</strong>`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        actions: "15 mins",
        headline: "Brunch this weekend?",
        subtitle: `Wanna hangout?`,
        title: `<strong>Scrott (12)</strong>`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        actions: "20 mins",
        headline: "Birthday gift",
        subtitle: `I'll be in your neighborhood doing errands this weekend.`,
        title: `<strong>Trevor Hansen (12)</strong>`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        actions: "15 hr",
        headline: "Recipe to try",
        subtitle: `We should eat this...`,
        title: `<strong>Jenifer (19)</strong>`,
      },
    ],
  }),
};
</script>
<style scoped>
.border {
  border: 2px solid white !important;
}
</style>
