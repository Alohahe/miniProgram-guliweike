import type { IUserInfoItem } from '@/types/login'
import {defineStore} from 'pinia'

//创建store方法
const useUserStore = defineStore('useStore',{
  state:()=>{
    return {
      //从本地读取token。如果未读取到，赋值为空
      token:uni.getStorageSync('token') || '',
      //从本地读取userInfo。如果未读取到，赋值为空
      userInfo:uni.getStorageSync('userInfo')
    }
  },

  //更新方法
  actions:{
    //更新token
    setToken(token:string){
      this.token = token
    },
    //更新userInfo
    setUserInfo(userInfo:IUserInfoItem){
      this.userInfo = userInfo
    }
  }
})

//暴露
export default useUserStore