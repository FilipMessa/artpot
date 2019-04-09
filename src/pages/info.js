// @flow

import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Poster from '../components/Poster'

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

type Image = {
  childImageSharp: ChildImageSharp,
}

type Data = {
  poster: Image,
}

const IndexPage = ({ data }: { data: Data }) => (
  <Layout>
    <h1>Info Page</h1>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    ...SiteInformation
  }
`
