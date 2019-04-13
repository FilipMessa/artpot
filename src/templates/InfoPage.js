// @flow

import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'

import MarkdownRenderer from '../components/MarkdownRenderer'

type Props = {|
  +data: {|
    +markdownRemark: {|
      +rawMarkdownBody: string,
    |},
  |},
|}

const InfoPage = (props: Props) => {
  return (
    <Layout>
      <MarkdownRenderer source={props.data.markdownRemark.rawMarkdownBody} />
    </Layout>
  )
}

export const query = graphql`
  query InfoPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
    }
  }
`

export default InfoPage
