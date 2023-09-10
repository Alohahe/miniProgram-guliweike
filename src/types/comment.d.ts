export type IParams = {
  page: string | number
  limit: string | number
  courseId?: stirng | number
}

export interface ICommentList {
  current: number
  hasNext: boolean
  hasPrevious: boolean
  items: ICommentListItem[]
  pages: number
  size: number
  total: number
  [property: string]: any
}

export interface ICommentListItem {
  avatar: string
  content: string
  courseId: string
  deleted: null
  gmtCreate: string
  gmtModified: string
  id: string
  memberId: string
  nickname: string
  teacherId: string
  [property: string]: any
}

export interface ICommentParams {
  content?: string
  courseId?: string
  teacherId?: string | number
}
