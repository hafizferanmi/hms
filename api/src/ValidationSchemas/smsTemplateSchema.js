import Joi from 'joi'
import { stringSchema } from './helpers'
import { TEMPLATES_TYPE } from '../constants/misc'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Name identifier')
      .required(),

    type: stringSchema()
      .label('SMS type')
      .valid(...Object.values(TEMPLATES_TYPE))
      .required(),

    body: stringSchema()
      .label('SMS body')
      .required()
  })

export default schema
