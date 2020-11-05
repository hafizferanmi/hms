import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    organizerName: stringSchema()
      .label('Name/Organization of bookie')
      .required(),

    organizerPhone: stringSchema()
      .label('Bookie phone no.')
      .required()
      .min(11),

    organizerEmail: stringSchema()
      .label('Organizers email')
      .email(),

    bookingFromDate: stringSchema()
      .label('Booking start date')
      .required(),

    bookingfromTime: stringSchema()
      .label('Booking start time')
      .required(),

    bookingToDate: stringSchema()
      .label('Booking end date')
      .required(),

    bookingToTime: stringSchema()
      .label('Booking end time')
      .required(),

    ammount: stringSchema()
      .label('Ammount')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .default(PAYMENT_METHOD.CASH)
      .valid(...R.values(PAYMENT_METHOD))
      .required()
  })

export default schema
