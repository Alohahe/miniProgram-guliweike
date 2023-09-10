export interface IPagination{
  page:number,
  limit:number
}

export interface ICourseList {
  current: number
  hasNext: boolean
  hasPrevious: boolean
  items: ICourse[]
  pages: number
  size: number
  total: number
  [property: string]: any
}

export interface ICourse {
  buyCount: number
  cover: string
  gmtCreate: string
  gmtModified: string
  id: string
  lessonNum: number
  price: number
  status: string
  subjectId: string
  subjectParentId: string
  teacherId: string
  title: string
  version: number
  viewCount: number
  [property: string]: any
}

export interface ICourseDetail {
  chapterList: ChapterList[]
  course: CourseItem
  isBuy: boolean
  isCollect: boolean
  [property: string]: any
}

export interface ChapterList {
  children?: Child[]
  id?: string
  title?: string
  [property: string]: any
}

export interface Child {
  free: boolean
  id: string
  title: string
  videoSourceId: string
  [property: string]: any
}

export interface CourseItem {
  avatar: string
  buyCount: number
  cover: string
  description: string
  id: string
  intro: string
  lessonNum: number
  price: number
  subjectLevelOne: string
  subjectLevelOneId: string
  subjectLevelTwo: string
  subjectLevelTwoId: string
  teacherId: string
  teacherName: string
  title: string
  viewCount: number
  [property: string]: any
}

export interface IPlayUrRL {
  playURL: string
  [property: string]: any
}

export interface ICollectList {
  current: number
  hasNext: boolean
  hasPrevious: boolean
  items: ICollectItem[]
  pages: number
  size: number
  total: number
  [property: string]: any
}

export interface ICollectItem {
  courseId: string
  cover: string
  gmtCreate: string
  id: string
  lessonNum: number
  price: number
  teacherName: string
  title: string
  [property: string]: any
}
