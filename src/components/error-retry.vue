<template>
  <div class="error-box">
    <p>网络出错，请重新加载</p>
    <a href="javascript:;" target="_self" class="btn" @click="getList()">重新加载</a>
  </div>
</template>
<script>
	export default {
		name: '',
		data () {
			return {}
		},
		mounted(){

		},
		methods: {
      getList(){
      	//调用父组件的方法
        this.$emit('reGetList');
      }
    }
	}
</script>
<style scoped>

</style>
