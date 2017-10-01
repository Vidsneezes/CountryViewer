import Vue from 'vue'
import Router from 'vue-router'
import CountriesGrid from '@/components/CountriesGrid'
import CountryView from '@/components/CountryView'
import SubdivisionsGrid from '@/components/SubdivisionsGrid'

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
      path: '/countries/countryid',
      name: 'CountryView',
      component: CountryView
    },
    {
      path: '/countries/countryid/subdivisions',
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid
    },
    {
      path: '/countries/countryid/subdivisions',
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid
    }
  ]
})
