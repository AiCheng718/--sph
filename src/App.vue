<template>
  <div id="app">
    <!-- 头部 -->
    <Header></Header>
    <!-- 路由展示 -->
    <router-view></router-view>
    <!-- 底部 -->
    <!-- 在主页与搜索页显示，在登录页和注册页隐藏 -->
    <Footer v-show="this.$route.meta.vshow"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/header_.vue'
import Footer from './components/Footer/footer_.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 三级联动只向服务器获取一次数据   优化项目
    this.$store.dispatch('home/threeLine', 'threeLine')
  }
}
</script>

<style></style>
