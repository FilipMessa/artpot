// @flow

import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = styled(Link)`
  padding: 2px 0;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.components.navigation.item.fontSize};

  &:hover {
    opacity: 0.4;
  }
`

export type Props = {|
  +label: string,
  +to: string,
  +partiallyActive?: boolean,
|}

export default ({ label, to, partiallyActive }: Props) => (
  <li>
    <Item
      activeStyle={{ opacity: 0.5 }}
      partiallyActive={partiallyActive}
      to={`/${to}`}
    >
      {label}
    </Item>
  </li>
)
