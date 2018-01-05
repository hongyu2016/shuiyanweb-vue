<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <b-container>
      <div class="news-focus-box">
        <div class="news-focus-img">
          <img src="../assets/page_head_small.jpg"/>
        </div>
        <div class="news-focus-info">
          <h1 class="text-left">这是一条标题</h1>
          <p class="text-left des">这是一个内容描述，只是一部分，不是全部</p>
          <div class="news-focus-bottom">
            <div class="time">2018-1-5</div>
            <div class="view">
              <a href="#">查看</a>
            </div>
          </div>
        </div>
      </div>
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

  .news-focus-box{
    display: flex;
    border: 1px solid #f7f7f7;
    box-shadow: 2px 2px 10px 1px #adabab;
    margin-top: 20px;
  }
  .news-focus-img,.news-focus-info{
    flex: 0 0 50%;
    max-width: 50%;

  }
  .news-focus-box img{
    width: 100%;
  }
  .news-focus-info{
    padding: 10px;
  }
  .news-focus-info .des{
    height: 50px;
    color: #7d7d7d;
  }
  .news-focus-info h1{
    width: 100%;
    font-size: 18px;
  }
  .news-focus-bottom{
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 576px){
    .hidden-sm{
      display: none;
    }
    .hidden-lg{
      display: block;
    }
    .news-focus-img{
      display: none;
    }
    .news-focus-info{
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

</style>
