// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/theme'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    theme: 'teal',
    appName: 'WebRTC',
    request: {
      // baseUrl: 'http://talk_api.dei2.com',
      baseUrl: 'http://127.0.0.1:3002',
      path: {
        login: '/index/login'
      }
    }
  }
})
