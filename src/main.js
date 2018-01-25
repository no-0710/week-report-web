// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 开发环境提示信息关闭
Vue.config.productionTip = false

// 加载路由，启动app
import appRouter from './router'
import App from './App'

new Vue({
  router: appRouter,
  render: h => h(App)
}).$mount('#app')
