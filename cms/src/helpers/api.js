import axios from "axios";
import JWTDecode from "jwt-decode";
import dayjs from "dayjs";

export let API_BASE_URL;

if (process.env.NODE_ENV === "development")
  API_BASE_URL = "http://localhost:3001";
if (process.env.NODE_ENV === "test") API_BASE_URL = "https://.api.isuites.xyz";
if (process.env.NODE_ENV === "production")
  API_BASE_URL = "https://api.isuites.xyz";

const AUTH_TOKEN_KEY = "__token";

export const saveAuthToken = (token) =>
  window.localStorage.setItem(AUTH_TOKEN_KEY, token);

export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY);

export const decodeToken = (token) => JWTDecode(token);

export const checkIsTokenExpired = (token) =>
  dayjs.unix(decodeToken(getAuthToken()).exp) < Date.now();

const request = () =>
  axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer: ${getAuthToken()}` },
  });

export const fetchData = async (path, params) => {
  const res = await request().get(path, { params });
  return res.data;
};

const sendData = async (path, body = {}) => {
  const res = await request().post(path, body);
  return res.data;
};

export const deleteResource = async (path) => {
  const res = await request().delete(path);
  return res.data;
};

export const modifyResource = async (path, body) => {
  const res = await request().put(path, body);
  return res.data;
};
// AUTH API
export const staffLogin = (body) => sendData("/staff/login", body);
export const forgotPassword = (body) =>
  sendData("/staff/recover-password", body);
export const resetPassword = (body) => sendData("/staff/reset-password", body);
export const changePassword = (body) =>
  sendData("/staff/change-password", body);

// DASHBOARD API
export const getAnalytics = () => fetchData("/dashboard/analytics");

// STAFF API
export const getCurrentStaff = () => fetchData("staff/currentStaff");
export const addStaff = (body) => sendData("/staff/add", body);
export const updateStaff = (staffId, body) =>
  modifyResource(`staff/update/${staffId}`, body);
export const disableStaff = (staffId, body) =>
  modifyResource(`staff/disable/${staffId}`, body);
export const deleteStaff = (staffId) =>
  deleteResource(`staff/delete/${staffId}`);
export const getStaffs = () => fetchData("/staff/all");

// ROOMTYPE API
export const getAllRoomTypes = () => fetchData("/roomTypes/all");
export const addRoomType = (body) => sendData("/roomTypes/add", body);
export const updateRoomType = (roomTypeId, body) =>
  modifyResource(`/roomTypes/update/${roomTypeId}`, body);
export const deleteRoomType = (roomTypeId) =>
  deleteResource(`/roomTypes/delete/${roomTypeId}`);
export const getRoomType = (roomTypeId) =>
  fetchData(`/roomTypes/${roomTypeId}`);

// ROOMS API
export const getAllRooms = () => fetchData("/rooms/all");
export const getAllRoomsAndRoomTypes = () => fetchData("/rooms/all/roomtypes");
export const getRoom = (roomId) => fetchData(`/rooms/${roomId}`);
export const addRoom = (body) => sendData("/rooms/add", body);
export const updateRoom = (roomId, body) =>
  modifyResource(`/rooms/update/${roomId}`, body);
export const deleteRoom = (roomId) => deleteResource(`/rooms/delete/${roomId}`);

// CHECKIN API
export const checkIn = (body) => sendData("/checkIn/add", body);
export const checkOut = (checkInId) =>
  sendData(`/checkIn/checkOut/${checkInId}`);
export const deleteCheckIn = (checkInId) =>
  deleteResource(`/checkIn/delete/${checkInId}`);
export const updateCheckIn = (checkInId) =>
  modifyResource(`/checkIn/update/${checkInId}`);
export const getCheckIns = (startDate, endDate) =>
  fetchData("/checkIn/all", { startDate, endDate });
export const getCheckIn = (checkInId) => fetchData(`/hall/${checkInId}`);

// HALL API
export const getHalls = () => fetchData("/hall/all");
export const getHall = (hallId) => fetchData(`/hall/${hallId}`);
export const addHall = (body) => sendData("/hall/add", body);
export const updateHall = (hallId, body) =>
  modifyResource(`/hall/update/${hallId}`, body);
export const deleteHall = (hallId) => deleteResource(`/hall/delete/${hallId}`);

// HALL BOOKING API
export const getBookings = () => fetchData("/booking/all");
export const getBooking = (bookingId) => fetchData(`/booking/${bookingId}`);
export const addBooking = (body) => sendData("/booking/add", body);
export const updateBooking = (bookingId, body) =>
  modifyResource(`/booking/update/${bookingId}`, body);
export const deleteBooking = (bookingId) =>
  deleteResource(`/booking/delete/${bookingId}`);

// TODOS API
export const getTodos = () => fetchData("/todos/all");
export const getTodo = (todoId) => fetchData(`/todos/${todoId}`);
export const addTodo = (body) => sendData("/todos/add", body);
export const pinTodo = (todoId) => modifyResource(`/todos/pin/${todoId}`);
export const completeTodo = (todoId) =>
  modifyResource(`/todos/complete/${todoId}`);
export const updateTodo = (todoId, body) =>
  modifyResource(`/todos/update/${todoId}`, body);
export const deleteTodo = (todoId) => deleteResource(`/todos/delete/${todoId}`);

// EMAIL TEMPLATE API
export const getEmailTemplates = () => fetchData("/emailTemplate/all");
export const getEmailTemplate = (templateId) =>
  fetchData(`/emailTemplate/${templateId}`);
export const addEmailTemplate = (body) => sendData("/emailTemplate/add", body);
export const updateEmailTemplate = (templateId, body) =>
  modifyResource(`/emailTemplate/update/${templateId}`, body);
export const deleteEmailTemplate = (templateId) =>
  deleteResource(`emailTemplate/delete/${templateId}`);

// COMPANY SETTINGS API
export const uploadCompanyLogo = (body) =>
  sendData("/settings/uploadLogo", body);
export const updateCompanyInfo = (companyId, body) =>
  modifyResource(`/settings/update/${companyId}`, body);
export const updateCompanyCurrency = (companyId, body) =>
  modifyResource(`/settings/update/currency/${companyId}`, body);

// MISC API
export const uploadProfileImage = (body) => sendData("/staff/upload-dp", body);
