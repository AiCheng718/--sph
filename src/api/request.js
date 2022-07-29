// 二次封装axios 加上了请求和响应拦截器
import axios from "axios";
// 引入进度条  start 进度条开始  done 进度条结束
import nProgress from "nprogress";
import "nprogress/nprogress.css";

// 创建一个axios实例
const requests = axios.create({
  // 配置对象
  // 基础路径，每次发送请求时，路径都会带上、api
  baseURL:"/api",
  // 请求超时时间 6s
  timeout:6000,
});

// 请求拦截器 发送请求前拦截器会检测到，可以在请求前做些事
requests.interceptors.request.use((config)=>{
  // config配置对象：里边有headers请求头 
  // 进度条开始
  nProgress.start();
  return config;
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的回调  服务器接收到成功的回到后，可以在这里处理
  // 进度条结束
  nProgress.done();
return res.data;
},()=>{
  // 失败的回调
  return Promise.reject(new Error('faile'));
});


export default requests;