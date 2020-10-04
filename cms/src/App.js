import React from 'react'
import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoggedOutRoute from './components/misc/LoggedOutRoute'
import AuthRoute from './components/misc/AuthRoute'

const NotfoundPage = () => <div>Page not found</div>

const App = () => {
  return (
    <Router>
      <LoggedOutRoute path='/api' />
      <AuthRoute path='/secure/*' />
      <NotfoundPage default />
    </Router>
  )
}

export default App
