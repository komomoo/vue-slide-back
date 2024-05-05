import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Secondary from '../views/Secondary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      meta: {title: '主页'},
      component: Home,
    },
    {
      path: '/Home/Secondary',
      name: 'Secondary',
      meta: {title: '二级路由'},
      component: Secondary,
    },
    {
      path: '*',
      redirect: '/Home',
    },
  ],
})
