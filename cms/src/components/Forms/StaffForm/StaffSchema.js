import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string()
    .trim()
    .label('Staff name')
    .required(),

  email: yup.string()
    .label('Email')
    .email()
    .required(),

  phone: yup.string()
    .trim()
    .label('Phone number')
    .required()
    .max(13)
    .min(11),

  role: yup.string()
    .required()
    .label('Staff role')
})

export default schema
