import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Category name')
      .required(),

    price: stringSchema()
      .label('Price')
      .required(),

    desc: stringSchema()
      .label('Room description')
  })

export default schema
