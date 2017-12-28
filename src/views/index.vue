<template>
  <div class="main">
    <!--菜单-->
    <b-menu></b-menu>

    <!--轮播图-->
    <b-slide></b-slide>

    <div class="block-main">
      <div class="container">
        <div class="block-main-slide">
          <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
            <h3 class="title">
              <i></i>
              通知公告
              <i></i>
            </h3>
            <span class="des">水研重要的通知公告信息都在这</span>
          </div>
          <div class="block-main-list">
            <b-container>
              <b-row class="notice-ul">
                <b-col cols="7" md="8" class="notice-text text-left">今天开会，进行村委员的选举，大家务必到场</b-col>
                <b-col cols="5" md="4" class="text-right">2017.12.12</b-col>
              </b-row>
            </b-container>
            <b-container>
              <b-row class="notice-ul">
                <b-col cols="7" md="8" class="notice-text text-left">今天开会，进行村委员的选举，大家务必到场</b-col>
                <b-col cols="5" md="4" class="text-right">2017.12.12</b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>
<script>
  import menu from '@/components/Menu'
  import slide from '@/components/Slide'
  import scrollreveal from 'scrollreveal'
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

        // Changing the defaults
        window.sr = scrollreveal({reset: true});
        // Customizing a reveal set
        sr.reveal('.top-slide', {duration: 600});
      })
    },
    methods: {},
    components: {
      'b-menu': menu,
      'b-slide': slide,
    }
  }
</script>
<style scoped>

  .main {
    width: 100%;
  }
  .block-main{
    padding: 30px 0px;
  }
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
    background-color: #0bcc61;
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
  .block-main-list{
    border:2px solid #0bcc61;
  }
  .notice-ul{
    padding: 5px 0px;
    border-bottom: solid #e6f7ed 1px;
  }
  .notice-text{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
