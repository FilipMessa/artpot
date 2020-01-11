import * as React from 'react'
import NavItem from './NavItem'

const Navigation = () => (
  <nav>
    <ul>
      <NavItem label="home" to="" />
      <NavItem label="info" to="info" />
      <NavItem label="works" to="works" partiallyActive />
    </ul>
  </nav>
)

export default Navigation
