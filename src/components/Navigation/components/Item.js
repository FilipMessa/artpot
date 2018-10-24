// @flow

import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import uuid from 'uuid'
import { MdArrowDropDown } from 'react-icons/md'
import defaultTheme from '../../../theme/index'

type ItemType = {
  url: string,
  label: string,
}

type Props = {
  label: string,
  url?: string,
  isActive?: boolean,
  list?: Array<ItemType>,
}

type State = {
  isOpen: boolean,
}

const Label = styled.span`
  display: inline-flex;
  align-items: center;
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
Label.defaultProps = {
  theme: defaultTheme,
}

const ListItem = styled.li`
  padding: 2px 0;
  cursor: pointer;
`

const SubList = styled.ul`
  margin-top: 1.3rem;
`

const Icon = styled(MdArrowDropDown)`
  height: 15px;
  width: 15px;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
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
    const { isOpen } = this.state
    if (list) {
      return (
        <ListItem>
          <Label
            data-testid="navigation-list-label"
            isActive={isOpen}
            onClick={this.toggle}
          >
            {label}
            <Icon isOpen={isOpen} />
          </Label>
          {isOpen && (
            <SubList>
              {list.map(item => (
                <ListItem key={uuid()}>
                  <Label>
                    <GatsbyLink
                      data-testid="navigation-link"
                      alt={item.label}
                      to={item.url}
                    >
                      {item.label}
                    </GatsbyLink>
                  </Label>
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
          <GatsbyLink data-testid="navigation-link" alt={label} to={url}>
            {label}
          </GatsbyLink>
        </Label>
      </ListItem>
    )
  }
}

export default Item
