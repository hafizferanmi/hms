import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email()
    .required(),
  password: yup.string()
    .label('Password')
    .required(),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Confirm password does not match password')
})

export default schema
