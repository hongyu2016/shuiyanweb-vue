<template>
  <div class="container-fluid">
    <div class="row">

      <div class="swiper-container swiper-container-horizontal" id="swiper-container">
        <loading v-show="loading"></loading><!--loading-->
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="item in slideList" :key="item.imgId">
            <a :href="item.slide_jumpurl">
            <img :src="hostUrl+item.slide_img"/>
            <div class="img-content">
              <div class="img-title ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                <h3>{{item.slide_title}}</h3>
              </div>
              <!--<div class="img-text ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.5s">
                <p>{{item.slide_text}}</p>
              </div>-->
            </div>
            </a>
          </li>

        </ul>
        <!-- Add Pagination -->
        <div class="swiper-pagination page"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next next-btn">
          <i aria-hidden="true" class="fa fa-angle-right"></i>
        </div>
        <div class="swiper-button-prev prev-btn">
          <i aria-hidden="true" class="fa fa-angle-left"></i>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import '../../static/swiper/swiper.min.css'
  import '../../static/swiper/animate.min.css'
  import Swiper from '../../static/swiper/swiper.min.js'
  import animate from '../../static/swiper/swiper.animate1.0.2.vue.js'
  import loading from '@/components/loading'
    export default {
        name: 'slide',
        data () {
            return {
              slide: 0,
              slideList: [],  //轮播图数据
              loading: false
            }
        },
        created () {
          this.get()
        },
        methods: {
          get(){
            this.loading = true;
            const that = this;
            this.$http.get(`${this.hostUrl}/api/index/slide`).then((res) => {
              let data=res.data;
              if (data.success == true) {
                that.slideList=data.data.datalist;
                that.loading = false;
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
        },
        components: {
          'loading':loading
        }
    }
</script>
<style scoped>
  .swiper-container {
    width:100%;
    max-height: 900px;
    min-height: 450px;
  }
  .swiper-wrapper{
    display: flex;
  }
  .swiper-slide{
    max-height: 900px;
    min-height: 450px;
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
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
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
  .prev-btn,.next-btn{
    background-image:none;
    line-height: 44px;
  }
  .prev-btn>i,.next-btn>i{
    color: #f58018;
    font-size: 44px;
  }
  @media (max-width: 576px){
    .swiper-container{
      min-height: 200px;
    }
    .swiper-slide{
      max-height: 300px;
      min-height: 200px;
    }
    .img-title{
      margin-bottom: 0;
    }
    .img-title>h3{
      font-size: 18px;
      margin-bottom: 0;
    }
    .img-title p{
      font-size: 14px;
    }
  }

</style>
