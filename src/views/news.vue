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

            <div class="time"><i class="fa fa-clock-o" aria-hidden="true"></i>2018-1-5</div>
            <div class="view">
              <a href="#">查看<i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
      <!--新闻列表-->
      <b-row class="news-list">
        <b-col cols="6" md="3">
          <a href="">
            <div  class="news-list-item text-left">
              <div class="img">
                <b-img-lazy src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg" fluid-grow/>
              </div>
              <div class="news-list-bottom">
                <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
                <p class="news-time">2018-1-5</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col cols="6" md="3">
          <a href="">
            <div  class="news-list-item text-left">
              <div class="img">
                <b-img-lazy src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg" fluid-grow/>
              </div>
              <div class="news-list-bottom">
                <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
                <p class="news-time">2018-1-5</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col cols="6" md="3">
          <a href="">
            <div  class="news-list-item text-left">
              <div class="img">
                <b-img-lazy src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg" fluid-grow/>
              </div>
              <div class="news-list-bottom">
                <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
                <p class="news-time">2018-1-5</p>
              </div>
            </div>
          </a>
        </b-col>
        <b-col cols="6" md="3">
          <a href="">
            <div  class="news-list-item text-left">
              <div class="img">
                <b-img-lazy src="http://www.ganso.com.cn/upload/images/20170804/%E4%BC%81%E4%B8%9A%E5%AE%98%E7%BD%9137123952.jpg" fluid-grow/>
              </div>
              <div class="news-list-bottom">
                <h1>这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题这是一个新闻标题</h1>
                <p class="news-time">2018-1-5</p>
              </div>
            </div>
          </a>
        </b-col>
      </b-row>


      <!--<b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages="10" v-model="currentPage"  class="pagination-box" hide-goto-end-buttons prev-text="上一页" next-text="下一页" active-class="page-active"/>-->

      <b-pagination-nav :number-of-pages="10" base-url="#" v-model="currentPage" :link-gen="linkGen" />



    </b-container>
  </div>
</template>
<script>
  import eventBus from '../assets/eventBus'; //同级组件通信 中央事务总线
	export default {
		name: 'news',
		data () {
			return {
        currentPage:1
      }
		},
    mounted(){

      this.currentPage=this.$route.params.page ? Number(this.$route.params.page):1;  //初始化时获取地址栏的页码

    },
    watch:{
      //路由切换时进行判断--获取数据的操作
      '$route'(to,from){
      	//console.log(to)
        if(to.name=='news'){
          this.currentPage=this.$route.params.page ? Number(this.$route.params.page):1;
          //请求 服务器 拿数据
        }
      }
    },
		methods: {
      linkGen (pageNum) {
        eventBus.$emit('userC','测试下//同级组件通信 中央事务总线'); //同级组件通信 中央事务总线
        return '#/news/page/'+pageNum
        }
    }
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
  .news-focus-bottom .time{
    color:  #7d7d7d
  }
  .news-focus-bottom .time i{
    color: #f58018;
    margin-right: 5px;
  }
  .view>a{
    color:#f58018;
    padding: 5px;
  }
  .view>a>i{
    margin-left: 5px;
  }

  .news-list a{
    display: block;
    color: inherit;
  }
  .news-list a:hover{
    text-decoration: none;
  }
  .news-list{
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .news-list-item{
    border: 1px solid #f7f7f7;
    transition: all 0.2s ease-out 0s;
    position: relative;
    top: 0;
  }
  .news-list-item:hover{
    top: -5px;
    box-shadow: 2px 2px 10px 1px #adabab;

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

  .pagination-box{
    margin-bottom: 40px;
  }
</style>
