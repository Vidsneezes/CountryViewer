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

export function EditCountry (newCountryInfo, countryid) {
  let indexedCountry = countryid - 1
  data.countries[indexedCountry].name = newCountryInfo.name
  data.countries[indexedCountry].alpha2 = newCountryInfo.alpha2
  data.countries[indexedCountry].alpha3 = newCountryInfo.alpha3
  data.countries[indexedCountry].code = newCountryInfo.code
  data.countries[indexedCountry]['iso_3166_2'] = newCountryInfo.iso31662
  data.countries[indexedCountry]['is_independent'] = newCountryInfo.isindependent
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

export function EditSubdivision (newSubInfo, subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[state.countryId].subdivisions[indexedSub].name = newSubInfo.name
  data.countries[state.countryId].subdivisions[indexedSub].code = newSubInfo.code
}

export function DeleteSubdivision (subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[state.countryId].subdivisions.splice(indexedSub, 1)
}

export function GetLastCountry () {
  return data.countries[state.countryId]
}

export function GetSubdivisions () {
  return data.countries[state.countryId].subdivisions
}

export function GetSubdivision (id) {
  let indexedSub = id - 1
  state.subdivisionId = id
  return data.countries[state.countryId].subdivisions[indexedSub]
}

