// @flow

import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import uuid from 'uuid'
import theme from '../../../theme/index'

type ItemType = {
  url: string,
  label: string,
}

type Props = {
  label: string,
  url: string,
  isActive: boolean,
  list: Array<ItemType>,
}

type State = {
  isOpen: boolean,
}

const Label = styled.span`
  line-height: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.nobel};
  }

  a {
    text-decoration: inherit;
    color: inherit;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.nobel};
    }
  }
`

const ListItem = styled.li`
  padding: 2px 0;
  cursor: pointer;
`
ListItem.defaultProps = {
  theme,
}

const SubList = styled.ul`
  margin-top: 1.3rem;
`

class Item extends React.Component<Props, State> {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  render() {
    const { url, label, isActive, list } = this.props
    if (list) {
      return (
        <ListItem>
          <Label isActive={this.state.isOpen} onClick={this.toggle}>
            {label}
          </Label>
          {this.state.isOpen && (
            <SubList>
              {list.map(item => (
                <ListItem key={uuid()}>
                  <Label>{item.label}</Label>
                </ListItem>
              ))}
            </SubList>
          )}
        </ListItem>
      )
    }
    return (
      <ListItem>
        <Label isActive={isActive}>
          <Link alt={label} to={url}>
            {label}
          </Link>
        </Label>
      </ListItem>
    )
  }
}

export default Item
