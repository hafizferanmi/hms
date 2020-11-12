import cron from 'node-cron'
import Debug from 'debug'

import sendFreeTrialOverMail from '../cronjobs/sendFreeTrialOverMail'

const debug = Debug('API:onAppStart/cron.js')

const cronjobs = [
  sendFreeTrialOverMail
]

// TODO: check if there is any message to be sent to people lodging
// check if its morning: Good morning
// check if its night: Good night
// check if events coming today
// remind hall owners about events for the day.
// remind attendees about todays event.

const runCronJobs = () => {
  debug('runCronJobs()')
  cronjobs.forEach((cronjob) => {
    cron.schedule(cronjob.time, cronjob.task)
  })
}

export default runCronJobs
