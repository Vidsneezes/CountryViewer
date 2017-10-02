import {data} from './fakeapi'
import {GetCountriesAPI,
  GetCountryAPI,
  GetSubdivisionsAPI,
  GetSubdivisionAPI,
  AddCountryAPI} from './CountryApi'

export function GetCountries (callback) {
  GetCountriesAPI(callback)
}

export function GetCountry (id, callback) {
  GetCountryAPI(id, callback)
}

export function GetNextCountryCount () {
  let max = 0
  if (data.countries.length > 0) {
    data.countries.forEach((element) => {
      if (element.id > max) {
        max = element.id
      }
    })
  }
  return max
}

export function AddCountry (newCountry, callback, error) {
  AddCountryAPI(newCountry, callback, error)
}

export function EditCountry (newCountryInfo, countryid) {
  let countryIndex = GetCountryIndex(countryid)
  data.countries[countryIndex].name = newCountryInfo.name
  data.countries[countryIndex].alpha2 = newCountryInfo.alpha2
  data.countries[countryIndex].alpha3 = newCountryInfo.alpha3
  data.countries[countryIndex].code = newCountryInfo.code
  data.countries[countryIndex]['iso_3166_2'] = newCountryInfo.iso31662
  data.countries[countryIndex]['is_independent'] = newCountryInfo.isindependent
}

export function DeleteCountry (countryid) {
  let indexedCountry = GetCountryIndex(countryid)
  data.countries.splice(indexedCountry, 1)
}

export function GetCountryIndex (countryid) {
  let realIndex = -1
  data.countries.find((element, index) => {
    if (element.id === countryid) {
      realIndex = index
      return
    }
  })
  return realIndex
}

export function GetSubdivisionIndex (countryIndex, subdivisionid) {
  let realIndex = -1
  data.countries[countryIndex].subdivisions.find((element, index) => {
    if (element.id === subdivisionid) {
      realIndex = index
      return
    }
  })
  return realIndex
}

export function GetNextSubdivisionCount (countryid) {
  let country = GetCountry(countryid)
  let max = 0
  country.subdivisions.forEach((element) => {
    if (element.id > max) {
      max = element.id
    }
  })
  return max
}

export function AddSubdivision (countryid, newSubdivision) {
  let indexedCountry = GetCountryIndex(countryid)
  let nextCount = GetNextSubdivisionCount(countryid) + 1
  data.countries[indexedCountry].subdivisions.push({
    id: nextCount,
    name: newSubdivision.name,
    code: newSubdivision.code,
    'country_id': countryid
  })
  return nextCount
}

export function EditSubdivision (countryid, newSubInfo, subdivisionid) {
  let indexedCountry = GetCountryIndex(countryid)
  let indexedSubdivision = GetSubdivisionIndex(indexedCountry, subdivisionid)
  let subdivision = GetSubdivision(countryid, subdivisionid)
  subdivision.name = newSubInfo.name
  subdivision.code = newSubInfo.code
  data.countries[indexedCountry].subdivisions[indexedSubdivision] = subdivision
}

export function DeleteSubdivision (countryid, subdivisionid) {
  let indexedCountry = GetCountryIndex(countryid)
  let indexedSubdivision = GetSubdivisionIndex(indexedCountry, subdivisionid)
  data.countries[indexedCountry].subdivisions.splice(indexedSubdivision, 1)
}

export function GetSubdivisions (countryid, callback) {
  GetSubdivisionsAPI(countryid, callback)
}

export function GetSubdivision (countryid, subdivisionid, callback) {
  GetSubdivisionAPI(countryid, subdivisionid, callback)
}
