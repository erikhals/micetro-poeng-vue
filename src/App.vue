<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dense dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav=!sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>Micetro Poeng</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>undo</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>redo</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'undo', title: 'Angre'},
          {icon: 'view_list', title: 'Sceneliste'},
          {icon: 'format_list_numbered', title: 'Poengtavle'},
          {icon: 'stop', title: 'Slutt show'},
          {icon: 'exit_to_app', title: 'Logg ut'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
