import Vue from 'vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.config.productionTip = false;
axios.defaults.withCredentials = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
