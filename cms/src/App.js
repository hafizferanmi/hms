import React from 'react'
import { Router } from '@reach/router'
import LoggedOutRoute from './components/misc/LoggedOutRoute'
import AuthRoute from './components/misc/AuthRoute'
import PerfectScrollBar from 'react-perfect-scrollbar'

const NotfoundPage = () => <div>Page not found</div>

const App = () => {
  return (
    <PerfectScrollBar>
      <Router>
        <LoggedOutRoute path='/*' />
        <AuthRoute path='/secure/*' />
        <NotfoundPage default />
      </Router>
    </PerfectScrollBar>
  )
}

export default App
