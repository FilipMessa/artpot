// @flow

import * as React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import BurgerButton from '../BurgerButton'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`

const Header = () => (
  <Container>
    <Logo />
    <BurgerButton />
  </Container>
)

export default Header
