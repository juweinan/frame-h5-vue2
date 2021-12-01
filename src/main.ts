// 配置可伸缩布局，主要是将 1rem 设为 viewWidth / 10 = 10vw
import 'amfe-flexible';
import './assets/style/reset.less';
import './utils/useVant';

import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
