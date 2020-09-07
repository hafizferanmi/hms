import React from 'react'
import { Router } from '@reach/router'

import LoggedOutRoute from './components/misc/LoggedOutRoute'
import AuthRoute from './components/misc/AuthRoute'

const NotfoundPage = () => <div>Page not found</div>

const App = () => {
  return (
    <Router>
      <LoggedOutRoute path='/' />
      <AuthRoute path='/secure' />
      <NotfoundPage default />
    </Router>
  )
}

export default App
