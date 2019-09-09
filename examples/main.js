import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import EchojoyUI from './../packages'
// 注册组件库
Vue.use(EchojoyUI)

import "./assets/icon/iconfont.css";

import EchojoyMessage from './../packages/message/src/message.js'
Vue.prototype.$message = EchojoyMessage;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
