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
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
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
