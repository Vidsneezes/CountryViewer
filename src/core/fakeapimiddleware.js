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

export function AddSubdivision (countryid, newSubdivision) {
  data.countries[countryid].subdivisions.push({
    id: data.countries[countryid].subdivisions.length + 1,
    name: newSubdivision.name,
    code: newSubdivision.code,
    'country_id': countryid + 1
  })
  return data.countries[countryid].subdivisions.length
}

export function EditSubdivision (countryid, newSubInfo, subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[countryid].subdivisions[indexedSub].name = newSubInfo.name
  data.countries[countryid].subdivisions[indexedSub].code = newSubInfo.code
}

export function DeleteSubdivision (countryid, subdivisionid) {
  let indexedSub = subdivisionid - 1
  data.countries[countryid].subdivisions.splice(indexedSub, 1)
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

