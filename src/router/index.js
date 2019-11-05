import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/page/login'
import Index from '@/components/page/index'
import Home from '@/components/view/home'
import Fenbu from '@/components/view/fenbu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
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
          path:'',
          redirect:'home'
        }
      ]
    }
  ]
})
