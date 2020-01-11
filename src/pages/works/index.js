//

import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const IndexPage = ({ data }) => {
  const nodes = data.works.edges.map(({ node }) => node)
  return (
    <Layout>
      <Gallery images={nodes} />
    </Layout>
  )
}

IndexPage.propTypes = {
  // TODO
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    works: allFile(filter: { sourceInstanceName: { eq: "works" } }) {
      edges {
        node {
          ...GalleryImg
        }
      }
    }
  }
`
