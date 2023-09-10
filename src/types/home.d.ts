export interface IBannerList {
  bannerList: BannerList[]
  [property: string]: any
}

export interface BannerList {
  deleted: boolean
  gmtCreate: string
  gmtModified: string
  id: string
  imageUrl: string
  linkUrl: string
  sort: number
  title: string
  [property: string]: any
}

export interface ICourseAndTeacherList {
  courseList: CourseList[]
  teacherList: TeacherList[]
  [property: string]: any
}

export interface CourseList {
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

export interface TeacherList {
  avatar: string
  career: string
  deleted: boolean
  gmtCreate: string
  gmtModified: string
  id: string
  intro: string
  level: number
  name: string
  sort: number
  [property: string]: any
}
