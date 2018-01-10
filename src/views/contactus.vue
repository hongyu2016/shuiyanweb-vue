<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
      <h3 class="title">
        <i></i>
        联系我们
        <i></i>
      </h3>
      <span class="des">第一时间与水研村取得联系</span>
    </div>
    <b-container>
      <!--联系我们-->
      <div class="contact-box">
        <b-form>
          <b-row>
            <b-col md="6" cols="12">
              <b-form-group id="exampleInputGroup1"
                            label="邮箱地址"
                            label-for="email"
                            description="我们会严格保密您的邮箱地址">
                <b-form-input id="email"
                              type="email"

                              required
                              placeholder="请输入邮箱地址">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2"
                            label="姓名"
                            label-for="name">
                <b-form-input id="name"
                              type="text"

                              required
                              placeholder="请输入姓名">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6" cols="12">
              <b-form-group id="text"
                            label="内容"
                            label-for="textarea1">
                <b-form-textarea id="textarea1"
                                 placeholder="请输入具体内容"
                                 :rows="5"
                                 :max-rows="6">
                </b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" variant="warning">提交</b-button>
          </div>

        </b-form>
      </div>
      <!--地图-->
      <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
      <h3 class="title">
        <i></i>
        地理位置
        <i></i>
      </h3>
      <span class="des">有了地图，不怕找不到</span>
  </div>
      <div class="map-box">
        <baidu-map class="bm-view" :center="{lng: 109.742132, lat: 21.662711}" :zoom="15" ak="FE4d26f8650a4365d9d7e0160da5dfc8">
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <!--<bm-overlay
            pane="labelPane"
            :class="{sample: true, active}"
            @draw="draw"
            @mouseover.native="active = true"
            @mouseleave.native="active = false">
            <div>水研村</div>
          </bm-overlay>-->
          <bm-info-window :position="{lng: 109.742132, lat: 21.662711}" title="水研村的位置" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
            <p v-text="infoWindow.contents" class="text-p"></p>

          </bm-info-window>
        </baidu-map>

      </div>
    </b-container>
  </div>
</template>
<script>
  import eventBus from '../assets/eventBus'; //同级组件通信 中央事务总线
  import {BaiduMap,BmOverlay,BmNavigation,BmInfoWindow} from 'vue-baidu-map'; //百度地图
	export default {
		name: 'contactus',
		data () {
			return {
        //active: false
        infoWindow: {
          show: true,
          contents: '广西北海市合浦县山口镇河面村委 水研村'
        }
      }
		},
    mounted(){

    },
    watch:{
      //路由切换时进行判断--获取数据的操作
      '$route'(to,from){

      }
    },
		methods: {
      /*draw ({el, BMap, map}) {
        const pixel = map.pointToOverlayPixel(new BMap.Point(109.742132,21.662711))
        el.style.left = pixel.x - 60 + 'px'
        el.style.top = pixel.y -20 + 'px'
      }*/
      infoWindowClose (e) {
        this.infoWindow.show = false
      },
      infoWindowOpen (e) {
        this.infoWindow.show = true
      }
    },
    components: {
      BaiduMap,
      BmOverlay,
      BmNavigation,
      BmInfoWindow
    }
	}
</script>
<style scoped>
  .contact-box{
    text-align: left;
    margin-bottom: 20px;
  }
  @media (max-width: 576px){

  }
  .bm-view {
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
  }
  /*.sample {
    width: 100px;
    background: rgba(0,0,0,0.5);
    overflow: hidden;
    color: #fff;
    text-align: center;
    position: absolute;
    border-radius: 5px;
    padding: 5px;
  }
  .sample.active {
    background: rgba(0,0,0,0.75);
    color: #fff;
  }*/
  .text-p{
    color: red;
  }
</style>
