// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../src/assets/css/global.scss'
import "../src/assets/css/utils.scss";
import Loading from './core/api-server/index';
import store from './core/store';
import './core/utils/validate.js';
// import VeeValidate from 'vee-validate';
//
// Vue.use(VeeValidate);
Vue.config.productionTip = false;

/* eslint-disable no-new */


Vue.use(Mint);
Vue.use(Loading);

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

