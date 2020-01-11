/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import HeadingRenderer from './HeadingRenderer'
import ParagraphRenderer from './ParagraphRenderer'

const MarkdownRenderer = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      heading: props => <HeadingRenderer {...props} />,
      paragraph: props => <ParagraphRenderer {...props} />,
    }}
  />
)
MarkdownRenderer.propTypes = {
  source: PropTypes.string,
}

export default MarkdownRenderer
