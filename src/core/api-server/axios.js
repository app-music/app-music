import axios from 'axios'
import {CommonUtil} from "../utils/common-util";

// 创建axios实例
export const axiosInstance = axios.create({
//   baseURL: process.env.BASE_API, // 也就是你请求后台的端口 也可以不配置
  timeout: 25000, // 请求超时时间
});

// request拦截器
axiosInstance.interceptors.request.use(config => {
  if (CommonUtil.getToken()) {
    config.headers['Authorization'] = CommonUtil.getToken().userCode;
  }
  return config
}, error => {
  // 后期配置一个500 页面 报错的时候就去500页面
  Promise.reject(error)
});

// respone拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 这里存在没有返回值的情况
    if(response){
      return Promise.resolve(response)
    }else {
      console.error('没有返回值');
      return Promise.reject(response)

    }
  },
  error => {
    const status = error.response.status;
    switch (status) {
      case 500:
        alert('服务器错误');
        break;
      case 504:
        alert('网关超时');
        break;
      case 404:
        alert('地址错误');
        break;
      case 401:
        alert('登录失效');
    }
    return Promise.reject()
  }
);

