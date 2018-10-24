// @flow

import * as React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

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

type IntroImage = {
  childImageSharp: ChildImageSharp,
}

type Data = {
  introImage: IntroImage,
}

const ImageWrapper = styled.div`
  max-width: 600px;
  margin: 3em 0;
`

const IndexPage = ({ data }: { data: Data }) => (
    <Layout>
      <ImageWrapper>
        <Img fluid={data.introImage.childImageSharp.fluid} />
      </ImageWrapper>
    </Layout>
  )

export default IndexPage

export const pageQuery = graphql`
  query {
    introImage: file(relativePath: { eq: "intro.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
