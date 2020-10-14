export const PAYMENT_METHOD = Object.freeze({
  POS: 'POS',
  CASH: 'CASH',
  ONLINE: 'ONLINE'
})

export const PAYMENT_METHOD_LABELS = Object.freeze({
  [PAYMENT_METHOD.CASH]: 'Cash',
  [PAYMENT_METHOD.ONLINE]: 'Online',
  [PAYMENT_METHOD.POS]: 'POS'
})
