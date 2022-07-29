<template>
  <div>
    <!-- 商品分类导航 -->
    <div class="type-nav">
      <div class="container">
        <div @mouseleave="leavemouse" @mouseenter="entermouse">
          <h2 class="all">全部商品分类</h2>
          <!-- 过渡动画 -->
          <transition name="sort">
            <div class="sort" v-show="show">
              <!-- 添加事件委派+编程式导航实现路由跳转和传参 -->
              <div class="all-sort-list2" @click="goSearch">
                <!-- 一级  -->
                <!-- :class 动态绑定属性，当右侧内容符合时，展示cur的css样式         -->
                <div class="item" v-for="(c1, index) in arr" :key="c1.categoryId" :class="{ cur: currentIndex == index }">
                  <!-- 添加鼠标移入事件 -->
                  <h3 @mouseenter="changeIndex(index)">
                    <!-- 添加自定义标签，用来判断点的是几级 -->
                    <a :data-catename="c1.categoryName" :data-cate1id="c1.categoryId">{{ c1.categoryName }} {{ index }}</a>
                  </h3>
                  <!-- <div class="item-list clearfix" :style="{ display: currentIndex == index ? 'block' : 'none' }"> -->
                  <div class="item-list clearfix" v-show="currentIndex == index">
                    <!-- 二级 -->
                    <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dl class="fore">
                        <dt>
                          <!-- 添加自定义标签，用来判断点的是几级 -->
                          <a :data-catename="c1.categoryName" :data-cate2id="c2.categoryId">{{ c2.categoryName }}</a>
                        </dt>
                        <!-- 三级 -->
                        <dd>
                          <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                            <!-- 添加自定义标签，用来判断点的是几级 -->
                            <a :data-catename="c1.categoryName" :data-cate3id="c3.categoryId">{{ c3.categoryName }}</a>
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入节流 lodash的throttle   按需引入
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data() {
    return {
      // 鼠标移到的元素索引值
      currentIndex: -1,
      // 显示和隐藏三级联动
      show: true
    }
  },
  // DOM显示完后请求数据
  mounted() {
    // 挂载完毕后，判断当前页面是否是home，若不是则隐藏三级联动
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  computed: {
    // 找到在home中state里存储的arr，通过同名arr显示
    ...mapState('home', ['arr'])
  },
  methods: {
    // 鼠标移入 节流 ES5的键值对写法
    changeIndex: throttle(function (index) {
      // 鼠标移到哪个，就将哪个的索引值传给currentThis
      this.currentIndex = index
    }, 100),
    // 鼠标移入显示
    entermouse() {
      this.show = true
    },
    // 鼠标移出
    leavemouse() {
      this.currentIndex = -1
      if (this.$route.path === '/search') {
        this.show = false
      } else {
        this.show = true
      }
    },
    // 联级跳转
    goSearch(event) {
      // 创建多个对象，获取他们当前的dataset值
      let { catename, cate1id, cate2id, cate3id } = event.target.dataset
      // 判断是不是点击在a标签上
      if (catename) {
        // 将当前的标签进行路由传参
        // 跳转的页面名称
        let location = { name: 'search' }
        // 传递的参数
        let query = { categoryName: catename }

        // 判断点的是几级标签 点击当前级别的标签时，才会当前等级的参数传给query
        if (cate1id) {
          query.category1Id = cate1id
        } else if (cate2id) {
          query.category2Id = cate2id
        } else {
          query.category3Id = cate3id
        }
        // 如果路由跳转带有params参数，则顺便传递过去
        if(this.$route.params){
          location.params = this.$route.params
        }
        // 整合location 和 query
        location.query = query
        // 路由跳转
        this.$router.push(location)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    z-index: 1000;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;
      // overflow: hidden;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          // 二级联动展示界面
          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // 通过 css 控制显示 二三级联动
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: #ccc;
        }
      }
    }
    // 进入的过渡动画
    // 从哪里进入 离开的结束位置
    .sort-enter,
    .sort-leave-to {
      height: 0;
    }
    // 进入结束的位置   从哪里离开
    。sort-enter-to,
    sort-leave {
      height: 461px;
    }
    // 进入与离开的过渡动画的时间和速率
    .sort-enter-active,
    .sort-leave-active {
      overflow: hidden;
      transition: all 0.5s linear;
    }
  }
}
</style>
