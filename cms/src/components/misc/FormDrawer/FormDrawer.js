import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import cn from 'clsx'
import CloseButton from '../CloseButton'
import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles({
  drawerWrapper: {
    visibility: 'hidden',
    opacity: 0
  },
  isOpened: {
    visibility: 'visible',
    opacity: 1
  },
  fixedDrawerWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 25, 0.5)',
    zIndex: 300,
    transition: 'background .2s'
  },
  formWrapper: {
    width: '50%',
    // transform: 'translate(100%)',
    background: 'white',
    height: '100vh',
    float: 'right',
    opacity: 0.5,
    transition: 'all 0.2s ease-in'
  },
  formWrapperOpened: {
    opacity: 1
    // transform: 'translate(0%)'
  },
  drawerHeader: {
    padding: 20,
    borderBottom: '2px solid whitesmoke'
  },
  drawerFooter: {
    padding: 10,
    borderTop: '2px solid whitesmoke'
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
        <Box display='flex' flexDirection='column' justifyContent='space-between' className={cn(styles.formWrapper, isOpen && styles.formWrapperOpened)}>
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
