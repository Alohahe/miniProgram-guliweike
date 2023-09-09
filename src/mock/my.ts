// 导入 uni-icon 图标的类型
import type { UniIconsType } from '@uni-helper/uni-ui-types'

// 面板数据类型
type TPanel = {
  id: number
  title: string
  type: UniIconsType
}

// 初始化第一排面板的数据
export const firstPanel: TPanel[] = [
  { id: 1, title: '收藏', type: 'star' },
  { id: 2, title: '作业', type: 'compose' },
  { id: 3, title: '笔记', type: 'calendar' },
  { id: 4, title: '缓存', type: 'cloud-download' }
]

// 初始化第二排面板的数据
export const twoPanel: TPanel[] = [
  { id: 1, title: '订单', type: 'shop' },
  { id: 2, title: '优惠券', type: 'wallet' }
]
