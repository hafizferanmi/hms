import Joi from 'joi'
import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    company: stringSchema()
      .label('Company name')
      .required(),

    subdomain: stringSchema()
      .label('Subdomain')
      .required(),

    manager: stringSchema()
      .label('Managers name')
      .required(),

    email: stringSchema()
      .label('Email')
      .email()
      .required(),

    password: stringSchema()
      .label('Password')
      .required()
  })

export default schema
