import { threeLinkage,banner,floor } from '@/api'
// 数据存储
const state = {
  arr: [],
  banners: [],
  floor: []
}
// 业务逻辑
const actions = {
  async threeLine(context) {
    // 获取三级联动数据
    let result = await threeLinkage()
    console.log(result)
    if (result.code === 200) {
      // 将数据传给mutations
      context.commit('Three', result)
    }
  },
  // 轮播图首页数据
  async banner(context) {
    // 获取banner传过来的数据
    let result = await banner()
    console.log(result)
    if (result.code === 200) {
      context.commit('Banner', result.data)
    }
  },
  async floor(context) {
    let result = await floor()
    console.log(result)
    if (result.code === 200) {
      context.commit('Floor', result.data)
    }
  }
}
// 修改state的唯一手段
const mutations = {
  Three(state, result) {
    state.arr = result.data
  },
  // 轮播图数据
  Banner(state, result) {
    state.banners = result
  },
  Floor(state, result) {
    state.floor = result
  }
}
// 简化数据
const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
