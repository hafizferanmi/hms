import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    organizerName: stringSchema()
      .label('Organizers name')
      .required(),

    organizerPhone: stringSchema()
      .label('Organizers Phone NO.')
      .required()
      .min(11),

    organizerEmail: stringSchema()
      .label('Organizers email')
      .email(),

    organizerWebsite: stringSchema()
      .label('Organizers website')
      .uri(),

    bookingStartDate: stringSchema()
      .label('Booking start date')
      .required(),

    bookingStartTime: stringSchema()
      .label('Booking start time')
      .required(),

    bookingEndDate: stringSchema()
      .label('Booking end date')
      .required(),

    bookingEndTime: stringSchema()
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
