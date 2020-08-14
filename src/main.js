import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入样式
import 'nprogress/nprogress.css'
import './styles/index.scss';

// 自动引入并挂载工具util
Vue.use({
  install(Vue){
    let res = {};
    require.context('./utils', true, /.js$/).keys().forEach(function (n) {
      const _n = n.replace(/\.\/|\.js/g,'');
      if(_n.indexOf('_') === 0) return;
      const _import = require(`./utils/`+ _n);

      for (let o in _import){
        if(o === 'default'){
          for (let i in _import[o]){
            res[i] = _import[o][i];
          }
        }else{
          res[o] = _import[o];
        }
      }
    });
    Vue.prototype.$util = res
  }
});

// 自动引入插件
require.context('./plugins', true, /.js$/).keys().forEach(function (n) {
  const _n = n.replace(/\.\/|\.js/g,'');
  if(_n.indexOf('_') === 0) return;
  require(`./plugins/`+ _n)
});

// 自动引入并挂载api请求request
Vue.use({
  install(Vue){
    let res = {};
    require.context('./requests', true, /.js$/).keys().forEach(function (n) {
      const _n = n.replace(/\.\/|\.js/g,'');
      if(_n.indexOf('_') === 0) return;
      const _import = require(`./requests/`+ _n);
      for (let o in _import){
        if(o === 'default'){
          for (let i in _import[o]){
            res[i] = _import[o][i];
          }
        }else{
          res[o] = _import[o];
        }
      }
    });

    Vue.prototype.$request = res
  }
});

// 注册component全局组件
const requireComponents = require.context('./components/global', true, /.vue$/);
Vue.use({
  install:function (Vue){
    requireComponents.keys().forEach(function (n) {
      const _n = n.replace(/\.\/|\.vue/g,'')
      //if(_n.indexOf('_') === 0) return;
      let name = _n.split('/')
      name = name[name.length-1]
      name = name.replace(name[0],name[0].toUpperCase())
      Vue.component(name,requireComponents(n).default)
    });
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')