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
      <div class="content" v-html="newsDetail.content" ref="desc">
      </div>
      <loading v-show="loading"></loading><!--loading-->
      <!--访问出错时 显示重新加载按钮-->
      <error-retry v-show="error" @reGetList="getData"></error-retry>
    </b-container>

  </div>
</template>
<script>
  import loading from '@/components/loading'
  import errorRetry from '@/components/error-retry'
	export default {
		name: 'newsDetail',
		data () {
			return {
				title:'',
				newsDetail:[],
        loading: false,
        error:false  //请求出错时
      }
		},
    mounted(){
			this.title=this.$route.query.title;
      this.getData();
    },
    updated() {
      //在dom更新时，设置图片内容格式
      let childrenList =this.$refs.desc.children;        
      for (let i in childrenList) {
        let child = childrenList[i].children
        if (child) {
          for (let i in child) {
            if (child[i].nodeName == 'IMG') { // 判断如果编辑器的html内如果有图片内容的时候，进行图片适配操作
              let img = child[i]
              img.style.maxWidth = '100%' // 自适应操作 ，让图片适应当前手机样式
              img.style.height = 'auto' // 自适应操作
              //img.style.float = 'left' //使用式样left让图片和上一张图之间不会有间隔
            }
            if(child[i].nodeName == 'IFRAME'){
              let iframe = child[i]
              iframe.style.width = '100%' // 自适应操作 ，让图片适应当前手机样式
              iframe.style.height = 'auto' // 自适应操作
            }
          }
        }
      }

    },
		methods: {
      getData(){
        this.loading = true;
        this.error=false;
        let news_id=this.$route.params.id;
        this.$http.get(`${this.hostUrl}/api/news/detail`,{params:{news_id:news_id}})
        .then((res)=>{
          if(res.data.success){
            this.loading = false;
            this.title=res.data.data.title;
            this.newsDetail=res.data.data;
            //获取的内容只能用这种方式加样式
            /* this.$nextTick(()=>{
              let childrenList =this.$refs.desc.children;        
              for (let i in childrenList) {
                let child = childrenList[i].children
                if (child) {
                  for (let i in child) {
                    if (child[i].nodeName == 'IMG') { // 判断如果编辑器的html内如果有图片内容的时候，进行图片适配操作
                      let img = child[i]
                      img.style.width = '100%' // 自适应操作 ，让图片适应当前手机样式
                      img.style.height = 'auto' // 自适应操作
                      //img.style.float = 'left' //使用式样left让图片和上一张图之间不会有间隔
                    }
                    if(child[i].nodeName == 'IFRAME'){
                      let iframe = child[i]
                      iframe.style.width = '100%' // 自适应操作 ，让图片适应当前手机样式
                      iframe.style.height = 'auto' // 自适应操作
                    }
                  }
                }
              }

            }) */
          }
        })
        .catch((error) => {
            if (error.response){
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }else{
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
          //显示 手动点击加载按钮
          this.loading = false;
          this.error = true
        });

      }
    },
    components: {
      'loading':loading,
      'error-retry':errorRetry
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
   .detail .content::before{
    content: "";
    display: table;
   }
  .detail .content::after{
    content: "";
    display: table;
    clear: both;
  }
  /*无效*/
  /* .detail .content img{
    max-width: 100% !important;
  } */
  .push-time,.author{
    color: #8e8e8e;
  }
 
  /*内嵌 iframe 宽高度控制---无效*/
  /* .detail .content iframe{
    width: 100% !important;
    height: auto !important;
  } */
</style>
