import Joi from 'joi'
import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    subject: stringSchema()
      .label('Subject')
      .required(),

    body: stringSchema()
      .label('Body')
      .required()
  })

export default schema
