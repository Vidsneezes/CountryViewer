import {data} from './fakeapi'

var state = {
  countryId: 0,
  subdivisionId: 0
}

export function GetCountries () {
  return data.countries
}

export function GetCountry (id) {
  state.countryId = id
  return data.countries[id]
}

export function GetLastCountry () {
  return data.countries[state.countryId]
}

export function GetSubdivisions () {
  return data.countries[state.countryId].subdivisions
}

export function GetSubdivision (id) {
  state.subdivisionId = id
  return data.countries[state.countryId].subdivisions[id]
}

