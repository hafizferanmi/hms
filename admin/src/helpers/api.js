import axios from 'axios'

let BASE_URL

if (process.env.NODE_ENV === 'development') BASE_URL = 'http://localhost:3001'
if (process.env.NODE_ENV === 'test') BASE_URL = 'https://.api.isuites.xyz'
if (process.env.NODE_ENV === 'production') BASE_URL = 'https://api.isuites.xyz'

const AUTH_TOKEN_KEY = '__token'

export const saveAuthToken = token => window.localStorage.setItem(AUTH_TOKEN_KEY, token)
const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY)

const request = () => axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer: ${getAuthToken()}` }
})

export const fetchData = async (path) => {
  const res = await request().get(path)
  return res.data
}

const sendData = async (path, body = {}) => {
  const res = await request().post(path, body)
  return res.data
}

export const deleteResource = async (path, body) => {
  const res = await request().delete(path, body)
  return res.data.data
}

export const modifyResource = async (path, body) => {
  const res = await request().put(path, body)
  return res.data.data
}

export const adminLogin = (body) => sendData('/admin/login', body)
export const fetchCompanies = () => fetchData('/company/all')
export const addCompany = (body) => sendData('/company/create', body)
export const updateCompany = (body) => modifyResource(`/company/${body._id}`, body)
