import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Box, Typography } from '@material-ui/core'
import { getInitials } from '../../helpers/misc'

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16)

const useStyles = makeStyles({
  checkInCard: {
    background: 'whitesmoke',
    border: '1px solid pink',
    padding: 5,
    cursor: 'pointer',
    '&:hover': {
      background: 'lightblue',
      color: 'white'
    }
  },
  avatar: {
    width: 40,
    height: 40,
    background: `#${randomColor()}`
  },
  cardContent: {
    padding: 2
  }
})

const CheckInRoomCard = ({ checkIn, handleSelectCheckIn }) => {
  const classes = useStyles()
  const handleCardClick = (checkIn) => {
    handleSelectCheckIn(checkIn)
  }
  return (
    <Box display='flex' className={classes.checkInCard} onClick={() => handleCardClick(checkIn)}>
      <Avatar className={classes.avatar}>{getInitials(checkIn.name)}</Avatar>
      <div className={classes.cardContent}>
        <Typography variant='h5'>{checkIn.name}</Typography>
        <Typography variant='h6'> Arrived today </Typography>
        <Typography variant='body2'> Room V235 </Typography>
      </div>
    </Box>
  )
}

export default CheckInRoomCard
