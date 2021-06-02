import axios from "axios";

const ajax = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
  headers: {
    contentType: "application/json;charset=utf-8",
  },
  transformResponse: [
    (data) => {
      // 对 data 进行任意转换处理
      return data;
    },
  ],
});

// 请求拦截器
ajax.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
ajax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 处理get请求
const get = (url, params, config = {}) =>
  ajax.get(url, { params: { json: { ...params } }, ...config });

// 处理post请求
const post = (url, params, config = {}) =>
  ajax.post(url, { ...params }, config);

export default {
  get,
  post,
};
