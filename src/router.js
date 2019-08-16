import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home'),
    },
    {
      path: '/date',
      component: () => import('./views/date'),
    },
    {
      path: '/moreroom/:id',
      component: () => import('./views/Moreroom'),
    },
  ],
});
