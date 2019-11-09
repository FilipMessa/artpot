// @flow

import * as React from 'react'
import styled from 'styled-components'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { DIRECTION_TYPES } from './consts'

function getDirection(type) {
  switch (type) {
    case DIRECTION_TYPES.LEFT:
      return <MdChevronLeft />
    case DIRECTION_TYPES.RIGHT:
      return <MdChevronRight />
    default:
      return null
  }
}

const NextItemContainer = styled.div.attrs({
  tabIndex: 0,
  role: 'button',
})`
  display: flex;
  align-items: center;
  opacity: 0.3;
  transition: opacity 80ms ease-in-out;
  cursor: pointer;
  font-size: 3.3333em;
  color: #fff;
  z-index: 100;
  padding: 0.333rem;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`

export function NextItem({ type = DIRECTION_TYPES.LEFT, onClick }) {
  return (
    <NextItemContainer onClick={onClick}>
      {getDirection(type)}
    </NextItemContainer>
  )
}
