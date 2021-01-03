import Joi from 'joi'
import { COMPANY_SIZE } from '../constants/misc'
import { countries } from 'countries-list'

import { stringSchema } from './helpers'

const schema = Joi.object()
  .keys({
    name: stringSchema()
      .label('Company name')
      .required(),

    idNumber: stringSchema()
      .label('Company ID number'),

    taxNumber: stringSchema()
      .label('Tax identification number'),

    street: stringSchema()
      .label('Company street'),

    suite: stringSchema()
      .label('Company suite'),

    city: stringSchema()
      .label('Company city')
      .required(),

    state: stringSchema()
      .label('Company state')
      .required(),

    postalCode: stringSchema()
      .label('Postal code'),

    country: stringSchema()
      .label('Country')
      .valid(...Object.keys(countries))
      .required(),

    slogan: stringSchema()
      .label('Company slogan'),

    email: stringSchema()
      .label('Company email')
      .required(),

    size: stringSchema()
      .label('Company size')
      .valid(...Object.values(COMPANY_SIZE))
      .required(),

    website: stringSchema()
      .label('Company website'),

    phone: stringSchema()
      .label('Companys phone')
  })

export default schema
