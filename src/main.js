// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import VueLazyLoad from 'vue-lazyload'
//import VueTouch from 'vue-touch'

Vue.config.productionTip = false;
Vue.prototype.$http=axios;
Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);
/*Vue.use(VueLazyLoad);
Vue.use(VueTouch, { name: 'v-touch' });*/
//const host_url='https://shuiyanweb.herokuapp.com';
const host_url='http://127.0.0.1:5000';
Vue.prototype.hostUrl=host_url;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
