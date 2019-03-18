import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Files from "./views/Files.vue";
import Network from "./views/Network.vue";
import Processes from "./views/Processes.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/files",
      name: "Files",
      component: Files
    },
    {
      path: "/processes",
      name: "Processes",
      component: Processes
    },
    {
      path: "/network",
      name: "Network",
      component: Network
    }
  ]
});
