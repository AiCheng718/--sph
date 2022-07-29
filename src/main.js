import Vue from 'vue'
import App from './App.vue'
// 关闭提示
Vue.config.productionTip = false
// 引入路由
import router from '@/router'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
// 引入Vuex的sotre仓库
import store from './store'

// 注册全局组件
import typeNav from '@/components/type_nav/type_nav.vue'
// 使用全局组件
Vue.component(typeNav.name,typeNav)

// 引入mock数据模拟
import '@/mock/mockServe'

new Vue({
  render: h => h(App),
  router,
  Swiper,
  // 注册后，会多一个$store的属性
  store
}).$mount('#app')
