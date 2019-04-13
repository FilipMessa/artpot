// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { withTheme } from 'styled-components'
import Text from '../Text'

const Item = styled(Link)`
  padding: 2px 0;
  cursor: pointer;
  text-decoration: none;

  > span:hover {
    opacity: ${({ theme }) => theme.components.navigation.link.hoverOpacity}
`

export type Props = {|
  +label: string,
  +to: string,
  +partiallyActive?: boolean,
  +theme: Object, // TODO
|}

const NavItem = ({ label, to, partiallyActive, theme }: Props) => (
  <li>
    <Item
      activeStyle={{ opacity: theme.components.navigation.link.activeOpacity }}
      partiallyActive={partiallyActive}
      to={`/${to}`}
    >
      <Text element="span" size="small">
        {label}
      </Text>
    </Item>
  </li>
)

export default withTheme(NavItem)
