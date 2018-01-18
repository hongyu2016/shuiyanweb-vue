<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <div slot="top-title" class="top-slide"> <!--定义的slot在子组件 toptitle中-->
      <h3 class="title">
        <i></i>
        水研新闻
        <i></i>
      </h3>
      <span class="des">了解水研动态</span>
    </div>
    <b-container>
      <!--焦点一条新闻-->
      <!--<div class="news-focus-box">
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
      </div>-->
      <!--新闻列表-->
      <b-row class="news-list">
        <loading v-show="loading"></loading><!--loading-->
        <div class="nodata" v-if="list.length<=0">
          暂无新闻纪录
        </div>
        <b-col cols="6" md="3" v-for="data in list" :key="data.article_id">
          <router-link tag="div" :to="{name:'news_detail',params:{id:data.article_id},query:{title:data.title}}">
            <a href="">
              <div  class="news-list-item text-left">
                <div class="img">
                  <b-img-lazy :src="data.thumb ? data.thumb:require('../assets/nopic.gif')" fluid-grow/>
                </div>
                <div class="news-list-bottom">
                  <h1>{{data.title}}</h1>
                  <p class="news-time">{{data.create_time}}</p>
                </div>
              </div>
            </a>
          </router-link>

        </b-col>
      </b-row>
      <nav class="page-box" v-if="totalPages>=1">
        <paginate
          :page-count="totalPages"
          :click-handler="runPage"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination b-pagination pagination-md'"
          page-class="page-item"
          page-link-class="page-link"
          active-class="page-item active"
          prev-class="page-item"
          next-class="page-item"
          prev-link-class="page-link"
          next-link-class="page-link"
          :page-range="1"
        >
        </paginate>
      </nav>
      </b-pagination>
    </b-container>
  </div>
</template>
<script>
  import eventBus from '../assets/eventBus'; //同级组件通信 中央事务总线
  import loading from '@/components/loading';
  import Paginate from 'vuejs-paginate';
  export default {
		name: 'news',
		data () {
			return {
        currentPage:1,
        totalPages:1,
        totalRows:1,
        list:[],
        loading: false
      }
		},
    created(){
    },
    beforeMount(){
    },
    mounted(){
      this.currentPage=this.$route.params.page ? Number(this.$route.params.page):1;  //初始化时获取地址栏的页码
      this.getList(this.currentPage);
    },
    watch:{
      //路由切换时进行判断
    },
		methods: {
      runPage(pageNum){
        //eventBus.$emit('userC','测试下//同级组件通信 中央事务总线'); //同级组件通信 中央事务总线
        this.list=[];
        this.getList(pageNum)
      },
      getList(page){
        this.loading = true;
        this.$http.get(`${this.hostUrl}/api/news/newslist`,{params:{'page':page}}).then((res)=>{
          if(res.data.success==true){
            this.loading = false;
          	let list=res.data.data;
          	this.totalPages=list.totalPages;
            this.list=list.data;

          }
        }).catch((err)=>{

        });
      }
    },
    components: {
      'loading':loading,
      'paginate':Paginate
    }
	}
</script>
<style scoped>

  .news-focus-box{
    display: flex;
    border: 1px solid #f7f7f7;
    box-shadow: 2px 2px 10px 1px #adabab;
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
    margin-bottom: 30px;
    position: relative;
    min-height: 300px;
  }
  .news-list>div{
    margin-bottom: 10px;
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
