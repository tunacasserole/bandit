<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed clipped class="grey lighten-4" app>
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" row align-center>
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
          <v-list-tile v-else :key="i" @click>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :color="color" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">
        Bandit!&nbsp;
        <span class="font-weight-light"></span>
      </span>
      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    color: "red",
    items: [
      { icon: "settings", text: "Dashboard" },
      { divider: true },
      { heading: "File Attacks" },
      { icon: "add", text: "Create new File" },
      { icon: "delete", text: "Remove a File" },
      { icon: "edit", text: "Modify a File" },
      { divider: true },
      { heading: "Network Connections" },
      { icon: "power", text: "Connect" },
      { icon: "send", text: "Send Data" },
      { divider: true },
      { heading: "System Processes" },
      { icon: "replay", text: "Start" },
      { icon: "stop", text: "Kill" },
      { divider: true },
      { heading: "Registry Attacks" },
      { icon: "developer_board", text: "Windows Registry - coming soon" },
      { icon: "vpn_key", text: "MAC Keychain - coming soon" }
    ]
  }),
  props: {
    source: String
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
