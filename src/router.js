import Vue from "vue";
import Router from "vue-router";
import FileCreate from "./views/FileCreate.vue";
import FileUpdate from "./views/FileUpdate.vue";
import FileDelete from "./views/FileDelete.vue";
import Home from "./views/Home.vue";
import NetworkConnect from "./views/NetworkConnect.vue";
import NetworkSend from "./views/NetworkSend.vue";
import ProcessStart from "./views/ProcessStart.vue";
import ProcessKill from "./views/ProcessKill.vue";

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
      path: "/networkConnect",
      name: "NetworkConnect",
      component: NetworkConnect
    },
    {
      path: "/networkSend",
      name: "NetworkSend",
      component: NetworkSend
    },
    {
      path: "/processStart",
      name: "ProcessStart",
      component: ProcessStart
    },
    {
      path: "/processKill",
      name: "ProcessKill",
      component: ProcessKill
    }
  ]
});
