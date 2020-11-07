import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { blue } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import RoomCard from './RoomCard'
import RoomMenu from './RoomMenu'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import ConfirmModal from '../misc/ConfirmModal'
import RoomForm from '../Forms/RoomForm'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  cardWrapper: {
    position: 'relative'
  },
  avatar: {
    backgroundColor: blue[500]
  },
  menuContainer: {
    position: 'absolute',
    top: '50px',
    right: '30px',
    width: '100px',
    backgroundColor: 'red'
  }
}))

const RoomTypeCard = ({ roomType, openModal: openRoomTypeFormModal }) => {
  const classes = useStyles()
  // state for handling modals
  const { isOpen, closeModal: closeMenu, openModal: openMenu } = useModal()
  const { isOpen: formOpen, closeModal: closeFormModal, openModal: openRoomFormModal, data: selectedRoom } = useModal()
  const { isOpen: confirmOpen, closeModal: closeConfirmModal, openModal: openConfirmModal, data: confirmModalData } = useModal()

  const handleUpdate = (roomType) => {
    closeMenu()
    openRoomTypeFormModal(roomType)
  }
  const handleDelete = () => {
    closeMenu()
    openConfirmModal()
  }
  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='Room type' className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton onClick={openMenu} aria-label='options'>
              <MoreVertIcon />
            </IconButton>
          }
          title={roomType.name}
        />
        <CardContent>
          <RoomCard rooms={roomType.rooms} />
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={() => openRoomFormModal()} fullWidth>Add room</Button>
        </CardActions>
      </Card>
      {isOpen && (
        <RoomMenu
          handleUpdate={() => handleUpdate(roomType)}
          handleDelete={() => handleDelete(roomType)}
          handleClose={closeMenu}
        />
      )}
      <Modal
        open={formOpen}
        handleClose={closeFormModal}
      >
        <RoomForm
          closeModal={closeFormModal}
          room={{ roomType: selectedRoom }}
        />

      </Modal>
      <ConfirmModal
        isOpen={confirmOpen}
        title='Delete RoomType'
        closeModal={closeConfirmModal}
        message={`Are you sure you want to delete room type with name - ${confirmModalData && confirmModalData.name}`}
        confirmAction={() => window.alert('hello')}
      />
    </div>
  )
}

export default RoomTypeCard
