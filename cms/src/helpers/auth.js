const AUTH_TOKEN_KEY = '__token'

export const setAuthToken = token => window.localStorage.setItem(AUTH_TOKEN_KEY, token)
export const getAuthToken = () => window.localStorage.getItem(AUTH_TOKEN_KEY)
export const removeToken = () => window.localStorage.removeItem(AUTH_TOKEN_KEY)
