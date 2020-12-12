import React from 'react'
import { groupBy } from 'ramda'
import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import ConfirmModal from '../misc/ConfirmModal'
import RoomsPageTop, { SORT_ROOM_STATUS, SORT_ROOM_STATUS_LABEL } from './RoomsPageTop'
import RoomTypeForm from '../Forms/RoomTypesForm'
import RoomForm from '../Forms/RoomForm'
import { blue } from '@material-ui/core/colors'
import { RoomCard, RoomTypeCard } from './RoomsPageCards'
import ManagersLayout from '../ManagersPage/ManagersLayout'
import { ROOM_STATUS, ROOM_CLEAN_STATUS } from '../../constants/room'
import useDataProvider from '../../hooks/useDataProvider'

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
  roomsDataWrapper: {
    background: 'rgba(181, 192, 208, .3)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10
  },
  pageContentWrapper: {
    background: 'white',
    flexGrow: 1,
    borderRadius: '5px',
    padding: '10px'
  },
  listViewWrapper: {

  },
  gridViewWrapper: {
    background: 'blue'
  },
  roomTypeName: {
    width: 'fit-content',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#b5c0d0'
  },
  statCount: {
    color: 'white',
    '& > span': {
      color: '#0c2e67'
    }
  },
  roomTypeMenu: {
    position: 'absolute',
    top: 2,
    right: 0
  }
}))

const groupRoomWithRoomTypes = (rooms, roomTypes) => {
  const groupByRoomType = groupBy(room => room.roomTypeId)
  const groupedRooms = groupByRoomType(rooms)
  const roomsWithType = roomTypes.map((roomType) =>
    ({
      ...roomType,
      rooms: groupedRooms[roomType._id]
    }))
  return roomsWithType
}

export const VIEW = {
  GRID: 'grid',
  LIST: 'list'
}

