import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  frontDeskPageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const FrontDeskHeader = () => {
  return (<div>This is the frontdesk header page</div>)
}

const FrontDeskBody = () => {
  return (
    <div>This is the frontdesk body</div>
  )
}

const FrontDeskPage = () => {
  const classes = useStyles()
  return (
    <div className={classes.frontDeskPageWrapper}>

      <FrontDeskHeader />
      <FrontDeskBody />
      <Link to='/secure/admin/staffs'>
        Let see sha
      </Link>
      <div>This is our front desk page. The design is coming soon on its way. Wink wink.</div>
    </div>
  )
}

export default FrontDeskPage
