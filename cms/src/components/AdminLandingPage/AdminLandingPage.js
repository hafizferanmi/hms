import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from '@reach/router'
import { Box, Container, Grid, Card } from '@material-ui/core'
import RestaurantImg from '../../assets/images/restaurant.jpg'

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoriesContainer: {
    justifyContent: 'center'
  },
  categoryCardWrapper: {
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  categoryCard: {
    backgroundImage: `url(${RestaurantImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    fontWeight: 'bold',
    height: '200px',
    borderRadius: '0',
    transition: 'all .2s linear',
    '&:hover': {
      transform: 'scale(1.02)',
      transformOrigin: 'center',
      '& $categoryCardContentWrapper': {
        background: 'rgba(89, 45, 42, .4)'
      }
    }
  },
  categoryCardContentWrapper: {
    width: '100%',
    height: '100%',
    background: 'rgba(89, 45, 42, .8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase',
    transition: 'all .2s linear'
  }
}))

const categories = [
  { name: 'dashboard', path: 'admin' },
  { name: 'frontDesk', path: 'frontdesk' },
  { name: 'hall', path: 'frontdesk' }
  // { name: 'laundry', path: 'laundry' },
  // { name: 'bar', path: 'bar' },
  // { name: 'restaurant', path: 'restaurant' },
  // { name: 'gym', path: 'gym' }
]

const AdminLandingPage = () => {
  const classes = useStyles()
  return (
    <Box className={classes.pageWrapper}>
      <Container>
        <Grid className={classes.categoriesContainer} container spacing={3}>
          {categories.map((category, i) => (
            <Grid key={i} item xs={12} md={6} lg={3}>
              <Box
                className={classes.categoryCardWrapper}
                component={Link}
                to={category.path}
              >
                <Card
                  elevation={0}
                  className={classes.categoryCard}
                >
                  <div className={classes.categoryCardContentWrapper}>
                    {category.name}
                  </div>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AdminLandingPage
