import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  page: {
    background: 'white',
    padding: 10,
    color: '#0c2e67',
    borderRadius: 5,
    marginRight: 10,
    width: 40,
    height: 40,
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:last-of-type': {
      marginRight: 0
    }
  },
  elipsis: {
    color: 'black',
    marginRight: 10,
    marginTop: 8
  },
  active: {
    color: '#0066f5'
  }
}));

const CustomPagination = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={cn(classes.page, classes.active)}>1</div>
      <div className={classes.page}>2</div>
      <div className={classes.page}>3</div>
      <div className={classes.page}>4</div>
      <div className={classes.elipsis}>...</div>
      <div className={classes.page}>5</div>
    </div>
  )
}

export default CustomPagination
