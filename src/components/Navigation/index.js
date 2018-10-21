// @flow
import * as React from 'react'
import styled from 'styled-components'
import Item from './components/Item'

const List = styled.ul``

const Navigation = () => (
  <nav>
    <List>
      <Item label="home" url="#" />
      <Item
        label="works"
        list={[{ label: 'item-1', url: '#' }, { label: 'item-2', url: '#' }]}
      />
    </List>
  </nav>
)

export default Navigation
