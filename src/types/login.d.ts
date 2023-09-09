export interface ILogin {
  token: string
  [property: string]: any
}

export interface IUserInfo {
  item: IUserInfoItem
  [property: string]: any
}

export interface IUserInfoItem {
  null
  avatar: string
  id: string
  mobile: string
  nickname: string
  sex: null
  [property: string]: any
}
