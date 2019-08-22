import Vue from 'vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import Lightbox from 'vue-easy-lightbox';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.vue';
import router from './router';
import store from './store';
import 'swiper/dist/css/swiper.css';

Vue.use(Lightbox);
Vue.use(VueAwesomeSwiper);
Vue.use(VeeValidate, {
  events: 'input|blur',
});
VeeValidate.Validator.localize('zh_TW', zhTW);
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.config.productionTip = false;
axios.defaults.withCredentials = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
