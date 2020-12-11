import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '../misc/Modal'
import useModal from '../../hooks/useModal'
import CheckInForm from '../Forms/CheckinForm'

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    paddingLeft: '10px',
    cursor: 'pointer',
    background: 'whitesmoke',
    borderRadius: '5px',
    minHeight: '50px',
    marginTop: '5px'
  },
  emptyRoomBox: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px'
  }
}))

const RoomCard = ({ rooms }) => {
  const classes = useStyles()
  const { isOpen, openModal, closeModal, data: selectedRoom } = useModal()
  return (
    <>
      {
        rooms && rooms.length
          ? rooms.map((room) => (
            <Box onClick={() => openModal(room._id)} key={room._id} className={classes.box}>
              {room.number}
            </Box>
          ))
          : (
            <div className={classes.emptyRoomBox}>You have not added any rooms yet!</div>
          )
      }
      <Modal
        open={isOpen}
        handleClose={() => closeModal()}
      >
        <CheckInForm
          closeModal={() => closeModal()}
          checkIn={{ room: selectedRoom }}
        />
      </Modal>
    </>
  )
}

export default RoomCard
