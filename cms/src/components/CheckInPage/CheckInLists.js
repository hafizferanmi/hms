import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CheckInRoomCard from './CheckInRoomCard'

const useStyles = makeStyles({

})

const CheckInList = ({ checkIns, handleSelectCheckIn }) => {
  const classes = useStyles()
  return (
    <div className={classes.pageWrapper}>
      <Box className={classes.checkInCardsContainer}>
        {
          checkIns.map(checkIn => (
            <CheckInRoomCard
              key={checkIn.createdAt}
              handleSelectCheckIn={handleSelectCheckIn}
              checkIn={checkIn}
            />
          ))
        }
      </Box>
    </div>
  )
}

export default CheckInList
