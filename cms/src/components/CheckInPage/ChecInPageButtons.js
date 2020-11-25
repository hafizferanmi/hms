import React from 'react'
import Fab from '@material-ui/core/Fab'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import ConfirmModal from '../misc/ConfirmModal'
import Button from '../misc/Button'
import useModal from '../../hooks/useModal'
import useDataProvider from '../../hooks/useDataProvider'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import PenIcon from '@material-ui/icons/EditOutlined'
import { makeStyles } from '@material-ui/core'
import { red, green } from '@material-ui/core/colors'
import { useNavigate } from '@reach/router'

const useStyles = makeStyles({
  editButton: {
    padding: 2,
    borderRadius: 4,
    cursor: 'pointer',
    background: green[50],
    '& svg': {
      color: green[400],
      width: 18,
      height: 18
    },
    '&:hover': {
      background: green[200],
      '& svg': {
        color: green[800]
      }
    }
  },
  deleteButton: {
    borderRadius: 4,
    padding: 2,
    cursor: 'pointer',
    background: red[50],
    '& svg': {
      width: 18,
      height: 18,
      color: red[400]
    },
    '&:hover': {
      background: red[200],
      '& svg': {
        color: red[800]
      }
    }
  }
})

export const CheckOutButton = ({ checkIn, ...props }) => {
  const { data, isOpen, closeModal, openModal } = useModal()
  const { dataInContext } = useDataProvider()
  const { handleCheckout } = dataInContext
  const handleCheckoutButtonClick = () => {
    openModal(checkIn)
  }
  const guestName = data && data.guest && data.guest.name
  const handleCheckOut = () => {
    const checkInId = checkIn && checkIn._id
    handleCheckout(checkInId)
  }
  return (
    <>
      <Fab onClick={handleCheckoutButtonClick} {...props} color='secondary' aria-label='checkout'>
        <DoneAllIcon />
      </Fab>
      <ConfirmModal
        isOpen={isOpen}
        title='Checkout guest'
        closeModal={closeModal}
        message={`Are you sure you want to checkout guest with name ${guestName}`}
        confirmAction={handleCheckOut}
      />
    </>
  )
}

export const DeleteButton = ({ checkIn, clearSelectedCheckin }) => {
  const classes = useStyles()
  const { data, isOpen, closeModal, openModal } = useModal()
  const { dataInContext } = useDataProvider()
  const { handleDeleteCheckIn } = dataInContext

  const guestName = data && data.guest && data.guest.name
  const handleDeleteButtonClick = () => {
    openModal(checkIn)
  }
  const handleAPIDelete = () => {
    const checkInId = checkIn && checkIn._id
    handleDeleteCheckIn(checkInId)
    clearSelectedCheckin()
  }
  return (
    <div className={classes.deleteButton} onClick={handleDeleteButtonClick}>
      <DeleteForeverIcon />
      <ConfirmModal
        isOpen={isOpen}
        title='Delete guest'
        closeModal={closeModal}
        message={`Are you sure you want to delete checkin with guest name ${guestName}`}
        confirmAction={handleAPIDelete}
      />
    </div>
  )
}

export const EditButton = ({ checkIn }) => {
  const classes = useStyles()
  const navigateTo = useNavigate()
  const checkInId = checkIn && checkIn._id

  const handleEdit = () => navigateTo(`/secure/admin/bookings/${checkInId}`)
  return (
    <div onClick={handleEdit} className={classes.editButton}>
      <PenIcon />
    </div>
  )
}

export const CheckInButton = () => {
  const navigateTo = useNavigate()
  const handleButtonClick = () => navigateTo('/secure/admin/bookings')
  return (
    <Button
      label='CheckIn guest'
      onClick={handleButtonClick}
    />
  )
}
