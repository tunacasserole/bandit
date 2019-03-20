<template>
  <v-card>
    <v-toolbar card color="black" dark dense>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>Recent Endpoint Activity</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>arrow_forward</v-icon>
    </v-toolbar>

    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list-tile :key="item.title" avatar ripple @click="toggle(index)">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{ item.activityType }}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-list-tile-action-text>{{ item.pid }}</v-list-tile-action-text>
            <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>

            <v-icon v-else color="yellow darken-2">star</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selected: [2],
      items: [
        {
          pid: "pid: 15176",
          activityType: "File created!",
          title: "Aaron Henderson"
        },
        {
          pid: "pid: 2176",
          activityType: "Process Started!",
          title: "Ryder Lewis"
        },
        {
          pid: "pid: 6176",
          activityType: "Process Started!",
          title: "System Task"
        },
        {
          pid: "pid: 12176",
          activityType: "Data Sent!",
          title: "Aaron Henderson"
        },
        {
          pid: "pid:176",
          activityType: "File created!",
          title: "Bryan Morrow"
        }
      ]
    };
  },

  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
};
</script>
