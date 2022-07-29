import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import home from './home'
import login from './login'
import register from "./register";
import search from "./search";
export default new Vuex.Store({
  // vuex仓库模块化开发
  modules:{
    home,
    register,
    login,
    search
  }
})