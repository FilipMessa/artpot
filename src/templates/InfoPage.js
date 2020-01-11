import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

import MarkdownRenderer from '../components/MarkdownRenderer'

export const query = graphql`
  query InfoPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
    }
  }
`

const InfoPage = ({ data }) => {
  return (
    <Layout>
      <MarkdownRenderer source={data.markdownRemark.rawMarkdownBody} />
    </Layout>
  )
}

InfoPage.propTypes = {
  data: PropTypes.object,
}

export default InfoPage
