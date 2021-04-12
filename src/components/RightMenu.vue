<template>
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
        <template v-for="friend in friends">
          <v-list-item :key="friend.title">
            <v-list-item-avatar rounded>
              <img :src="friend.avatar" alt="avataruser" />
            </v-list-item-avatar>
            <template>
              <v-list-item-content>
                <v-list-item-title v-html="friend.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="friend.subtitle"
                ></v-list-item-subtitle>
                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="friend.action"
                  ></v-list-item-action-text>
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
</template>

<script>
export default {
    name: 'RightMenu',
    props: ["friends"],
};
</script>

<style>
</style>