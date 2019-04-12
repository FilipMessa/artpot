// @flow

import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

const IndexPage = props => {
  const nodes = props.data.works.edges.map(({ node }) => node)

  return (
    <Layout>
      <h1>Works Page</h1>
      <div style={{ margin: '2rem' }}>
        {nodes.map(node => (
          <Img
            key={
              node.childImageSharp.fluid.src +
              node.childImageSharp.fluid.originalName
            }
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
