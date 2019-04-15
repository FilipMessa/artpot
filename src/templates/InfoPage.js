// @flow

import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

import MarkdownRenderer from '../components/MarkdownRenderer'

type Props = {|
  +data: {|
    +markdownRemark: {|
      +rawMarkdownBody: string,
    |},
  |},
|}

const InfoPage = ({ data }: Props) => {
  return (
    <Layout>
      <MarkdownRenderer source={data.markdownRemark.rawMarkdownBody} />
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
