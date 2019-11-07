import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/index'
import Home from '@/components/view/home'
import Fenbu from '@/components/view/fenbu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/page/login')
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home,
        },
        {
          path: 'fenbu',
          component: Fenbu,
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
// 路由拦截
// Router.beforeEach((to, from, next) => {
//   if (to.path == '/login') { //如果是登录页面路径，就直接next()
//     next();
//   } else { //不然就跳转到登录；
//     next('/login');
//   }
// })