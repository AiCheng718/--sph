// 当前模块  API统一管理
import requests from "./request";

// mock模拟
import mockRequest from "./mockrequest"

// 三级联动接口
// http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
// get 无参
// 正常请求接口
export const threeLinkage = ()=>{
  // 发get请求 返回结果是promise对象
  return requests({
    url:'/product/getBaseCategoryList',
    method:'get'
  })
}

// mock请求接口
export const banner = ()=>{
  return mockRequest({
    url:'/banner',
    method:'get'
  })
}
// ????为毛不请求呢
export const floor = ()=>{
  return mockRequest({
    url:'/floor',
    method:'get'
  })
}