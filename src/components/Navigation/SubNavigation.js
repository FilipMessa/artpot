// @flow
import * as React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem'

const List = styled.ul`
  margin-top: 4rem;
`

const SubNavigation = () => (
  <List>
    <NavItem label="Detected Landscape" to="works/detected_landscape" />
    <NavItem label="Hidden Landscape" to="works/hidden_landscape" />
  </List>
)

export default SubNavigation
