<template>
  <div class="main">

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
            <loading v-show="loading_notice"></loading><!--loading-->
            <div class="nodata" v-if="gonggaolist.length<=0">
              暂无公告纪录
            </div>
            <div class="swiper-container swiper-container-notice" id="notice">
              <div class="swiper-wrapper">
                <div class="swiper-slide container" >
                  <b-row class="notice-ul" v-for="list in gonggaolist" :key="list.id">
                    <b-col cols="8" md="8" class="notice-text text-left" @click="showModal(list.notice_content,list.create_time,list.notice_author)" ref="btnShow">{{list.notice_title}}</b-col>
                    <b-col cols="4" md="4" class="text-right notice-time">{{list.create_time}}</b-col>
                  </b-row>

                </div>

              </div>
              <!-- Add Pagination -->
              <div class="swiper-scrollbar"></div>

            </div>
            <!--<b-container v-for="list in gonggaolist" :key="list.id">
              <b-row class="notice-ul">
                <b-col cols="8" md="8" class="notice-text text-left" @click="showModal(list.notice_content,list.create_time,list.notice_author)" ref="btnShow">{{list.notice_title}}</b-col>
                <b-col cols="4" md="4" class="text-right notice-time">{{list.create_time}}</b-col>
              </b-row>
            </b-container>-->
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
                  <loading v-show="loading"></loading><!--loading-->
                  <!--<p>水研村坐落在美丽的广西壮族自治区北海市合浦县山口镇东部，北部与玉林市的大路塘、屋子岭相邻；</p>
                  <p>距离镇中心约六公里，全新水泥路直通村里，交通方便；</p>
                  <p>水研村风景优美，环境舒适，东南部有大排水库，水质清澈；西南部有建于1976年的“天桥”，该桥是当时用于灌溉的水渠的一部分，奇特的地方在于该“天桥”建在两座山之间，高度约有50米，长度大约700米，底下是一条清澈的那交河，至今屹立不倒。</p>-->
                  {{intro.introduce_simple}}
                  <b-link href="javascript:;" @click="introShowModal()" class="more">更多介绍</b-link>
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
              新闻速递
              <i></i>
            </h3>
            <span class="des">了解最新水研动态</span>
          </div>
          <div class="block-main-list news-main">
            <b-container>
              <b-row>
                <loading v-show="loading"></loading><!--loading-->
                <div class="nodata" v-if="newsList.length<=0">
                  暂无新闻纪录
                </div>
                <b-col cols="12" md="4" class="news-list" v-for="list in newsList" :key="list.article_id">
                  <b-card :title="list.title"
                          :img-src="list.thumb ? qiniuImgHost+list.thumb+'?'+shuiyanImgThumb:require('../assets/nopic.gif')"
                          :img-alt="list.title"
                          img-top
                          class="img-list"
                  >
                    <div class="news-time">
                      {{list.create_time}}
                    </div>
                    <p class="card-text">
                      {{list.intro}}
                    </p>
                    <!--<b-button :href="'/newsdetail/'+list.article_id" variant="success">查看</b-button>-->
                    <router-link tag="div" :to="{name:'news_detail',params:{id:list.article_id},query:{title:list.title}}">
                      <b-button href="javascript:;" variant="success">查看</b-button>
                    </router-link>
                  </b-card>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
    <!--水研风采图集-->
    <div class="block-main pic-list">
      <div class="container-fluid">
        <div class="block-main-slide">

          <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
            <h3 class="title">
              <i></i>
              水研风采
              <i></i>
            </h3>
            <span class="des">美丽水研</span>
          </div>
          <div class="block-main-list img-main">
            <b-row>
              <loading v-show="loading"></loading><!--loading-->
              <div class="nodata" v-if="newsList.length<=0">
                暂无图集纪录
              </div>
              <b-col cols="6" md="3" class="index-img-list no-padding" v-for="list in imgList" :key="list.slide_id">
                <a href="javascript:;">
                  <div class="index-img-column">
                    <b-img :src="qiniuImgHost+list.slide_img+'?'+shuiyanImgThumb2" fluid :alt="list.title" @click="clickImg($event)" :data-bigsrc="qiniuImgHost+list.slide_img"/>

                    <div class="bottom-info">
                      <span>{{list.slide_title}}</span>
                    </div>
                  </div>
                </a>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
    <!--底部信息-->

    <!--通知公告弹出框-->
    <b-modal id="modal1" centered title="公告详情" hide-footer lazy header-class="new-model">
      <div class="d-block">
        <p><span class="text-orange">发布人：</span>{{alertgonggao.author}}， <span class="text-orange">发布时间：</span><span>{{alertgonggao.time}}</span></p>
        <p><span class="text-orange">公告内容：</span>{{alertgonggao.content}}</p>
      </div>
    </b-modal>
    <!--水研简介详情弹出框-->
    <b-modal id="intro" size="lg" centered title="水研介绍" hide-footer lazy header-class="new-model">
      <div class="d-block" v-html="intro.introduce_all"></div>
    </b-modal>
    <!-- 放大图片 -->
    <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>

  </div>
