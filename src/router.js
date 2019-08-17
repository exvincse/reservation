import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index'),
    },
    {
      path: '/allroom',
      component: () => import('./views/Allroom'),
    },
    {
      path: '/date',
      component: () => import('./views/Date'),
    },
    {
      path: '/moreroom/:id',
      component: () => import('./views/Moreroom'),
    },
  ],
});
