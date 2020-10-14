export const ROOM_STATUS = Object.freeze({
  EMPTY: 'EMPTY',
  RESERVED: 'RESERVED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  BOOKED: 'BOOKED'
})

export const ROOM_STATUS_LABEL = Object.freeze({
  [ROOM_STATUS.EMPTY]: 'Empty',
  [ROOM_STATUS.RESERVED]: 'Reserved',
  [ROOM_STATUS.NOT_AVAILABLE]: 'Not available',
  [ROOM_STATUS.BOOKED]: 'Booked'
})
