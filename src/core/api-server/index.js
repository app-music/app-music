import singerService from './singer';


const servers = {
  singerService,

};



export default {
  install(Vue) {
    Object.keys(servers).forEach(key => {
      Vue.prototype[`$${key}`] = servers[key];
    });
  }
}

