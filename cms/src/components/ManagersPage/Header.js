import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Badge, Avatar } from '@material-ui/core'
import dayjs from 'dayjs'
import HeaderMenu from './HeaderMenu'
import { NotificationImportant, ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
// import { API_BASE_URL } from '../../helpers/api'
// import useCurrentStaff from '../../hooks/useCurrentStaff'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative'
  },
  headerText: {
    textTransform: 'uppercase',
    color: '#0c2e67',
    letterSpacing: 0.05,
    fontWeight: 'bold',
    fontSize: 16
  },
  imageSearchWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: 40
  },
  date: {
    color: '#b5c0d0',
    fontSize: 15,
    letterSpacing: 0.1,
    textTransform: 'uppercase',
    marginRight: 30
  },
  notification: {
    marginRight: 30,
    marginLeft: 10,
    background: 'lightblue',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    color: '#0066f5',
    width: 40,
    height: 40,
    cursor: 'pointer'
  },
  imageDp: {
    objectFit: 'cover',
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 5,
    cursor: 'pointer'
  },
  dropdownIcon: {
    color: '#b5c0d0',
    cursor: 'pointer'
  }
})

const ManagerHeader = ({ title }) => {
  const styles = useStyles()
  // const staff = useCurrentStaff()
  const date = dayjs().format('DD MMMM, YYYY')
  const [opened, setMenuOpen] = React.useState(false)
  const toggleMenu = () => setMenuOpen(!opened)
  const handleClose = () => setMenuOpen(false)
  return (
    <div className={styles.root}>
      <p className={styles.headerText}>{title}</p>
      <div className={styles.imageSearchWrapper}>
        <Typography className={styles.date} variant='h3' component='div'>
          {date}
        </Typography>
        <div className={styles.notification}>
          <Badge color='primary' variant='dot'>
            <NotificationImportant />
          </Badge>
        </div>
        <Avatar
          className={styles.imageDp}
          onClick={toggleMenu}
          // src={`${API_BASE_URL}/${staff.displayImage}`}
        />
        <div onClick={toggleMenu} className={styles.dropdownIcon}> {opened ? <ArrowDropUp /> : <ArrowDropDown />} </div>
      </div>
      {opened && <HeaderMenu handleClose={handleClose} />}
    </div>
  )
}

export default ManagerHeader
