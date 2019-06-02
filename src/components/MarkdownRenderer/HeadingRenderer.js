// @flow

import * as React from 'react'

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6,
  children: React$Node,
}

// @TODO cereate styled components
const HeadingRenderer = ({ level, children }: Props) => {
  switch (level) {
    case 1:
      return (
        <h1 style={{ fontWeight: 'bold', paddingBottom: '5px' }}>{children}</h1>
      )
    case 2:
      return (
        <h2
          style={{
            paddingTop: '1rem',
            lineHeight: '1.2rem',
            fontWeight: 'bold',
            paddingBottom: '5px',
          }}
        >
          {children}
        </h2>
      )
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      return <span>{children}</span>
  }
}

export default HeadingRenderer
