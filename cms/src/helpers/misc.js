import { values } from 'ramda'

export const buildSelectOptions = (titles, labels) => {
  const options = values(titles).map(title => ({ label: labels[title], value: title }))
  return options
}

export const getInitials = (name = '') =>
  name.replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('')
