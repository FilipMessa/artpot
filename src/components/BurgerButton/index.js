// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import BlankButton from '../BlankButton'
import theme from '../../theme/index'

const Container = styled(BlankButton)`
  display: flex;
  flex-direction: column;

  &:active {
    opacity: 0.5;
  }

  ${media.greaterThan('medium')`
    display: none
  `};
`

const Line = styled.span`
  width: 30px;
  height: 2px;
  margin: 2px 0;
  background-color: ${({ theme }) => theme.colors.black};
`
Line.defaultProps = {
  theme,
}

type Props = {
  onClick: () => void,
}

const BurgerButton = ({ onClick }: Props) => (
  <Container onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </Container>
)

export default BurgerButton
