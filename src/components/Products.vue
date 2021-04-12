<template>
<v-col cols="12" sm="6">
  <search></search>
  <v-card class="rounded-xl mt-2">
    <v-row>
      <v-col cols="12" sm="4" align="center">
        <v-avatar size="300" tile>
          <v-img src="sofa.png"></v-img>
        </v-avatar>
        <v-btn fab icon class="ml-8"><v-icon>fas fa-minus</v-icon></v-btn>
        1
        <v-btn fab icon><v-icon>fas fa-plus</v-icon></v-btn>
      </v-col>
      <v-col cols="12" sm="8" class="px-10">
        <v-app-bar flat color="rgba(0,0,0,0)">
          <v-spacer></v-spacer>
          <v-icon color="grey lighten-1">fas fa-heart</v-icon>
        </v-app-bar>
        <h3 class="grey--text">Super Chair</h3>
        <p class="grey--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sed
          suscipit est odit incidunt, iure enim officiis molestiae. Nihil alias
          temporibus accusantium ipsum omnis voluptates perspiciatis.
          Consequatur ipsa dolorem harum.
        </p>
        <h5 class="grey--text">Overview</h5>
        <v-row>
          <v-col cols="12" sm="6">
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-avatar color="#FDD3E9" size="30" class="mr-3">
                <v-icon small color="grey darken-1">fas fa-calender-alt</v-icon>
              </v-avatar>
              30 Days
            </v-app-bar>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-avatar color="#FDD3E9" size="30" class="mr-3">
                <v-icon small color="grey darken-1">fas fa-compress-alt</v-icon>
              </v-avatar>
              4.7 Diameter
            </v-app-bar>
          </v-col>
          <v-col cols="12" sm="6">
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-avatar color="#FDD3E9" size="30" class="mr-3">
                <v-icon small color="grey darken-1"
                  >fas fa-temperature-low</v-icon
                >
              </v-avatar>
              70% Humidity
            </v-app-bar>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <v-avatar color="#FDD3E9" size="30" class="mr-3">
                <v-icon small color="grey darken-1">fas fa-tint</v-icon>
              </v-avatar>
              4.2° Height
            </v-app-bar>
          </v-col>
        </v-row>
        <v-btn rounded color="warning" class="mt-8"
          ><v-icon left>fas fa-plus</v-icon>Add to cart</v-btn
        >
        <strong class="ml-2">$234</strong>
      </v-col>
    </v-row>
  </v-card>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card class="rounded-xl mt-16">
        <v-row>
          <!-- <v-col cols="12" sm="4" align="center"> -->
          <v-col cols="12" sm="6" align="center">
            <v-avatar size="200" tile class="mt-n10">
              <v-img src="desk.png"></v-img>
            </v-avatar>
          </v-col>
          <!-- <v-col cols="12" sm="8" class="pad-10">  -->
          <v-col cols="12" sm="6" class="pad-10">
            <h3 class="black--text">Super Desk</h3>
            <h3 class="black--text">$444</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card class="rounded-xl mt-16">
        <v-row>
          <v-col cols="12" sm="6" align="center">
            <v-avatar size="300" tile class="mt-n16">
              <v-img src="sofa2.png"></v-img>
            </v-avatar>
          </v-col>
          <v-col cols="12" sm="6" class="pad-10">
            <h3 class="black--text">Super Sofa</h3>
            <h3 class="black--text">$445</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  </v-col>
</template>

<script>
import SearchBar from "../components/SearchInput.vue"
export default {
    name: 'Products',
    components: {search: SearchBar}
};
</script>

<style>
</style>