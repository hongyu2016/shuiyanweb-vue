<template>
  <div id="app">
    <!--菜单-->
    <b-menu></b-menu>
    <transition name="slide-left">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition name="slide-left">
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <b-foot></b-foot>
  </div>
</template>

<script>
  import menu from './components/Menu.vue' //菜单
  import foot from './components/Foot.vue'  //底部信息
  export default {
    name: 'app',
    components:{'b-menu':menu,'b-foot':foot}
  }
</script>

<style>
  html,body{
    height:100%;
  }
  *{
    margin: 0;padding: 0;
  }
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .no-padding{
    padding: 0;
  }
  .main{
    min-height: 400px;
  }
  /*路由切换动画*/

  .slide-left-enter-active,.slide-left-leave-active{
    transition: transform .3s ease-in-out,opacity .1s ease-in;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
  }
  .slide-left-enter, .slide-left-leave-active{
    transform: translate3d(-10%, 0, 0);
    -webkit-transform: translate3d(-10%, 0, 0);
    -moz-transform: translate3d(-10%, 0, 0);
    opacity: 0;
  }
  /*修改默认分页的样式*/
  .page-item.active .page-link{
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    box-shadow:none !important;
    color: #fff !important;
  }

  .btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active, .show > .btn-primary.dropdown-toggle,.btn-primary:not([disabled]):not(.disabled):focus{
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    box-shadow:none !important;
    cursor: default;
    color: #fff !important;
  }
  .page-box{
    margin-bottom: 25px;
  }
  .page-box .pagination{
    flex-wrap: wrap;
    justify-content: center;
  }

  /*.page-active:not([disabled]):not(.disabled).active{
    background-color: #28a745;
    border-color: #28a745;
    box-shadow:none;
  }*/

  /*热点新闻*/
  .card-img-top{
    min-height: 200px;
  }
  .page-link{
    color: inherit !important;
  }
  .page-item.disabled .page-link{
    color: #868e96 !important;
  }
  /*每个小模块的标题*/
  .top-slide{
    margin-bottom: 20px;
  }
  .top-slide>h3{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top-slide>h3>i{
    background-color: #28a745;
    width: 40px;
    height: 5px;
    display: block;
    margin-top: 3px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .top-slide>span{
    color: #8c8c8c;
  }
  /*其他页面的顶部图片*/
  .head{
    width: 100%;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .head img{
    max-width: 100%;
  }
  .hidden-sm{
    display: block;
  }
  .hidden-lg{
    display: none;
  }
  @media (max-width: 576px){
    .hidden-sm{
      display: none;
    }
    .hidden-lg{
      display: block;
    }
    .news-focus-img{
      display: none;
    }
    .news-focus-info{
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
  /*轮播图*/
  .page .swiper-pagination-bullet-active{
    background: #f58018;
  }
  /*水研图库*/
  .index-img-list .index-img-column{
    min-height: 100px;

  }
  /*暂无记录*/
  .nodata{
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #969595;
  }
</style>
