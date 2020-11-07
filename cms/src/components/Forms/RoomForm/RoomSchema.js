import * as yup from 'yup'

const schema = yup.object().shape({
  roomNumber: yup.string()
    .trim()
    .label('Room number')
    .required(),

  roomType: yup.string()
    .trim()
    .required()
    .label('Room type'),

  desc: yup.string()
    .trim()
    .label('Description')
})

export default schema