const RoomsPage = ({ rooms, roomTypes }) => {
  const classes = useStyles()
  const roomTypeFormModal = useModal()
  const roomFormModal = useModal()
  const deleteRoomTypeconfirmModal = useModal()
  const deleteRoomconfirmModal = useModal()
  const { dataInContext } = useDataProvider()
  const { handleDeleteRoomType, handleDeleteRoom } = dataInContext

  const [sortStatus, setSortStatus] = React.useState()
  const handleSortStatus = (status) => setSortStatus(status)

  const sortByCleaniness = (status) => {
    const sortedRooms = rooms.filter((room) => room.cleanStatus === status)
    return sortedRooms
  }

  const sortByStatus = (status) => {
    const sortedRooms = rooms.filter((room) => room.status === status)
    return sortedRooms
  }

  const cleanRooms = sortByCleaniness(ROOM_CLEAN_STATUS.CLEAN)
  const dirtyRooms = sortByCleaniness(ROOM_CLEAN_STATUS.DIRTY)
  const cleaningRooms = sortByCleaniness(ROOM_CLEAN_STATUS.CLEANING)
  const bookedRooms = sortByStatus(ROOM_STATUS.BOOKED)
  const emptyRooms = sortByStatus(ROOM_STATUS.EMPTY)
  const reservedRooms = sortByStatus(ROOM_STATUS.RESERVED)
  const notAvailableRooms = sortByStatus(ROOM_STATUS.NOT_AVAILABLE)

  const pickByStatus = (status) => {
    switch (status) {
      case SORT_ROOM_STATUS.ALL:
        return rooms

      case SORT_ROOM_STATUS.CLEAN:
        return cleanRooms

      case SORT_ROOM_STATUS.DIRTY:
        return dirtyRooms

      case SORT_ROOM_STATUS.CLEANING:
        return cleaningRooms

      case SORT_ROOM_STATUS.BOOKED:
        return bookedRooms

      case SORT_ROOM_STATUS.EMPTY:
        return emptyRooms

      case SORT_ROOM_STATUS.RESERVED:
        return reservedRooms

      case SORT_ROOM_STATUS.NOT_AVAILABLE:
        return notAvailableRooms

      default:
        return rooms
    }
  }
  const sortedRooms = sortStatus ? pickByStatus(sortStatus) : rooms
  const roomsWithType = groupRoomWithRoomTypes(sortedRooms, roomTypes)

  return (
    <ManagersLayout title='Rooms'>
      <RoomsPageTop
        handleSortStatus={handleSortStatus}
        handleOpenFormModal={() => roomTypeFormModal.openModal()}
      />
      <Box className={classes.roomsDataWrapper} display='flex' justifyContent='space-between' alignItems='center'>
        <div className={classes.statCount}>Booked rooms: <span>{bookedRooms.length}</span></div>
        <div className={classes.statCount}>Empty rooms: <span>{emptyRooms.length}</span></div>
        <div className={classes.statCount}>Reserved rooms: <span>{reservedRooms.length}</span></div>
        <div className={classes.statCount}>Dirty rooms: <span>{dirtyRooms.length}</span></div>
        <div className={classes.statCount}>Clean rooms: <span>{cleanRooms.length}</span></div>
        <div className={classes.statCount}>Cleaning rooms: <span>{cleaningRooms.length}</span></div>
      </Box>
      <div className={classes.pageContentWrapper}>
        <Box className={classes.listViewWrapper}>
          {roomsWithType.map((roomWithType) => (
            <Box key={roomWithType._id}>
              <RoomTypeCard
                roomType={roomWithType}
                handleAddRoom={() => roomFormModal.openModal({ roomType: roomWithType._id })}
                handleUpdate={() => roomTypeFormModal.openModal(roomWithType)}
                handleDelete={() => deleteRoomTypeconfirmModal.openModal(roomWithType)}
              />
              {!roomWithType.rooms && sortStatus && <div>No room currently <span style={{ textTransform: 'lowercase' }}>{SORT_ROOM_STATUS_LABEL[sortStatus]}</span></div>}
              {!roomWithType.rooms && !sortStatus && <div>No rooms added yet</div>}
              {roomWithType.rooms && (
                <Grid container spacing={2}>
                  {roomWithType.rooms.map((room) => (
                    <Grid key={room._id} item xs={12} md={2}>
                      <RoomCard
                        room={room}
                        handleUpdate={() => roomFormModal.openModal(room)}
                        handleDelete={() => deleteRoomconfirmModal.openModal(room)}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          ))}
        </Box>

        <Modal
          open={roomTypeFormModal.isOpen}
          handleClose={roomTypeFormModal.closeModal}
        >
          <RoomTypeForm
            roomType={roomTypeFormModal.data}
            closeModal={roomTypeFormModal.closeModal}
          />
        </Modal>
        <Modal
          open={roomFormModal.isOpen}
          handleClose={roomFormModal.closeModal}
        >
          <RoomForm
            room={roomFormModal.data}
            closeModal={roomFormModal.closeModal}
          />
        </Modal>
        <ConfirmModal
          isOpen={deleteRoomTypeconfirmModal.isOpen}
          title='Delete Roomtype?'
          closeModal={deleteRoomTypeconfirmModal.closeModal}
          message={`Are you sure you want to delete room type with name - ${deleteRoomTypeconfirmModal.data && deleteRoomTypeconfirmModal.data.name}`}
          confirmAction={() => handleDeleteRoomType(deleteRoomTypeconfirmModal.data && deleteRoomTypeconfirmModal.data._id)}
        />
        <ConfirmModal
          isOpen={deleteRoomconfirmModal.isOpen}
          title='Delete Room?'
          closeModal={deleteRoomconfirmModal.closeModal}
          message={`Are you sure you want to delete room with number - ${deleteRoomconfirmModal.data && deleteRoomconfirmModal.data.number}`}
          confirmAction={() => handleDeleteRoom(deleteRoomconfirmModal.data && deleteRoomconfirmModal.data._id)}
        />
      </div>
    </ManagersLayout>
  )
}

export default RoomsPage
