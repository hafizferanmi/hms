import React from 'react'
import { Link as RouterLink } from '@reach/router'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
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
      <Button
        className={classes.button}
        component={RouterLink}
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
      </Button>
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
