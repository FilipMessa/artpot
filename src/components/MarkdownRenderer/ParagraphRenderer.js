// @flow

import * as React from 'react'

import Text from '../Text'

type Props = {|
  +children: React.Node,
|}

const ParagraphRenderer = ({ children }: Props) => {
  return <Text>{children}</Text>
}

export default ParagraphRenderer
