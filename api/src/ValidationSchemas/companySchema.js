import Joi from 'joi'

const schema = Joi.object()
  .keys({
    company: Joi.string()
      .label('Company name')
      .required(),

    subdomain: Joi.string()
      .label('Subdomain')
      .required(),

    manager: Joi.string()
      .label('Managers name')
      .required(),

    email: Joi.string()
      .label('Email')
      .email()
      .required(),

    password: Joi.string()
      .label('Password')
      .required()
  })

export default schema
