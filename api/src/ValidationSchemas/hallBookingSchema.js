import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    hall: stringSchema()
      .label('Hall')
      .length()
      .required(),

    by: stringSchema()
      .label('Name of bookie')
      .required(),

    phone: stringSchema()
      .label('Bookie phone no.')
      .min(11),

    email: stringSchema()
      .label('Organizers email')
      .email(),

    from: stringSchema()
      .label('Booking start time')
      .required(),

    to: stringSchema()
      .label('Booking end time')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .default(PAYMENT_METHOD.CASH)
      .valid(...R.values(PAYMENT_METHOD))
      .required()
  })

export default schema
