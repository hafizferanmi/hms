import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Link } from '@reach/router'
import { Box, Container, Grid, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryCard: {
    background: 'rgba(89, 45, 42, .5)',
    fontWeight: 'bold',
    height: '200px',
    borderRadius: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'uppercase'
  },
  categoriesContainer: {
    justifyContent: 'center'
  }
}))

const categories = [
  { name: 'Dashboard', path: 'admin' },
  { name: 'FrontDesk', path: 'frontdesk' },
  // { name: 'Laundry', path: 'laundry' },
  // { name: 'Bar', path: 'bar' },
  // { name: 'Restaurant', path: 'restaurant' },
  // { name: 'Gym', path: 'gym' },
  { name: 'Hall', path: 'hall' }
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
                className=''
                component={Link}
                to={category.path}
              >
                <Card
                  elevation={0}
                  className={classes.categoryCard}
                >
                  {category.name}
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
