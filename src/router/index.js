import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '@/pages/home/index.vue'
import Find from '@/pages/find/index.vue'
import Indent from '@/pages/indent/index.vue'
import Mine from '@/pages/mine/index.vue'
import Details from '@/components/home/details/details.vue'
import Site from '@/components/common/index/site.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/indent',
      name: 'indent',
      component: Indent
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path:'**',
      redirect:'/home'
    }
  ]
})
