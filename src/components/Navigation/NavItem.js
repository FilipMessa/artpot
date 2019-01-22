// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { RouteType } from './NavigationTypes'

const Item = styled.li`
  font-size: ${({ theme }) => theme.components.navigation.item.fontSize};
  padding: 2px 0;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? 0.4 : 1)};
  &:hover {
    opacity: 0.4;
  }
`

type Props = {|
  +route: RouteType,
  +isActive?: boolean,
  +onClick: (route: RouteType) => void,
|}

export default ({ route, isActive = false, onClick }: Props) => (
  <Item onClick={() => onClick(route)} isActive={isActive}>
    {route.label}
  </Item>
)
