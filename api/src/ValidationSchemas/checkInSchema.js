import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    roomId: stringSchema()
      .label('Room')
      .required(),

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
      .label('Client phone no')
      .min(11),

    occupation: stringSchema()
      .label('Occupation')
      .required(),

    from: stringSchema()
      .label('Arrival date')
      .required(),

    to: stringSchema()
      .label('Departure date')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .default(PAYMENT_METHOD.CASH)
      .valid(...R.values(PAYMENT_METHOD))
      .required()
  })

export default schema
