import Joi from 'joi'
import * as R from 'ramda'

import { stringSchema } from './helpers'
import { STAFF_ROLES } from '../constants/staff'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Staff name')
      .required(),

    password: stringSchema()
      .label('Default password')
      .default('password')
      .required(),

    email: stringSchema()
      .label('Staff email')
      .email()
      .required(),

    role: stringSchema()
      .label('Role')
      .valid(...R.values(STAFF_ROLES))
      .required(),

    phone: stringSchema()
      .label('Phone number')
      .min(11)
      .max(15)
      .required()
  })

export default schema
