import React from 'react'
import { groupBy } from 'ramda'
import { Grid, Typography, Button, Box, IconButton, Tooltip, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoomTypeCard from './RoomTypeCard'
import useModal from '../../hooks/useModal'
import Modal from '../misc/Modal'
import RoomTypeForm from '../Forms/RoomTypesForm'
import { blue } from '@material-ui/core/colors'
import ViewColumnSharpIcon from '@material-ui/icons/ViewColumnSharp'
import ViewHeadlineSharpIcon from '@material-ui/icons/ViewHeadlineSharp'

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
      ...roomType,
      rooms: groupedRooms[roomType._id]
    }))
  return roomsWithType
}

const VIEW = {
  GRID: 'grid',
  LIST: 'list'
}

const RoomsPage = ({ rooms, roomTypes }) => {
  const roomsWithType = groupRoomWithRoomTypes(rooms, roomTypes)
  const classes = useStyles()
  const { isOpen, openModal, closeModal, data: selectedRoomType } = useModal()
  const [view, setView] = React.useState(VIEW.GRID)
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
          <Tooltip
            title='Grid view'
            placement='top'
            arrow
          >
            <IconButton onClick={() => setView(VIEW.GRID)}>
              <ViewColumnSharpIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title='List view'
            placement='top'
            arrow
          >
            <IconButton onClick={() => setView(VIEW.LIST)}>
              <ViewHeadlineSharpIcon />
            </IconButton>
          </Tooltip>
          <Button className={classes.headerButton} variant='outlined'>Add RoomType</Button>
        </div>
      </Box>
      <div className={classes.pageContentWrapper}>
        {
          view === VIEW.GRID && (
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
          )
        }

        {
          view === VIEW.LIST && (
            <>
              <Box>
                <Box>
                  <Typography>
                    Room type
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={2}>
                    <Card>
                      Hello
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <Card>
                      Hello
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <Card>
                      Hello
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <Card>
                      Hello
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                    <Card>
                      Hello
                    </Card>
                  </Grid>
                </Grid>
              </Box>

            </>
          )
        }

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
