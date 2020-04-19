import * as React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

const TextRenderer = ({ children, weight, element }) => {
  return (
    <Text element={element} weight={weight}>
      {children}
    </Text>
  )
}

TextRenderer.propTypes = {
  children: PropTypes.element,
  weight: PropTypes.string,
  element: PropTypes.string,
}

export default TextRenderer
