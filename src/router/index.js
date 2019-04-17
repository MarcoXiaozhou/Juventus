import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [
{
    path: '/',
    // redirect: '/home',
    name: 'index',
    component: () => import('@/index/index'),
    // children: [
    //  {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import('@/index/components/home')
    //   // meta: {title: '商品列表', icon: 'product-list'}
    //  }
    //  ],
},
{
    path: '/home',
    name: 'home',
    component: () => import('@/index/components/home')
},
{
    path: '/find',
    name: 'find',
  
    component: () => import('@/index/components/find')
},
{
    path: '/video',
    name: 'video',
  
    component: () => import('@/index/components/video')
},
{
    path: '/my',
    name: 'my',
  
    component: () => import('@/index/components/my')
}
]

export default new Router({
    routes
})
