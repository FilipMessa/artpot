import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DIRECTION_TYPES } from './consts'
import { NextItem } from './NextItem'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Lightbox({ children }) {
  const handleLeftClick = e => {
    e.stopPropagation()
    console.log('LEFT') // TODO in progress
  }

  const handleRightClick = e => {
    e.stopPropagation()
    console.log('RIGHT') // TODO in progress
  }

  return (
    <Container>
      <NextItem type={DIRECTION_TYPES.LEFT} onClick={handleLeftClick} />
      <Content>{children}</Content>
      <NextItem type={DIRECTION_TYPES.RIGHT} onClick={handleRightClick} />
    </Container>
  )
}

Lightbox.propTypes = {
  children: PropTypes.element,
}
