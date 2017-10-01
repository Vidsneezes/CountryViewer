import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
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
