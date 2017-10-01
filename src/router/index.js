import Vue from 'vue'
import Router from 'vue-router'
import CountriesGrid from '@/components/countries/CountriesGrid'
import CountryView from '@/components/countries/CountryView'
import SubdivisionsGrid from '@/components/subdivisions/SubdivisionsGrid'
import SubdivisionView from '@/components/subdivisions/SubdivisionView'

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
      path: '/subdivisions',
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid
    },
    {
      path: '/subdivisions/:subdivisionid',
      name: 'SubdivisionView',
      component: SubdivisionView,
      props: (route) => ({subdivisionid: route.params.subdivisionid})
    }
  ]
})
