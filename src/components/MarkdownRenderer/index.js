// @flow

import * as React from 'react'
import ReactMarkdown from 'react-markdown'

import HeadingRenderer from './HeadingRenderer'
import ParagraphRenderer from './ParagraphRenderer'

type Props = {|
  +source: string,
|}

const MarkdownRenderer = ({ source }: Props) => (
  <ReactMarkdown
    source={source}
    renderers={{
      heading: props => <HeadingRenderer {...props} />,
      paragraph: props => <ParagraphRenderer {...props} />,
    }}
  />
)

export default MarkdownRenderer
