import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import NavItem from './NavItem'
import SubNavigation from './SubNavigation'

const MainNavItem = styled(NavItem)`
  ${media.lessThan('medium')`
  padding: 4px 0;
  font-size: 1.2em;
`};
`

const Navigation = () => (
  <nav>
    <ul>
      <MainNavItem label="home" to="/" />
      <MainNavItem label="info" to="/info" />
      <MainNavItem label="works" to="/works" partiallyActive>
        <SubNavigation />
      </MainNavItem>
    </ul>
  </nav>
)

export default Navigation
