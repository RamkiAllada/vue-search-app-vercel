import Vuex from "vuex";
import Vue from "vue";
import searchResults from "./modules/searchResults";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    searchResults
  }
});
