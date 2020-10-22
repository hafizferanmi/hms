import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string()
    .trim()
    .label('Hall name')
    .required(),

  price: yup.string()
    .trim()
    .label('Price')
    .required(),

  capacity: yup.string()
    .trim()
    .label('Capacity')
    .required(),

  desc: yup.string()
    .trim()
    .label('Description')
})

export default schema
