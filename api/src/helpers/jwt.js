import jwt from 'jsonwebtoken'

const JWT_SECRET = 'HMSJWT'

const generateAuthToken = id => jwt.sign({ id }, JWT_SECRET)

const verifyAuthToken = token => jwt.verify(token, JWT_SECRET)

const getTokenFromHeader = header => header.replace('Bearer: ', '')

export default {
  generateAuthToken,
  verifyAuthToken,
  getTokenFromHeader
}
