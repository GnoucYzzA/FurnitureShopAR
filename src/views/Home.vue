<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3">
          <v-card class="mb-2 pa-1 borderLeft" color="#4FC694">
            <v-toolbar color="#4FC694" dark flat>
              <v-tabs align-with-title>
                <v-tabs-slider color="white"></v-tabs-slider>
                <v-tab>
                  <v-btn dark icon>
                    <v-icon>fas fa-home</v-icon>
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
          <v-card class="rounded-xl">
            <v-list three-lines>
              <template v-for="(item) in items">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar color="#EFF4F1" size="100" rounded>
                    <img :src="item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    <v-list-item-title v-html="item.money"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>         
              </template>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Search" prepend-inner-icon="fas fa-search" filled rounded color="#4FC694"></v-text-field>
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
                  <p class="grey--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sed suscipit est odit incidunt, iure enim officiis molestiae. Nihil alias temporibus accusantium ipsum omnis voluptates perspiciatis. Consequatur ipsa dolorem harum.</p>
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
                          <v-icon small color="grey darken-1">fas fa-temperature-low</v-icon>
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
                  <v-btn rounded color="warning" class="mt-8"><v-icon left>fas fa-plus</v-icon>Add to cart</v-btn>
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
        <v-col cols="12" sm="3">
          <v-card class="mb-2 borderRight" colors="#4FC694">
            <v-toolbar color="#4FC694" dark flat>
              <v-avatar class="ml-14 mr-2 border" size="35">
                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" alt="avatar" />
              </v-avatar>
              <v-toolbar-title class="title white--text pl-0 mr-3">Azzy Nguyen</v-toolbar-title>
              <v-icon small>fas fa-chevron-down</v-icon>
            </v-toolbar>
          </v-card>
          <v-card class="rounded-xl">
            <v-toolbar flat>
              <v-toolbar-title>Online</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn text class="mr-2">
                <v-badge border bottom color="green" dot offset-x="10" offset-y="20">
                  <v-icon left color="black">fas fa-user</v-icon>
                </v-badge>
                119
              </v-btn>
            </v-toolbar>
            <v-list three-line class="mt-n4">
              <v-list-item-group>
                <template v-for="(item) in files">
                  <v-list-item :key="item.title">
                    <v-list-item-avatar rounded>
                      <img :src="item.avatar" alt="avataruser">
                    </v-list-item-avatar>
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                        <v-list-item-action>
                          <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                        </v-list-item-action>
                      </v-list-item-content>            
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
            <v-toolbar flat class="mt-n5">
              <v-toolbar-title>Recommentdation Friend</v-toolbar-title>
            </v-toolbar>
            <v-app-bar flat color="rga(0,0,0)">
              <v-avatar rounded size="40" class="mr-2">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
              </v-avatar>
              <strong>Nguyen Van Dung</strong>
              <v-spacer></v-spacer>
              <v-btn text color="orange">Add</v-btn>
            </v-app-bar>

            <v-app-bar flat color="rga(0,0,0)">
              <v-avatar rounded size="40" class="mr-2">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
              <strong>Tran Ngoc Thanh</strong>
              <v-spacer></v-spacer>
              <v-btn text color="orange">Add</v-btn>
            </v-app-bar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    items: [
      {header: 'Top Selling'},
      {
        avatar: 'desk.png',
        title: `<strong>Computer Desk</strong>`,
        subtitle: '650',
        money: `<strong>$235</strong>`
      },
      {
        avatar: 'sofa.png',
        title: `<strong>Small Sofa</strong>`,
        subtitle: '760',
        money: `<strong>$400</strong>`
      },
      {
        avatar: 'sofa2.png',
        title: `<strong>Modern Sofa</strong>`,
        subtitle: '712',
        money: `<strong>$500</strong>`
      },
      {
        avatar: 'desk.png',
        title: `<strong>Computer Desk v2</strong>`,
        subtitle: '690',
        money: `<strong>$600</strong>`
      },
      {
        avatar: 'sofa.png',
        title: `<strong>Sofa v2</strong>`,
        subtitle: '554',
        money: `<strong>$264</strong>`
      },
      {
        avatar: 'sofa2.png',
        title: `<strong>Modern Sofa v2</strong>`,
        subtitle: '539',
        money: `<strong>$214</strong>`
      },
      ],
      files :[
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          actions: '15 mins',
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend.`,
          title: `<strong>me, Scrott, Jenifer (19)</strong>`,
        },
               {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          actions: '15 mins',
          headline: 'Brunch this weekend?',
          subtitle: `I'll be in your neighborhood doing errands this weekend.`,
          title: `<strong>Hanshinshin (19)</strong>`,
        },
               {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          actions: '15 mins',
          headline: 'Brunch this weekend?',
          subtitle: `Wanna hangout?`,
          title: `<strong>Scrott (12)</strong>`,
        },
               {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          actions: '20 mins',
          headline: 'Birthday gift',
          subtitle: `I'll be in your neighborhood doing errands this weekend.`,
          title: `<strong>Trevor Hansen (12)</strong>`,
        },
               {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          actions: '15 hr',
          headline: 'Recipe to try',
          subtitle: `We should eat this...`,
          title: `<strong>Jenifer (19)</strong>`,
        },
      ],
  })
}
</script>
<style scoped>
.borderLeft {
  border-radius: 50px 0px 50px 0px !important;
}
.borderRight {
  border-radius: 0px 50px 0px 50px !important;
}
.border {
  border: 2px solid white !important;
}
</style>
