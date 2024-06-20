// 路由配置文件
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'large-screen',
    component: () => import('@/views/index/chart-index.vue') // 懒加载组件
  }
]

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
