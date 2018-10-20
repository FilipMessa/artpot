// @flow

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../../theme/index'

type Props = {
  label: string,
  url: string,
  isActive: boolean,
}

const Container = styled.li`
  padding: 2px 0;
  line-height: 0.9rem;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};

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

const Item = ({ url, label, isActive }: Props) => (
  <Container isActive={isActive}>
    <Link alt="label" to={url}>
      {label}
    </Link>
  </Container>
)

export default Item
