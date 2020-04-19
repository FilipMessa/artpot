import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { markdownImages } from '../../commonPropTypes'
import Gallery from '../../components/Gallery'
import Layout from '../../components/Layout'
import { getImagesFromEdges } from '../../utils'

const Wrapper = styled.div`
  padding-top: 130px;
  padding-left: 130px;
  ${media.lessThan('medium')`
   padding: 0;
 `}
`

const IndexPage = ({ data }) => {
  const result = data.images.edges.reduce(getImagesFromEdges, [])

  return (
    <Layout withRightSpace={false}>
      <Wrapper>
        <Gallery images={result} />
      </Wrapper>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: markdownImages,
}

export default IndexPage

export const pageQuery = graphql`
  query allWorksQuery {
    images: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___art___year] }
    ) {
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
