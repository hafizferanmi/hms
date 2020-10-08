import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Hall name')
      .required(),

    price: stringSchema()
      .label('Price')
      .required(),

    capacity: stringSchema()
      .label('Hall capacity')
      .required(),

    desc: stringSchema()
      .label('Hall description')
  })

export default schema
