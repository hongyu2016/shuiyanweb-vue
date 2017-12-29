<template>
  <div class="main">
    <!--菜单-->
    <b-menu></b-menu>

    <!--轮播图-->
    <b-slide></b-slide>
    <!--公告-->
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
          <div class="block-main-list notice-main">
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
    <!--水研简介-->
    <div class="block-main introduce">
      <div class="container">
        <div class="block-main-slide">
          <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
            <h3 class="title">
              <i></i>
              水研简介
              <i></i>
            </h3>
            <span class="des">了解水研的过去与未来</span>
          </div>
          <div class="block-main-list introduce-main">
            <b-container>
              <b-row>
                <b-col cols="12" md="2">
                  <div class="shuiyan-intro-left">
                    <h3>水研</h3>
                  </div>
                </b-col>
                <b-col cols="12" md="10" class="text-left shuiyan-intro-right">
                  <p>水研村坐落在美丽的广西壮族自治区北海市合浦县山口镇东部，北部与玉林市的大路塘、屋子岭相邻；</p>
                  <p>距离镇中心约六公里，全新水泥路直通村里，交通方便；</p>
                  <p>水研村风景优美，环境舒适，东南部有大排水库，水质清澈；西南部有建于1976年的“天桥”，该桥是当时用于灌溉的水渠的一部分，奇特的地方在于该“天桥”建在两座山之间，高度约有50米，长度大约700米，底下是一条清澈的那交河，至今屹立不倒。</p>
                  <b-link href="">更多介绍</b-link>
                  <!--<h4>水研名字的由来</h4>
                  <p>有两个叫法，一叫“水碾”，是因为村里在流经的小河旁建造了一个水碾，据说是利用河水的冲力来碾米等加工粮食的，具体的时间已无从考究，所以后来就叫“水碾村”；但是登记上报到国家收录村庄的时候，用了简写，于是用了“水研”，也就是官方的名字是“水研”。</p>-->
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <!--热点新闻-->
    <div class="block-main news">
      <div class="container">
        <div class="block-main-slide">
          <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
            <h3 class="title">
              <i></i>
              最新新闻速递
              <i></i>
            </h3>
            <span class="des">了解最新水研动态</span>
          </div>
          <div class="block-main-list news-main">
            <b-container>
              <b-row>
                <b-col cols="12" md="4" class="news-list">
                  <b-card title="这是标题"
                          img-src="http://c.hiphotos.baidu.com/image/pic/item/472309f79052982270af3f09deca7bcb0b46d45f.jpg"
                          img-alt="Img"
                          img-top
                          class="img-list"
                  >
                    <div class="news-time">
                      2017.12.12
                    </div>
                    <p class="card-text">
                      这是内容--一篇文章的简介内容吧
                    </p>
                    <b-button href="#" variant="success">查看</b-button>
                  </b-card>
                </b-col>
                <b-col cols="12" md="4" class="news-list">
                  <b-card title="这是标题"
                          img-src="http://c.hiphotos.baidu.com/image/pic/item/472309f79052982270af3f09deca7bcb0b46d45f.jpg"
                          img-alt="Img"
                          img-top
                          class="img-list"
                  >
                    <div class="news-time">
                      2017.12.12
                    </div>
                    <p class="card-text">
                      这是内容--一篇文章的简介内容吧
                    </p>
                    <b-button href="#" variant="success">查看</b-button>
                  </b-card>
                </b-col>
                <b-col cols="12" md="4" class="news-list">
                  <b-card title="这是标题"
                          img-src="http://c.hiphotos.baidu.com/image/pic/item/472309f79052982270af3f09deca7bcb0b46d45f.jpg"
                          img-alt="Img"
                          img-top
                          class="img-list"
                  >
                    <div class="news-time">
                      2017.12.12
                    </div>
                    <p class="card-text">
                      这是内容--一篇文章的简介内容吧
                    </p>
                    <b-button href="#" variant="success">查看</b-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <!--底部信息-->
    <div class="bottom">
      <b-container>
        <b-row>
          <b-col cols="12" md="12" class="friend-link">
            <b-link href="http://www.taobao.com" target="_blank" class="friend-link-a">淘宝网</b-link>
            <b-link href="http://www.baidu.com" target="_blank" class="friend-link-a">百度一下</b-link>
          </b-col>
          <b-col cols="12" md="12" class="copyright">
            Copyright © 2017.水研村 All rights reserve
          </b-col>
        </b-row>
      </b-container>
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
          viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
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
          sr.reveal('.block-main-list,.news-list', {
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
  .notice-main{
    border:2px solid #28a745;
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
  .introduce{
    background-color: #e8eae6;
  }
  .shuiyan-intro-left{
    width: 100px;
    height: 100px;
    margin: 10px auto;
    background-color: #28a745;
    border-radius: 50%;
    position: relative;
    border: 3px solid #ceefd5;
    box-shadow: 0 0 5px 3px #c7c7c7;
  }
  .shuiyan-intro-left>h3{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    color: #fff;
  }
  .shuiyan-intro-right p{
    margin-bottom: 0;
  }

  .img-list{
    border-color: transparent;
  }
  .img-list .news-time{
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #28a745;
    padding: 3px 5px;
    color: #fff;
  }

  .bottom{
    padding: 10px;
    background-color: rgba(0,0,0,1);
  }
  .bottom .copyright{
    font-size: 14px;
    color: #969595;
  }
  .friend-link{
    margin-bottom: 5px;
  }
  .friend-link .friend-link-a{
    color: aliceblue;
    padding: 3px;
  }
</style>
