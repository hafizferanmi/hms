const AUTH_TOKEN_KEY = '__token'

const setAuthToken = token => window.localStorage.setItem(AUTH_TOKEN_KEY, token)
const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY)
const removeToken = () => window.localStorage.removeItem(AUTH_TOKEN_KEY)

export {
  getAuthToken,
  setAuthToken,
  removeToken
}
