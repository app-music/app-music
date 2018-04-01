import singerService from './singer';
import recommendService from './recommend';
import searchService from './search';
import seniorityService from './seniority';
import songService from './song';

const servers = {
  singerService,
  recommendService,
  searchService,
  seniorityService,
  songService
};


export default {
  install(Vue) {
    Object.keys(servers).forEach(key => {
      Vue.prototype[`$${key}`] = servers[key];
    });
  }
}

