<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          <v-list-tile v-else :key="i" active_class="black" :to="item.to">
            <v-list-tile-action>
              <v-icon :color="color">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-show="authenticated"
      :color="color"
      app
      absolute
      clipped-left
      style="-webkit-app-region: drag"
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">
        Bandit!
        <span class="font-weight-light"></span>
      </span>
      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
      <v-spacer></v-spacer>
      <v-menu open-on-hover bottom left offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar tile>
              <img src="./assets/icon.png" alt="Bandit">
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile @click="signout">
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <!-- *** Main Page View Loaded Here *** -->
        <router-view/>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    color: "red",
    items: [
      { to: "/dashboard", icon: "dashboard", text: "Dashboard" },
      { divider: true },
      { heading: "File System" },
      { to: "/fileCreate", icon: "add", text: "Launch a file attack" },
      { to: "/fileUpdate", icon: "edit", text: "Edit a file" },
      { to: "/fileDelete", icon: "remove", text: "Delete a file" },
      { divider: true },
      { heading: "System Processes" },
      { to: "/processStart", icon: "replay", text: "Start" },
      { to: "/processKill", icon: "stop", text: "Kill" },
      { divider: true },
      { heading: "Network Connections" },
      { to: "/networkConnect", icon: "power", text: "Connect" },
      { to: "/networkSend", icon: "send", text: "Send Data" },
      { divider: true },
      { heading: "System Logs" },
      { to: "/logs", icon: "list", text: "Review Logs" },
      { divider: true },
      { heading: "Registry Attacks" },
      {
        to: "/",
        icon: "developer_board",
        text: "Windows Registry - coming soon"
      },
      { to: "/", icon: "vpn_key", text: "MAC Keychain - coming soon" }
    ]
  }),

  props: {
    source: String
  },

  computed: {
    authenticated() {
      return this.$store.state.authenticated;
    }
  },

  methods: {
    signout: function() {
      this.$store.state.authenticated = false;
      this.$router.push("signin");
    }
  },
  mounted() {
    this.$router.push("signin");
  }
};
</script>

<style lang="stylus">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>
