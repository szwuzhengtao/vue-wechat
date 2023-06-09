import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import Mainpage from '@/components/Mainpage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: 'home',
      component: home
    },

    {
      path: 'Mainpage',
      component: Mainpage,
      name:'Mainpage'
    }
  ]
})
