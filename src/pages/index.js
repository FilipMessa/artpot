//

import * as React from 'react'
import { graphql } from 'gatsby'

import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Poster from '../components/Poster'
import { Modal } from '../components/Modal'
import { Lightbox } from '../components/Lightbox'
import TestButton from './TestButton'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Poster data={data} />
      <TestButton />
      <Modal>
        <Lightbox>
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
        </Lightbox>
      </Modal>
    </Layout>
  )
}

IndexPage.propTypes = {
  // TODO
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    ...SiteInformation
  }
`
