// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/theme'

Vue.config.productionTip = false

// function isSupportSticky () {
//   var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-']
//   var stickyText = ''
//   for (var i = 0; i < prefixTestList.length; i++) {
//     stickyText += 'position:' + prefixTestList[i] + 'sticky;'
//   }
//   // 创建一个dom来检查
//   var div = document.createElement('div')
//   var body = document.body
//   div.style.cssText = 'display:none;' + stickyText
//   body.appendChild(div)
//   var isSupport = /sticky/i.test(window.getComputedStyle(div).position)
//   body.removeChild(div)
//   div = null
//   return isSupport
// }
//
// function onScroll (e) {
//   window.scrollY >= navOffsetY ? nav.classList.add('fixed') : nav.classList.remove('fixed')
// }
// if (isSupportSticky()) {
//   var nav = document.querySelector('.nav')
//   var navOffsetY = nav.offsetTop
//   window.addEventListener('scroll', onScroll)
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    theme: 'purple',
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
