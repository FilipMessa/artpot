// @flow

import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Image = styled.img`
  max-width: 100%;
  margin: 3em 0;
`

const IndexPage = () => (
  <Layout>
    <Image src="http://petravojtekova.com/assets/Uploads/_resampled/SetWidth800-the-Mound.jpg" />
  </Layout>
)

export default IndexPage
