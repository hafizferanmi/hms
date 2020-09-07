import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Type name')
      .required(),

    desc: stringSchema()
      .label('Staff email')
      .email()
      .required(),

    roomType: stringSchema()
      .label('Room type')
      .length(24)
      .required()
  })

export default schema
