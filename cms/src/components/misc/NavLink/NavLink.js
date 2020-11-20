import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={(props) => {
      // props include isCurrent, isPartiallyCurrent, location
      return {
        className: props.isCurrent ? 'active' : ''
      }
    }}
  />
)

export default NavLink
