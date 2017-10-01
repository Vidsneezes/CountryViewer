import {data} from './fakeapi'

export function GetCountries () {
  return data.countries
}

export function GetCountry (id) {
  let indexedCountry = -1
  data.countries.find((element, index) => {
    if (element.id === id) {
      indexedCountry = index
      return
    }
  })
  let country = data.countries[indexedCountry]
  return country
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
  let indexedCountry = GetCountry(countryid)
  indexedCountry.name = newCountryInfo.name
  indexedCountry.alpha2 = newCountryInfo.alpha2
  indexedCountry.alpha3 = newCountryInfo.alpha3
  indexedCountry.code = newCountryInfo.code
  indexedCountry['iso_3166_2'] = newCountryInfo.iso31662
  indexedCountry['is_independent'] = newCountryInfo.isindependent
  data.countries[indexedCountry.id] = indexedCountry
}

export function DeleteCountry (countryid) {
  let indexedCountry = 0
  data.countries.find((element, index) => {
    if (element.id === countryid) {
      indexedCountry = index
      return
    }
  })
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

export function AddSubdivision (countryid, newSubdivision) {
  let indexedCountry = GetCountryIndex(countryid)
  data.countries[indexedCountry].subdivisions.push({
    id: data.countries[indexedCountry].subdivisions.length + 1,
    name: newSubdivision.name,
    code: newSubdivision.code,
    'country_id': countryid
  })
  return data.countries[indexedCountry].subdivisions.length + 1
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

export function GetSubdivisions (countryid) {
  let country = GetCountry(countryid)
  return country.subdivisions
}

export function GetSubdivision (countryid, subdivisionid) {
  let country = GetCountry(countryid)
  let indexedSub = -1
  country.subdivisions.find((element, index) => {
    if (element.id === subdivisionid) {
      indexedSub = index
      return
    }
  })
  let subdivision = country.subdivisions[indexedSub]
  return subdivision
}

