import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Event name')
      .required(),

    price: stringSchema()
      .label('Price')
      .required(),

    organizer: stringSchema()
      .label('Event organizers')
      .required(),

    email: stringSchema()
      .label('Organizers email')
      .email(),

    phone: stringSchema()
      .label('Organizers phone no.')
      .min(11),

    from: stringSchema()
      .label('Event start time')
      .required(),

    to: stringSchema()
      .label('Event end time')
      .required(),

    desc: stringSchema()
      .label('Event description')
  })

export default schema
