import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
// import AppsIcon from '@material-ui/icons/Apps'
// import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined'
// import IconButton from '@material-ui/core/IconButton'
// import { VIEW } from './RoomsPage'
import Button from '../misc/Button'
import { ROOM_STATUS, ROOM_STATUS_LABEL, ROOM_CLEAN_STATUS, ROOM_CLEAN_STATUS_LABEL } from '../../constants/room'
import { buildSelectOptions } from '../../helpers/misc'

const useStyles = makeStyles({
  topWrapper: {
    marginTop: 15,
    marginBottom: 15
  },
  showTypesWrapper: {
    marginLeft: 20,
    cursor: 'pointer',
    color: '#0c2e67',
    fontWeight: 'bold',
    '& input': {
      cursor: 'pointer'
    },
    '& label': {
      cursor: 'pointer',
      userSelect: 'none'
    }
  },
  statusLabelSelectWrapper: {
    background: 'white',
    padding: 10,
    '& label': {
      marginRight: 10,
      color: '#0c2e67',
      fontWeight: 'bold',
      userSelect: 'none'
    }
  },
  statusSelectInput: {
    border: 'none',
    outline: 'none',
    color: '#0c2e67',
    textAlign: 'right'
  }
})

export const SORT_ROOM_STATUS = {
  ALL: '',
  ...ROOM_STATUS,
  ...ROOM_CLEAN_STATUS
}

export const SORT_ROOM_STATUS_LABEL = {
  [SORT_ROOM_STATUS.ALL]: 'All',
  ...ROOM_STATUS_LABEL,
  ...ROOM_CLEAN_STATUS_LABEL
}

const RoomsPageTop = ({ handleSortStatus, selectedStatus, handleOpenFormModal }) => {
  const classes = useStyles()
  const handleStatusChange = (e) => handleSortStatus(e.target.value)
  const sortInputLabel = buildSelectOptions(SORT_ROOM_STATUS, SORT_ROOM_STATUS_LABEL)
  return (
    <Box className={classes.topWrapper} display='flex' justifyContent='space-between' alignItems='center'>
      <Box display='flex' alignItems='center'>
        <Box className={classes.statusLabelSelectWrapper} display='flex' justifyContent='space-between'>
          <label htmlFor='statusInput'>Sort By:</label>
          <div>
            <select id='statusInput' className={classes.statusSelectInput} onChange={handleStatusChange} value={selectedStatus}>
              {sortInputLabel.map((status) => (
                <option value={status.value} key={status.label}>{status.label}</option>
              ))}
            </select>
          </div>
        </Box>
        {/* <Box className={classes.showTypesWrapper}>
          <IconButton><input type='checkbox' id='check' /></IconButton>
          <label htmlFor='check'>Show types</label>
        </Box> */}
      </Box>
      <Box display='flex' alignItems='center'>
        {/* <Box>
          <IconButton onClick={() => handleSetView(VIEW.GRID)}>
            <AppsIcon />
          </IconButton>
          <IconButton onClick={() => handleSetView(VIEW.LIST)}>
            <ReorderOutlinedIcon />
          </IconButton>
        </Box> */}
        <Box>
          <Button onClick={handleOpenFormModal} label='Add roomtype' />
        </Box>
      </Box>
    </Box>
  )
}

export default RoomsPageTop
