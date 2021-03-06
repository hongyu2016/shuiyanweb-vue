import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import news from '@/views/news'
import newsDetail from '@/views/newsDetail'
import contactus from '@/views/contactus'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { keepAlive: true }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: { keepAlive: true }
      /*children:[
        {
          path: '/news/page/:page',
          component: news
        }
      ]*/
    },
    {
      path:'/newsdetail/id/:id',
      name:'news_detail',
      component:newsDetail,
      props: (route) => ({ title: route.query.title })  //传递标题参数  浏览器  ?title=''  类型
    },
    {
      path:'/contactus',
      name:'contactus',
      component:contactus,
      meta: { keepAlive: true }
    },
    {
      path:'*',
      redirect:'/',
    }
  ],
  linkActiveClass:'menu-active'
})
