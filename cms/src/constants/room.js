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

export const ROOM_CLEAN_STATUS = Object.freeze({
  CLEAN: 'CLEAN',
  DIRTY: 'DIRTY',
  CLEANING: 'CLEANING'
})

export const ROOM_CLEAN_STATUS_LABEL = Object.freeze({
  [ROOM_CLEAN_STATUS.CLEAN]: 'Clean',
  [ROOM_CLEAN_STATUS.CLEANING]: 'Cleaning',
  [ROOM_CLEAN_STATUS.DIRTY]: 'Dirty'
})
