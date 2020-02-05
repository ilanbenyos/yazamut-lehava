import Vue from 'vue';
import App from './App.vue';
import router from "./router";

/* eslint-disable */
import plugins from './plugins'
/* eslint-enable */
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
