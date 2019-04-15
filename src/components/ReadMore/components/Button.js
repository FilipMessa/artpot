// @flow
import * as React from 'react'
import styled from 'styled-components'
import Text from '../../Text'
import BlankButton from '../../styled/BlankButton'

type Props = {|
  +text: string,
  +onClick: () => void,
|}

const WrapperButton = styled(BlankButton)`
  display: inline;
`

const ReadMoreButton = ({ text, onClick }: Props) => (
  <WrapperButton onClick={onClick}>
    <Text element="span" type="secondary" size="small">
      {text}
    </Text>
  </WrapperButton>
)

export default ReadMoreButton
