import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import cn from 'clsx'
import { formatDate } from '../../helpers/misc'

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'

const useStyles = makeStyles({
  checkInCard: {
    padding: '5px 10px',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 102, 245, .1)'
    }
  },
  active: {
    background: 'rgba(0, 102, 245, .1)'
  },
  avatar: {
    width: 40,
    height: 40,
    color: '#b5c0d0'
  },
  cardContent: {
    marginLeft: 10
  },
  guestName: {
    fontWeight: 'bold',
    color: '#1e272e',
    fontSize: 16
  },
  guestArrival: {
    color: '#b5c0d0',
    fontSize: 12
  }
})

const CheckInRoomCard = ({ checkIn, handleSelectCheckIn, selectedCheckIn }) => {
  const { name } = checkIn.guest
  const { dateOfArrival, _id: checkInId, room: { number } } = checkIn
  const selectedCheckInId = selectedCheckIn && selectedCheckIn._id
  const selected = checkInId === selectedCheckInId
  const date = formatDate(dateOfArrival)
  const classes = useStyles()
  const handleCardClick = (checkIn) => {
    handleSelectCheckIn(checkIn)
  }
  return (
    <Box display='flex' className={cn(classes.checkInCard, selected && classes.active)} onClick={() => handleCardClick(checkIn)}>
      <AccountCircleOutlinedIcon className={classes.avatar} />
      <div className={classes.cardContent}>
        <div className={classes.guestName}>{name}</div>
        <div className={classes.guestArrival}> Arrived {date} </div>
        <div> Room <strong>{number}</strong> </div>
      </div>
    </Box>
  )
}

export default CheckInRoomCard
