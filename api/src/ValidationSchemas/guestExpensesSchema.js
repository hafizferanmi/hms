import Joi from 'joi'
import R from 'ramda'
import { stringSchema } from './helpers'
import { PAYMENT_METHOD, PAYMENT_STATUS } from '../constants/misc'

const schema = Joi.object()
  .keys({
    desc: stringSchema()
      .min(10)
      .label('Desription'),

    note: stringSchema()
      .label('Note')
      .min(3),

    paymentStatus: stringSchema()
      .label('Payment status')
      .valid(...R.values(PAYMENT_STATUS))
      .email(),

    ammount: stringSchema()
      .label('Ammount')
      .required(),

    paymentMethod: stringSchema()
      .label('Payment method')
      .valid(...R.values(PAYMENT_METHOD))
  })

export default schema
