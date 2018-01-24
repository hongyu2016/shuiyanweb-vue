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
//import VueSocketio from 'vue-socket.io';
import io from 'socket.io-client'


Vue.config.productionTip = false;
//FastClick.attach(document.body);
let FastClick=require('fastclick');
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () =>{
    FastClick.attach(document.body);
  }, false);
}
Vue.prototype.$http=axios;

Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);

const host_url_pro='https://shuiyanweb.herokuapp.com';
const qiniuImgHost='http://p2zln7xdx.bkt.clouddn.com/';//七牛图片服务器地址前缀 用于轮播图和新闻缩略图，新闻详情图不需要
const shuiyanImgThumb='imageView2/1/w/320/h/320/interlace/1/q/75|watermark/2/text/5rC056CU5p2R/font/5qW35L2T/fontsize/500/fill/I0Y4RDdCOA==/dissolve/77/gravity/SouthEast/dx/10/dy/10';//七牛的缩略图处理
const shuiyanImgThumb2='imageView2/1/w/640/h/480/interlace/1/q/75|watermark/2/text/5rC056CU5p2R/font/5qW35L2T/fontsize/500/fill/I0Y4RDdCOA==/dissolve/77/gravity/SouthEast/dx/10/dy/10';//七牛的缩略图处理2
const host_url_dev='http://127.0.0.1:5000';
const host_url=host_url_pro;
const socket = io(host_url);
Vue.prototype.socket=socket; //全局注册socket 以便在其他组件使用

Vue.prototype.hostUrl=host_url;
Vue.prototype.qiniuImgHost=qiniuImgHost;
Vue.prototype.shuiyanImgThumb=shuiyanImgThumb;
Vue.prototype.shuiyanImgThumb2=shuiyanImgThumb2;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
