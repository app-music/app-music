import singerService from './singer';
import recommendService from './recommend';


const servers = {
  singerService,
  recommendService

};



export default {
  install(Vue) {
    Object.keys(servers).forEach(key => {
      Vue.prototype[`$${key}`] = servers[key];
    });
  }
}

