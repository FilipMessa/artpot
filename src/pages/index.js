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

type PosterType = {
  childImageSharp: ChildImageSharp,
}

type Frontmatter = {
  description: string,
  poster: PosterType,
}

type MarkdownRemark = {
  frontmatter: Frontmatter,
}

type Data = {
  markdownRemark: MarkdownRemark,
}

const IndexPage = ({ data }: { data: Data }) => {
  console.log(JSON.stringify(data), data)
  return (
    <Layout>
      <Poster data={data} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    ...SiteInformation
  }
`
