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

export function GetCountryAPI (countryId, callback, error) {
  axios({
    method: 'get',
    url: path + '/' + countryId,
    headers: {
      'Content-Type': responseType
    }
  }).then(callback).catch(error)
}

export function AddCountryAPI (data, callback, error) {
  axios({
    method: 'post',
    url: path,
    data: data,
    headers: {
      'Content-Type': responseType
    }
  }).then(callback).catch(error)
}

export function UpdateCountryAPI (countryId, data, callback, error) {
  axios({
    method: 'put',
    url: path + '/' + countryId,
    data: data
  }).then(callback).catch(error)
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

export function AddSubdivisionAPI (countryId, data, callback, error) {
  axios({
    method: 'post',
    url: path + '/' + countryId + subdivisionPath,
    data: data
  }).then(callback).catch(error)
}

export function GetSubdivisionAPI (countryId, subdivisionId, callback) {
  axios({
    method: 'get',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId
  }).then(callback)
}

export function UpdateSubdivisionAPI (countryId, subdivisionId, data, callback, error) {
  axios({
    method: 'put',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId,
    data: data
  }).then(callback).catch(error)
}

export function DeleteSubdivisionAPI (countryId, subdivisionId, callback) {
  axios({
    method: 'delete',
    url: path + '/' + countryId + subdivisionPath + '/' + subdivisionId
  }).then(callback)
}
