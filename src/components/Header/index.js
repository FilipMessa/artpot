// @flow

import * as React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import BurgerButton from '../BurgerButton'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`

type Props = {
  onClick: () => void,
}

const Header = ({ onClick }: Props) => (
  <Container>
    <Logo />
    <BurgerButton onClick={onClick} />
  </Container>
)

export default Header
