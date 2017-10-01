import {data} from './fakeapi'

var state = {
  countryId: 0,
  subdivisionId: 0
}

export function GetCountries () {
  return data.countries
}

export function GetCountry () {
  return data.countries[state.countryId]
}

export function GetSubdivisions () {
  return data.countries[state.countryId].subdivisions
}

export function GetSubdivision () {
  return data.countries[state.countryId].subdivisions[state.subdivisionId]
}

