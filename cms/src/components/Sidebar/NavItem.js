import React from 'react'
import NavLink from '../misc/NavLink'
import {
  makeStyles,
  Box
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  item: {
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 10,
    width: '100%',
    '&:hover': {
      '& $title': {
        color: '#0066f5'
      },
      '& $icon': {
        color: '#0066f5'
      }
    },
    '& .active': {
      position: 'relative',
      '& $title': {
        color: '#0066f5'
      },
      '& $iconWrapper': {
        color: '#0066f5',
        background: 'rgba(0, 102, 245, 0.1)',
        borderRadius: '50%'
      },
      '& $icon': {
        color: '#0066f5'
      },
      '& > $iconTextWrapper::after': {
        position: 'absolute',
        content: "''",
        width: 3,
        height: 20,
        top: 10,
        background: '#0066f5',
        right: 0,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      }
    }
  },
  iconTextWrapper: {
    position: 'relative',
    background: 'inherit'
  },
  iconWrapper: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  icon: {
    width: 20,
    height: 20,
    color: '#b5c0d0'
  },
  title: {
    color: '#b5c0d0',
    fontSize: 14,
    // textTransform: 'uppercase',
    fontFamily: 'BRFirmaCW-Bold'
  }
}))

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.item}>
      <NavLink
        className={classes.navLink}
        to={href}
      >
        <Box
          display='flex'
          alignItems='center'
          className={classes.iconTextWrapper}
        >
          {Icon && (
            <div className={classes.iconWrapper}>
              <Icon
                className={classes.icon}
              />
            </div>
          )}
          <div className={classes.title}>
            <span className={classes.headerText}>{title}</span>
          </div>
        </Box>

      </NavLink>
    </Box>
  )
}

export default NavItem
