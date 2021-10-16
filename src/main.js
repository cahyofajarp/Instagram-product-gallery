import Vue from 'vue'
import App from './App.vue'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import router from './router'

import VueToast from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false
Vue.use(VueToast);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
