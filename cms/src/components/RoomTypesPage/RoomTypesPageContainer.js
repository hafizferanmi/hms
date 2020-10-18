import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RoomTypesPage from './RoomTypesPage'
import { fetchRoomTypes } from '../../redux/actions/roomTypeAction'
import useModal from '../../hooks/useModal'
import Loading from '../misc/Loading'

const RoomTypesPageContainer = () => {
  const { isOpen, closeModal, openModal, data: modalData } = useModal()
  const modalProps = {
    isOpen, closeModal, modalData, openModal
  }
  const dispatch = useDispatch()
  const {
    loading, error, data
  } = useSelector(state => state.roomTypes)

  useEffect(() => {
    if (!data) dispatch(fetchRoomTypes())
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />
  if (error) return 'Could not fetch room types.'
  return (
    <div>
      <RoomTypesPage
        roomTypes={data}
        formModal={modalProps}
      />
    </div>
  )
}

export default RoomTypesPageContainer
