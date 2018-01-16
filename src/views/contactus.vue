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
            <loading v-show="loading"></loading><!--loading-->
            <b-col md="6" cols="12">

              <b-form-group id="exampleInputGroup1"
                            label="邮箱地址"
                            label-for="email"
                            description="我们会严格保密您的邮箱地址">
                <b-form-input id="email"
                              type="email"
                              required
                              v-model="inputValue.email"
                              placeholder="请输入邮箱地址">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2"
                            label="姓名"
                            label-for="name">
                <b-form-input id="name"
                              type="text"
                              required
                              v-model="inputValue.name"
                              placeholder="请输入姓名">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="6" cols="12">
              <b-form-group id="text"
                            label="内容"
                            label-for="textarea1">
                <div>
                  <b-form-textarea id="textarea1"
                                   v-model="inputValue.textarea"
                                   placeholder="请输入内容"
                                   :rows="5"
                                   required
                                   :max-rows="6">
                  </b-form-textarea>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="text-center">
            <b-button type="submit" variant="warning" @click.prevent="postup">提交</b-button>
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
    <!--弹出框-->
    <b-modal id="modal1" centered title="提示信息" lazy ok-only ok-title="确定" ok-variant="success" header-class="new-model">
      <div class="d-block">
        <p style="margin-bottom: 0;color: #d20202">{{alertInfo}}</p>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import eventBus from '../assets/eventBus'; //同级组件通信 中央事务总线
  import {BaiduMap,BmOverlay,BmNavigation,BmInfoWindow} from 'vue-baidu-map'; //百度地图
  import loading from '@/components/loading'
	export default {
		name: 'contactus',
		data () {
			return {
        //active: false
        loading: false,
        inputValue:{
        	email:'',
          name:'',
          textarea:''
        },
        infoWindow: {
          show: true,
          contents: '广西北海市合浦县山口镇河面村委 水研村',
        },
        alertInfo:''
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
      },
      postup(){
      	let emails=this.inputValue.email,
            names=this.inputValue.name,
            contents=this.inputValue.textarea;
      	let emailReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

      	if(!emails||!names||!contents){
          this.alertInfo='邮箱，姓名或者内容不能为空';
          this.$root.$emit('bv::show::modal','modal1');
      		return false;
        }
        if(!emailReg.test(emails)){
          this.alertInfo='请输入合法的邮箱';
          this.$root.$emit('bv::show::modal','modal1');
          return false;
        }
        if(contents.length>230){
          this.alertInfo='请输入230个以内的字符';
          this.$root.$emit('bv::show::modal','modal1');
          return false;
        }
        this.loading = true;
      	let postData={
          'email':emails,
          'name':names,
          'content':contents
        };

        this.$http.post(`${this.hostUrl}/api/contact/add`,postData).then((res) =>{
          if(res.data.success){
            this.loading = false;
            this.alertInfo=res.data.errmsg;
            this.$root.$emit('bv::show::modal','modal1');
            this.inputValue.email='';
            this.inputValue.name='';
            this.inputValue.textarea='';
          }else {
            this.alertInfo=res.data.errmsg;
            this.$root.$emit('bv::show::modal','modal1');
          }
        }).catch((err)=>{
          this.alertInfo='服务器错误，请重试';
          this.$root.$emit('bv::show::modal','modal1');
        });

      }
    },
    components: {
      BaiduMap,
      BmOverlay,
      BmNavigation,
      BmInfoWindow,
      loading
    }
	}
</script>
<style scoped>
  .contact-box{
    text-align: left;
    margin-bottom: 20px;
    position: relative;
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
