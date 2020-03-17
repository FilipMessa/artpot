import { graphql } from 'gatsby'
import React from 'react'
import { markdownImages } from '../commonPropTypes'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'

import { ImageLabel } from '../components/ImageLabel'

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

const getImagesWithLabel = data =>
  data.markdownRemark?.frontmatter?.art?.map(item => ({
    ...item.image,
    label: (
      <ImageLabel
        image={item.image}
        name={item.name}
        material={item.material}
        dimensions={item.dimensions}
        year={item.year}
      />
    ),
  })) || []

const WorkPage = ({ data }) => {
  const images = React.useMemo(() => getImagesWithLabel(data), [data])

  return (
    <Layout withRightSpace={false}>
      <Gallery images={images} />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: markdownImages,
}

export default WorkPage
