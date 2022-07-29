<template>
  <div>
    <!-- 使用全局组件 -->
    <TypeNav></TypeNav>
    <!-- 轮播图 -->
    <listContainer></listContainer>
    <!-- 今日推荐 -->
    <todayRecommed></todayRecommed>
    <!-- 商品排行 -->
    <rank></rank>
    <!-- 猜你喜欢 -->
    <like></like>
    <!-- 复用楼层 -->
    <floor></floor>
    <floor></floor>
    <!-- 商标 -->
    <brand></brand>
  </div>
</template>

<script>
import listContainer from './list_container/list_container.vue'
import todayRecommed from './today_recommend/today_recommed.vue'
import rank from './rank/rank_.vue'
import like from './like/like_.vue'
import floor from './floor/floor_.vue'
import brand from './brand/brand_.vue'
export default {
  components: {
    listContainer,
    todayRecommed,
    rank,
    like,
    floor,
    brand
  }
}
</script>

<style></style>
