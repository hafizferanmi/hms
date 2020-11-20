import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import NavLink from '../misc/NavLink'
import {
  ListItem,
  makeStyles,
  Box
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    '& .active': {
      color: 'yellow',
      '& $title': {
        fontWeight: 'bold',
        color: 'yellow'
      },
      '& $icon': {
        color: 'yellow'
      }
    }
  },
  box: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1),
    color: 'blue'
  },
  title: {
    marginRight: 'auto',
    color: 'blue'
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
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Box
        className={classes.button}
        component={NavLink}
        to={href}
      >
        {Icon && (
          <Icon
            className={classes.icon}
            size='20'
          />
        )}
        <span className={classes.title}>
          {title}
        </span>
      </Box>
    </ListItem>
  )
}

NavItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.elementType,
  label: PropTypes.string
}

export default NavItem
