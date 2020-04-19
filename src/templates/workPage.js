import { graphql } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { markdownImages } from '../commonPropTypes'
import Gallery from '../components/Gallery'
import Layout from '../components/Layout'
import ReadMore from '../components/ReadMore'

import { ImageLabel } from '../components/ImageLabel'

// @TODO merge with the workpage
const Wrapper = styled.div`
  padding-left: 130px;
  padding-top: 130px;
  ${media.lessThan('medium')`
    padding: 0;
  `}
`

export const query = graphql`
  query WorkPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
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
`

const getImagesWithLabel = (data) =>
  data.markdownRemark?.frontmatter?.art?.map((item) => ({
    ...item.image,
    label: (
      <ImageLabel
        type={item.type}
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
  const description = data.markdownRemark?.frontmatter?.description

  return (
    <Layout withRightSpace={false}>
      <Wrapper>
        {description && <ReadMore text={description} />}
        <Gallery images={images} />
      </Wrapper>
    </Layout>
  )
}

WorkPage.propTypes = {
  data: markdownImages,
}

export default WorkPage
