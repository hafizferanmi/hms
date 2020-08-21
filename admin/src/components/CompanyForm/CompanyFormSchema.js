import * as yup from 'yup'

const schema = yup.object().shape({
  company: yup.string()
    .label('Company name')
    .required('Company name is required'),

  subdomain: yup.string()
    .required('Subdomain is required'),

  manager: yup.string()
    .required('Managers name is required'),

  email: yup.string()
    .email('Invalid Emaail address')
    .required('Email is required'),

  password: yup.string()
    .required('Password is required')
})

export default schema
