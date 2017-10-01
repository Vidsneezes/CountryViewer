import Vue from 'vue'
import Router from 'vue-router'
import CountriesGrid from '@/components/CountriesGrid'
import CountryView from '@/components/CountryView'
import SubdivisionsGrid from '@/components/SubdivisionsGrid'
import SubdivisionView from '@/components/SubdivisionView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/countries'
    },
    {
      path: '/countries',
      name: 'CountriesGrid',
      component: CountriesGrid
    },
    {
      path: '/countries/:countryid',
      name: 'CountryView',
      component: CountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: '/countries/:countryid/subdivisions',
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid
    },
    {
      path: '/countries/:countryid/subdivisions/:subdivisionid',
      name: 'SubdivisionView',
      component: SubdivisionView
    }
  ]
})
