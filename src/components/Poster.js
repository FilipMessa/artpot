// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Text from './Text'

type Fluid = {|
  +base64: string,
  +aspectRatio: number,
  +src: string,
  +srcSet: string,
  +sizes: string,
|}

type ChildImageSharp = {|
  +fluid: Fluid,
|}

type PosterType = {|
  +childImageSharp: ChildImageSharp,
|}

type Props = {|
  +data: {|
    +markdownRemark: {|
      +frontmatter: {|
        +description: string,
        +poster: PosterType,
      |},
    |},
  |},
|}

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

const Poster = ({ data }: Props) => {
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
