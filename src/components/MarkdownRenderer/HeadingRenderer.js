import * as React from 'react'
import PropType from 'prop-types'

// @TODO create styled components for heading (design tokens)
const HeadingRenderer = ({ level, children }) => {
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

HeadingRenderer.propTypes = {
  level: PropType.number,
  children: PropType.element.isRequired,
}

export default HeadingRenderer
