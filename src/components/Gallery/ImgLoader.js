import * as React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height}px;
`

const ImgLoader = ({ height, theme }) => (
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
