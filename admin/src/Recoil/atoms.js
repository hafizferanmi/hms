import { atom } from 'recoil'

const defaultState = {
  loading: false,
  error: false,
  data: null
}

export const companies = atom({
  key: 'companies',
  default: defaultState
})
