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

const Label = styled.div`
  font-size: ${({ theme }) => theme.components.poster.label.fontSize};
  margin: 1.5em 0;
`

const Poster = ({ data }: { data: Data }) => (
  <Cont>
    <Image src={data.poster.childImageSharp.fluid.src} />
    <Text spaceAfter="large" spaceBefore="small">
      The Mound, 170x200 cm, oil on canvas, 2018
    </Text>
  </Cont>
)

export const query = graphql`
  fragment SiteInformation on Query {
    poster: file(relativePath: { eq: "test.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Poster
