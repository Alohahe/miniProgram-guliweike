import type { ILogin, IUserInfo } from "@/types/login";
import { http } from "@/utils/request";

/**
 * @description 微信登录api
 * @returns Promise
 */
export const reqLogin = (code:string)=>{
  return http<ILogin>(`/api/ucenter/webChat/callback?code=${code}`,'get')
}

/**
 * @description 获取用户信息api
 * @returns Promise
 */
export const reqUserInfo=()=>{
  return http<IUserInfo>('/api/ucenter/member/auth/getLoginInfo','get')
}
