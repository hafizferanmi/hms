import React from 'react'
import { makeStyles, Box } from '@material-ui/core'
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined'

const useStyles = makeStyles({
  statsWrapper: {
    fontFamily: 'bk',
    maxHeight: 'calc(100vh - 150px)',
    overflow: 'hidden',
    userSelect: 'none'
  },
  cardWrapper: {
    background: 'white',
    borderRadius: 5,
    marginTop: 30,
    '&:first-of-type': {
      marginTop: 0
    },
    padding: '20px 15px'

  },
  icon: {
    color: '#0066f5',
    width: 40,
    height: 40
  },
  valueText: {
    fontSize: 30,
    color: '#0c2e67'
  },
  textDesc: {
    fontSize: 20,
    marginTop: 10,
    color: '#b5c0d0'
  }
})

const CheckInStats = () => {
  const styles = useStyles()
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.cardWrapper}>
        <Box
          display='flex'
          justifyContent='space-between'
        >
          <LocalOfferOutlinedIcon className={styles.icon} />
          <h4 className={styles.valueText}>40</h4>
        </Box>
        <p className={styles.textDesc}>No of checkIns</p>
      </div>
      <div className={styles.cardWrapper}>
        <Box
          display='flex'
          justifyContent='space-between'
        >
          <LocalOfferOutlinedIcon className={styles.icon} />
          <h4 className={styles.valueText}>40</h4>
        </Box>
        <p className={styles.textDesc}>No of checkIns</p>
      </div>
      <div className={styles.cardWrapper}>
        <Box
          display='flex'
          justifyContent='space-between'
        >
          <LocalOfferOutlinedIcon className={styles.icon} />
          <h4 className={styles.valueText}>40</h4>
        </Box>
        <p className={styles.textDesc}>No of checkIns</p>
      </div>
      <div className={styles.cardWrapper}>
        <Box
          display='flex'
          justifyContent='space-between'
        >
          <LocalOfferOutlinedIcon className={styles.icon} />
          <h4 className={styles.valueText}>40</h4>
        </Box>
        <p className={styles.textDesc}>No of checkIns</p>
      </div>
    </div>
  )
}

export default CheckInStats
