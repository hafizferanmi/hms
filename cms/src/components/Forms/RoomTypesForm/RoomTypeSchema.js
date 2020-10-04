import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string()
    .trim()
    .label('Type name')
    .required(),

  price: yup.string()
    .trim()
    .label('Price')
    .required(),

  desc: yup.string()
    .trim()
    .required()
    .label('Description')
})

export default schema
