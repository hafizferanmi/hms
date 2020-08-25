import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Staff name')
      .required(),

    password: stringSchema()
      .label('Default password')
      .required(),

    email: stringSchema()
      .label('Staff email')
      .email()
      .required(),

    role: stringSchema()
      .label('Role')
      .required(),

    phone: stringSchema()
      .label('Phone number')
      .min(11)
      .max(15)
      .required()
  })

export default schema
