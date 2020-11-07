import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Company name')
      .required(),

    slogan: stringSchema()
      .label('Company slogan'),

    email: stringSchema()
      .label('Companys email')
      .length(24)
      .required(),

    phone: stringSchema()
      .label('Companys phone')
  })

export default schema
