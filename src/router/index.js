import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import news from '@/views/news'
import newsList from '@/components/NewsList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      children:[
        {
          path: '/news/page/:page',
          component: newsList
        }
      ]
    }
  ],
  linkActiveClass:'menu-active'
})
