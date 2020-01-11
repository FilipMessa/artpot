// TODO
/* eslint-disable react/prop-types */

import * as React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'

const Item = styled(Link)`
  padding: 2px 0;
  cursor: pointer;
  text-decoration: none;

  > span:hover {
    opacity: ${({ theme }) => theme.components.navigation.link.hoverOpacity};
  }
`

const NavItem = ({ label, to, partiallyActive, theme }) => (
  <li>
    <Item
      activeStyle={{ opacity: theme.components.navigation.link.activeOpacity }}
      partiallyActive={partiallyActive}
      to={`/${to}`}
    >
      <Text element="span">{label}</Text>
    </Item>
  </li>
)

export default withTheme(NavItem)
