import Debug from 'debug'
import helpers from '../helpers'
import Staff from '../models/staff'

const { verifyAuthToken, getTokenFromHeader } = helpers.jwt
const { JsonResponse } = helpers.response

const debug = Debug('API: Middleware')

const currentStaff = async (req, res, next) => {
  debug('Current Staff')
  const authToken = req.get('Authorization')
  if (authToken) {
    const token = getTokenFromHeader(authToken)
    const decodedToken = verifyAuthToken(token)

    if (!decodedToken) {
      return res.json(JsonResponse(false, [], 'Unauthorized'))
    }

    const staff = await Staff.find(decodedToken.id)
    if (!staff) {
      return res.json(JsonResponse(false, [], 'Unauthorized'))
    }

    req.state.staff = staff
    next()
  } else {
    return res.json(JsonResponse(false, [], 'Unauthorized'))
  }
}

export default currentStaff
