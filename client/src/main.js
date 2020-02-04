import Vue from 'vue'
import App from './App.vue'
/* eslint-disable */
import plugins from './plugins'
/* eslint-enable */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
