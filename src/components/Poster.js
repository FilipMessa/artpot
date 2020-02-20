import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import Text from './Text'

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'image'
    'label';
`

const Image = styled.img`
  grid-column: -1/1;
  grid-row: -1/1;
  grid-area: image;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`
const Label = styled(Text)`
  grid-area: label;
`

const Poster = ({ data }) => {
  return (
    <Container>
      <Image
        src={data.markdownRemark.frontmatter.poster.childImageSharp.fluid.src}
      />
      <Label spaceAfter="large" spaceBefore="small">
        {data.markdownRemark.frontmatter.description}
      </Label>
    </Container>
  )
}

Poster.propTypes = {
  // TODO
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

export const query = graphql`
  fragment SiteInformation on Query {
    markdownRemark(frontmatter: { slug: { eq: "/" } }) {
      frontmatter {
        description
        poster {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Poster
