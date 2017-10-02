import Vue from 'vue'
import Router from 'vue-router'
import CountriesGrid from '@/components/countries/CountriesGrid'
import CountryView from '@/components/countries/CountryView'
import EditCountryView from '@/components/countries/EditCountryView'
import AddCountryView from '@/components/countries/AddCountryView'
import SubdivisionsGrid from '@/components/subdivisions/SubdivisionsGrid'
import SubdivisionView from '@/components/subdivisions/SubdivisionView'
import AddSubdivisionView from '@/components/subdivisions/AddSubdivisionView'
import EditSubdivisionView from '@/components/subdivisions/EditSubdivisionView'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

const COUNTRIES = '/countries'
const COUNTRYID = '/:countryid'
const COUNTRYPATH = COUNTRIES + COUNTRYID
const SUBDIVISIONS = '/subdivisions'
const SUBDIVISIONID = '/:subdivisionid'
const SUBDIVISIONPATH = SUBDIVISIONS + SUBDIVISIONID
const FULLPATH = COUNTRYPATH + SUBDIVISIONPATH

export default new Router({
  routes: [
    {
      path: '/',
      redirect: COUNTRIES
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/NotFound',
      name: 'PageNotFound404',
      component: PageNotFound
    },
    {
      path: COUNTRIES,
      name: 'CountriesGrid',
      component: CountriesGrid
    },
    {
      path: COUNTRYPATH,
      name: 'CountryView',
      component: CountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: COUNTRYPATH + '/Edit',
      name: 'EditCountryView',
      component: EditCountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: COUNTRYPATH + SUBDIVISIONS,
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: FULLPATH,
      name: 'SubdivisionView',
      component: SubdivisionView,
      props: (route) => ({countryid: route.params.countryid, subdivisionid: route.params.subdivisionid})
    },
    {
      path: '/AddCountry',
      name: 'AddCountryView',
      component: AddCountryView
    },
    {
      path: COUNTRYPATH + SUBDIVISIONS + '/AddSubdivision',
      name: 'AddSubdivisionView',
      component: AddSubdivisionView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: FULLPATH + '/Edit',
      name: 'EditSubdivisionView',
      component: EditSubdivisionView,
      props: (route) => ({countryid: route.params.countryid, subdivisionid: route.params.subdivisionid})
    }
  ]
})
