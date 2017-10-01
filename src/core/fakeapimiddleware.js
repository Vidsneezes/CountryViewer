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

export function GetNextCountryCount () {
  let max = 0
  if (data.countries.length > 0) {
    data.countries.forEach((element) => {
      if (element.id > max) {
        max = element
      }
    })
  }
  return max
}

export function AddCountry (newCountry) {
  let nextCount = GetNextCountryCount()
  data.countries.push({
    id: nextCount + 1,
    name: newCountry.name,
    alpha2: newCountry.alpha2,
    alpha3: newCountry.alpha3,
    code: newCountry.code,
    'iso_3166_2': newCountry['iso_3166_2'],
    'is_independent': newCountry['is_independent'],
    subdivisions: [
    ]
  })
  return nextCount + 1
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
      max = element
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

