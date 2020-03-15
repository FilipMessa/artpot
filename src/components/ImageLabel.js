import React from 'react'
import PropTypes from 'prop-types'

export function ImageLabel({ name, material, dimensions, year }) {
  return (
    <span>
      {name}, <span style={{ whiteSpace: 'nowrap' }}>{dimensions}</span>,{' '}
      {material}, {year}
    </span>
  )
}

ImageLabel.propTypes = {
  year: PropTypes.string,
  name: PropTypes.string,
  material: PropTypes.string,
  dimensions: PropTypes.string,
}