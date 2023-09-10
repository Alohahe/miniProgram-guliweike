import { http } from '@/utils/request'

import type { ICreateOrderRes, IOrderInfoRes, IWeixinPay, IOrderListRes } from '@/types/pay'

/**
 * @description 创建订单
 * @param courseId 课程id
 * @returns Promise
 */
export const reqCreateOrder = (courseId: string) => {
  return http<ICreateOrderRes>(`/api/order/auth/save/${courseId}`, 'POST')
}

/**
 * @description 订单信息
 * @param orderId 订单id
 * @returns Promise
 */
export const reqOrderInfo = (orderId: string) => {
  return http<IOrderInfoRes>(`/api/order/auth/get/${orderId}`, 'GET')
}

/**
 * @description 微信支付
 * @param orderNo 订单编号
 * @returns Promise
 */
export const reqWeixinPay = (orderNo: string) => {
  return http<IWeixinPay>(`/api/order/webChat/createJsapi/${orderNo}`, 'GET')
}

/**
 * @description 支付状态
 * @param orderNo 订单编号
 * @returns Promise
 */
export const reqPayStatus = (orderNo: string) => {
  return http(`/api/order/webChat/queryPayStatus/${orderNo}`, 'GET')
}

/**
 * @description 订单列表
 * @param params { 当前页码， 每页记录数 }
 * @returns
 */
export const reqOrderList = (params: { page: number; limit: number }) => {
  return http<IOrderListRes>(`/api/order/auth/${params.page}/${params.limit}`, 'GET')
}