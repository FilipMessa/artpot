import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Text from './Text'

const Container = styled.div`
  ${media.lessThan('medium')`
    margin-top: 30px;  
`}

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  max-height: 85vh;
  max-width: 100%;
`
const Label = styled(Text)`
  grid-area: label;
`

// @TODO mobile image
const Poster = ({ data }) => {
  return (
    <Container>
      <div>
        <Image
          src={data.markdownRemark.frontmatter.poster.childImageSharp.fluid.src}
        />
        <Label spaceAfter="large" spaceBefore="small" size="medium">
          {data.markdownRemark.frontmatter.description}
        </Label>
      </div>
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
            fluid(maxWidth: 1400) {
              src
            }
          }
        }
      }
    }
  }
`

export default Poster
