import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/assets/flexible'
import '@/assets/fonts/index.scss'
import loading from '@/components/v-loading/index'
import { number } from '@/assets/directive/index'
import App from './App.vue'
// 挂载路由
import router from './router/index'
// 挂载pinia
import pinia from './store'
import './assets/common.scss'
import './global.css'

const app = createApp(App)
app.config.globalProperties.$myMethod = loading()
app.directive('number', number)
app.use(router).use(pinia).mount('#app')
