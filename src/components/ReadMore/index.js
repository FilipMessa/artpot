// @flow

import * as React from 'react'
import Truncate from 'react-truncate'
import Text from '../Text'
import Button from './components/Button'

type Props = {|
  +text: string,
  +lines?: number,
|}

const ReadMore = ({ text, lines = 3 }: Props) => {
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

export default ReadMore
