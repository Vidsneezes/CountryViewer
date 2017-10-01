import Vue from 'vue';
import Router from 'vue-router';
import CountriesViewer from '@/components/CountriesViewer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CountriesViewer',
      component: CountriesViewer,
    },
  ],
});
