import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import news from '@/views/news'
import newsDetail from '@/views/newsDetail'
import contactus from '@/views/contactus'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/news/page/:page',
      name: 'news',
      component: news,
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
      component:newsDetail
    },
    {
      path:'/contactus',
      name:'contactus',
      component:contactus
    },
    {
      path:'*',
      redirect:'/',
    }
  ],
  linkActiveClass:'menu-active'
})
