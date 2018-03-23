import singerService from './singer';
import recommendService from './recommend';
import searchService from './search';

const servers = {
  singerService,
  recommendService,
  searchService
};



export default {
  install(Vue) {
    Object.keys(servers).forEach(key => {
      Vue.prototype[`$${key}`] = servers[key];
    });
  }
}

