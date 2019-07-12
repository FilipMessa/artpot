// @flow
import * as React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 800px;
`

const LightboxImage = props => <Image {...props} />

export default LightboxImage
