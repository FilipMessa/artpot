// @flow

import * as React from 'react'

import NavItem from './NavItem'
import SubNavigation from './SubNavigation'

const Navigation = () => (
  <nav>
    <ul>
      <NavItem label="home" to="" />
      <NavItem label="info" to="info" />
      <NavItem label="works" to="works" partiallyActive />
      <SubNavigation />
    </ul>
  </nav>
)

export default Navigation
