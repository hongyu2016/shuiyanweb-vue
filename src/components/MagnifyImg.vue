<template>
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!--遮罩层-->
      <div class="img-layer"></div>
      <div class="img">
        <img :src="imgSrc">
      </div>
    </div>
  </transition>
</template>
<script>
	export default {
		name: '',
		data () {
			return {}
		},
    props:['imgSrc'],
		methods: {
      bigImg(){
      	//发送事件
        this.$emit('clickit');
      }
    }
	}
</script>
<style scoped>
  .fade-enter-active,.fade-leave-active{
    transition: all .2s linear;
    transform: translate3d(0,0,0);
  }
  .fade-enter,.fade-leave-active{
    transform: translate3d(100%,0,0);
  }
  .img-view{
    position: inherit;
    width: 100%;
    height: 100%;
  }
  .img-view,.img-layer{
    position: fixed;
    z-index: 999;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img img{
    max-width: 100%;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10000;
  }
</style>
