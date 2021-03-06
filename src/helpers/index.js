import { DEFAULT_SEARCH_PARAMS, REQUEST_DEFAULT_BODY } from '../consts'
import { isEmpty } from './utilities'

export function normalizeSearchParams (params) {
  params = Object.assign({}, params)
  params.q = isEmpty(params.q) ? DEFAULT_SEARCH_PARAMS.q : params.q
  params.from = isEmpty(params.from) ? DEFAULT_SEARCH_PARAMS.from : parseInt(params.from)
  params.size = isEmpty(params.size) ? DEFAULT_SEARCH_PARAMS.size : parseInt(params.size)
  params.index = isEmpty(params.index) ? DEFAULT_SEARCH_PARAMS.index : params.index
  params._source = isEmpty(params.source) ? '' : params.source.replace(/\s/g, '')
  delete params.source
  return params
}

export function paramsWithDefaults (params) {
  return Object.assign({}, REQUEST_DEFAULT_BODY, params)
}

export function capitalize (string) {
  if (typeof string !== 'string') throw new TypeError('arg must be a string')
  if (string.length === 0) return ''
  return string[0].toUpperCase() + string.slice(1)
}

export function truncate (text, limit) {
  if (!text) return ''
  if (typeof text !== 'string') text = text.toString()

  if (text.length > limit) {
    return text.slice(0, limit) + ' ...'
  } else {
    return text
  }
}

export function urlWithoutCredentials (url) {
  if (url.includes('@')) {
    let credentials = url.match(/https?:\/\/(.*(:.*)?)@/)[1]
    return url.replace(credentials + '@', '')
  } else {
    return url
  }
}

export function buildFetchAuthHeaderFromUrl (url) {
  if (url.includes('@')) {
    let credentials = url.match(/https?:\/\/(.*(:.*)?)@/)[1].split(':')
    if (credentials.length === 2) {
      return { 'Authorization': 'Basic ' + Buffer.from(credentials[0] + ':' + credentials[1]).toString('base64') }
    } else {
      return { 'Authorization': 'Basic ' + Buffer.from(credentials[0]).toString('base64') }
    }
  } else {
    return {}
  }
}
