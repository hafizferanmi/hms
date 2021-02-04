import React from 'react'
import { makeStyles } from '@material-ui/core'
import useOutsideClick from '../../hooks/useOutsideClick'
import useCurrentStaff from '../../hooks/useCurrentStaff'
import { STAFF_ROLES_LABEL } from '../../constants/staff'
import { Link, useNavigate } from '@reach/router'
import { removeToken } from '../../helpers/auth'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

const useStyles = makeStyles({
  headerMenuContainer: {
    position: 'absolute',
    top: 50,
    right: 0,
    zIndex: 10,
    borderRadius: 5,
    minWidth: 200,
    background: 'white',
    boxShadow: '0 3px 12px 0 rgba(0, 102, 245, 0.1)',
    padding: '20px 5px 0px'
  },
  detailsWrapper: {
    fontSize: 13,
    paddingLeft: 10,
    userSelect: 'none',
    '& p': {
      paddingTop: 5
    }
  },
  menuItem: {
    paddingLeft: 10,
    padding: '10px 0',
    cursor: 'pointer',
    color: 'black',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: '-5px',
    marginRight: '-5px',
    '&:hover': {
      background: 'whitesmoke'
    },
    '& svg': {
      width: 17,
      height: 17,
      marginRight: 10
    }
  }
})

const HeaderMenu = ({ handleClose }) => {
  const classes = useStyles()
  const ref = React.useRef()
  const staff = useCurrentStaff()
  useOutsideClick(ref, handleClose)
  const navigateTo = useNavigate()

  const handleLogout = () => {
    removeToken()
    navigateTo('/')
  }
  return (
    <div ref={ref} className={classes.headerMenuContainer}>
      <div className={classes.detailsWrapper}>
        <p>{staff.name}</p>
        <p>{staff.email}</p>
        <p>{STAFF_ROLES_LABEL[staff.role]}</p>
        <p>{staff.company}</p>
      </div>
      <Link className={classes.menuItem} to='/secure/admin/profile'><AccountBoxIcon />  Profile</Link>
      <div className={classes.menuItem} onClick={handleLogout}><PowerSettingsNewIcon /> Logout</div>
    </div>
  )
}

export default HeaderMenu
