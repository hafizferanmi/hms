import Joi from 'joi'
import { TODOS_REMINDER_AT } from '../constants/misc'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    title: stringSchema()
      .label('Todo title')
      .required(),

    desc: stringSchema()
      .label('Todo description'),

    reminderAt: stringSchema()
      .label('Reminder at')
      .default(TODOS_REMINDER_AT.FIFTEEN_MIN_BEFORE)
      .required()
      .valid(...Object.values(TODOS_REMINDER_AT)),

    toBeCompletedAt: stringSchema()
      .label('Completed at')
      .required(),

    completed: Joi.boolean()
      .label('Completed')
      .default(false),

    pinned: Joi.boolean()
      .label('Pinned')
      .default(false),

    starred: Joi.boolean()
      .label('Starred')
      .default(false)
  })

export default schema
