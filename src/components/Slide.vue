<template>
  <div class="container-fluid">
    <div class="row">

      <div class="swiper-container swiper-container-horizontal" id="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item in slideList" :key="item.imgId">
            <img :src="host+item.slide_img"/>
            <div class="img-content">
              <div class="img-title ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                <h3>{{item.slide_title}}</h3>
              </div>
              <div class="img-text ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s">
                <p>{{item.slide_text}}</p>
              </div>
            </div>

          </li>

        </ul>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

    </div>
  </div>
</template>
<script>
  import '../../static/swiper/swiper.min.css'
  import '../../static/swiper/animate.min.css'
  import Swiper from '../../static/swiper/swiper.min.js'
  import animate from '../../static/swiper/swiper.animate1.0.2.vue.js'
    export default {
        name: 'slide',
        data () {
            return {
              host:'http://127.0.0.1:5000',
              slide: 0,
              slideList: [],  //轮播图数据
            }
        },
        created () {
          this.get()
        },

        methods: {
          onSlideStart (slide) {
            //左滑动
          },
          onSlideEnd (slide) {
            //又滑动
          },
          get(){
            let that = this;
            this.$http.get('http://127.0.0.1:5000/api/index/slide').then((res) => {
              let data=res.data;
              if (data.success == true) {
                that.slideList=data.data.datalist;
                that.$nextTick(function () {   //异步执行 DOM 更新。只要观察到数据变化，执行相应的动作
                  let mySwiper = new Swiper('#swiper-container',{
                    //autoplay : true,
                    height: 400,
                    loop: true,
                    // 如果需要分页器
                    pagination: {
                      el: '.swiper-pagination',
                      clickable :true,
                    },
                    // 如果需要前进后退按钮
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    on:{
                      init: function(){

                        animate.swiperAnimateCache(this); //隐藏动画元素
                        animate.swiperAnimate(this); //初始化完成开始动画
                      },
                      slideChangeTransitionEnd: function(){
                        animate.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                      }
                    }
                  });
                });

              }

            })

          }
        }
    }
</script>
<style scoped>
  .swiper-container {
    width:100%;
    max-height: 900px;
  }
  .swiper-wrapper{
    display: flex;
  }
  .swiper-slide{
    max-height: 900px;
  }
  .swiper-slide img{
    width: 100%;
  }
  .img-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
  }
  .img-title{
    margin-bottom: 10px;

  }
  .img-title,.img-text>p{
    padding: 4px 12px;
    /*background-color: rgba(0,0,0,0.4);*/
  }
  .img-title>h3,.img-text>p{
    margin-bottom: 0;
    display: inline;
    text-shadow:0 3px 5px #000 ;
  }
</style>
