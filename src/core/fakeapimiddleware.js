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

export function AddCountry (newCountry) {
  data.countries.push({
    id: data.countries.length + 1,
    name: newCountry.name,
    alpha2: newCountry.alpha2,
    alpha3: newCountry.alpha3,
    code: newCountry.code,
    'iso_3166_2': newCountry['iso_3166_2'],
    'is_independent': newCountry['is_independent'],
    subdivisions: [
    ]
  })
  return data.countries.length
}

export function AddSubdivision (newSubdivision) {
  data.countries[state.countryId].subdivisions.push({
    id: data.countries[state.countryId].subdivisions.length + 1,
    name: newSubdivision.name,
    code: newSubdivision.code,
    'country_id': state.countryId + 1
  })
  return data.countries[state.countryId].subdivisions.length
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

