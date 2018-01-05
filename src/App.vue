<template>
  <div id="app">
    <!--<img src="./assets/page_head.jpg"/>-->
    <!--菜单-->
    <b-menu></b-menu>
    <router-view/>
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
</style>
