<template>
  <transition name="fade">
    <div class="img-view" @click="bigImg">
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
  .fade-leave,.fade-leave-to,.fade-enter{
    transition: all .3s linear 0s;
    opacity: 0;
  }

  .fade-enter-to{
    transition: all .1s linear 0s;
    opacity: 1;
  }

  .img-view{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1030;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img{
    position: relative;
    margin: 0;
    max-width: 1024px;
  }
  .img img{
    max-width: 100%;
    display: block;
  }

</style>
