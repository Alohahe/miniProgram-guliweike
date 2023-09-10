import { createSSRApp } from 'vue'
import App from './App.vue'

// 导入全局样式文件
import './static/styles/global.scss'

//导入store
import store from '@/store/store'

export function createApp() {
  const app = createSSRApp(App)
  //将store挂载到app上
  app.use(store)
  return {
    app
  }
}
