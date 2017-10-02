import axios from 'axios'

const path = 'http://exam.api.genial.gt/api/countries'
const subdivisionPath = '/subdivisions'
const responseType = 'application/json'

export function GetCountriesAPI (callback) {
  axios({
    method: 'get',
    url: path,
    headers: {
      'Content-Type': responseType
    }
  }).then(callback)
}

export function GetCountryAPI (countryId, callback) {
  axios({
    method: 'get',
    url: path + '/' + countryId,
    responseType: responseType
  }).then(callback)
}

export function AddCountryAPI (countryId, data, callback) {
  axios({
    method: 'post',
    url: path + '/' + countryId,
    data: data,
    headers: {
      'Content-Type': responseType
    },
    responseType: responseType
  }).then(callback)
}

export function UpdateCountryAPI (countryId, data, callback) {
  axios({
    method: 'put',
    url: path + '/' + countryId,
    data: data
  }).then(callback)
}

export function DeleteCountryAPI (countryId, callback) {
  axios({
    method: 'delete',
    url: path + '/' + countryId
  }).then(callback)
}

export function GetSubdivisionsAPI (countryId, callback) {
  axios({
    method: 'get',
    url: path + '/' + countryId + subdivisionPath
  }).then(callback)
}

export function AddSubdivisionAPI (countryId, data, callback) {
  axios({
    method: 'post',
    url: path + '/' + countryId + subdivisionPath,
    data: data
  }).then(callback)
}

export function GetSubdivisionAPI (countryId, subdivisionId, callback) {
  axios({
    method: 'get',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId
  }).then(callback)
}

export function UpdateSubdivisionAPI (countryId, subdivisionId, data, callback) {
  axios({
    method: 'put',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId,
    data: data
  }).then(callback)
}

export function DeleteSubdivisionAPI (countryId, subdivisionId, callback) {
  axios({
    method: 'delete',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId
  }).then(callback)
}
