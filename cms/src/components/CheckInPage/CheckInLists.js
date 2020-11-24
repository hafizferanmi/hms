import React from 'react'
import toRegex from 'to-regex'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import CheckInRoomCard from './CheckInRoomCard'
import PerfectScrollBar from 'react-perfect-scrollbar'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { formatDate } from '../../helpers/misc'

const useStyles = makeStyles({
  listWrapper: {
    background: 'white',
    maxHeight: 'calc(100vh - 150px)',
    height: 'calc(100vh - 150px)',
    width: '100%',
    borderRadius: 5
  },
  emptyGuestText: {
    height: '100%',
    marginTop: 40,
    textAlign: 'center'
  },
  searchWrapper: {
    borderBottom: '2px solid whitesmoke',
    padding: '5px 10px'
  },
  searchIcon: {
    color: '#808e9b',
    width: 18,
    height: 18
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    height: 40,
    padding: 5,
    fontSize: 15,
    '&::placeholder': {
      color: '#808e9b',
      fontSize: 15
    }
  },
  guestWrapper: {
    padding: '5px 10px',
    '& h3': {
      color: '#0c2e67',
      fontSize: '20px'
    }
  },
  checkInCardsContainer: {
    height: '100%',
    overflow: 'hidden'
  }
})

const filterCheckIns = (searchText, checkIns) => {
  const searchWords = searchText.split(/\s+/)
  const regExp = toRegex(searchWords, { contains: true, flags: 'i' })
  return checkIns.filter((checkIn) => {
    const { name, email, phone } = checkIn.guest
    const { number: roomNumber, dateOfArrival, dateOfDeparture } = checkIn.room

    return regExp.test(name) || regExp.test(email) || regExp.test(phone) || regExp.test(roomNumber) || regExp.test(formatDate(dateOfArrival)) || regExp.test(formatDate(dateOfDeparture))
  })
}

const CheckInList = ({ checkIns, handleSelectCheckIn, selectedCheckIn }) => {
  const classes = useStyles()
  const [searchValue, setSearchString] = React.useState()
  const filteredCheckIns = searchValue ? filterCheckIns(searchValue, checkIns) : checkIns

  return (
    <div className={classes.listWrapper}>
      <Box display='flex' justifyContent='space-between' className={classes.searchWrapper}>
        <Box display='flex' alignItems='center'>
          <SearchOutlinedIcon className={classes.searchIcon} />
          <input placeholder='Search guest' className={classes.searchInput} onChange={(e) => setSearchString(e.target.value)} />
        </Box>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='space-between' className={classes.guestWrapper}>
        <h3>Guests</h3>
        <div>
          <select>
            <option value='ALL'>All guest</option>
            <option value='CHECKEDOUT'>Checkedin only</option>
            <option value='CHECKEDIN'>Checkedout only</option>
          </select>
        </div>
      </Box>
      <Box className={classes.checkInCardsContainer}>
        {searchValue && !filteredCheckIns.length && <div className={classes.emptyGuestText}>No search result found</div>}
        <PerfectScrollBar>
          {
            checkIns.length
              ? filteredCheckIns.map(checkIn => (
                <CheckInRoomCard
                  key={checkIn._id}
                  handleSelectCheckIn={handleSelectCheckIn}
                  selectedCheckIn={selectedCheckIn}
                  checkIn={checkIn}
                />
              ))
              : (
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  className={classes.emptyGuestText}
                >
                  You dont have any guest yet
                </Box>
              )
          }
        </PerfectScrollBar>
      </Box>

    </div>
  )
}

export default CheckInList
