<template>
  <v-app>
    <Navigation/>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    HelloWorld,
    Navigation
  },
  data() {
    return {
      //
    };
  }
};
</script>
