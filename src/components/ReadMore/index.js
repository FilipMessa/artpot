import * as React from 'react'
import Truncate from 'react-truncate'
import PropTypes from 'prop-types'
import Text from '../Text'
import Button from './components/Button'

const ReadMore = ({ text, lines = 3 }) => {
  const [isExpanded, setExpanded] = React.useState(false)
  const toggleLines = () => setExpanded(!isExpanded)

  return (
    <>
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
    </>
  )
}

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number,
}

export default ReadMore
