import { graphql } from 'gatsby'
import React from 'react'
import { markdownImages } from '../../commonPropTypes'
import Gallery from '../../components/Gallery'
import Layout from '../../components/Layout'
import { getImagesFromEdges, shuffleArray } from '../../utils'


const IndexPage = ({ data }) => {
  const result = data.images.edges.reduce(getImagesFromEdges, [])

  return (
    <Layout>
      <Gallery images={shuffleArray(result)} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: markdownImages,
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    images: allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            art {
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
