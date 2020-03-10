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
    data,
    headers: {
      'Content-Type': responseType
    }
  }).then(callback).catch(error)
}

export function UpdateCountryAPI (countryId, data, callback, error) {
  axios({
    method: 'put',
    url: `${path}/${countryId}`, // podes manejar las concatenaciones de strings asi; le llaman template literal
    data // esto es como un json, js asume que tu key se llama data, y tu value el contenido de data
  }).then(callback).catch(error)
}

export function DeleteCountryAPI (countryId, callback) {
  axios({
    method: 'delete',
    url: `${path}/${countryId}`
  }).then(callback)
}

export function GetSubdivisionsAPI (countryId, callback) {
  axios({
    method: 'get',
    url: `${path}/${countryId}${subdivisionPath}` // podes manejar las concatenaciones de strings asi; le llaman template literal
  }).then(callback)
}

export function AddSubdivisionAPI (countryId, data, callback, error) {
  axios({
    method: 'post',
    url: `${path}/${countryId}${subdivisionPath}`,
    data // esto es como un json, js asume que tu key se llama data, y tu value el contenido de data
  }).then(callback).catch(error)
}

export function GetSubdivisionAPI (countryId, subdivisionId, callback, error) {
  axios({
    method: 'get',
    url: `${path}/${countryId}${subdivisionPath}/${subdivisionId}` // podes manejar las concatenaciones de strings asi; le llaman template literal
  }).then(callback).catch(error)
}

export function UpdateSubdivisionAPI (countryId, subdivisionId, data, callback, error) {
  axios({
    method: 'put',
    url: `${path}/${countryId}${subdivisionPath}/${subdivisionId}`, // podes manejar las concatenaciones de strings asi; le llaman template literal
    data // esto es como un json, js asume que tu key se llama data, y tu value el contenido de data
  }).then(callback).catch(error)
}

export function DeleteSubdivisionAPI (countryId, subdivisionId, callback) {
  axios({
    method: 'delete',
    url: `${path}/${countryId}${subdivisionPath}/${subdivisionId}` // podes manejar las concatenaciones de strings asi; le llaman template literal
  }).then(callback)
}
