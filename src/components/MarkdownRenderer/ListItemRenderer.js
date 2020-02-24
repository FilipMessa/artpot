import React from 'react'
import PropTypes from 'prop-types'

import Text from '../Text'

const ListItemRenderer = ({ children }) => {
  return <Text element="li" >{children}</Text>
}

ListItemRenderer.propTypes = {
  children: PropTypes.element,
}

export default ListItemRenderer
