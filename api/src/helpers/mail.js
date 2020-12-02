import mailgun from 'mailgun-js'
import Debug from 'debug'

const debug = Debug('API: mail.js')

const apiKey = 'de8f89d118c565ffa367cf37230c6358-ea44b6dc-8d20755f'
const domain = 'mg.isuites.xyz'
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
