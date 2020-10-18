import * as yup from 'yup'

const schema = yup.object().shape({
  title: yup.string()
    .trim()
    .label('Guest title')
    .required(),

  name: yup.string()
    .trim()
    .label('Guest name')
    .min(4)
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

  occupation: yup.string()
    .required()
    .label('Guest occupation'),

  arrivingFrom: yup.string()
    .trim()
    .label('Arriving from')
    .required(),

  purpose: yup.string()
    .trim()
    .label('Purpose of visit'),

  meansOfTravel: yup.string()
    .label('Means of travel'),

  nextOfKin: yup.string()
    .label('Next of kin')
    .required(),

  nextOfKinPhoneNo: yup.string()
    .label('Next of kin')
    .required(),

  dateOfArrival: yup.string()
    .label('Date of arrival')
    .required(),

  dateOfDeparture: yup.string()
    .label('Date of departure')
    .required(),

  paymentMethod: yup.string()
    .label('Payment method')
    .required(),

  notes: yup.string()
    .label('Notes')
})

export default schema
