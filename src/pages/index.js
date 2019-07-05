// @flow

import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Poster from '../components/Poster'
import Modal, { useModal } from '../components/Modal'

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

type Frontmatter = {|
  +description: string,
  +poster: PosterType,
|}

type MarkdownRemark = {|
  +frontmatter: Frontmatter,
|}

type Data = {|
  +markdownRemark: MarkdownRemark,
|}

const IndexPage = ({ data }: { data: Data }) => {
  const { isShowing, toggle } = useModal()
  return (
    <Layout>
      <Poster data={data} />
      <button onClick={toggle} type="button">
        Modal open
      </button>
      <Modal isShowing={isShowing} onClose={toggle}>
        <div
          style={{
            width: 250,
            height: 250,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          MODAL TEST
        </div>
      </Modal>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    ...SiteInformation
  }
`
