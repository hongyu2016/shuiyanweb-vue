<template>
  <div class="main">
    <header class="head">
      <img src="../assets/page_head.jpg" class="hidden-sm"/>
      <img src="../assets/page_head_small.jpg" class="hidden-lg"/>
    </header>
    <b-container class="detail">
      <div class="detail-head">
        <h3 class="title">{{title}}</h3>
        <p class="push-time">发表时间：{{newsDetail.create_time}}</p>
        <p class="author">作者：{{newsDetail.author}}</p>
        <p class="author">来源：{{newsDetail.copyfrom}}</p>
      </div>
      <div class="content" v-html="newsDetail.content">
      </div>
      <loading v-show="loading"></loading><!--loading-->
    </b-container>

  </div>
</template>
<script>
  import loading from '@/components/loading'
	export default {
		name: 'newsDetail',
		data () {
			return {
				title:'',
				newsDetail:[],
        loading: false
      }
		},
    mounted(){
			this.title=this.$route.query.title;
      this.getData();
    },
		methods: {
      getData(){
        this.loading = true;
        let news_id=this.$route.params.id;
        this.$http.get(`${this.hostUrl}/api/news/detail`,{params:{news_id:news_id}}).then((res) =>{
          if(res.data.success){
            this.loading = false;
            this.newsDetail=res.data.data;
          }
        });
      }
    },
    components: {
      'loading':loading
    }
	}
</script>
<style scoped>
  .detail{
    min-height: 300px;
    position: relative;
  }
  .detail-head .title{
   color: #28a745;
  }
  .detail-head>p{
    margin-bottom: 0;
  }
  .detail .content{
    padding: 20px 0;
  }
  .detail .content img{
    max-width: 100%;
  }
  .push-time,.author{
    color: #8e8e8e;
  }
</style>
