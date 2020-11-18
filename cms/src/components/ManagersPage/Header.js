import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Badge } from '@material-ui/core'
import DefaultImg from '../../assets/images/default.jpg'
import dayjs from 'dayjs'
import { NotificationImportant, ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
    marginBottom: 10
  },
  headerText: {
    textTransform: 'uppercase',
    color: '#0c2e67'
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
  const date = dayjs().format('DD MMMM, YYYY')
  const [opened, setMenuOpen] = React.useState(false)
  const toggleMenu = () => setMenuOpen(!opened)
  return (
    <div className={styles.root}>
      <Typography className={styles.headerText} variant='h1' component='div'>{title}</Typography>
      <div className={styles.imageSearchWrapper}>
        <Typography className={styles.date} variant='h3' component='div'>
          {date}
        </Typography>
        <div className={styles.notification}>
          <Badge color='primary' variant='dot'>
            <NotificationImportant />
          </Badge>
        </div>
        <img onClick={toggleMenu} className={styles.imageDp} src={DefaultImg} alt='DP' />
        <div onClick={toggleMenu} className={styles.dropdownIcon}> {opened ? <ArrowDropUp /> : <ArrowDropDown />} </div>
      </div>
    </div>
  )
}

export default ManagerHeader
