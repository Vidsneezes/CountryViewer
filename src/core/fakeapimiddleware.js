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

export function AddCoutry () {
  data.countries.push({
    id: 3,
    name: 'Mexico',
    alpha2: 'MX',
    alpha3: 'MXC',
    code: null,
    'iso_3166_2': null,
    'is_independent': '1',
    subdivisions: [
      {
        id: 1,
        name: 'Mexico City',
        'country_id': 3,
        code: 'silver'
      },
      {
        id: 2,
        name: 'Guadarajara',
        'country_id': 3,
        code: 'Blanen'
      }
    ]
  })
  console.log(data.countries)
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

