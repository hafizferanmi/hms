import { STAFF_ROLES } from './staff'

export const PAYMENT_METHOD = Object.freeze({
  POS: 'POS',
  CASH: 'CASH',
  ONLINE: 'ONLINE'
})

export const PAYMENT_STATUS = Object.freeze({
  PAID: 'PAID',
  UNPAID: 'UNPAID'
})

export const GUEST_EXPENSES_TYPE = Object.freeze({
  [STAFF_ROLES.FRONT_DESK_OFFICER]: 'FRONTDESK',
  [STAFF_ROLES.BAR_STAFF]: 'BAR',
  [STAFF_ROLES.RESTAURANT_STAFF]: 'RESTAURANT'
})
