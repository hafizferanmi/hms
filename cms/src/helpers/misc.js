import R from 'ramda'
import dayjs from 'dayjs'
import { countries } from 'countries-list'

export const buildSelectOptions = (titles, labels) => {
  const options = R.values(titles).map(title => ({ label: labels[title], value: title }))
  return options
}

export const buildBooleanOptions = () => ([
  { label: 'Yes', value: true },
  { label: 'No', value: false }
])

export const buildFromArrayOfObject = (arrayOfObjects, labelName, valueName) => {
  const options = R.values(arrayOfObjects).map(object => ({ label: object[labelName], value: object[valueName] }))
  return options
}

export const getInitials = (name = '') =>
  name.replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('')

export const formatDate = (date) => dayjs(date).format('DD MMMM, YYYY')

export const formatTime = (date) => dayjs(date).format('hh:mm a')

export const groupCodeWithCountry = () => {
  const transformedCountries = Object.entries(countries).map((country) => {
    const [countryCode, countryData] = country
    const { name } = countryData
    return {
      country: name,
      countryCode
    }
  })

  return transformedCountries
}
