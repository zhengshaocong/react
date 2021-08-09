import axios from 'axios'
import {getToken} from './auth'
import {message} from 'antd'
const instace = axios.create({
  baseURL: '/api'
})

instace.interceptors.request.use(function (config) {
  config.headers['authoruzation'] = 'Bearer' + getToken()
  return config
}, (error) => Promise.reject(error))

instace.interceptors.response.use(function (response) {
  const res = response.data
  if (Number(res.code) !== 200) {
    message.error(res.message)
    console.error(res.message)
    return Promise.reject(res.message)
    // console.log(res.message)
    // return new Error(res.message || 'Error')
  } else {
    return res
  }
})


export function get (url, params) {
  return instace.get(url, {params})
}

export function post (url, data) {
  return instace.post(url, data)
}

export function put (url, data) {
  return instace.put(url, data)
}
export function del (url) {
  return instace.delete(url)
}
