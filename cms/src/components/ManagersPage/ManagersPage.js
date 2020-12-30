import React from 'react'
import cn from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from '../Sidebar'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const drawerWidth = 260

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  aside: {
    background: 'white',
    width: 70,
    position: 'fixed',
    top: 0,
    bottom: 0,
    height: '100%',
    zIndex: 20,
    overflowY: 'auto',
    transition: 'width .05s'
  },
  content: {
    marginLeft: 70,
    flexGrow: 1,
    height: '100vh',
    background: '#f4f8fc',
    padding: '20px 40px',
    transition: 'margin-left .05s'
  },
  contentExpanded: {
    marginLeft: drawerWidth
  },
  openSidebarButon: {
    background: 'rgba(12, 46, 103, .4)',
    position: 'fixed',
    color: 'white',
    top: 25,
    left: 223,
    cursor: 'pointer',
    borderRadius: '50%',
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 200,
    '& svg': {
      width: 15,
      height: 15
    }
  },
  openedSidebar: {
    width: drawerWidth
  }
}))

const ManagersPage = (props) => {
  const { children } = props
  const classes = useStyles()
  const [sideBarOpened, setSidebarOpen] = React.useState(true)
  const toggleSidebar = () => setSidebarOpen(!sideBarOpened)

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <aside className={cn(classes.aside, sideBarOpened && classes.openedSidebar)}>
          <Sidebar />
        </aside>
        <main className={cn(classes.content, sideBarOpened && classes.contentExpanded)}>
          {children}
        </main>
      </div>
      <div onClick={toggleSidebar} className={classes.openSidebarButon}>
        {sideBarOpened ? <NavigateNextIcon /> : <NavigateBeforeIcon />}
      </div>
    </>
  )
}

export default ManagersPage
