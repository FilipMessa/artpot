import { graphql } from 'gatsby'
import React from 'react'
import { markdownImages } from '../../commonPropTypes'
import Gallery from '../../components/Gallery'
import Layout from '../../components/Layout'
import { getImagesFromEdges } from '../../utils'


const IndexPage = ({ data }) => {
  const result = data.images.edges.reduce(getImagesFromEdges, [])

  return (
    <Layout withRightSpace={false}>
      <Gallery images={result} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: markdownImages,
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    images: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___art___year]}) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            art {
              type
              name
              material
              dimensions
              year
              image {
                ...GalleryImg
              }
            }
          }
        }
      }
    }
  }
`
