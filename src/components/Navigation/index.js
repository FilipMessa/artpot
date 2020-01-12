import * as React from 'react'
import NavItem from './NavItem'
import SubNavigation from './SubNavigation'

const Navigation = () => (
  <nav>
    <ul>
      <NavItem label="home" to="/" />
      <NavItem label="info" to="/info" />
      <div>
        <NavItem label="works" to="/works" partiallyActive />
        <nav>
          <SubNavigation />
        </nav>
      </div>
    </ul>
  </nav>
)

export default Navigation
