import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email()
    .required()
})

export default schema
