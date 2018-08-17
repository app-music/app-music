import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '*',
            redirect: '/recommend'
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => import('../components/login/login.vue').then(resolve),
        },
        {
            path: '/register',
            name: 'register',
            component: resolve => import('../components/login/register.vue').then(resolve),
        },

        {
            path: '/recommend',
            name: 'recommend',
            component: resolve => import('../components/recommend/recommend.vue').then(resolve),
        },
        {
            path: '/recommend/detail/:id',
            name: 'recommendDetail',
            component: resolve => import('../components/recommend/recommend-detail.vue').then(resolve),
        },
        {
            path: '/search',
            name: 'search',
            component: resolve => import('../components/search/search.vue').then(resolve),
        },
        {
            path: '/seniority',
            name: 'seniority',
            component: resolve => import('../components/seniority/seniority.vue').then(resolve),
        },
        {
            path: '/seniority/detail/:id',
            name: 'seniorityDetail',
            component: resolve => import('../components/seniority/seniority-detail.vue').then(resolve),
        },
        {
            path: '/user',
            name: 'user',
            component: resolve => import('../components/user/user.vue').then(resolve),
        },
        {
            path: '/singer',
            name: 'singer',
            component: resolve => import('../components/singer/singer.vue').then(resolve),
        },
        {
            path: '/singer/detail/:id',
            name: 'singerName',
            component: resolve => import('../components/singer/singer-detail.vue').then(resolve),
        },

    ]
});

router.beforeEach((to, from, next) => {

    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
    let loginInfo =JSON.parse(localStorage.getItem('loginInfo'));  // 是否登录
    // 未登录状态；跳转至login
    // 已登录状态；当路由到login时，跳转至recommend
    if (to.name === 'login') {
        if (loginInfo) {
            next({path: from.path})
        }else {
            next();
        }
    }else if(to.name ==='register'){
        next()
    } else {
        if (!loginInfo) {
            next({path:'/login'})
        }else {
            next()
        }
    }

});

export default router;
