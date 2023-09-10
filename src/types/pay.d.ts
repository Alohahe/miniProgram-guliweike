/**
 * 创建订单
 */
export type ICreateOrderRes = {
  orderId: string
}

/**
 * 订单信息
 */
export type IOrderInfoRes = {
  item: {
    id: string
    gmtCreate: string
    gmtModified: string
    deleted: boolean
    orderNo: string
    courseId: string
    courseTitle: string
    courseCover: string
    teacherName: string
    memberId: string
    nickname: string
    mobile: string
    totalFee: number
    payType: number
    status: number
  }
}

/**
 * 微信支付
 */
export type IWeixinPay = {
  timeStamp: string
  package: string
  paySign: string
  signType: string
  nonceStr: string
}

/**
 * 订单列表
 */
export type IOrderListRes = {
  current: number
  total: number
  pages: number
  size: number
  hasPrevious: boolean
  hasNext: boolean
  items: IOrderItem[]
}

export type IOrderItem = {
  id: string
  gmtCreate: string
  gmtModified: string
  deleted: null
  orderNo: string
  courseId: string
  courseTitle: string
  courseCover: string
  teacherName: string
  memberId: string
  nickname: string
  mobile: string
  totalFee: number
  payType: null
  status: number
} 