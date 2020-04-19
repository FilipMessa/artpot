import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import { IMAGE_TYPE } from '../consts'

const Text = styled.span`
  line-height: 1.2em;
`

const NoWrap = styled.span`
  white-space: nowrap;
`
export function ImageLabel({ name, material, dimensions, year, type }) {
  switch (type) {
    case IMAGE_TYPE.ARTWORK:
      return (
        <Text>
          {name}, {dimensions && <NoWrap>{dimensions}</NoWrap>},
          {material && <NoWrap> {material}</NoWrap>}, {year}
        </Text>
      )
    case IMAGE_TYPE.PHOTO:
      return (
        <Text>
          {name}, {year}
        </Text>
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
