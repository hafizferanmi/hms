import Joi from 'joi'
import { SCHEDULE_FREQUENCY } from '../constants/misc'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    smsTemplate: stringSchema()
      .label('SMS template'),

    sendSMS: Joi.boolean()
      .default(false)
      .label('Send SMS'),

    emailTemplate: stringSchema()
      .label('SMS template'),

    sendEmail: Joi.boolean()
      .default(false)
      .label('Send SMS'),

    active: Joi.boolean()
      .default(false)
      .label('Schedule active'),

    type: stringSchema()
      .label('Schedule type')
      .valid(...Object.values(SCHEDULE_FREQUENCY)),

    // Data of date for the next schedule
    every: stringSchema()
      .label('Every (frequency)')
      .required(),

    days: Joi.array()
      .label('Days'),

    date: stringSchema()
      .label('Date'),

    time: stringSchema()
      .label('Time'),

    week: stringSchema()
      .label('Week'),

    month: stringSchema()
      .label('Month'),

    year: stringSchema('Year')
      .label('Year'),

    // Who to recieve text on the next schedule
    files: Joi.array()
      .label('Files'),

    durationFromNow: stringSchema()
      .label('Duration from now'),

    customDateFrom: stringSchema()
      .label('Custom date from'),

    customDateTo: stringSchema()
      .label('Custom date to')
  })

export default schema
