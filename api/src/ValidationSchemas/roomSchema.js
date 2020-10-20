import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    number: stringSchema()
      .label('Room number')
      .required(),

    desc: stringSchema()
      .label('Room description'),

    roomType: stringSchema()
      .label('Room type')
      .length(24)
      .required()
  })

export default schema
