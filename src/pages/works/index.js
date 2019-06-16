// @flow

import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

type Default = {|
  +src: string,
|}

type Screen = {|
  +srcSet: string,
  +height: number,
|}

type ChildImageSharp = {|
  +desktop: Screen,
  +mobile: Screen,
  +default: Default,
|}

type Node = {|
  +id: string,
  +name: string,
  +childImageSharp: ChildImageSharp,
|}

type Props = {|
  data: {|
    +works: {|
      +edges: $ReadOnlyArray<{|
        +node: Node,
      |}>,
    |},
  |},
|}

const IndexPage = ({ data }: Props) => {
  const nodes = data.works.edges.map(({ node }) => node)
  return (
    <Layout>
      <Gallery images={nodes} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    works: allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            desktop: fixed(height: 230) {
              ...GatsbyImageSharpFixed
            }
            mobile: fixed(width: 768) {
              ...GatsbyImageSharpFixed
            }
            default: fixed(width: 500) {
              src
            }
          }
        }
      }
    }
  }
`
