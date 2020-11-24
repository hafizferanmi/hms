import { values } from 'ramda'
import dayjs from 'dayjs'

export const buildSelectOptions = (titles, labels) => {
  const options = values(titles).map(title => ({ label: labels[title], value: title }))
  return options
}

export const buildBooleanOptions = () => ([
  { label: 'Yes', value: true },
  { label: 'No', value: false }
])

export const getInitials = (name = '') =>
  name.replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('')

export const formatDate = (date) => dayjs(date).format('DD MMMM, YYYY')

export const formatTime = (date) => dayjs(date).format('hh:mm a')
