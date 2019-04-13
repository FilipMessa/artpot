// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6,
  children: React$Node,
}

const HeadingRenderer = ({ level, children }: Props) => {
  switch (level) {
    case 1:
      return <h1 style={{ color: 'red' }} children={children} />
    case 2:
      return <h2 style={{ color: 'green' }} children={children} />
    case 3:
      return <h3 children={children} />
    case 4:
      return <h4 children={children} />
    case 5:
      return <h5 children={children} />
    case 6:
      return <h6 children={children} />
    default:
      return <span children={children} />
  }
}

export default HeadingRenderer
