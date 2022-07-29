import Mock from 'mockjs'
// 引入模拟的数据
import banner from './banner.json'
import floor from './floor.json'
// mock数据  参数1：地址 ，参数2： 请求的数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})