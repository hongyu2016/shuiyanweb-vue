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
import io from 'socket.io-client'
import VueImg from 'v-img';
Vue.prototype.$http=axios;
Vue.config.productionTip = false;
//移动端快速点击
//FastClick.attach(document.body);
let FastClick=require('fastclick');
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () =>{
    FastClick.attach(document.body);
  }, false);
}


Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);


//axios设置 当请求出错时自动重新发起请求
//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 2000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if(!config || !config.retry) return Promise.reject(err);

  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;

  // Check if we've maxed out the total number of retries
  if(config.__retryCount >= config.retry) {
    // Reject with the error
    return Promise.reject(err);
  }

  // Increase the retry count
  config.__retryCount += 1;

  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, config.retryDelay || 1);
  });

  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
    return axios(config);
  });
});

//图集浏览插件
const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: true,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: true,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: true,
};
Vue.use(VueImg, vueImgConfig);

//全局变量
const host_url_pro='http://shuiyan.iyuge.cn'; //https://shuiyanweb.herokuapp.com  http://shuiyan.iyuge.cn
const qiniuImgHost='http://p2zln7xdx.bkt.clouddn.com/';//七牛图片服务器地址前缀 用于轮播图和新闻缩略图，新闻详情图不需要
const shuiyanImgThumb='imageView2/1/w/320/h/320/interlace/1/q/75|watermark/2/text/5rC056CU5p2R/font/5qW35L2T/fontsize/500/fill/I0Y4RDdCOA==/dissolve/77/gravity/SouthEast/dx/10/dy/10';//七牛的缩略图处理
const shuiyanImgThumb2='imageView2/1/w/640/h/480/interlace/1/q/75|watermark/2/text/5rC056CU5p2R/font/5qW35L2T/fontsize/500/fill/I0Y4RDdCOA==/dissolve/77/gravity/SouthEast/dx/10/dy/10';//七牛的缩略图处理2
const shuiyanTuku='imageView2/2/w/1280/h/640/interlace/1/q/100|watermark/2/text/5rC056CU5p2R/font/5b6u6L2v6ZuF6buR/fontsize/400/fill/I0Y1QTUyRA==/dissolve/87/gravity/SouthEast/dx/10/dy/10|imageslim';//图库缩略处理
const host_url_dev='http://127.0.0.1:5000';
const host_url=host_url_pro;
const socket = io(host_url,{timeout:1000});

Vue.prototype.socket=socket; //全局注册socket 以便在其他组件使用

Vue.prototype.hostUrl=host_url;
Vue.prototype.qiniuImgHost=qiniuImgHost;
Vue.prototype.shuiyanImgThumb=shuiyanImgThumb;
Vue.prototype.shuiyanImgThumb2=shuiyanImgThumb2;
Vue.prototype.shuiyanTuku=shuiyanTuku;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
