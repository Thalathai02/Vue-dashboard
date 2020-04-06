import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
if (window.matchMedia("(prefers-color-scheme: dark)")
  .matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

const userSelectDarkMode = window.localStorage.getItem("isDarkMode") === "true";


const state = {
  isDarkMode: userSelectDarkMode
}

const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      window.localStorage.setItem("isDarkMode", "false");

    } else {
      state.isDarkMode = true;
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
}

const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});
