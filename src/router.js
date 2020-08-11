import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const routers = [];
require.context('./routers', true, /.js$/).keys().forEach(function (n) {
  const _import = require(`./routers/`+n.replace(/\.\/|\.js/g,''));

  _import.default.forEach(function (r) {
    routers.push(r)
  });
});

const Route = new Router({
  mode: 'history',
  routes:routers
});

Route.beforeEach((to, from, next) => {
  NProgress.start()
  next()
});
Route.afterEach(() => {
  NProgress.done()
});

export default Route;