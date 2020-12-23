import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import cn from 'clsx'
import CloseButton from '../CloseButton'
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles({
  drawerWrapper: {
    display: 'none'
  },
  isOpened: {
    display: 'block'
  },
  fixedDrawerWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 300,
    transition: 'background 2s'
  },
  formWrapper: {
    width: '50%',
    background: 'white',
    height: '100vh',
    float: 'right'
  },
  drawerHeader: {
    padding: 20,
    borderBottom: '1px solid whitesmoke'
  },
  drawerFooter: {
    padding: 10,
    borderTop: '1px solid whitesmoke'
  },
  drawerBody: {
    flexGrow: 1,
    overflowY: 'auto'
  },
  childrenWrapper: {
    margin: 20
  }
})

const FormDrawer = ({ isOpen, close, children, title }) => {
  const styles = useStyles()
  return (
    <div className={cn(styles.drawerWrapper, isOpen && styles.isOpened)}>
      <div className={cn(isOpen && styles.fixedDrawerWrapper)}>
        <Box display='flex' flexDirection='column' justifyContent='space-between' className={styles.formWrapper}>
          <Box display='flex' justifyContent='space-between' className={styles.drawerHeader}>
            <h3>{title}</h3>
            <CloseButton onClick={close} />
          </Box>
          <div className={styles.drawerBody}>
            <PerfectScrollbar>
              <div className={styles.childrenWrapper}>
                {children}
              </div>
            </PerfectScrollbar>
          </div>
          {/* <Box display='flex' justifyContent='space-between' className={styles.drawerFooter}>
            <button onClick={() => close()}>
              Close
            </button>
            <button>
              Add
            </button>
          </Box> */}
        </Box>
      </div>
    </div>
  )
}

export default FormDrawer
