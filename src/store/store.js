import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation.js";
import getters from "./getter";
Vue.use(Vuex);
//定义数据
var state={
  names:"name",
  age:"12",
  count:0,
  arr:[1,2,3]
};


var store=new Vuex.Store({
    state,
    mutations,
    getters
});
export default store;