import config from 'config'
import jwt from 'jsonwebtoken'

const getJwtSecret = () => config.get('jwtSecret')

const generateAuthToken = id => jwt.sign({ id }, getJwtSecret())

const verifyAuthToken = token => jwt.verify(token, getJwtSecret())

const getTokenFromHeader = header => header.replace('Bearer: ', '')

export default {
  generateAuthToken,
  verifyAuthToken,
  getTokenFromHeader
}
