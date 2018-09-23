// @flow
import * as React from 'react'
import styled from 'styled-components'
import Item from './components/Item'

const Container = styled.ul``

const Navigation = () => (
  <nav>
    <Container>
      <li>
        <Item>Page 1</Item>
      </li>
      <li>
        <Item>Page 2</Item>
      </li>
      <li>
        <Item>Page 3</Item>
      </li>
    </Container>
  </nav>
)

export default Navigation
