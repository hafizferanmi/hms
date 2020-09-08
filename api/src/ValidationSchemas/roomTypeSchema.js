import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Type name')
      .required(),

    price: Joi.number()
      .label('Price')
      .integer()
      .required(),

    desc: stringSchema()
      .label('Staff email')
      .email()
      .required()
  })

export default schema
