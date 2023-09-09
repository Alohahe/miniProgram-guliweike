import { createSSRApp } from 'vue'
import App from './App.vue'

// 导入全局样式文件
import './static/styles/global.scss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
