/**
 * Created by 俊 on 2017/5/3.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppElemView'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './elemsui/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './elemsui/elvuex/store'

//添加mockjs拦截请求，模拟返回服务器数据，联调测试时候最好注释掉
import xjmock from './elemsui/mock/mock.xiajun'
import fmjmock from './elemsui/mock/mock.fuminjie'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI)

// Routing logic
var router = new VueRouter({
  routes: routes,
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});

