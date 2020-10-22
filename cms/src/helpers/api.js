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
// AUTH API
export const staffLogin = (body) => sendData('/staff/login', body)

// STAFF API
export const getCurrentStaff = () => fetchData('staff/currentStaff')
export const addStaff = (body) => sendData('/staff/add', body)
export const updateStaff = (staffId, body) => modifyResource(`staff/update/${staffId}`, body)
export const deleteStaff = (staffId) => deleteResource(`staff/delete/${staffId}`)
export const getStaffs = () => fetchData('/staff/all')

// ROOMTYPE API
export const getAllRoomTypes = () => fetchData('/roomTypes/all')
export const addRoomType = (body) => sendData('/roomTypes/add', body)
export const updateRoomType = (roomTypeId, body) => modifyResource(`/roomTypes/update/${roomTypeId}`, body)
export const deleteRoomType = (roomTypeId) => deleteResource(`/roomTypes/delete/${roomTypeId}`)
export const getRoomType = (roomTypeId) => fetchData(`/roomTypes/${roomTypeId}`)

// ROOMS API
export const getAllRooms = () => fetchData('/rooms/all')
export const getAllRoomsAndRoomTypes = () => fetchData('/rooms/all/roomtypes')
export const getRoom = (roomId) => fetchData(`/rooms/${roomId}`)
export const addRoom = (body) => sendData('/rooms/add', body)
export const updateRoom = (roomId, body) => modifyResource(`/rooms/update/${roomId}`, body)
export const deleteRoom = (roomId) => deleteResource(`/rooms/delete/${roomId}`)

// CHECKIN API
export const checkIn = (body) => sendData('/checkIn/add', body)
export const checkOut = (checkInId) => sendData(`/checkIn/${checkInId}`)
export const deleteCheckIn = (checkInId) => deleteResource(`/checkIn/delete/${checkInId}`)
export const updateCheckIn = (checkInId) => modifyResource(`/checkIn/update/${checkInId}`)
export const getCheckIns = () => fetchData('/checkIn/all')
export const getCheckIn = (checkInId) => fetchData(`/hall/${checkInId}`)

// HALL API
export const getHalls = () => fetchData('/hall/all')
export const getHall = (hallId) => fetchData(`/hall/${hallId}`)
export const addHall = (body) => sendData('/hall/add', body)
export const updateHall = (hallId, body) => modifyResource(`/hall/update/${hallId}`, body)
export const deleteHall = (hallId) => deleteResource(`/hall/delete/${hallId}`)

// HALL BOOKING API
export const getBookings = () => fetchData('/booking/all')
export const getBooking = (bookingId) => fetchData(`/booking/${bookingId}`)
export const addBooking = (body) => sendData('/booking/add', body)
export const updateBooking = (bookingId, body) => modifyResource(`/booking/update/${bookingId}`, body)
export const deleteBooking = (bookingId) => deleteResource(`/booking/delete/${bookingId}`)
