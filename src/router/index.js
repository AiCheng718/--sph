// 配置路由
import Vue from "vue";
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 一级路由
import Home from '@/pages/home/home_.vue';
import Login from '@/pages/login/login_.vue';
import Register from '@/pages/register/register_.vue';
import Search from '@/pages/search/search_.vue'
// 二级路由
// 三级路由

// 导出
const router = new VueRouter({
  // 配置路由
  routes:[
  {
    //默认显示
    path:'/',
    redirect:'/home',
  },
    {
      // 主页
    path:'/home',
    component:Home,
    meta:{
      // 是否显示
      vshow:true
    }
  },
  {
    // 登录页
    path:'/login',
    component:Login,
    meta:{
      // 是否显示
      vshow:false
    }
  },
  {
    // 注册页
    path:'/register',
    component:Register,
    meta:{
      // 是否显示
      vshow:false
    }
  },
  {
    // 搜索页
    name:'search',
    path:'/search:srh',
    component:Search,
    // props($route){
    //   return{
    //     srh:$route.params.srh,
    //     k:$route.query.k
    //   }
    // },
      
    meta:{
      // 是否显示
      vshow:true
    }
  }
]
})
export default router