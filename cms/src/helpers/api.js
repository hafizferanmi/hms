import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
const AUTH_TOKEN_KEY = '__token'

export const saveAuthToken = token => window.localStorage.setItem(AUTH_TOKEN_KEY, token)
const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY)

const AUTH_TOKEN = getAuthToken(AUTH_TOKEN_KEY)

const request = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer: ${AUTH_TOKEN}` }
})

export const fetchData = async (path) => {
  const res = await request.get(path)
  return res.data
}

const sendData = async (path, body = {}) => {
  const res = await request.post(path, body)
  return res.data
}

export const deleteResource = async (path) => {
  const res = await request.delete(path)
  return res.data
}

export const modifyResource = async (path, body) => {
  const res = await request.put(path, body)
  return res.data
}

export const staffLogin = (body) => sendData('/staff/login', body)
export const getCurrentStaff = () => fetchData('staff/currentStaff')
export const addStaff = (body) => sendData('/staff/add', body)
export const updateStaff = (staffId, body) => modifyResource(`staff/update/${staffId}`, body)
export const deleteStaff = (staffId, body) => deleteResource(`staff/delete/${staffId}`)
export const getStaffs = () => fetchData('/staff/all')
