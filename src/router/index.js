import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import news from '@/views/news'

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
      component: news
    }
  ],
  linkActiveClass:'menu-active'
})
