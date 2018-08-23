// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Filters from './filters'
Vue.use(Filters)

import Page from './components/common/index/Page'
Vue.component('page',Page)


Vue.prototype.$center = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
