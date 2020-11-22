import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CheckInRoomCard from './CheckInRoomCard'
import PerfectScrollBar from 'react-perfect-scrollbar'

const useStyles = makeStyles({
  listWrapper: {
    background: 'white',
    maxHeight: 'calc(100vh - 150px)',
    height: 'calc(100vh - 150px)',
    width: '100%',
    padding: 5
  }
})

const CheckInList = ({ checkIns, handleSelectCheckIn }) => {
  const classes = useStyles()
  return (
    <div className={classes.listWrapper}>
      <PerfectScrollBar>
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
      </PerfectScrollBar>
    </div>
  )
}

export default CheckInList
