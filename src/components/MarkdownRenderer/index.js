/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

import HeadingRenderer from './HeadingRenderer'
import TextRenderer from './TextRenderer'
import ListItemRenderer from './ListItemRenderer'


const MarkdownRenderer = ({ source }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      heading: props => <HeadingRenderer {...props} />,
      paragraph: props => <TextRenderer {...props} />,
      listItem: props => <ListItemRenderer {...props} />,
      strong: props => <TextRenderer element="span" weight="bold" {...props} />,
    }}
  />
)
MarkdownRenderer.propTypes = {
  source: PropTypes.string,
}

export default MarkdownRenderer
