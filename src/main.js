// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@vant/touch-emulator';
import router from './router'
import "amfe-flexible" //移动端适配工具
import FastClick from "fastclick" //解决移动端click事件延迟问题
FastClick.attach(document.body)
import Api from './api/index.js';

Vue.prototype.$api = Api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
