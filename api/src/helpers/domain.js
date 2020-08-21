import { URL } from 'url'

const getOrigin = (context) => new URL(context.request.get('origin'))

const getSubdomain = (context) => getOrigin(context).hostname.split('.')[0]

export default {
  getOrigin,
  getSubdomain
}
