import Joi from 'joi'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    title: stringSchema()
      .label('Todo title')
      .required(),

    desc: stringSchema()
      .label('Todo description'),

    starred: Joi.boolean()
      .label('Starred')
      .default(false)
  })

export default schema
