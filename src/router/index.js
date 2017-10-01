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
const CID = '/:countryid'
const ATC = COUNTRIES + CID
const SUBS = '/subdivisions'
const SIB = '/:subdivisionid'
const ATS = SUBS + SIB
const CISI = ATC + ATS

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
      path: ATC,
      name: 'CountryView',
      component: CountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: ATC + '/Edit',
      name: 'EditCountryView',
      component: EditCountryView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: ATC + SUBS,
      name: 'SubdivisionsGrid',
      component: SubdivisionsGrid,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: CISI,
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
      path: ATC + SUBS + '/AddSubdivision',
      name: 'AddSubdivisionView',
      component: AddSubdivisionView,
      props: (route) => ({countryid: route.params.countryid})
    },
    {
      path: CISI + '/Edit',
      name: 'EditSubdivisionView',
      component: EditSubdivisionView,
      props: (route) => ({countryid: route.params.countryid, subdivisionid: route.params.subdivisionid})
    }
  ]
})
