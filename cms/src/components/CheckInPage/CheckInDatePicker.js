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
    border: '1px solid rgba(27,31,35,.15)',
    borderRadius: '3px',
    boxShadow: '0 3px 12px rgba(27,31,35,.15)'
  },
  datePickerWrapper: {
    marginTop: 10,
    borderBottom: '0.1px solid #24292e',
    '& > .DateRangePicker .DateRangePicker__LegendItemColor--selection': {
      backgroundColor: 'yellow !important'
    }
  },
  guideText: {
    textAlign: 'center',
    color: '#24292e',
    paddingBottom: 10,
    marginTop: 10,
    borderBottom: '0.2px solid #24292e'
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

const formatReadableDate = (date) => dayjs(date).format('DD MMM, YYYY')
const formatDateWithDash = (date) => dayjs(date).format('YYYY-MM-DD')
const formatWithSlash = (date) => dayjs(date).format('DD/MM/YYYY')

const DatePickerButton = () => {
  const classes = usePickerStyles()

  const [pickerOpen, setPickerVisibility] = React.useState(false)
  const handleClose = () => setPickerVisibility(false)
  const handlePickerToggle = () => setPickerVisibility(!pickerOpen)

  const today = moment()
  const [selectedDates, setSelectedDates] = React.useState({ dates: moment.range(today.clone().subtract(1, 'day'), today.clone()), default: true })
  const { dates: actualSelectedDays, default: datepickerTouched } = selectedDates
  const { start: firstSelectedDay, end: lastSelectedDay } = actualSelectedDays

  return (
    <>
      <Box className={classes.datePickerButton}>
        <Box onClick={handlePickerToggle} display='flex' className={classes.datePickerTextIconWrapper}>
          {!datepickerTouched && <div>{formatWithSlash(firstSelectedDay)} - {formatWithSlash(lastSelectedDay)}</div>}
          {datepickerTouched && <div>Select date</div>}
        </Box>
        {pickerOpen && (
          <DatePicker
            handleClose={handleClose}
            selectedDates={actualSelectedDays}
            setSelectedDates={setSelectedDates}
          />
        )}
      </Box>
    </>
  )
}

export default DatePickerButton

const DatePicker = ({ selectedDates, setSelectedDates, handleClose }) => {
  const classes = usePickerStyles()
  const ref = React.useRef()
  useOutsideClick(ref, handleClose)

  const { dataInContext } = useDataProvider()
  const { fetchDataByDate } = dataInContext

  const countDays = (firstDay, lastDay) => {
    return (dayjs(lastDay).diff(dayjs(firstDay), 'day')) + 1 // add the last day since only difference is calculated
  }

  const { start: firstSelectedDay, end: lastSelectedDay } = selectedDates
  const [selectedDaysCount, setSelectedDaysCount] = React.useState(countDays(firstSelectedDay, lastSelectedDay))

  const handleDateSelect = (value) => {
    const { start, end } = value
    setSelectedDates({ dates: moment.range(start, end), default: false })
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
      <Box className={classes.guideText}>Select a date to start filter and a date to stop filter, then click apply</Box>
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
        <div className={classes.datePickerCounter}>
          <strong>{selectedDaysCount} day{selectedDaysCount > 1 && 's'}</strong> - From <strong>{formatReadableDate(firstSelectedDay)}</strong> to <strong>{formatReadableDate(lastSelectedDay)}</strong>
        </div>
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
