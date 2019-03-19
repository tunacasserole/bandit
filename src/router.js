import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FileCreate from "./views/FileCreate.vue";
import FileUpdate from "./views/FileUpdate.vue";
import FileDelete from "./views/FileDelete.vue";
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
      path: "/fileCreate",
      name: "FileCreate",
      component: FileCreate
    },
    {
      path: "/fileDelete",
      name: "FileDelete",
      component: FileDelete
    },
    {
      path: "/fileUpdate",
      name: "FileUpdate",
      component: FileUpdate
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