</template>
<script>

  import slide from '@/components/Slide' //轮播图
  import scrollreveal from 'scrollreveal'  //滚动动画
  import bigImg from '@/components/MagnifyImg' //图片放大
  import loading from '@/components/loading'
  import Swiper from '../../static/swiper/swiper.min.js'
  export default {
    name: 'index',
    data () {
      return {
        gonggaolist:[],
        alertgonggao:{},
        imgList:[],//水研图集
        showImg:false,//放大
        imgSrc: '',//放大
        intro:{},  //水研简介
        newsList:[],
        loading: false,//除公告外的loading
        loading_notice:false  //公告loading
      }
    },
    mounted(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered

        // Changing the defaults
        window.sr = scrollreveal({reset: false});
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

        if (!!window.WebSocket && window.WebSocket.prototype.send){
          //支持socket
          //监听websocket
          this.loading_notice = true;

          this.socket.on('connect', () => {
            //监听连接
          });
          this.socket.on('noticeList', (data) => {
            //监听公告列表变化
            //公告列表
            if(data){
              this.loading_notice = false;
              this.gonggaolist=data;
              sr.reveal('.notice-main', {
                duration: 600,
                delay: 200,
                origin: 'bottom',
                distance: '200px',
                easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
                mobile: true,
              });

              this.$nextTick(function () {   //异步执行 DOM 更新。只要观察到数据变化，执行相应的动作
                let mySwiperNotice = new Swiper('#notice',{
                  direction: 'vertical',
                  slidesPerView: 'auto',
                  freeMode: true,
                  scrollbar: {
                    el: '.swiper-scrollbar',
                  },
                  mousewheel: true,
                });
              });
            }else {
              this.loading_notice = false;
              this.gonggaolist=[];
            }

          });

        }else{
        	//不支持socket
        }
      })
    },

    methods: {
      getlist(){
        this.loading = true;
        //首页数据
        this.$http.all([
          this.$http.get(`${this.hostUrl}/api/index/index`),
          this.$http.get(`${this.hostUrl}/api/index/piclist`),
          //this.$http.get(`${this.hostUrl}/api/index/notice`)
        ])
        .then(this.$http.spread((index, slide) =>{
          // 上面两个请求都完成后，才执行这个回调方法
          //首页数据
          this.loading = false;
          if(index.data.success){
            let dataList=index.data.data.indexData;
            //简介
            this.intro={
              introduce_simple:dataList.intro.introduce_simple,
              introduce_all:this.introAll=dataList.intro.introduce_all
            };
            //新闻
            this.newsList=dataList.news;
            this.$nextTick(function () {
              sr.reveal('.news-list', {
                 duration: 600,
                 delay: 200,
                 origin: 'bottom',
                 distance: '200px',
                 easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
                 mobile: true,
               });
            });

          }

          //公告
          /*if(notice.data.success){
            this.gonggaolist=notice.data.data;
          }*/

          //水研风采
          if(slide.data.success){
            this.imgList=slide.data.data.datalist;
            this.$nextTick(function () {
              sr.reveal('.index-img-list', {
                duration: 600,
                delay: 200,
                origin: 'bottom',
                distance: '200px',
                easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
                mobile: true,
              });
            });

          }

        }));

      },
      /*
      * 公告弹出框
      * */
      showModal (content,time,author) {
      	this.alertgonggao={
          content:content,
          time:time,
          author:author
        };

        this.$root.$emit('bv::show::modal','modal1')
      },
      /*
      * 水研简介弹出框
      * */
      introShowModal(){
        this.$root.$emit('bv::show::modal','intro')
      },
      clickImg(e) {
        this.showImg = true;
        // 获取当前图片地址
        this.imgSrc=e.target.getAttribute('data-bigsrc');
      },
      viewImg(){
        this.showImg = false;
      }
    },
    components: {
      //'b-menu': menu,
      'b-slide': slide,
      'big-img':bigImg,
      'loading':loading
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

  .d-block{text-align: left}
  .d-block img{max-width: 100%}

  .swiper-container-notice {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    height: auto;
  }

  .notice-main{
    border:2px solid #28a745;
    height: 250px;
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
  .notice-time {
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
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
  .more{
    color: #f58018;
  }
  .more:hover{
    color: #f58018;
  }

  .block-main-list{
    position: relative;
    min-height: 200px;
  }
  .block-main.pic-list{
    padding-bottom: 20px;
    padding-top: 0;
  }
  .news-list{
    margin-bottom: 10px;
  }
  .card.img-list{
    transition: all 0.2s ease-out 0s;
    position: relative;
    top: 0;
  }
  .card.img-list:hover{
    top: -5px;
    box-shadow: 2px 2px 10px 1px #adabab;
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
  /*水研图集*/
  .index-img-list .index-img-column{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .index-img-list .index-img-column>img{
    transition: all 0.5s ease-in-out 0.1s;
  }
  .index-img-list:hover .index-img-column>img{
    transform: scale(1.2);
  }
  .index-img-list .bottom-info{
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    padding: 0 5px;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out 0s;
  }
  .index-img-list:hover .bottom-info{
    height: 50px;
  }
</style>
