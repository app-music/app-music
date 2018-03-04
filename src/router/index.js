import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: resolve => import('../components/recommend/recommend.vue').then(resolve),
    },
    {
      path: '/search',
      component: resolve => import('../components/search/search.vue').then(resolve),
    },
    {
      path: '/seniority',
      component: resolve => import('../components/seniority/seniority.vue').then(resolve),
    },
    {
      path: '/user',
      component: resolve => import('../components/user/user.vue').then(resolve),
    },
    {
      path: '/singer',
      component: resolve => import('../components/singer/singer.vue').then(resolve),
    },


  ]
})
