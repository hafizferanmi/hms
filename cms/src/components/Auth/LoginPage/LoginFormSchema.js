import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email()
    .required(),

  password: yup.string()
    .label('Password')
    .required()
})

export default schema
