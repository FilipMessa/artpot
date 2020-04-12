import React from 'react'
import Truncate from 'react-truncate'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '@theme'
import Text from '../Text'
import Button from './components/Button'

const Paragraph = styled.p`
  margin: 2.1em 0;
  line-height: 1.3rem;
  ${media.greaterThan('medium')`
    margin-top: 0;
    margin-bottom: 50px;
    margin-left: 1.3em;
    margin-right: 1.3em;
  `}
  
  br  {
    display: inline-block;
    margin-right: 1em;
  }
`

const ReadMore = ({ text, lines = 3 }) => {
  const [isExpanded, setExpanded] = React.useState(false)
  const toggleLines = () => setExpanded(!isExpanded)

  return (
    <Paragraph>
      <Truncate
        lines={!isExpanded && lines}
        ellipsis={
          <>
            ...
            <Button text="(read more)" onClick={toggleLines} />
          </>
        }
      >
        <Text element="span">{text}</Text>
      </Truncate>
      {` `}
      {isExpanded && <Button text="(read less)" onClick={toggleLines} />}
    </Paragraph>
  )
}

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number,
}

export default ReadMore
