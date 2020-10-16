import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD } from '../constants/misc'

const schema = Joi.object()
  .keys({
    room: stringSchema()
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

    arrivingFrom: stringSchema()
      .label('Arriving from')
      .required(),

    purpose: stringSchema()
      .label('Purpose of visit')
      .required(),

    meansOfTravel: stringSchema()
      .label('Means of travel')
      .required(),

    nextOfKin: stringSchema()
      .label('Next of kin')
      .required(),

    nextOfKinPhoneNo: stringSchema()
      .label('Next of kin phone number')
      .required(),

    dateOfArrival: stringSchema()
      .label('Arrival date')
      .required(),

    dateOfDeparture: stringSchema()
      .label('Departure date')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .default(PAYMENT_METHOD.CASH)
      .valid(...R.values(PAYMENT_METHOD))
      .required()
  })

export default schema
