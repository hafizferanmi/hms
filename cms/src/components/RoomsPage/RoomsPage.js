import React from 'react'
import { groupBy } from 'ramda'
import { Grid, Typography, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoomTypeCard from './RoomTypeCard'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import RoomTypeForm from '../Forms/RoomTypesForm'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    color: theme.palette.getContrastText(blue[500])
  },
  headerButton: {
    color: 'white',
    borderColor: 'white'
  },
  pageContentWrapper: {
    background: 'white',
    flexGrow: 1,
    borderRadius: '5px',
    padding: '10px'
  }
}))

const groupRoomWithRoomTypes = (rooms, roomTypes) => {
  const groupByRoomType = groupBy(room => room.roomTypeId)
  const groupedRooms = groupByRoomType(rooms)
  const roomsWithType = roomTypes.map((roomType) =>
    ({
      _id: roomType._id,
      name: roomType.name,
      rooms: groupedRooms[roomType._id]
    }))
  return roomsWithType
}

const RoomsPage = ({ rooms, roomTypes }) => {
  const roomsWithType = groupRoomWithRoomTypes(rooms, roomTypes)
  const classes = useStyles()
  const { isOpen, openModal, closeModal, data: selectedRoomType } = useModal()
  return (
    <>
      <Box
        className={classes.headerBox}
      >
        <Typography
          variant='h4'
        >
          Rooms
        </Typography>
        <div>
          <Button className={classes.headerButton} variant='outlined'>Add RoomType</Button>
        </div>
      </Box>
      <div className={classes.pageContentWrapper}>
        <Grid container spacing={2}>
          {roomsWithType.map((roomType) => (
            <Grid key={roomType._id} item xs={12} md={6} lg={3}>
              <RoomTypeCard
                roomType={roomType}
                openModal={openModal}
              />
            </Grid>
          ))}
        </Grid>
        <Modal
          open={isOpen}
          handleClose={closeModal}
        >
          <RoomTypeForm
            roomType={selectedRoomType}
            closeModal={closeModal}
          />
        </Modal>
      </div>
    </>
  )
}

export default RoomsPage
