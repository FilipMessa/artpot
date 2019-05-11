// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Text from './Text'

type Fluid = {
  base64: string,
  aspectRatio: number,
  src: string,
  srcSet: string,
  sizes: string,
}

type ChildImageSharp = {
  fluid: Fluid,
}

type Data = {
  poster: {
    childImageSharp: ChildImageSharp,
  },
}

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Cont = styled.div`
  width: 100%;
  height: 100%;
  max-height: 85vh;
`

const Poster = ({ data }: { data: Data }) => {
  return (
    <Cont>
      <Image
        src={data.markdownRemark.frontmatter.poster.childImageSharp.fluid.src}
      />
      <Text spaceAfter="large" spaceBefore="small">
        {data.markdownRemark.frontmatter.description}
      </Text>
    </Cont>
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
