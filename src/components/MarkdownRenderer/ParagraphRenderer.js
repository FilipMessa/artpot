import * as React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

const ParagraphRenderer = ({ children }) => {
  return <Text>{children}</Text>
}

ParagraphRenderer.propTypes = {
  children: PropTypes.element,
}

export default ParagraphRenderer
