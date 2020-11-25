import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import useOutsideClick from '../../hooks/useOutsideClick'
import useDataProvider from '../../hooks/useDataProvider'
import cn from 'clsx'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css'
import originalMoment from 'moment'
import { extendMoment } from 'moment-range'
import dayjs from 'dayjs'

const moment = extendMoment(originalMoment)

const usePickerStyles = makeStyles({
  datePickerButton: {
    position: 'relative'
  },
  datePickerTextIconWrapper: {
    padding: 2,
    border: '1px solid whitesmoke',
    flexBasis: '50%',
    cursor: 'pointer'
  },
  datePickerMenuWrapper: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '640px',
    marginTop: 20,
    zIndex: 300,
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: ' 1px solid rgba(27,31,35,.15)',
    borderRadius: '3px',
    boxShadow: '0 3px 12px rgba(27,31,35,.15)'
  },
  datePickerWrapper: {
    marginTop: 20,
    borderBottom: '2px solid whitesmoke'
  },
  pickerMenuButton: {
    padding: '5px 10px',
    marginRight: 5,
    cursor: 'pointer',
    borderRadius: 20,
    marginTop: 10,
    color: '#4e5d78',
    border: '1px solid rgba(27,31,35,.2)',
    '&:hover': {
      border: '1px solid #4e5d78'
    }
  },
  datePickerCounter: {
    marginTop: 10,
    color: '#24292e'
  },
  applyButton: {
    background: '#279f43',
    color: 'white'
  }
})

const DatePickerButton = () => {
  const classes = usePickerStyles()

  const [pickerOpen, setPickerVisibility] = React.useState(false)
  const handleClose = () => setPickerVisibility(false)
  const handlePickerToggle = () => setPickerVisibility(!pickerOpen)

  return (
    <>
      <Box className={classes.datePickerButton}>
        <Box onClick={handlePickerToggle} display='flex' className={classes.datePickerTextIconWrapper}>
          <div>
            Select date
          </div>
        </Box>
        {pickerOpen && <DatePicker handleClose={handleClose} />}
      </Box>
    </>
  )
}

export default DatePickerButton

const DatePicker = ({ handleClose }) => {
  const classes = usePickerStyles()
  const ref = React.useRef()
  useOutsideClick(ref, handleClose)

  const { dataInContext } = useDataProvider()
  const { fetchDataByDate } = dataInContext
  const today = moment()

  const countDays = (firstDay, lastDay) => {
    return (dayjs(lastDay).diff(dayjs(firstDay), 'day')) + 1 // add the last day since difference is calculated
  }

  const formatDateWithSlash = (date) => dayjs(date).format('DD/MM/YYYY')
  const formatDateWithDash = (date) => dayjs(date).format('YYYY-MM-DD')

  const [selectedDates, setSelectedDates] = React.useState(moment.range(today.clone().subtract(1, 'month'), today.clone()))
  const { start: firstSelectedDay, end: lastSelectedDay } = selectedDates
  const [selectedDaysCount, setSelectedDaysCount] = React.useState(countDays(firstSelectedDay, lastSelectedDay))

  const handleDateSelect = (value) => {
    const { start, end } = value
    setSelectedDates(moment.range(start, end))
    setSelectedDaysCount(countDays(start, end))
  }

  const handleLastDays = (noOfLastDays) => {
    const startDate = formatDateWithDash(dayjs().subtract(noOfLastDays, 'day'))
    const endDate = formatDateWithDash(dayjs())
    fetchDataByDate(startDate, endDate)
    handleClose()
  }

  const handleApplyButtonClick = () => {
    let { start: startDate, end: endDate } = selectedDates
    startDate = formatDateWithDash(startDate)
    endDate = formatDateWithDash(endDate)
    fetchDataByDate(startDate, endDate)
    handleClose()
  }

  const handleCancelButtonClick = () => handleClose()

  return (
    <div ref={ref} className={classes.datePickerMenuWrapper}>
      <div className={classes.datePickerWrapper}>
        <DateRangePicker
          value={selectedDates}
          onSelect={handleDateSelect}
          singleDateRange
          maximumDate={new Date()}
          numberOfCalendars={2}
        />
      </div>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <div className={classes.datePickerCounter}>{selectedDaysCount} days - From {formatDateWithSlash(firstSelectedDay)} to {formatDateWithSlash(lastSelectedDay)}</div>
        <Box display='flex' flexWrap='wrap'>
          <div onClick={() => handleLastDays(7)} className={classes.pickerMenuButton}>Last 7 days</div>
          <div onClick={() => handleLastDays(30)} className={classes.pickerMenuButton}>Last 30 days</div>
          <div onClick={() => handleLastDays(90)} className={classes.pickerMenuButton}>Last 90 days</div>
        </Box>
        <Box display='flex' style={{ marginBottom: '15px' }}>
          <div onClick={handleApplyButtonClick} className={cn(classes.pickerMenuButton, classes.applyButton)}>Apply</div>
          <div onClick={handleCancelButtonClick} className={classes.pickerMenuButton}>Cancel</div>
        </Box>
      </Box>
    </div>
  )
}
