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
            <b-container v-for="list in gonggaolist" :key="list.id">
              <b-row class="notice-ul">
                <b-col cols="8" md="8" class="notice-text text-left" @click="showModal(list.id)" ref="btnShow">{{list.text}}</b-col>
                <b-col cols="4" md="4" class="text-right notice-time">{{list.time}}</b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>

    <!--通知公告弹出框-->
    <b-modal id="modal1" centered title="通知公告" hide-footer lazy header-class="new-model">
      <div class="d-block">{{fulltext}}</div>
    </b-modal>
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
        gonggaolist:[],
        fulltext:'公告内容'//公告全部内容
      }
    },
    mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

        // Changing the defaults
        window.sr = scrollreveal({reset: true});
        // Customizing a reveal set
        sr.reveal('.top-slide', {
        	duration: 600,
          origin: 'top',
          easing: 'ease-in',
          distance: '200px',
          duration: 500,
          delay: 100,
          rotate: { x: 0, y: 0, z: 0 },
          opacity: 0,
          scale: 0.1,
          mobile: true,
          viewOffset: { top: 100, right: 0, bottom: 0, left: 100 }
        });
        this.getlist();
      })
    },
    methods: {
      getlist(){
        this.$http.get('http://127.0.0.1:5000/api/index/slide').then((res) =>{
          this.gonggaolist=[
            {
            	id:1,
            	text:'今天开会，记得来哦',
              time:'2017.12.12'
            },
            {
              id:2,
              text:'今天开会，记得来睡觉',
              time:'2017.12.12'
            },
            {
              id:3,
              text:'今天开会，记得来哦',
              time:'2017.12.12'
            },
            {
              id:4,
              text:'今天开会，记得来哦',
              time:'2017.12.12'
            },
            {
              id:5,
              text:'今天开会，记得来哦',
              time:'2017.12.12'
            }
          ];
          sr.reveal('.block-main-list', {
            duration: 600,
            delay: 200,
            origin: 'bottom',
            distance: '200px',
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            mobile: true,
          });
        });

      },
      showModal (id) {
        console.log(id)
        //拿id去获取内容

        this.$root.$emit('bv::show::modal','modal1')
      }
    },
    components: {
      'b-menu': menu,
      'b-slide': slide,
    }

  }
</script>
<style>
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
  @media (max-width: 500px){
    .notice-text{
      padding-right: 1px;
    }
    .notice-time{
      padding-left: 1px;
    }
  }
  .new-model{
    padding: 10px 15px;
  }
</style>
