import mailgun from 'mailgun-js'
import Debug from 'debug'

const debug = Debug('API: mail.js')

const apiKey = process.env.MAILGUN_API_KEY
const domain = process.env.MAILGUN_DOMAIN
const mg = mailgun({ apiKey, domain })

const sendMail = async (mailConfig) => { // mailConfig = { from, to, subject, text }
  debug('sendMail()')
  try {
    await mg.messages().send(mailConfig)
    debug('Mail sent')
    return true
  } catch (e) {
    debug('Mail not sent')
    return false
  }
}

export default sendMail
