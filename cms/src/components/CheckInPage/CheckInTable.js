import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CheckInRoomCard from './CheckInRoomCard'
import CheckInDesc from './CheckInDesc'

const useStyles = makeStyles({
  pageWrapper: {
    maxWidth: '100%',
    boxShadow: 'none',
    background: 'white',
    display: 'flex',
    height: '100vh',
    overflow: 'auto'
  },
  checkInCardsContainer: {
    width: '30%',
    borderRight: '1px solid red',
    padding: 10
  },
  checkInDescContainer: {
    width: '100%',
    padding: 10
  }
})

const CheckInTable = ({ checkIns }) => {
  const classes = useStyles()
  const [selectedCheckIn, setSelectedCheckIn] = React.useState()
  const handleSelectCheckIn = (checkIn) => setSelectedCheckIn(checkIn)
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
      <Box className={classes.checkInDescContainer}>
        {selectedCheckIn && <CheckInDesc checkIn={selectedCheckIn} />}
        {!selectedCheckIn && <div>There is no checkIn selected yet.</div>}
      </Box>
    </div>
  )
}

export default CheckInTable
