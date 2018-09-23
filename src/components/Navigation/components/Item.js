// @flow

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../theme/index'

type Props = {
  children: React.Node,
  url: string,
}

const Container = styled.li`
  padding: 2px 0;
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.nobel};
    }
  }
`
Container.defaultProps = {
  theme,
}

const Item = ({ children, url }: Props) => (
  <Container>
    <Link to={url}>{children}</Link>
  </Container>
)

export default Item
