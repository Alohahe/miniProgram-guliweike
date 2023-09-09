import un, { type UnMethod } from '@uni-helper/uni-network'
import { env } from './env'
import type { IResponseData } from '@/types/http'

//创建实例
const instance = un.create({
  baseUrl: env.baseURL,
  timeout: 5000
})

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    //从本地获取token
    const token = uni.getStorageSync('token')
    //判断token是否存在,token存在，向请求头添加token，每次网络请求携带token
    if (token) {
      Object.assign(config, { headers: { token } })
    }
    return config
  },
  (error) => {
    //返回失败的promise
    return Promise.reject(error)
  }
)

//响应拦截器
instance.interceptors.response.use(
  (response: any) => {
    //简化完整的响应体，得到服务器真正响应的数据
    const res = response.data
    // 判断响应的状态码
    switch (res.code) {
      case 200:
        //响应成功处理逻辑
        return res
      case 28004:
        //提示
        uni.showModal({
          title: '提示',
          content: '登录身份已过期，请重新登录',
          showCancel: false
        })
        //清除本地用户信息
        uni.clearStorageSync()
        //返回失败promise
        return Promise.reject(res)
      case 404:
        //提示
        uni.showModal({
          title: '提示',
          content: '接口地址不存在，请检查接口地址',
          showCancel: false
        })
        //返回失败promise
        return Promise.reject(res)
      default:
        //响应失败处理逻辑
        //提示用户
        uni.showToast({
          title: '网络连接超时，请稍后再试',
          icon: 'error'
        })
        //抛出错误，往下继续传递
        return Promise.reject(res || 'error')
    }
    // if (res.code !== 200) {
    //   if (res.code !== 28004) {
    //     //其他响应状态码
    //     if (res.code !== 404) {
    //        //提示
    //        uni.showModal({
    //         title: '提示',
    //         content: '接口调用异常，请稍后再试',
    //         showCancel: false
    //       })

    //     } else {
    //       //提示
    //       uni.showModal({
    //         title: '提示',
    //         content: '接口地址不存在，请检查接口地址',
    //         showCancel: false
    //       })
    //     }
    //     //返回失败promise
    //     return Promise.reject(res)
    //   } else {
    //     //token过期
    //     //提示
    //     uni.showModal({
    //       title: '提示',
    //       content: '登录身份已过期，请重新登录',
    //       showCancel: false
    //     })
    //     //清除本地用户信息
    //     uni.clearStorageSync()
    //   }
    //    //抛出错误，往下继续传递
    //    return Promise.reject(res || 'error')
    // } else {
    //   //响应成功处理逻辑
    //   return res
    // }
  },
  (error) => {
    //返回失败的promise
    return Promise.reject(error)
  }
)

//封装发送请求方法
function http<T>(url: string, method: UnMethod, requestData?: any): Promise<IResponseData<T>> {
  //对请求方式进行格式化处理
  const newMethod = method.toLowerCase()

  //判断请求方式，设置对应的请求参数
  const params = newMethod === 'post' || newMethod === 'put' || newMethod === 'delete' ? requestData : {}
  const data = newMethod === 'get' ? requestData : {}

  //发送网络请求
  return instance.request({
    url,
    newMethod,
    params,
    data
  })
}

//暴露
export { instance, http }
