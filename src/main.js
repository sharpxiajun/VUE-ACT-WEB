// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppView'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import DataTables from 'vue-data-tables'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI)
Vue.use(DataTables)

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

const  vuex_store = new Vuex.Store({
  state:{
    test:"",
    curMenuIndex:"0"
  },
  mutations:{
    testftn(state){
      alert(state.test);
    }
  }
})

new Vue({
  el: '#app',
  router,
  store:vuex_store,
  template: '<App/>',
  components: {App}
});
