import type { ICollectList, ICourseDetail, ICourseList, IPagination, IPlayUrRL } from '@/types/course'
import { http } from '@/utils/request'

/**
 * @description 获取课程列表
 * @returns promsie
 */
export const reqCourseList = (pagination:IPagination) => {
  return http<ICourseList>(`/api/edu/course/${pagination.page}/${pagination.limit}`, 'get')
}

/**
 * @description 获取课程详情
 * @param id string
 * @returns promise
 */
export const reqCourseDetail = (id: string) => {
  return http<ICourseDetail>(`/api/edu/course/${id}`, 'get')
}

/**
 * @description 收藏课程
 * @param courseId string
 * @returns promise
 */
export const reqCollectCourse = (courseId: string) => {
  return http(`/api/edu/courseCollect/auth/save/${courseId}`, 'post')
}

/**
 * @description 取消收藏
 * @param courseId tring
 * @returns promise
 */
export const reqCancelCollectCourse = (courseId: string) => {
  return http(`/api/edu/courseCollect/auth/remove/${courseId}`, 'delete')
}

/**
 * @description 获取收藏列表
 * @param page string | number
 * @param limit string | number
 * @returns  promise
 */
export const reqCollectList = (page: string | number, limit: string | number) => {
  return http<ICollectList>(`/api/edu/courseCollect/auth/${page}/${limit}`, 'get')
}

/**
 * @description 阿里云视频播放授权
 * @param videoSourceId string
 * @returns promise
 */
export const reqPlayUrl = (videoSourceId: string) => {
  return http<IPlayUrRL>(`/api/vod/video/getPlayURL/${videoSourceId}`, 'get')
}
