//获取小程序账号信息
const { miniProgram } = uni.getAccountInfoSync()

//获取环境变量信息
const { envVersion } = miniProgram

const env = {
  baseURL: 'https://gmall-prod.atguigu.cn/skb'
}

//判断读取的环境变量信息，更改基准地址
switch (envVersion) {
  case 'develop':
    baseURL: 'https://gmall-prod.atguigu.cn/skb'
    break
  case 'trial':
    baseURL: 'https://gmall-prod.atguigu.cn/skb'
    break
  case 'release':
    baseURL: 'https://gmall-prod.atguigu.cn/skb'
    break
  default:
    baseURL: 'https://gmall-prod.atguigu.cn/skb'
    break
}

export { env }
