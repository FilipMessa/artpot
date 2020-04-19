import * as React from 'react'
import { graphql } from 'gatsby'

import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Poster from '../components/Poster'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Poster data={data} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    ...SiteInformation
  }
`
