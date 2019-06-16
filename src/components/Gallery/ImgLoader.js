// @flow

import * as React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import styled, { withTheme } from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
`

type Props = {|
  +height: number,
  +theme: Object, // @TODO proper flow
|}

const ImgLoader = ({ height, theme }: Props) => (
  <Container height={height}>
    <ClipLoader
      color={theme.components.imageLoader.color}
      sizeUnit="px"
      size={theme.components.imageLoader.size}
    />
  </Container>
)

export default withTheme(ImgLoader)
