<template>
  <div class="menu-box" v-bind:class="menubg_style">

    <b-navbar class="container new-menu-bg" toggleable="md" type="dark" variant="" fixed="top" v-bind:style="nav_bg">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="../assets/logo.png" alt="水研村" class="logo-img">
        <!--水研村-->
      </b-navbar-brand>
      <b-collapse is-nav v-model="showCollapse" id="nav_collapse" class="new-collapse">

        <b-navbar-nav>
          <router-link tag="li" to="/" class="nav-item menu-link" exact>
            <a href="" class="nav-link">主页</a>
          </router-link>
          <router-link tag="li" :to="{name:'news'}" class="nav-item menu-link" exact>
            <a href="" class="nav-link">水研新闻</a>
          </router-link>
          <router-link tag="li" :to="{name:'contactus'}" class="nav-item menu-link" exact>
            <a href="" class="nav-link">联系我们</a>
          </router-link>


          <!--<router-link tag="li" to="" class="nav-item menu-link">
            <a href="" class="nav-link">水研风采</a>
          </router-link>-->
          <!--<b-nav-item href="#" class="menu-link" active>主页</b-nav-item>
          <b-nav-item href="#" class="menu-link">水研新闻</b-nav-item>
          <b-nav-item href="#" class="menu-link">水研风采</b-nav-item>
          <b-nav-item href="#" class="menu-link">政务公开</b-nav-item>
          <b-nav-item href="#" class="menu-link">关于水研</b-nav-item>
          <b-nav-item href="#" class="menu-link">联系我们</b-nav-item>-->
          <b-nav-item href="http://shuiyan.iyuge.cn" class="menu-link" target="_blank">后台登陆</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </div>
</template>
<script>
    import eventBus from '../assets/eventBus';  //同级组件通信 中央事务总线
    export default {
        name: 'menus',
        data () {
            return {
              menubg_style:'',  //鼠标滚动一定距离改变背景颜色
              nav_bg:{},//菜单栏的背景色
              showCollapse:false,
              active:false,
              msg:'默认值'  //同级组件通信 中央事务总线
            }
        },
        methods: {
          handleScroll () {
            //监听滚动
            let winScrollY=window.scrollY;
            if(winScrollY>200){
              this.menubg_style='deep-bg'
            }else{
              this.menubg_style=''
            }
          }
        },

        mounted(){
          this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            //同级组件通信 中央事务总线
            /*eventBus.$on('userC',(msg)=>{
            	this.msg=msg;
            });*/
            //如果当前路由是新闻，则选中新闻菜单
            /*if(this.$route.matched[0].name=='news'){
              this.active=true;
            }else{
              this.active=false;
            }*/

            //监听滚动
            window.addEventListener('scroll', this.handleScroll);

          })
        },
        watch:{
          //检测值得变化 showCollapse对应data中的变量名
          showCollapse:function (val,oldVal) {
            if(val==true){//此时 激活了下拉菜单 需要更改背景颜色
              this.nav_bg={
                backgroundColor:'rgb(0, 0, 0)'
              }
            }else{
              this.nav_bg={}
            }
          },
          '$route'(to,from){
          	/*if(to.matched[0].name=='news'){
          		this.active=true;
            }else{
              this.active=false;
            }*/
          }
        }
    }
</script>
<style scoped>
  .menu-box{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1029;
    background-color: rgba(0,0,0,0.2);
    transition: all 0.3s 0.2s;
  }
  .deep-bg{
    background-color: rgba(0,0,0,1);
  }
  .logo-img{
    height: 35px;
  }

  .new-menu-bg{
    /*background-color:rgba(12,189,60,0.68)*/
    background-color:rgba(0,0,0,0);

  }
  .menu-link{
    margin: 0 5px;
  }
  .menu-link>a.nav-link{
    color: rgba(255, 255, 255, 0.9);
  }
  .menu-active .nav-link{
    border-bottom: 2px solid #28a745;
  }

</style>
