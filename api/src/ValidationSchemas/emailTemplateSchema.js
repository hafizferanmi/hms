import Joi from 'joi'
import { stringSchema } from './helpers'
import { TEMPLATES_TYPE } from '../constants/misc'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Name identifier')
      .required(),

    type: stringSchema()
      .label('Mail type')
      .valid(...Object.values(TEMPLATES_TYPE))
      .required(),

    subject: stringSchema()
      .label('Mail Subject')
      .required(),

    body: stringSchema()
      .label('Mail body')
      .required()
  })

export default schema
