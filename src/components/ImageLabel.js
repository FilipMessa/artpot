import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { IMAGE_TYPE } from '../consts'

const NoWrap = styled.span`
  white-space: nowrap;
`
export function ImageLabel({ name, material, dimensions, year, type }) {
  switch (type) {
    case IMAGE_TYPE.ARTWORK:
      return (
        <span>
          {name}, {dimensions && <NoWrap>{dimensions} </NoWrap>},
          {material && <NoWrap>{material}</NoWrap>}, {year}
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
