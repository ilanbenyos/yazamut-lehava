import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  },
  state: {
    userData: null,

  },
  getters: {
    getUserData: state => {
      return state.userData;
    }
  },
  mutations: {

    setUser(state, userData) {
      state.userData = userData;
      localStorage.setItem("userData", JSON.stringify(userData));
    },

  },
  actions: {
  }
});
