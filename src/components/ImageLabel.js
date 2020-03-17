import React from 'react'
import PropTypes from 'prop-types'
import { IMAGE_TYPE } from '../consts'

export function ImageLabel({ name, material, dimensions, year, type }) {
  switch (type) {
    case IMAGE_TYPE.ARTWORK:
      return (
        <span>
          {name}, <span style={{ whiteSpace: 'nowrap' }}>{dimensions}</span>,{' '}
          {material}, {year}
        </span>
      )
    case IMAGE_TYPE.PHOTO:
      return (
        <span>
          {name}, {year}
        </span>
      )

    default:
      return null
  }
}

ImageLabel.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string,
  material: PropTypes.string,
  dimensions: PropTypes.string,
  type: PropTypes.oneOf(['artwork', 'photo']),
}
