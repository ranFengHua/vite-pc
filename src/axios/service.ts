import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例 进行基本参数配置
const service = axios.create({
  // 默认请求地址，根据环境的不同可在.env 文件中进行修改
  baseURL: '/api',
  // 设置接口访问超时时间
  timeout: 20000, // request timeout，
  // 设置请求头中的请求内容类型
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // 跨域时候允许携带凭证
  withCredentials: true
})

//  request interceptor 接口请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(error)
  }
)

//  response interceptor 接口响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const code: number = response.data.code
    if (code !== 200) {
      ElMessage({
        type: 'error',
        message: response.data.message
      })
      return Promise.reject(response.data)
    }
    return response.data
  },
  (error: AxiosError) => {
    ElMessage({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service
