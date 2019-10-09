import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Allroom'),
    },
    {
      path: '/moreroom/:id',
      component: () => import('./views/Moreroom'),
    },
  ],
});
