// @flow

import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'

export default props => {
  console.log({ props })
  return (
    <Layout>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query InfoQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`
