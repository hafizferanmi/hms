import { values } from 'ramda'

export const buildSelectOptions = (titles, labels) => {
  const options = values(titles).map(title => ({ label: labels[title], value: title }))
  return options
}
