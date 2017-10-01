import {data} from './fakeapi'

var state = {
  countryId: 0,
  subdivisionId: 0
}

export function GetCountry () {
  return data.countries[state.countryId]
}

export function GetSubdivision () {
  return data.countries[state.countryId].subdivisions[state.subdivisionId]
}

