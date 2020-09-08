import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    title: stringSchema()
      .label('Title')
      .required(),

    name: stringSchema()
      .label('Client name')
      .required(),

    email: stringSchema()
      .label('Client email')
      .email(),

    phone: stringSchema()
      .label('Client phone no'),

    from: stringSchema()
      .label('Arrival date')
      .required(),

    to: stringSchema()
      .label('Departure date')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .valid(...R.values(PAYMENT_METHOD))
      .required()
  })

export default schema
