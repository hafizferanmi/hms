import { URL } from 'url'

const getOrigin = (req) => new URL(req.get('origin'))

const getSubdomain = (req) => getOrigin(req).hostname.split('.')[0]

export default {
  getOrigin,
  getSubdomain
}
