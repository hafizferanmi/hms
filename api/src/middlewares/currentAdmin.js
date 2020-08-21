import Debug from 'debug'
import helpers from '../helpers'
import Admin from '../models/admin'

const { verifyAuthToken, getTokenFromHeader } = helpers.jwt
const { JsonResponse } = helpers.response

const debug = Debug('API: Middleware')

const currentAdmin = async (req, res, next) => {
  debug('Current Admin')
  const authToken = req.get('Authorization')
  if (authToken) {
    const token = getTokenFromHeader(authToken)
    const decodedToken = verifyAuthToken(token)

    if (!decodedToken) {
      return res.json(JsonResponse(false, [], 'Unauthorized'))
    }

    const admin = await Admin.find(decodedToken.id)
    if (!admin) {
      return res.json(JsonResponse(false, [], 'Unauthorized'))
    }

    req.state.admin = admin
    next()
  } else {
    return res.json(JsonResponse(false, [], 'Unauthorized'))
  }
}

export default currentAdmin
