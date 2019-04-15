// @flow

import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

type Fluid = {
  base64: string,
  aspectRatio: number,
  src: string,
  srcSet: string,
  sizes: string,
}

type ChildImageSharp = {
  fluid: Fluid,
}

type Node = {
  name: string,
  childImageSharp: ChildImageSharp,
}

type Edges = {
  node: Node,
}

type Works = {
  edges: Edges[],
}

type Data = {
  works: Works,
}

type Props = {
  data: Data,
}

const IndexPage = ({ data }: Props) => {
  const nodes = data.works.edges.map(({ node }) => node)
  return (
    <Layout>
      <h1>Works Page</h1>
      <div style={{ margin: '2rem' }}>
        {nodes.map(node => (
          <Img
            key={node.childImageSharp.fluid.base64}
            fluid={node.childImageSharp.fluid}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    works: allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
