import type { ICommentList, ICommentParams } from '@/types/comment'
import { http } from '@/utils/request'

/**
 * @descrption 获取评论列表
 * @param params 
 * @returns 
 */
export const reqCommentList=(page:number,limit:number,data:string)=>{
  return http<ICommentList>(`/api/edu/comment/${page}/${limit}`,'get',data)
}

/**
 * @description 发送评论
 * @param params 
 * @returns 
 */
export const reqSubmitComment=(params:ICommentParams)=>{
  return http('/api/edu/comment/auth/save','post',params)
}