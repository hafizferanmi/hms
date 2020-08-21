import createDefaultAdmin from './createDefaultAdmin'
import db from './db'

export default () => {
  db()
  createDefaultAdmin()
}
