import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

const app = createApp(App)
// 全局注册：全项目免import直接用
app.component('GlobalDemo', GlobalDemo)
app.mount('#app')
