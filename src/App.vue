<template>
  <div id="app">
    <!--<img src="./assets/page_head.jpg"/>-->
    <!--菜单-->
    <b-menu></b-menu>
    <transition name="slide-left">
      <router-view/>
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
  }

  .btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active, .show > .btn-primary.dropdown-toggle,.btn-primary:not([disabled]):not(.disabled):focus{
    background-color: #28a745 !important;
    border-color: #28a745 !important;
    box-shadow:none !important;
    cursor: default;
  }

  /*.page-active:not([disabled]):not(.disabled).active{
    background-color: #28a745;
    border-color: #28a745;
    box-shadow:none;
  }*/

  .page-link{
    color: inherit !important;
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
</style>
