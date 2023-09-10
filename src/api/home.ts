import type { IBannerList, ICourseAndTeacherList } from "@/types/home";
import { http } from "@/utils/request";

/**
 * @description 获取首页轮播图api
 * @returns Promise
 */
export const reqBannerList = ()=>{
  return http<IBannerList>('/api/cms/banner','get')
}

/**
 * @descripton 获取首页课程和讲师列表api
 * @returns Promise
 */
export const reqCourseAndTeacherList=()=>{
  return http<ICourseAndTeacherList>('/api/edu/index','get')
}