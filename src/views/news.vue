<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <b-container>
      <!--焦点一条新闻-->
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
      <!--新闻列表-->
      <b-row class="news-list">
        <b-col cols="6" md="3">
          <div  class="news-list-item text-left">
            <div class="img">
              <img src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg"/>
            </div>
            <div class="news-list-bottom">
              <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
              <p class="news-time">2018-1-5</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div  class="news-list-item text-left">
            <div class="img">
              <img src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg"/>
            </div>
            <div class="news-list-bottom">
              <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
              <p class="news-time">2018-1-5</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div  class="news-list-item text-left">
            <div class="img">
              <img src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg"/>
            </div>
            <div class="news-list-bottom">
              <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
              <p class="news-time">2018-1-5</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div  class="news-list-item text-left">
            <div class="img">
              <img src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg"/>
            </div>
            <div class="news-list-bottom">
              <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
              <p class="news-time">2018-1-5</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div  class="news-list-item text-left">
            <div class="img">
              <img src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg"/>
            </div>
            <div class="news-list-bottom">
              <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
              <p class="news-time">2018-1-5</p>
            </div>
          </div>
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
  img{width: 100%}
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
    margin-top: 40px;
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

  .news-list{
    margin-top: 40px;
  }
  .news-list-item{
    border: 1px solid #f7f7f7;
  }
  .news-list-bottom{
    padding: 0 1rem;
  }
  .news-list-item h1{
    font-size: 1rem;
    line-height: 1.3rem;
    height: 2.5rem;
    overflow: hidden;
    margin-top: 1rem;
  }
  .news-list-item .news-time{
    font-size: 0.8rem;
    color: #7d7d7d;
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
