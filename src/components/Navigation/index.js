// @flow
import * as React from 'react'
import Item from './components/Item'

const Navigation = () => (
  <nav>
    <ul>
      <Item label="home" url="#" />
      <Item
        label="works"
        list={[{ label: 'item-1', url: '#' }, { label: 'item-2', url: '#' }]}
      />
    </ul>
  </nav>
)

export default Navigation
