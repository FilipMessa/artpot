import { graphql } from 'gatsby'
import * as React from 'react'
import { markdownImages } from '../commonPropTypes'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import { createImageLabel } from '../utils'


export const query = graphql`
  query WorkPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
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
`

const WorkPage = ({ data }) => {
  const images =
    data.markdownRemark?.frontmatter?.art?.map((item) => ({...item.image, label: createImageLabel(item)})) || []

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
