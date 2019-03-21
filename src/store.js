import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false
  },
  getters: {
    authenticated: state => {
      return state.authenticated;
    }
  },
  mutations: {
    signin(state) {
      state.authenticated = true;
    },
    signout(state) {
      state.authenticated = false;
    }
  },
  actions: {}
});
