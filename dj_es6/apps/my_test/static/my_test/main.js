import Vue from 'vue';
import vuetify from './plugin.js';

import App from './vue/App.vue';

Vue.config.productionTip = false;
new Vue({
  vuetify: vuetify,
  render: h => h(App),
}).$mount('#foo');
