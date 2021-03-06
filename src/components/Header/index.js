import React from 'react'
import styled from 'styled-components'

import Logo from '../Logo'

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`

const Header = () => (
  <Container data-testid="header">
    <Logo />
  </Container>
)

export default Header
