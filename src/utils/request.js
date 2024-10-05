// 1. 创建一个新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1. 剥离无效数据  2. 处理token失效
// 4. 导出一个函数，调用当前的axsio实例发请求，返回值promise
import axios from 'axios'
import { useUserStore } from '@/store/userStore'
import router from '@/router'


// 导出基准地址，原因：其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 拦截业务逻辑(查看userStore中是否有token, 有token进行头部携带)
  // 1. 获取用户信息对象
  const userStore = useUserStore()
  // 2. 判断是否有token
  const token = userStore.userInfo.profile.token
  console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config

}, err => {
  // 失败的回调函数，处理请求失败，比如token失效，网络不通或者请求超时等情况，统一做处理
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(res => res.data, err => {
  // 拦截 401 错误，需要重新登录
  const userStore = useUserStore()
  if (err.response && err.response.status === 401) {
    // 1. 清空无效用户信息
    // 2. 跳转到登录页
    // 3. 跳转需要传参（当前路由地址）给登录页码
    userStore.setUserInfo({})
    // 获取当前路由
    // console.log(router.currentRoute.value.fullPath)
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath) // encodeURIComponent 转换uri编码，防止解析地址出问题
    router.push(`/login?redirectUrl=${fullPath}`)
  }
  // 失败的回调函数，处理请求失败，比如token失效，网络不通或者请求超时等情况，统一做处理
  return Promise.reject(err)
})


// 封装请求函数
export default (url, method, submitData) => {
  // 请求地址，请求方式，携带参数
  return instance({
    url,
    method,
    // 1. 如果是get请求，需要使用params来传递submitData
    // 2. 如果不是get请求，通过data传递submitData
    // [params/data]: submitData  JS的[]可以写表达式，表达式结果作为key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
