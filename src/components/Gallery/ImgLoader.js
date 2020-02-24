import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import defaultTheme from '../../theme'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
`

const ImgLoader = ({ height, theme = defaultTheme}) => (
  <Container height={height}>
    <ClipLoader
      color={theme.components.imageLoader.color}
      sizeUnit="px"
      size={theme.components.imageLoader.size}
    />
  </Container>
)

ImgLoader.propTypes = {
  height: PropTypes.number.isRequired,
  // TODO
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
}

export default withTheme(ImgLoader)
