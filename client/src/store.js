import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  },
  state: {
    isLoader: false,

  },
  getters: {

    isLoader: state => {
      return state.isLoader;
    },
  },
  mutations: {

    setLoader(state, bool) {
      state.isLoader = bool;
    },

  },
  actions: {
    
  }
});
