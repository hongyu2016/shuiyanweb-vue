<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <b-container class="news-focus">
      <b-row>
        <b-col cols="6" md="6">
          <img src="../assets/page_head_small.jpg"/>
        </b-col>
        <b-col cols="6" md="6">
          00000
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
	export default {
		name: 'news',
		data () {
			return {}
		},
		methods: {}
	}
</script>
<style scoped>
  .head{
    width: 100%;
    overflow: hidden;
  }
  .head img{
    max-width: 100%;
  }
  .hidden-sm{
    display: block;
  }
  .hidden-lg{
    display: none;
  }
  @media (max-width: 576px){
    .hidden-sm{
      display: none;
    }
    .hidden-lg{
      display: block;
    }
  }
  .news-focus{
    background-color: #f7f7f7;
  }
  .news-focus img{
    width: 100%;
  }
</style>
