import { graphql } from 'gatsby'
import * as React from 'react'
import { markdownImages } from '../commonPropTypes'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'


export const query = graphql`
  query WorkPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        art {
          image {
            ...GalleryImg
          }
        }
      }
    }
  }
`

const WorkPage = ({ data }) => {
  const images =
    data.markdownRemark?.frontmatter?.art?.map(({ image }) => image) || []

  return (
    <Layout>
      <Gallery images={images} />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: markdownImages,
}

export default WorkPage
