// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// Vue.config.productionTip = false

import './mock/mockServer'  // 加载模拟数据

// require('http://api.map.baidu.com/api?v=2.0&ak=NK0DTEwcPZEyMZQg0ElqvLwVTCp25tfw&callback=init')
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
